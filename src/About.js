import React from 'react';
import web from '../src/images/about.png';
import { NavLink } from 'react-router-dom';
import Common from './Common';

const About = () =>
{
    return(

        <>

<Common
name="Welcome to About Page"
imgsrc={web}
visit="/contact"
btnname="contact now"
/>

        </>
    )
}

export default About;