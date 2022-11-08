import React from 'react'
import logo from '../images/google.jpeg';
import {NavLink} from 'react-router-dom';
import About from './About';
import {useState} from "react";
// import SearchIcon from '@mui/icons-material/Search';
// import PersonIcon from '@mui/icons-material/Person';
// import CallEndIcon from '@mui/icons-material/CallEnd';
import '../components/css/ListStyle.css';

const classNameFunc = ({ isActive }) => (isActive ? "active_link" : "deactivate");


const List = () => {
    const [showModal, setShowModal] = useState(false);
    return (
<>
<header>
    <div className='container container-flex'>
        <div className='logo-container'>
            <img src= {logo} alt = "logo" className = 'logo' img/>
        </div>
        <nav>
            <div className='list'>
                {/* <a href = "/">Home</a>
                <a href = "/about">About Page</a>
                <a href = "/Services">Services</a>
                <a href = "/Contact">Contact</a>
                <a href = "/Policy">Policy</a> */}

                <NavLink to = '/' end onClick={() => setShowModal(false)}> Home</NavLink>   

                <button className="writeText" onClick={() => setShowModal(true)}>Write an Article</button>
          {showModal && <About closeModal={setShowModal} />}

                {/* <NavLink to = '/about' end className={classNameFunc}>About</NavLink>   */}
                <NavLink to = '/services' onClick={() => setShowModal(false)}>Services</NavLink>
                <NavLink to = '/contact' onClick={() => setShowModal(false)}>Contact</NavLink>
                <NavLink to = '/policy' onClick={() => setShowModal(false)}>Policy</NavLink>

            </div>
        </nav>

        {/* <div className='icons'>
        <SearchIcon className='icon'/>
        <PersonIcon className= 'icon'/>
        <CallEndIcon className='icon'/>
        </div> */}
    </div>
    
</header>
</>

 )
}
    export default List;