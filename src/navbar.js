import React from 'react';
import {BsFillHouseFill} from 'react-icons/bs';
import './navbar.css';

const navbar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <h1><span><BsFillHouseFill />Open</span>House</h1>
            </div>
        </div>
    );
}

export default navbar;