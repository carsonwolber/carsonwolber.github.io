import './TopElem.css'
import { useNavigate } from 'react-router-dom';


function TopElem({ name }) {
  return (
    <div className='element'>
      <h4>{name}</h4>
    </div>
  )

}

export default TopElem;
