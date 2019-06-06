import React, {Component} from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';

const INGRIDIENT_PRICE = {
    meat: 3,
    cheese: 2,
    salad: 1,
    bacon: 4
}

class BurgerBuilder extends Component{

    state={
        ingredients:{
            meat:0,
            cheese:0,
            salad:0,
            bacon:0
        },
        price : 5
    }

    addIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount+1;
        const priceAddition = INGRIDIENT_PRICE[type]
        let updatedCount = {
            ...this.state.ingredients
        }
        updatedCount[type] = newCount;
        const updatedPrice = this.state.price + priceAddition

        console.log();

        this.setState({ingredients : updatedCount, price : updatedPrice })

    }

    removeIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount-1;
        const priceAddition = INGRIDIENT_PRICE[type]
        let updatedCount = {
            ...this.state.ingredients
        }
        updatedCount[type] = newCount;
        const updatedPrice = this.state.price - priceAddition

        console.log();

        this.setState({ingredients : updatedCount, price : updatedPrice })
    }

render(){

   const disabledInfo={
        ...this.state.ingredients
    }

    for(let i in disabledInfo ){
        disabledInfo[i] = disabledInfo[i] <= 0
    }
    console.log(disabledInfo);

    return(
        <Auxi>
            <Burger ingredient={this.state.ingredients}/>
            <BuildControls
            added = {this.addIngredientsHandler} 
            removed = {this.removeIngredientsHandler}
            disabled={disabledInfo}
            />
        </Auxi>
    );
}

}

export default BurgerBuilder;