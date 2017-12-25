import React from 'react';
import { TodoForm } from '../components';
import { TodoList } from '../containers';

const todoBody = ( props ) => {

    const {
        todoInput,
        todoInputChange,
        todoSave,
        todoList,
        todoItemDelete,
        toggleComplete
    } = props;

    return (
        <div className="TodoBody">
            <TodoForm
                todoInput={todoInput}
                todoInputChange={todoInputChange}
                todoSave={todoSave}
            />
            <div>
                <TodoList
                    todoList={todoList}
                    todoItemDelete={todoItemDelete}
                    toggleComplete={toggleComplete}
                />
            </div>
        </div>
    )
}

export default todoBody;