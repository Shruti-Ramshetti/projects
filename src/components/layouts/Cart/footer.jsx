import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

function Footercomponent(){
 return(
    <div className='footer'>
        <div>
        <img src="https://www.achieversit.com/assets/images/logo-white.png" alt='logo'/><br/>
        <p>AchieversIT - Provides a wide group <br/>of opportunities for freshers and <br/>Experienced candidate who can <br/>
        develop their skills and build their <br/>career opportunities across multiple<br/> Companies.</p>
        </div>
        <div>
        <nav className='list1'>
            <h3>COMPANY</h3>
            <ul>
                    <li><a>Home</a></li>  
                    <li><a>Placements</a></li> 
                    <li><a>Corporate Training</a></li> 
                    <li><a>Contact US</a></li>  
         </ul>
        </nav>
        </div>
        <div>
        <nav className='list1'>
            <h3>TRENDING COURSES</h3>
            <ul>
                    <li><a>UI Development Course</a></li>  
                    <li><a>Angular JS Course</a></li> 
                    <li><a>React JS Course</a></li> 
                    <li><a>Digital Marketing Course</a></li>  
                    <li><a>Python Course</a></li>  
         </ul>
        </nav>
        </div>
        <div className='list2'>
            <h3>CONTACT INFO</h3>
            #63, 1st Floor, 16th Main, 8th<br/> Cross,BTM 1st Stage, Bangalore,<br/> India - 560029
            <br/>India : +91 8431-040-457<br/> info@achieversit.com
        </div>
 
    </div>
 )
}
export default Footercomponent;