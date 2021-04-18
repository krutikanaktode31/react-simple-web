import React from 'react';
import web from '../src/images/home.png';
import { NavLink } from 'react-router-dom';
import Common from './Common';

const Home = () =>
{
    return(

        <>

<Common
name="Grow Your Business With"
with="Technical Krutika"
imgsrc={web}
visit="/service"
btnname="Get Started"
/>

        </>
    )
}

export default Home;