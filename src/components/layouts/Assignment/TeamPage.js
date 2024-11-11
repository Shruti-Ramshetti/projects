import React, { Component } from 'react';
import '../Assignment/TeamPage.css';
import t1 from './images/team/team-1.jpg';
import t2 from './images/team/team-2.jpg';
import t3 from './images/team/team-3.jpg';
import t4 from './images/team/team-4.jpg';

class TeamPage extends Component {
  render() {
    return (
        <>
        <div>
        <h1>TEAM</h1>
        <h5>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</h5>
        </div>
        <div className='box-container10'>
        <div> <img src={t1}/> <h3>Walter White</h3><h5>Chief Executive Officer</h5></div>
        <div> <img src={t2}/><h3>Sarah Jhonson</h3><h5>Product Manager</h5></div> 
        <div> <img src={t3}/><h3>William Anderson</h3><h5>сто</h5></div> 
        <div> <img src={t4}/><h3>Amanda Jepson</h3><h5>Accountant</h5></div> 
        </div>
    
        </>
    );
  }
}

export default TeamPage;
