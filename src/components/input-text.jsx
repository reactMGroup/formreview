import React, { Component } from 'react';

class InputTextControlled extends Component {
    render() {
        return (
            <input onChange={event => this.props.fieldChanged(event, this.props.fieldID)} id={this.props.fieldID} type='text' placeholder={this.props.placeholder} />
        )
    }
}

export default InputTextControlled;