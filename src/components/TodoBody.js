import React from 'react';
import { TodoForm, Palette } from '../components';
import { TodoList } from '../containers';

const todoBody = ( props ) => {

    const {
        todoInput,
        todoInputChange,
        todoSave,
        todoList,
        todoItemDelete,
        toggleComplete,
        filterType,
        handleColor,
        colors,
        currentColor
    } = props;

    return (
        <div className="TodoBody">
            <TodoForm
                currentColor={currentColor}
                todoInput={todoInput}
                todoInputChange={todoInputChange}
                todoSave={todoSave}
            />
            <Palette
                colors={colors}
                handleColor={handleColor}
                currentColor={currentColor}
            />
            <div>
                <TodoList
                    todoList={todoList}
                    filterType={filterType}
                    todoItemDelete={todoItemDelete}
                    toggleComplete={toggleComplete}
                />
            </div>
        </div>
    )
}

export default todoBody;