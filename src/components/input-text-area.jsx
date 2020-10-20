import React, { Component } from 'react'

class TextArea extends Component {
    render() {
        return (<textarea onInput={event => this.props.fieldChanged(event.target.value, this.props.fieldID)} id={this.props.fieldID} name={this.props.fieldID} rows="4" cols="50" />)
    }
}

export default TextArea;