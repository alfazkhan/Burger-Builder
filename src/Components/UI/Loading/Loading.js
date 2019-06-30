import React from 'react';
import './Loading.css';


const loading = () => {
    return(
        <div className="spinner">
            <div className="cube1"></div>
            <div className="cube2"></div>
        </div>
    );

}

export default loading;