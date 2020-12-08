import React from 'react';

export function Input(props) {
    return (

        <div className="field">
            <div className="control">
                <input className={`input ${props.inputcolor}  ${props.inputsize} is-hovered`} type="text" {...props} />
            </div>
        </div>

    )
}

export function Select(props) {

    return (
        <div className="select" {...props}>
            <select>
                {props.children}
            </select>
        </div >
    )
}

export function Option(props) {
   return <option>{props.children}</option>
}