import React from 'react';
import BurgerParts from './BurgerParts/BurgerParts';
import './Burger.css'

const burger = () =>
{
    return(
        <div className="Burger">
            
            <BurgerParts type="bread-top" />
            <BurgerParts type="meat" />
            <BurgerParts type="cheese" />
            <BurgerParts type="salad" />
            <BurgerParts type="bread-bottom" />
        </div>
    )
}

export default burger;