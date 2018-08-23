import React from 'react';

const DefaultButton = (props) => {
    return (
        <button style={{
            height: 35,
            backgroundColor: '#8c7ae6',
            color: 'white',
            fontSize: 15,
            borderRadius: 5,
            boxShadow: '0 3px 6px rgba(0,0,0,0.19), 0 3px 6px rgba(0,0,0,0.23)',
            border: 'none',
            cursor: 'pointer'
        }} {...props}>Login</button>
    )
}

export default DefaultButton;