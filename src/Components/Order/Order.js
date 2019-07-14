import React from 'react';
import './Order.css';


const order  = (props) => {
    
const array = []

for(let index in props.ingredients){
    array.push(index)
}

const ingredientsOutput = array.map(ig =>{
    return <div key={ig}><span className='text-uppercase ing' >{ig}  ({props.ingredients[ig]})</span></div>
})



return(

        
        <div className='card'>
            <div className=' orders'>
                <strong className='orders-item' style={{fontSize:20}}>Ingredients:</strong>
                {ingredientsOutput}
                <div className='row text-center'><strong className='orders-item'style={{fontSize:20}}>Price:</strong>&nbsp;&nbsp;&nbsp;<p>{props.price}₹</p></div>
            </div>
        </div>

);

}

export default order;