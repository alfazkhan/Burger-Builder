import React,{Component} from "react";
import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import Contact from './Contact/Contact';

class checkout extends Component{

    state={
        ingredients:{
            meat:0,
            cheese:0,
            salad:0,
            bacon:0
        },
        price:5
    };

    cancelCheckoutHandler = () => {
        this.props.history.goBack();
    }

    continueCheckoutHandler = () => {
        this.props.history.push(this.props.match.path + '/contact-data')
    }

    componentDidMount(){
        var CryptoJS = require("crypto-js");
        let query = new URLSearchParams(CryptoJS.AES.decrypt(this.props.location.search.substr(1), "bulla").toString(CryptoJS.enc.Utf8));
        let price=0;
        const ingredients = {}
        for(let param of query.entries())
        {
            if(param[0] === 'price')
            {
                price = +param[1]
            }
            else
            {ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ingredients:ingredients,price:price} );
    }


render()
{
    return(
        <div>
        <CheckoutSummary ingredients={this.state.ingredients} cancelled={this.cancelCheckoutHandler} continued={this.continueCheckoutHandler} />
        <Route path={this.props.match.path + '/contact-data'}
         render={(props)=>(<Contact ingredients={this.state.ingredients} price={this.state.price} {...props}
          />)} />
        </div>
    );
}
}

export default checkout; 