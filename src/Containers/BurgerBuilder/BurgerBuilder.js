import React, {Component} from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from '../../Components/Burger/Burger';


class BurgerBuilder extends Component{

render(){
    return(
        <Auxi>
            <Burger/>
            
            <div>Burger Controls</div>
        </Auxi>
    );
}

}

export default BurgerBuilder;