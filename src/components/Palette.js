import React, { Component } from 'react';
import { ColorItem } from '../components';

class Palette extends Component {

    render() {
        const {
            handleColor,
            currentColor,
            colors
        } = this.props;

        return (
            <div className="Palette">
                {
                    this.props.colors.map( color => {
                        return <ColorItem
                            handleColor={handleColor}
                            currentColor={currentColor}
                            color={color}
                            key={color}
                        />
                    })
                }
            </div>
        )
    }
}

export default Palette;