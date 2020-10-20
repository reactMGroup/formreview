import React from 'react';
const { Component } = require("react");

class Conclude extends Component {
    render() {
        return (
            <section>
                <p>Success</p>
                <input onClick={() => this.props.processNext('form')} type="button" value='Done' />
            </section>
        )
    }
}

export default Conclude;