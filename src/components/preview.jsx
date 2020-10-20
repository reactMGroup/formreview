import React, { Component } from 'react';

class Preview extends Component {

    render() {
        console.log(this.props.data);
        return (
            <section>
                <ul>
                    {
                        this.props.data
                            .map(entry => (<p>{entry}</p>))
                    }
                </ul>
                <input onClick={() => this.props.processNext('form')} type="button" value='Back to the From' />
                <input onClick={() => this.props.processNext('end')} type='button' value='Submit' />
            </section>
        )
    }
}

export default Preview;