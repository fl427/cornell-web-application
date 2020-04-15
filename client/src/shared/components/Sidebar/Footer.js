import React from "react";
import { Link } from "react-router-dom";

import './Footer.css';

const Footer = () => {
  return (
      <div className="footer-copyright text-center">
        © 2020 Copyright:
            <a href="https://vet.newforce.us/"> https://vet.newforce.us/ </a>
        </div>
    
    // <footer className="page-footer font-small fixed-bottom" style={{backgroundColor: 'black', paddingLeft: '200px'}}>
    //     <div className="footer-copyright text-center py-3">© 2020 Copyright:
    //         <a href="https://vet.newforce.us/"> https://vet.newforce.us/ </a>
    //     </div>
    // </footer>
  );
};

export default Footer;