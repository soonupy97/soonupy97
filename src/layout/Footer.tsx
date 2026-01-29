import soonupyLogo from '@assets/icons/soonupy.svg'

const Footer = () => {

  return (
    <header className='header'>
      <h1 className='header_logo ico-3xl'>
          <img src={soonupyLogo} alt="header_logo" />
      </h1>

      <nav className='header_nav'>
        <ul>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Career</li>
        </ul>
      </nav>
    </header>
  )
}

export default Footer
