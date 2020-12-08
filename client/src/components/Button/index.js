import React from 'react';
import './style.css';

function Button(props) {

    return (
        <button className={`button tileButton ${props.customclass}`} {...props}>
            {props.children}
        </button>

    )
}

export default Button;