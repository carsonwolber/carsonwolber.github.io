import './navbar.css'
import TopElem from './topElem';

function Navbar({ curr }) {
  return (
    <div className='topbar'>
      <TopElem name="About" active={curr == "About"} />
      <TopElem name="Projects" active={curr == "Projects"} />
      <TopElem name="Writing" active={curr == "Writing"} />
    </div >
  )
}

export default Navbar;