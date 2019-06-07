import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import { whileStatement } from '@babel/types';

const toolbar = (props) =>
(
    <header className="Toolbar" >
        <i onClick={props.action} className="fa fa-bars" style={{color:'white'}} ></i>
        <Logo height="80%" />
        <nav className="DesktopOnly">
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;