import React, {Component} from 'react';
import Order from '../../Components/Order/Order';
import axios from '../../axios-order';

class orders extends Component {

    state={
        orders:[],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
        .then( response => {
            const fetchedOrders = [];

            for(let index in response.data){
                fetchedOrders.push({
                    ...response.data[index] ,
                    key: index
                    });
            }

            
            this.setState({ loading:false , orders : fetchedOrders })
        })
        .catch( error => {
            console.log(error.data)
        })
    }
    

    render(){
        return(
            <div style={{marginTop:100}}>
                {
                    this.state.orders.map( order =>(
                        <Order key={order.key} ingredients = {order.ingredients} price = {order.price} />
                     ) )
                }
            </div>

        );
    }
}

export default orders;