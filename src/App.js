import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Policy from './components/Policy';
import Error from './components/Error';
import List from './components/List';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
<List/>

   <Routes>
    <Route path = "/" element = {<Home/>}/>
    <Route path = "/about" element = {<About/>}/>
    <Route path = "/services" element = {<Services/>}/>
    <Route path = "/contact" element = {<Contact/>}/>
    <Route path = "/policy" element = {<Policy/>}/>
    <Route path = '*' element = {<Error/>}/> 
    {/* error message */}
   </Routes>
   <Footer/>
    </>
  )

}

export default App