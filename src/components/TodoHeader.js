import React from 'react';

const todoHeader = ( props ) => {
    return (
        <div className="TodoHeader">
            <h1><i className="fa fa-edit Logo"></i>{props.title}</h1>
        </div>
    )
}

export default todoHeader;