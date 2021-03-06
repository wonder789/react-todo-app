import React from 'react';

const todoForm = ( props ) =>{
    let style = {
        color : props.currentColor
    };

    return (
        <div className="TodoForm">
            <input
                type='text'
                placeholder='할 일을 입력해주세요'
                value={props.todoInput}
                onChange={props.todoInputChange}
                onKeyPress={ (event) => {
                    if( event.key === 'Enter' ) props.todoSave()
                }}
                style={style}
            />
        </div>
    )
}

export default todoForm;