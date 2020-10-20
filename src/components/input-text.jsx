import React, { Component } from 'react';

class InputTextControlled extends Component {
    render() {
        return (
            <input onInput={event => this.props.fieldChanged(event.target.value, this.props.fieldID)} id={this.props.fieldID} type='text' placeholder={this.props.placeholder} />
        )
    }
}

export default InputTextControlled;