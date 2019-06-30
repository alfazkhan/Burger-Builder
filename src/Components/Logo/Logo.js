import React from 'react';
import Logo from '../../assets/images/logo.png';
import './Logo.css';

const logo = (  props) =>
(
    <div className="Logo" style={{ height: props.height }}>
        <img src={Logo}  alt="Burger" height="100px" width="auto" />
    </div>
);

export default logo;