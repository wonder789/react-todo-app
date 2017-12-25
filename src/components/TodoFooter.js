import React from 'react';
import CheckBox from './CheckBox';

const todoFooter = ( props ) => {

    const unCompleteList = props.todoList.filter( todo => {
        return !todo.complete;
    });

    const completeList = props.todoList.filter( todo => {
        return todo.complete;
    });

    return (
        <div className="TodoFooter">
            <div className="TodoStatus">
                <span>완료 {completeList.length}</span> <span> 미완료 { unCompleteList.length }</span>
            </div>
            <div className="TodoFilterGroup">
                {
                    props.filterGroup.map( (obj, index) => {
                        return <CheckBox
                                     clicked={ () => props.todoFilter(obj.type) }
                                     checked={ props.filterType === obj.type }
                                     label={ obj.name }
                                     key={obj.type}
                                />;
                    })
                }
            </div>
        </div>
    )
}

export default todoFooter;