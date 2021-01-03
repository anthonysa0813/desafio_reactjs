import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Link} from "react-router-dom";

const Count = ({stock}) => {
    const [count, setCount] = useState(0);
    const aumentarCount = () => {
    setCount(count < stock ? count + 1 : stock);
  };

  const disminuirCount = () => {
    setCount(count > 0 ? count - 1 : 0);
  };
 
    return (
        <>
        <div className="content__info-count">
            <FontAwesomeIcon icon={faMinus} onClick={() => disminuirCount()} />
            {count}
            <FontAwesomeIcon icon={faPlus} onClick={() => aumentarCount()} />
        </div>
        </>
    )
}

export default Count
