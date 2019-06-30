import React, {Component} from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrdarSummary';
import axios from '../../axios-order';
import Loading from '../../Components/UI/Loading/Loading';

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
        purchasing : false,
        processing : false
    }

    updatePurchasingHandler = ( ) =>
    {
        this.setState({purchasing:true});
    }

    closeModal = ( ) =>
    {
        this.setState({purchasing:false,processing:false})
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

    continuePurchase = () => {
        const order = {
            
                ingredients : this.state.ingredients,
                price : this.state.price,
                user: {
                    name:"Alfaaz",
                    phone:"123456789"
                },
                delivery:"Fastest"
        }
        this.setState({processing:true});
        axios.post('/orders.json',order)
        .then(response=> this.closeModal())
        .catch(error=> this.closeModal());

        
    }

render(){
    


   const disabledInfo={
        ...this.state.ingredients
    }

    for(let i in disabledInfo ){
        disabledInfo[i] = disabledInfo[i] <= 0
    }

    let modalElement = <OrderSummary ingredients={this.state.ingredients} close={this.closeModal} continue={this.continuePurchase} price={this.state.price} />;
    
    
    return(

        

        <Auxi>
            {this.state.purchasing 
            ?<Modal show={this.state.purchasing} modalClosed={this.closeModal} >
            {this.state.processing ? <Loading/> : modalElement}
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