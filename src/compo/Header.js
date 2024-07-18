import React from 'react';
import PropTypes from 'prop-types';

export default function Header(p){
    return (
        <nav className="navbar" style={{backgroundColor:"purple"}}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img style={{margin:"-10px",marginLeft:"auto"}} src="https://upload.wikimedia.org/wikipedia/en/0/0c/The_Genie_Aladdin.png" 
        alt="Logo" width="130" height="90" className="d-inline-block align-text-top"/>
         <p style={{fontFamily:"fantasy",display:"inline",marginLeft:"700px",color:"palegoldenrod",fontSize:"35px"}}>{p.title}</p>
      </a>
    </div>
  </nav>
    );
}

Header.propTypes={
title: PropTypes.string
}
