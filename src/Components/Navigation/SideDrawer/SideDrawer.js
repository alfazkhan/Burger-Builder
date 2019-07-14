import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxi from '../../../hoc/Auxi';

const sideDrawer = ( props ) => {
    let attachedClasses = ["SideDrawer", "Close"];
    if (props.open) {
        attachedClasses = ["SideDrawer", "Open"];
    }
        
        

    return (
        <Auxi>
            <Backdrop show={props.open} clicked={props.closed}  />
            <div className={attachedClasses.join(' ')}>
                <i className="fa fa-times" onClick={props.closed} style={{fontSize: 30}} ></i>
                <div className="Logo">
                    <Logo height="50px" />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxi>
    );
};

export default sideDrawer;