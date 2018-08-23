import React from 'react';

const InputField = (props) => {
    return (
        <input
            style={{
                height: 35,
                width: 300,
                borderRadius: 5,
                border: 'none',
                boxShadow: '0 3px 6px rgba(0,0,0,0.19), 0 3px 6px rgba(0,0,0,0.23)',
                paddingLeft: 10,
                fontSize: 15
            }}
            name={props.name}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
        />
    )
}

export default InputField;