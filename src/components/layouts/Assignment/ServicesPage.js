import React, { Component } from 'react';
import '../Assignment/ServicesPage.css';

class ServicesPage extends Component {
  render() {
    return (
        <>
         <div>
        <h1>SERVICES</h1>
        <h5>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</h5>
        </div>
        <div className='box-container3'> 
      <div className='box2'>
      <h3>Nesciunt Mete </h3><h4>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</h4>
      </div>
      <div className='box2'>
      <h3>Eosle Commodi</h3><h4>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</h4>
      </div>
      <div className='box2'>
      <h3>Ledo Markt</h3><h4>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</h4>
      </div>
          </div>
        <div className='box-container4'> 
      <div className='box2'>
      <h3>Asperiores Commodit</h3><h4>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</h4>
      </div>
      <div className='box2'>
      <h3>Velit Doloremque </h3><h4>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</h4>
      </div>
      <div className='box2'>
      <h3>Dolori Architecto</h3><h4>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</h4>
      </div>
          </div>
          <div className='box-container5'  style={{color:"white"}}>
          <h2 style={{color:"white"}}>Call To Action</h2>
          <h4 style={{color:"white"}}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
           Excepteur sint occaecat cupidatat <br/>non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.<br/>
            <button style={{marginTop:"20px",padding:"10px 30px 10px 30px",border:"1px solid white",
                backgroundColor:"rgb(104, 104, 190)",borderRadius:"5px",color:"white"}}>Call To Action</button>
            </h4>
            

          </div>
        </>
     
    );
  }
}

export default ServicesPage;
