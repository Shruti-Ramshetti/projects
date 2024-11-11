import React from 'react';
import products1 from '../Pages/data1';
import './product.css';

function Productdetails(){
    return(
        <div className='container'>
            {
                products1.map((item,index)=>{
                    return(
                       <div key={index} className="card">
                            <img src={item.image}  className='productimg'/>
                            <h2 className='productname'>{item.category}</h2>
                            <h2 className='productname'>{item.name}</h2>
                            <pre className='productprice1'>offerPrice:{item.offerPrice}</pre>
                            <pre className='productprice2'>originalPrice:{item.originalPrice}</pre>
                            {
                                item.instock?<button className='available'>Add to Cart</button>:
                                <button className='notavailable'>Out of Stock</button>
                               
                            }
                              {
                                item.quantity==0?<h4>Items Out of Stock</h4>:<div></div>
                            }
                            {
                                item.quantity==1?<h4>Hurry Up....Only one item left</h4>:<div></div>
                            }
                            {
                                item.quantity==2?<h4>Only two items left</h4>:<div></div>
                            }
                            {
                                item.quantity==3?<h4>Only three items left</h4>:<div></div>
                            }
                              {
                                item.quantity==4?<h4>Only four items left</h4>:<div></div>
                            }
                               {
                                item.quantity==5?<h4>Only five items left</h4>:<div></div>
                            }
                              {
                                item.quantity>5?<h4>High in Quantity</h4>:<div></div>
                            }
                            
                                              
                            
                       </div>
                    )
                })
            }
        </div>
    )
}
export default Productdetails;