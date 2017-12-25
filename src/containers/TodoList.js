import React, { Component } from 'react';
import { TodoItem } from '../components';

const todoList = ( props ) => {

    return (
            <ul className="TodoList">
                {
                    props.todoList.map( (todo, index) => {
                        return <TodoItem content={todo.content} key={todo.id} />
                    })
                }
            </ul>
    );
}

export default todoList;