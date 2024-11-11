import react,{Component} from "react";
import products1 from '../Pages/data1';
import '../Cart/product.css';
import React, { useState } from 'react';



function Accessories(){
    const filteredproducts=products1.filter(
          (item)  =>item.category==='Accessories'
    );
    const [selectedProduct, setSelectedProduct] = useState(null);
  
    const showProductDetails = (filteredproducts) => {
      setSelectedProduct(filteredproducts);
    };
  

    return(
        <>
        <h1>Accessories</h1>
        <div className='container'>
        {
            filteredproducts.map((item,index)=>{
                return(
                   <div key={index} className="card" onClick={() => showProductDetails(item)}>
                        <img src={item.image}  className='productimg'/>
                        <h2 className='productname'>{item.name}</h2>
                        {/* <h2 className='productname'>Category : {item.category}</h2> */}
                        {/* <h5 className='description'>Description : {item.description}</h5> */}
                        <pre className='productprice1'>Price : ₹{item.price}</pre>
                   
                     
                        {
                            item.instock?<button className='available'>Add to Cart</button>:
                            <button className='notavailable'>Out of Stock</button>
                           
                        }
                        
                       
                       {
                            (item.quantity<5 && item.quantity>=1)?<h4>"Hurry, only  {item.quantity} items left!" </h4>:<div></div>
                        }
                     
                        {
                            item.quantity>5?<h4>High in Quantity</h4>:<div></div>
                        }
                        {
                            item.quantity==0?<h4>Items Out of Stock</h4>:<div></div>
                        }
                        {
                            (item.price<1000)?<h4 style={{color:"blue"}}>"Budget-Friendly"</h4>:<h4></h4>
                        }
                        {
                            (item.price>50000)?<h4 style={{color:"blue"}}>"Premium Product"</h4>:<h4></h4>
                        }
                        {
                            (item.price>1000 && item.price<=50000)?<h4 style={{color:"purple"}}>"Discount Available!"</h4>:<h4></h4>
                        }
                        {
                            (item.price>5000)?<h4 style={{color:"orange"}}>"Free Shipping"</h4>:<h4></h4>
                        }
                            
                
                        
                        </div>
                             
                )
                
            })
            
        }
            {selectedProduct && (
                                    <div
                                    style={{
                                        position:"fixed",
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        backgroundColor: 'white',
                                        padding: '20px',
                                        border: '1px solid #ddd',
                                        width:"30%",
                                         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    }}
                                    >
                                    <h2>{selectedProduct.name}</h2>
                                    <img
                                        src={selectedProduct.image}
                                        alt={selectedProduct.name}
                                        style={{ width: '300px', height: '300px', objectFit: 'cover' }}
                                    />
                                    <p>Description : {selectedProduct.description}</p>
                                    <p>Category: {selectedProduct.category}</p>
                                    <p>Price: ₹{selectedProduct.price}</p>
                                  
                                    <p>
                                        Stock Status: {selectedProduct.instock ? 'In Stock' : 'Out of Stock'}
                                    </p>
                                    <p>Quantity Available: {selectedProduct.quantity}</p>
                                    <button onClick={() => setSelectedProduct(null)}>Close</button>
                                    </div>
                                )}
    </div>
    
                                
        </>
        
       
 )
}

export default Accessories;
