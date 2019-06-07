import React from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Auxi from '../../../hoc/Auxi';

const modal = (props) => {
    return(
        <Auxi>
            <Backdrop show={props.show} clicked={props.modalClosed}/>
            <div className="Modal">
                {props.children}
            </div>
        </Auxi>
    );

}

export default modal;