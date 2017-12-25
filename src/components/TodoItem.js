import React from 'react';

const todoItem = ( props ) => {
    return (
        <li className="TodoItem">
            <div className="TodoContent">
                <input
                     type="checkbox"
                     checked={props.complete}
                />
                <span>{ props.content }</span>
                <button className="TodoItemDelete">Delete</button>
            </div>
        </li>
    )
}

export default todoItem;