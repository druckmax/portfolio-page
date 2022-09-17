import React from 'react'
import './_Footer.scss'
import { BsGithub } from "react-icons/bs";
import { FaCodepen } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className='copyright'>&copy; 2022</div>
        <div className='footer-icons'>
          <BsGithub />
          <FaCodepen />
        </div>
        <div>Impressum</div>
      </div>
    </footer>
  )
}

export default Footer