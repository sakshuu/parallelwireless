import React from 'react'
import { Link } from 'react-router-dom';

const DropdownSolutions = ({solutionsOpen, setSolutionsOpen}) => {
    const solutionshandleToggle = () => {
        setSolutionsOpen(!solutionsOpen);
      };
  return <>

   <div
    className="dropdown-toggle custom-dropdown-toggle" 
    onClick={solutionshandleToggle}
  >
    Solutions
  </div>
  <ul className={`dropdown-menu productsTech-main ${solutionsOpen ? 'show' : ''}`}>
    <li><Link className="dropdown-item text-deco" to="/solutions/urben">Urben</Link></li>
    <li><Link className="dropdown-item text-deco" to="/solutions/rural" href="#">Rural</Link></li>
    <li><Link className="dropdown-item text-deco" to="/solutions/private" href="#">Private LIT</Link></li>
  </ul> 
  </>
}

export default DropdownSolutions