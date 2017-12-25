import React from 'react';

const todoHeader = ( props ) => {
    return (
        <div className="TodoHeader">
            <h1>{props.title}</h1>
        </div>
    )
}

export default todoHeader;