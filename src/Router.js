import React from 'react';

import {Route ,Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Navbar from './Navbar';


const Router = () =>
{
    return (
        <>
  <Navbar />
        <Switch>
<Route exact  path='/' component={About} />
<Route  path='/contact' component={Contact} />

        </Switch>

       {/* <About/>
       <Contact/> */}


        </>



    )
}

export default Router;