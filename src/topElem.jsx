import './TopElem.css'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


function TopElem({ name, active }) {

  const navigate = useNavigate();

  return (
    <motion.div
      className="element-container"
      onClick={() => !active && setTimeout(() => navigate(`/${name}`), 300)}
    >
      <motion.div
        className={`element ${active ? 'is-active' : ''}`}
        animate={{
          borderColor: active ? "#769a72" : "transparent",
          background: active ? "rgba(118, 154, 114, 0.05)" : "transparent"
        }}
        transition={{ duration: 0.2 }}
      >
        <h4>{name}</h4>
      </motion.div>
    </motion.div>
  );

}

export default TopElem;
