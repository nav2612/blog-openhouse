import React from 'react';
import {BsFillHouseFill} from 'react-icons/bs';
import './navbar.css';

const navbar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <h1><span><BsFillHouseFill />Open</span>House</h1>
                <ul className='nav-menu' style={{listStyleType:'none', justifyContent:'flex-end'}}>
                    <li><a>Home</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Contact Us</a></li>
                    <li><a style={{backgroundColor: '#24a0ed', color: 'white', padding: '10px 20px', borderRadius: '25px'}}>
                        Login</a></li>
                </ul>
            </div>
        </div>
    );
}

export default navbar;