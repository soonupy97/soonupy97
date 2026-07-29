import { useState } from 'react'
import type { ProjectMedia as Media } from '../data/portfolio'

/**
 * 기능 투어 영상의 **콘텐츠** 비율 — 1440×900 (16:10).
 *
 * 현재 파일은 1600×900 (16:9)다. 좌우 80px씩 검은 여백이 구워져 있고,
 * .pmedia__video의 object-fit: cover가 그만큼을 정확히 되잘라낸다.
 *
 * 이 패딩은 전체화면 여백을 없애려던 시도였는데 효과가 없다. 파일이 16:9라
 * 브라우저가 필러박스를 그리지 않을 뿐, 구워진 여백이 같은 크기로 확대돼
 * 그대로 보인다(1920 폭 기준 양쪽 96px — 패딩 전과 동일). 자막이 프레임
 * 바닥에 붙어 있어 세로 크롭도 못 하므로, 전체화면 여백은 콘텐츠 자체를
 * 16:9로 다시 녹화하지 않는 한 피할 수 없다.
 *
 * 다음에 영상을 다시 뽑을 때 패딩 없이 1440×900으로 내보내면 이 장치는 전부
 * 불필요해진다. 그때 .pmedia__video에서 cover를 걷어내 height: auto로 되돌리고,
 * 프레임 비율도 포스터 단계에서만 지정하도록 되돌릴 것.
 *
 * media.ratio로 개별 재정의 가능(콘텐츠 비율 기준으로 적는다).
 */
const DEFAULT_RATIO = '16 / 10'

/**
 * 데모 영상 블록.
 *
 * 모바일 아코디언은 프로젝트 전부의 ProjectDetail을 미리 마운트하므로,
 * 재생 전에는 포스터만 렌더하고 <video>는 클릭 이후에 마운트한다.
 * 덕분에 소리를 내는 video 요소는 항상 재생 중인 것 하나뿐이다.
 *
 * preview=true면 포스터 자리에서 영상을 음소거 루프로 자동재생한다
 * (데스크톱 리스트 호버용). 소리·컨트롤이 있는 본재생은 여전히 클릭으로만
 * 시작하고, 자동재생이 생긴 만큼 prefers-reduced-motion에서는 미리보기를
 * 끄고 포스터로 남는다.
 *
 * active=false(아코디언이 접힘)가 되면 재생을 중단한다. 아코디언은 열림
 * 애니메이션을 위해 접힌 뒤에도 내용을 DOM에 남겨두므로, 끄지 않으면
 * 보이지 않는 영상의 소리가 계속 난다.
 */
function ProjectMedia({
  media,
  title,
  active = true,
  preview = false,
}: {
  media: Media
  title: string
  active?: boolean
  preview?: boolean
}) {
  const [playing, setPlaying] = useState(false)
  const [prevActive, setPrevActive] = useState(active)
  // 미디어 쿼리 변경까지 추적할 필요는 없다 — 마운트 시점 값이면 충분
  const [reducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  // active가 꺼지는 순간 재생을 중단한다. effect가 아니라 렌더 중에 조정하는 이유는,
  // effect로 하면 (접힘 렌더 → effect → setState → 재렌더)로 한 번 더 그리게 되고
  // 그 사이 프레임에서 영상이 잠깐 살아 있어 소리가 새기 때문이다.
  if (prevActive !== active) {
    setPrevActive(active)
    if (!active) setPlaying(false)
  }

  const showPreview = preview && !playing && active && !reducedMotion

  return (
    <figure className="pmedia">
      {/*
        포스터든 재생 중이든 프레임은 항상 콘텐츠 비율(16:10)로 높이를 잡는다.
        영상 파일은 16:9라 남는 좌우는 구워 넣은 여백뿐이고, cover가 그만큼만
        잘라낸다. 비율이 고정돼 있으니 재생 시작 시 레이아웃이 튀지도 않는다.
      */}
      <div
        className="pmedia__frame"
        style={{ aspectRatio: media.ratio ?? DEFAULT_RATIO }}
      >
        {playing ? (
          <video
            className="pmedia__video"
            src={media.src}
            poster={media.poster}
            controls
            autoPlay
            playsInline
            preload="auto"
          />
        ) : (
          <>
            {/* 소리 없는 미리보기 — 포스터 버튼 아래 깔리고, 클릭은 버튼이 받는다 */}
            {showPreview && (
              <video
                className="pmedia__preview"
                src={media.src}
                muted
                autoPlay
                loop
                playsInline
                aria-hidden="true"
                tabIndex={-1}
              />
            )}
            {/* 미리보기 중에는 재생 칩·라벨을 숨기고 영상만 — 접근성 이름은
                aria-label로 유지한다 */}
            <button
              type="button"
              className={`pmedia__poster${showPreview ? ' is-previewing' : ''}`}
              aria-label={`${title} 데모 영상 재생`}
              onClick={() => setPlaying(true)}
            >
              {media.poster && !showPreview && (
                <img src={media.poster} alt="" loading="lazy" aria-hidden="true" />
              )}
              {!showPreview && (
                <>
                  <span className="pmedia__play" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 20 20">
                      <path d="M7 4.5l8 5.5-8 5.5z" fill="currentColor" />
                    </svg>
                  </span>
                  <span className="pmedia__label" aria-hidden="true">
                    {title} 데모 영상 재생
                  </span>
                </>
              )}
              {showPreview && (
                /* 음소거 배지 — 프레임 호버 시 안내 문구가 옆으로 펼쳐진다 */
                <span className="pmedia__mute" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <path
                      d="M2 6v4h2.6L8 12.8V3.2L4.6 6H2z"
                      fill="currentColor"
                    />
                    <path
                      d="M10.5 6.5l3 3m0-3l-3 3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="pmedia__mute-text">
                    클릭하면 소리와 함께 재생
                  </span>
                </span>
              )}
            </button>
          </>
        )}
      </div>
      {media.caption && (
        <figcaption className="pmedia__caption">{media.caption}</figcaption>
      )}
    </figure>
  )
}

export default ProjectMedia
