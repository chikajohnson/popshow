import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const Header =()=> {
    return(
        <header>
            <Link to='/'>Pop Show</Link>
        </header>
    )
}

export default Header;