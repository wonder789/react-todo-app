import React, { Component } from 'react';
import { TodoItem } from '../components';

class TodoList extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return this.props.filterType !== nextProps.filterType ||
                this.props.todoList !== nextProps.todoList;
    }


    render() {

        const {
            todoItemDelete,
            toggleComplete,
            filterType,
            todoList
        } = this.props;

            let list = todoList;

            if ( filterType !== 'all' ){
                list = list.filter( todo => {
                    return filterType === 'complete' ? todo.complete : !todo.complete;
                });
            }

            return (
                    <ul className="TodoList">
                        {
                            list.map( (todo, index) => {
                                return <TodoItem
                                            todoItemDelete={todoItemDelete}
                                            toggleComplete={toggleComplete}
                                            filterType={filterType}
                                            todo={todo}
                                            index={index}
                                            key={index}
                                        />
                            })
                        }
                    </ul>
            );
    }

}

export default TodoList;