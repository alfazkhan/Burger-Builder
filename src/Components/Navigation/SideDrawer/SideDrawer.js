import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxi from "../../../hoc/Auxi";


const sidedrawer = ( props ) => {
    
    
    let sidedrawerClass=['SideDrawer', 'Close' ];


   if(props.open)
   {
    sidedrawerClass=['SideDrawer', 'Open' ]; 
   }

    

    return (
        <Auxi>
            <Backdrop show={props.open} clicked={props.closed} />
            
            <div className= {sidedrawerClass.join(' ')} >
                <Logo height="11%" />
                <div  style={ {marginBottom:30} } />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxi>
    );

    }

export default sidedrawer;