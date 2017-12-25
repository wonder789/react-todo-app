import React, { Component } from 'react';

class CheckBox extends Component {

    render(){
        const {
            checked,
            clicked,
            label
        } = this.props;

        return (
            <span onClick={ clicked } className="Checkbox">
                { checked ? <i className="fa fa-check-circle-o"></i> : <i className="fa fa-circle-o"></i>}
                { label }
            </span>
        )
    }
}

export default CheckBox;