import React from 'react';
import CheckBox from './CheckBox';

const todoFooter = ( props ) => {

    const unCompleteList = props.todoList.filter( todo => {
        return !todo.complete;
    });

    return (
        <div className="TodoFooter">
            <div className="TodoStatus">
                <span>남은 할 일 {unCompleteList.length} 개</span>
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