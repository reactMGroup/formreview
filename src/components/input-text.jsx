import React, { Component } from 'react';

class InputTextControlled extends Component {
    render() {
        return (
            <label htmlFor={this.props.fieldID}>
                {this.props.placeholder}<input value={this.props.value} onInput={event => this.props.fieldChanged(event.target.value, this.props.fieldID)} id={this.props.fieldID} type='text' placeholder={this.props.placeholder} />
            </label>
        )
    }
}

export default InputTextControlled;