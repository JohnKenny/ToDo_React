import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <header style = {headerStyle}>
            <h1>Todo_List</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: 'orange',
    color: 'darkpurple',
    textAlign: 'center',
    padding: '5px'
}

const linkStyle = {
    color: 'darkblue',
    textDecoration: 'none'
}

export default Header;