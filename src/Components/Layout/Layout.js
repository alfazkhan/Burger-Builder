import React, {Component} from 'react';
import Auxi from '../../hoc/Auxi';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{

    state={
        backdropOpen:false
    }

    backDropHandler = () =>{
        this.setState({backdropOpen:false});
    }

    toggleState = () =>{
        const toggle = !this.state.backdropOpen
        this.setState({backdropOpen: toggle })
    }

    render(){
        return(
            <Auxi>
                <div>
                    <Toolbar action={this.toggleState}/>
                    <SideDrawer open={this.state.backdropOpen} closed={this.backDropHandler}/>
                </div>
                <main>
                    {this.props.children}
                </main>
            </Auxi>
        );
    }

};

export default Layout