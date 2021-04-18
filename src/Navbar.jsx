import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () =>
{
    return(

        <>

        <div className="container-fluid nav_bg">

<div className='row'>
    <div className='col-10 mx-auto'>

   

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink exact  className="navbar-brand" to="/">Krutika</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink exact  activeClassName="active_class" className="nav-link" to="/">Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact  activeClassName="active_class" className="nav-link" to="about">About</NavLink>
      </li>

      <li className="nav-item">
        <NavLink exact  activeClassName="active_class" className="nav-link" to="service">Services</NavLink>
      </li>


      <li className="nav-item">
        <NavLink exact   activeClassName="active_class" className="nav-link" to="contact">Contact</NavLink>
      </li>

     
    
    </ul>
 
  </div>
</nav>

</div>

</div>


        </div>
{/* 
        <NavLink exact activeClassName="active_class" to='/'>About Us</NavLink>
        <NavLink exact activeClassName="active_class" to='/contact'>Contact Us</NavLink>
        <br/>

       <a href="/">Aboutus</a>
       <a href="/contact">Contactus</a> */}
        </>
    )
}

export default Navbar;