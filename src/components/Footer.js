import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import CallEndIcon from '@mui/icons-material/CallEnd';
import '../components/css/FooterStyle.css';

const Footer = () => {
    return (

<>
<div className='footer'>
    <div className='container container-flex'>   
    <div className='icons'>
        <SearchIcon className='icon'/>
        <PersonIcon className= 'icon'/>
        <CallEndIcon className='icon'/>
        </div>
        
        <div className='line'>
            <hr>  
             </hr>
        </div>

        <div className='copyright'>
        <p>All Rights Reserved  &copy;</p>
        </div>
        </div> 
        </div>
</>

    )
    }
    export default Footer;