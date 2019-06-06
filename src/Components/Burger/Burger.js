import React from 'react';
import BurgerParts from './BurgerParts/BurgerParts';
import './Burger.css'

const burger = ( props ) =>
{  
    
    let propKeys=Object.keys(props.ingredient);
    let propValues=Object.values(props.ingredient);
    let i,sum=0;

    for(i=0;i<propValues.length;i++)
    {
        sum=sum+propValues[i];
    }
    
    if(sum===0)
    {
        var elements=<h6>Please Add some Ingredients</h6>
    }
    else
    {
        elements=[];
        var count=0
        for(i=0;i<propKeys.length;i++)
            {
             var key=propValues[i]
                for(var j=0;j<key;j++)
                    {
                        elements[count+j]=<BurgerParts key={propKeys[i]+j} type={propKeys[i]} />;
                    }
        count+=key;
            }
    }
    
     return(
         <div className="Burger">
             
             <BurgerParts type="bread-top" />
             {elements}
             <BurgerParts type="bread-bottom" />
         </div>
     )
}

export default burger;