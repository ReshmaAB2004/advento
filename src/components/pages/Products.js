import React from 'react';
import '../../App.css';

export default function Products() {
  return(
    <div style={{
      backgroundImage:'url("/images/img-9.jpg")',backgroundPsition: 'center',
  backgroundSize: 'cover', backgroundRepeat:'no-repeat',
  color:' #fff', fontSize: "100px" }}>
      <h1 className='products'>PRODUCTS</h1>
    </div>
  ); 
}