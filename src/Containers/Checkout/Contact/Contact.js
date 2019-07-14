import React,{Component} from 'react';
import Auxi from '../../../hoc/Auxi';
import FormField from './FormField/FormField';
import axios from '../../../axios-order';
import Loading from '../../../Components/UI/Loading/Loading';
import Modal from '../../../Components/UI/Modal/Modal';

class contact extends Component {

    state={
        user:{
            name:"",
            phone:"",
            address:{
                city:"",
                pin:"",
                landmark:""
            }
        },
        processing:false
        
        
    }

    submitHandler = (event) => {
        event.preventDefault();


         const order = {
            
                 ingredients : this.props.ingredients,
                 price : this.props.price,
                 user: {
                     ...this.state.user
                 },
         }
        this.setState({processing:true});
         axios.post('/orders.json',order)
         .then(response=> {
             this.setState({processing:false});
             this.props.history.push('/');
            } )
         .catch(error=> console.log(error) );

    }
    render(){
        const form = (<form>
            <FormField label="Name" inputType="text" placeholder="Enter Name" /> 
            <FormField label="Phone Number" inputType="text" placeholder="Enter Phone Number" />
            <FormField label="City" inputType="text" placeholder="Enter City" />
            <FormField label="Pincode" inputType="text" placeholder="Enter pincode" />
            <FormField label="Landmark" inputType="text" placeholder="Enter Landmark" />
            <button type="submit" className="btn btn-primary" onClick={this.submitHandler}>Submit</button>
        </form>);
        
        return(
            <Auxi>
                <div className="row">
                    <div className="col-md-2 col-xs-2" />
                    <div className="text-center col-md-8 col-xs-8">
                    <h4>Enter Your Details</h4>
                        {this.state.processing ? <Modal><Loading/></Modal> : form}
                    </div>
                    <div className="col-md-2 col-xs-2" />
                </div>
            </Auxi>
        );
    }
}

export default contact;