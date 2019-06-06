import React from 'react'
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css'

const controls = [
    { label:"Meat" , type:"meat" },
    { label:"Cheese" , type:"cheese" },
    { label:"Salad" , type:"salad" },
    { label:"Bacon" , type:"bacon" }
];

const buildcontrols = (props) => (


    <div className="BuildControls" >

        <p>Current Price: <strong>{props.price.toFixed(2) } ₹</strong></p>
        
        { controls.map(index=>(
                <BuildControl
                    key={index.type}
                    label={index.label}
                    added={()=>props.added(index.type)}
                    removed={()=>props.removed(index.type)}
                    disabled={props.disabled[index.type]}
                    /> 
        ))
        }

    </div>

);

export default buildcontrols;