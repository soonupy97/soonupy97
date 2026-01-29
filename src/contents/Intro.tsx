import FallingText from '@components/library/react_bits/FallingText'

function Intro() {

  return (
    <>
      <h1>Vite + React</h1>
      <div className="falling-text-container">
      <FallingText
  text={`React 퍼블리셔로서 사용자 경험을 고민하고,\n인터랙티브한 UI와 애니메이션으로 브랜드 가치를 전달합니다.`}
  highlightWords={["React", "퍼블리셔", "사용자 경험", "인터랙티브", "애니메이션", "브랜드"]}
  highlightClass="highlighted"
  trigger="hover"
  backgroundColor="transparent"
  wireframes={false}
  gravity={0.1}
  fontSize="2rem"
  mouseConstraintStiffness={0.9}
/>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Intro
