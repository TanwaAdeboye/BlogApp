import React from 'react'
import { NavLink } from 'react-router-dom';
import pic from '../images/bImg.png';
import '../components/css/HomeAbout.css';

const Home = () => {
    return (
<>
<div className='mainSection'>
    <div className='contentBox'>
        <h1>Learning made Easy</h1>
        <p>    Lorem ipsum odor amet, consectetuer adipiscing elit. 
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim,
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. 
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.</p>
    <div className='btnBox'>
        <div className='btn'>
        <NavLink to = '/about' className="readMore">ReadMore</NavLink>
        </div>
    </div>
    </div>

    <div className='imageContainer'>
        <img src= {pic} alt = "pic" className = 'imge' img/>
    </div>
</div>
</>

    )
    }
    export default Home;
