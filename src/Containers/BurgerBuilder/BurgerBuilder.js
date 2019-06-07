import React, {Component} from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrdarSummary';

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
        price : 5,
        purchasable : false,
        purchasing : false
    }

    updatePurchasingHandler = ( ) =>
    {
        this.setState({purchasing:true});
    }

    closeModal = ( ) =>
    {
        this.setState({purchasing:false})
    }

    updatePurchaseState = ( ) =>
    {
        let i,sum=0;
        const propValues = Object.values(this.state.ingredients);
        for(i=0;i<propValues.length;i++)
            {
                sum=sum+propValues[i];
            }             
            this.setState({ purchasable: sum > 0 });
            
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


        this.setState({ingredients : updatedCount, price : updatedPrice }, () => {
            this.updatePurchaseState();
        } );


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


        this.setState({ingredients : updatedCount, price : updatedPrice }, () => {
            this.updatePurchaseState();
        } );
        
    }

render(){
    


   const disabledInfo={
        ...this.state.ingredients
    }

    for(let i in disabledInfo ){
        disabledInfo[i] = disabledInfo[i] <= 0
    }

    return(
        <Auxi>
            {this.state.purchasing 
            ?<Modal show={this.state.purchasing} modalClosed={this.closeModal} >
            <OrderSummary ingredients={this.state.ingredients} close={this.closeModal} price={this.state.price} />
            </Modal>
            : null
            }
            
            <Burger ingredient={this.state.ingredients}/>
            <BuildControls
            added = {this.addIngredientsHandler} 
            removed = {this.removeIngredientsHandler}
            disabled={disabledInfo}
            price= {this.state.price} 
            purchasable = {this.state.purchasable}
            ordered = {this.updatePurchasingHandler}
            />
        </Auxi>
    );
}

}

export default BurgerBuilder;