import React from 'react';
import './Feature.css'

const Feature = (props) => {
    
    const {description,value}= props.feature
    return (
        <div className="feature">
             
            <ul>
                <li>{description} <strong>{value}</strong></li>
            </ul>
        </div>
    );
};

export default Feature;