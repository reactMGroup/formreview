import React, { Component } from 'react';
import InputSelectControlled from './input-select-controlled';
import InputTextControlled from './input-text';
import TextArea from './input-text-area';

const iName = 'txtName';
const inOccupation = 'occupation';
const iFreeText = 'freetext';

const occupationValues = [
    { dev: 'Developer' },
    { des: 'Designer' },
    { prd: 'Product' },
]

class FormBasic extends Component {
    constructor(props) {
        super(props);

        this.state = {
            [iName]: '',
            [inOccupation]: '',
            [iFreeText]: '',
        };
        this.fieldChanged = this.fieldChanged.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    fieldChanged(newValue, fieldID) {
        console.log(`new value ${newValue}`);
        this.setState({ [fieldID]: newValue },
            this.showStateiInConsole()
        );
    }

    submitForm(event) {
        event.preventDefault();
    }

    render() {
        return (<form onSubmit={this.submitForm}>
            <h3>Survey</h3>
            <label htmlFor={iName}>Name</label>
            <InputTextControlled fieldChanged={this.fieldChanged} fieldID={iName} placeholder='Name' />
            <br />
            <label htmlFor={inOccupation}>Occupation</label>
            <InputSelectControlled fieldChanged={this.fieldChanged} fieldID={inOccupation} options={occupationValues} />
            <br />
            <label htmlFor={iFreeText}>Free text:</label>
            <TextArea fieldChanged={this.fieldChanged} fieldID={iFreeText}/>
            <br />
            <input type='submit' value='Submit' />
        </form>)
    }

    showStateiInConsole() {
        Object.keys(this.state).forEach(key => console.log(`${key}: ${this.state[key]}`));
    }
}

export default FormBasic;