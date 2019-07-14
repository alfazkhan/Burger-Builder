import React  from 'react';
import Burger from '../../Burger/Burger';
const checkoutsummary = (props)=>{
    

        return(
            <div  className="text-center">
                <h1>It Looks Delicious!!</h1>
                <Burger ingredient={props.ingredients}/>
                <button className="btn-danger" onClick={props.cancelled}>CANCEL</button>
                <button className="btn-success" onClick={props.continued} >CONTINUE</button>
            </div>
        );
    
}

export default checkoutsummary;