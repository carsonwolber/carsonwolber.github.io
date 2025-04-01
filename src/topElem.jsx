import './TopElem.css'
import { useNavigate } from 'react-router-dom';


function TopElem({ name, active }) {


  const elementClassName = active ? 'activeElement' : 'element';

  return (
    <div className={elementClassName}>
      <h4>{name}</h4>
    </div>
  )

}

export default TopElem;
