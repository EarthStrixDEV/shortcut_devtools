import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import '../css/Footers.css'

const Footers = () => {
  return (
    <div>
        <footer>
            <div className="copyright-text">
                <p>Copyright&copy; EarthStrix</p>
            </div>
            <div className='technology-info'>
                <FontAwesomeIcon icon={ faCode }></FontAwesomeIcon>
                <span> Created By ReactJS </span>
                <FontAwesomeIcon icon={ faCode }></FontAwesomeIcon>
            </div>      
        </footer>
    </div>
  );
}
export default Footers