import React, { Component } from 'react'

class TextArea extends Component {
    render() {
        return (
            <label htmlFor={this.props.fieldID}>
                {this.props.label}<textarea  value={this.props.value} onInput={event => this.props.fieldChanged(event.target.value, this.props.fieldID)} id={this.props.fieldID} name={this.props.fieldID} rows="4" cols="50" />
            </label>
        )
    }
}

export default TextArea;