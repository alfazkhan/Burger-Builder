import React from 'react';
import Auxi from '../../../hoc/Auxi';

const orderSummary = (props)=>{
    const IngredientSummary = Object.keys(props.ingredients);
    
    for(var key in IngredientSummary)
    {
        IngredientSummary[key]= <li key={IngredientSummary[key]}>
                                   <span style={{textTransform:'capitalize'}}>{IngredientSummary[key]}</span> : {props.ingredients[IngredientSummary[key]]}
                                </li>
    }

    return(
        <Auxi>
            <h3>Your Order</h3>
            <p>Ingredients:</p>
            <ul>
                {IngredientSummary}
            </ul>
            <strong style={{marginTop:10,marginBottom:20,fontSize:20}}>Total Amount: {props.price.toFixed(2)} ₹</strong>
            <p>Continue to Checkout?</p>
            <div className="row" >
                <button className="btn btn-danger btn-sm btn-block" onClick={props.close}>CANCEL</button>
                <button className="btn btn-success btn-sm btn-block" disabled={true} >CONTINUE</button>
            </div>
        
        </Auxi>
    );

}

export default orderSummary;