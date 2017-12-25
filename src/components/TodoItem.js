import React, { Component } from 'react';
import CheckBox from './CheckBox';

class TodoItem extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todo.complete !== nextProps.todo.complete
    }

    render() {
        let contentClass = [ 'TodoContent' ];

        const {
            index,
            todo,
            toggleComplete,
            todoItemDelete
        } = this.props;

        console.log('test');
        if ( todo.complete ) {
            contentClass.push( 'complete' );
        }


        return (
            <li className="TodoItem" >
                <div className={ contentClass.join(' ')}>
                    <CheckBox
                        clicked={ () => toggleComplete(index) }
                        checked={todo.complete}
                        label={todo.content}
                    />
                    <span className="TodoItemDelete">
                        <i className="fa fa-trash"></i>
                    </span>
                </div>
            </li>
        )
    }

}

export default TodoItem;