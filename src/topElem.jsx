import './TopElem.css'
import { useNavigate } from 'react-router-dom';


function TopElem({ name }) {
  return (
    <>
      <p>{name}</p>
    </>
  )

}

export default TopElem;
