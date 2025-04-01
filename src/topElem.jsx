import './TopElem.css'
import { useNavigate } from 'react-router-dom';


function TopElem({ name, active }) {

  const navigate = useNavigate();
  const elementClassName = active ? 'activeElement' : 'element';

  return (
    <div className={elementClassName} onClick={() => navigate(`/${name}`)}>
      <h4>{name}</h4>
    </div>
  )

}

export default TopElem;
