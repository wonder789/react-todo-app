import React, { Component } from 'react';
import { TodoItem } from '../components';

const todoList = ( props ) => {

    console.log('list!');
    return (
            <ul className="TodoList">
                {
                    props.todoList.map( (todo, index) => {
                        return <TodoItem
                                    todoItemDelete={props.todoItemDelete}
                                    toggleComplete={props.toggleComplete}
                                    todo={todo}
                                    index={index}
                                    key={index}
                                />
                    })
                }
            </ul>
    );
}

export default todoList;