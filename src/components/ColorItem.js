import React, { Component } from 'react';

class ColorItem extends Component {

    render(){
        let style = {
            backgroundColor : this.props.color
        };

        let itemClasses = [];

        itemClasses.push("ColorItem");
        if ( this.props.currentColor === this.props.color ) {
            itemClasses.push("active");
            style.borderColor = 'lightgreen';
        }

        return (
            <div
                className={itemClasses.join(' ')}
                style={style}
                onClick={() => this.props.handleColor(this.props.color) }
            >

            </div>
        )
    }
}

export default ColorItem;