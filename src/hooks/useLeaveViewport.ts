import { useEffect, useRef } from 'react'

/**
 * 요소가 뷰포트를 완전히 벗어나면 onLeave를 호출한다.
 *
 * 리스트 호버로 켠 영상 미리보기를 끄는 용도. mouseleave만으로는 부족한데,
 * 마우스를 그대로 둔 채 스크롤로 내려가면 포인터가 영역을 벗어나지 않아
 * 이벤트가 발생하지 않고 화면 밖에서 계속 재생되기 때문이다.
 *
 * useScrollReveal과 달리 unobserve하지 않는다 — 다시 들어왔다 나가는 것까지
 * 계속 감시해야 한다.
 */
export default function useLeaveViewport<T extends HTMLElement = HTMLElement>(
  onLeave: () => void,
) {
  const ref = useRef<T>(null)
  // 최신 콜백을 참조해 observer를 매 렌더 다시 만들지 않는다
  const handler = useRef(onLeave)
  handler.current = onLeave

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) handler.current()
      },
      { threshold: 0 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
