import React from 'react';

const formfield = (props) => {

    return (
            <div className="form-group">
            <label htmlFor="exampleInputEmail1">{props.label}</label>
            <input type={props.inputType} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={props.placeholder} />
            </div>
    );
}

export default formfield;