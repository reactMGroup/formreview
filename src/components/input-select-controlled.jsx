import React, { Component } from 'react';

class InputSelectControlled extends Component {
    render() {
        return (
            <select onInput={event => this.props.fieldChanged(event.target.selectedIndex, this.props.fieldID)} id={this.props.fieldID}>
                <option hidden disabled selected value> -- select an option -- </option>
                {
                    this.props.options
                        .map(entry => Object.values(entry)
                            .map(value => (<option key={value}>{value}</option>)))
                }
            </select>
        )
    }
}

export default InputSelectControlled;