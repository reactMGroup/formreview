import React, { Component } from 'react';
import InputSelectControlled from './input-select-controlled';
import InputTextControlled from './input-text';
import TextArea from './input-text-area';

const iName = 'txtName';
const iSurName = 'txtSurName';
const inOccupation = 'occupation';
const iFreeText = 'freetext';

const occupationValues = [
    'Developer',
    'Designer',
    'Product',
]

class FormBasic extends Component {
    constructor(props) {
        super(props);

        this.state = {
            [iName]: localStorage.getItem(iName),
            [iSurName]: localStorage.getItem(iSurName),
            [inOccupation]: localStorage.getItem(inOccupation),
            [iFreeText]: localStorage.getItem(iFreeText),
        };
        this.fieldChanged = this.fieldChanged.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    fieldChanged(newValue, fieldID) {
        console.log(`new value ${newValue}`);
        localStorage.setItem([fieldID], newValue);
        this.setState({ [fieldID]: newValue },
            this.showStateiInConsole()
        );
    }

    submitForm(event) {
        event.preventDefault();
        const preview = [`Name ${this.state[iName]} ${this.state[iSurName]}`,
        `Occupation ${this.state[inOccupation]}`,
        `Free text ${this.state[iFreeText]}`];
        this.props.setPreview(preview);
        this.props.processNext('preview');
    }

    render() {
        return (<form onSubmit={this.submitForm}>
            <InputTextControlled fieldChanged={this.fieldChanged} fieldID={iName} placeholder='Name' value={this.state[iName]}/>
            <InputTextControlled fieldChanged={this.fieldChanged} fieldID={iSurName} placeholder='Surname'  value={this.state[iSurName]}/>
            <br />
            <InputSelectControlled fieldChanged={this.fieldChanged} fieldID={inOccupation} options={occupationValues}  value={this.state[inOccupation]}/>
            <br />
            <TextArea fieldChanged={this.fieldChanged} label='Free text' fieldID={iFreeText}  value={this.state[iFreeText]}/>
            <br />
            <input type='submit' value='Next' />
        </form>)
    }

    showStateiInConsole() {
        Object.keys(this.state).forEach(key => console.log(`${key}: ${this.state[key]}`));
    }
}

export default FormBasic;