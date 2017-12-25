import React, { Component } from 'react';
import CheckBox from './CheckBox';

class TodoItem extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todo.complete !== nextProps.todo.complete ||
                this.props.filterType !== nextProps.filterType
    }

    render() {
        let contentClass = [ 'TodoContent' ];

        const {
            todo,
            toggleComplete,
            todoItemDelete
        } = this.props;

        if ( todo.complete ) {
            contentClass.push( 'complete' );
        }

        return (
            <li className="TodoItem" >
                <div className={ contentClass.join(' ')}>
                    <CheckBox
                        clicked={ () => toggleComplete(todo.id) }
                        checked={todo.complete}
                        label={todo.content}
                    />
                    <span className="TodoItemDelete" onClick={ () => todoItemDelete(todo.id)}>
                        <i className="fa fa-trash"></i>
                    </span>
                </div>
            </li>
        )
    }

}

export default TodoItem;