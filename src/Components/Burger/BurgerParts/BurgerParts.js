import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './BurgerParts.css';

class BurgerParts extends Component {
    render () {
        let ingredient = null;

        switch ( this.props.type ) {
            case ( 'bread-bottom' ):
                ingredient = <div className="BreadBottom"></div>;
                break;
            case ( 'bread-top' ):
                ingredient = (
                    <div className="BreadTop">
                    </div>
                );
                break;
            case ( 'meat' ):
                ingredient = <div className="Meat"></div>;
                break;
            case ( 'cheese' ):
                ingredient = <div className="Cheese"></div>;
                break;
            case ( 'bacon' ):
                ingredient = <div className="Bacon"></div>;
                break;
            case ( 'salad' ):
                ingredient = <div className="Salad"></div>;
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }
}

BurgerParts.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerParts;