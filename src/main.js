import React from 'react';
import './home.css';
import Cards from './Cards.js';

const Mainpage = () => {

	return (
    <React.Fragment> 
    <div style={{position: 'relative'}}>
    <img src={'https://images.unsplash.com/photo-1506290690282-661fbd742be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} 
    alt={'Blog Image'} style={{padding: '10px 15rem', height:'350px', width: '1410px'}}/>
      <div style={{position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)', color:'white'}}>
        <h1>Grow with Open House</h1>
        <p style={{textAlign:'center'}}>We provide you the best.</p>
      </div>
    </div>
    <Cards/>
    </React.Fragment>
	);
}

export default Mainpage;
