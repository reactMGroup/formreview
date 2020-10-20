import React, { Component } from 'react';
import Conclude from './conclude';
import FormBasic from './form-basic';
import Preview from './preview';

class SurveyApp extends Component {

    constructor() {
        super();
        this.next = this.next.bind(this);
        this.setPreviewState = this.setPreviewState.bind(this);
        this.state = {
            current: 'form',
            previewState: []
        }
        this.stateMachine = {
            form: () => (<FormBasic processNext={this.next} setPreview={this.setPreviewState} />),
            preview: () => (<Preview processNext={this.next} data={this.state.previewState} />),
            end: () => (<Conclude processNext={this.next} />)
        }
    }

    next(step) {
        this.setState({ current: step });
    }

    setPreviewState(formData) {
        this.setState({ previewState: formData });
    }

    render() {
        return (
            <section>
                <h3>Survey</h3>
                {this.stateMachine[this.state.current]()}
            </section>
        )
    }

}

export default SurveyApp;