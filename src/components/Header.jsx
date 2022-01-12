import React from 'react';


const Header = (props) => {
    return (
    <header>
        <a href={props.url}>
        {props.name}
        </a>
        </header>)
}

export default Header;