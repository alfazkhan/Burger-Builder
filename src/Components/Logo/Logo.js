import React from 'react';
import Logo from '../../assets/images/burger-logo.png';
import './Logo.css';

const logo = (  props) =>
(
    <div className="Logo" style={{ height: props.height }}>
        <img src={Logo}  alt="Burger"/>
    </div>
);

export default logo;