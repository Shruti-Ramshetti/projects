import React, { Component } from 'react';
import '../Assignment/AboutPage.css';
import client1 from './images/clients/client-1.png';
import client2 from './images/clients/client-2.png';
import client3 from './images/clients/client-3.png';
import client4 from './images/clients/client-4.png';
import client5 from './images/clients/client-5.png';
import client6 from './images/clients/client-6.png';
import services from './images/services.jpg';

class AboutPage extends Component {
  render() {
    return (
        <>
           <div>
        <h1>ABOUT US</h1>
        <h5>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</h5>
        </div>
   
        <div className='box-container1'> 
            <div className='box1'>
            <h5>Lorem ipsum dolor amet,consectetur adipiscing elit,sed do eiusmod</h5> 
            <h5>tempor incididunt ut labore et dolore magna aliqua.</h5>
            <ul>
            <li><h5>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5>  </li>
            <li><h5>Duis aute irure dolor in reprehenderit in voluptate velit.</h5></li>
            <li><h5>Ullamco laboris nisi ut aliquip ex ea commodo.</h5></li>
            </ul>  
       
            </div>
             <div className='box1'>
            <h5>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
             qui officia deserunt mollit anim id est laborum.</h5>
             <button className="get-started" style={{marginLeft:"20px"}}>Read More</button>
            </div>
     </div>
     <div className='box-container2'>
        <div> <h1>32</h1><h5>Clients</h5></div> 
        <div> <h1>32</h1><h5>Clients</h5></div> 
        <div> <h1>32</h1><h5>Clients</h5></div> 
        <div> <h1>32</h1><h5>Clients</h5></div> 
       
     </div>
     <div className='box-container1'> 
            <div className='box1'>
            <img className='image' src={services}/>
       
            </div>
             <div className='box1'>
            <h2>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h2>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua.</h5>
            <h5>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/>
            Duis aute irure dolor in reprehenderit in voluptate velit.<br/>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.<br/>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
            </h5>
           
            </div>
     </div>
     <div className='box-container2' style={{paddingTop:"30px"}}>
        <div> <img src={client1}/></div>
        <div> <img src={client2}/></div> 
        <div> <img src={client3}/></div> 
        <div> <img src={client4}/></div> 
        <div> <img src={client5}/></div> 
        <div> <img src={client6}/></div> 
     </div>
     <div>
        <h1>TESTIMONIALS</h1>
        <h5>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</h5>
        </div>
        </>
     
    );
  }
}

export default AboutPage;
