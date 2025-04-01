import './navbar.css'
import TopElem from './topElem';

function Navbar() {
  return (
    <div className='topbar'>
      <TopElem name="About" />
      <TopElem name="Projects" />
      <TopElem name="Writing" />
    </div >
  )
}

export default Navbar;