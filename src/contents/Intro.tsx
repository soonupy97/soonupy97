import FallingText from '@/components/library/react_bits/FallingText'

function Intro() {

  return (
    <section className="hero-container intro-container">
          <FallingText
      text={`React 퍼블리셔로서 사용자 경험을 고민하고, \n인터랙티브한 UI와 애니메이션으로 브랜드 가치를 전달합니다.`}
      highlightWords={["React", "퍼블리셔", "사용자 경험", "인터랙티브", "애니메이션", "브랜드"]}
      highlightClass="highlighted"
      trigger="hover"
      backgroundColor="transparent"
      wireframes={false}
      gravity={0.1}
      mouseConstraintStiffness={1}
    />
        <div className='inner'>
    <h3>
    안녕하세요! 프론트엔드 개발과 UI/UX 디자인하는 soonupy의 포트폴리오입니다.
    <br />
    
즐겁게 봐주셨으면 좋겠습니다.
    </h3>
        </div>
    </section>
  )
}

export default Intro
