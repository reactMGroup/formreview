import React, { Component } from 'react';
import CheckBox from './checkbox';
import InputSelectControlled from './input-select-controlled';
import InputTextControlled from './input-text';
import TextArea from './input-text-area';

const iName = 'txtName';
const iSurName = 'txtSurName';
const inOccupation = 'occupation';
const iFreeText = 'freetext';
const iTaC = 'trmsacnd';
const iSlsAgree = 'salesAgree';


const occupationValues = [
    'Developer',
    'Designer',
    'Product',
]

const getLocalData = function (fieldID, defaultValue) {
    const storageValue = localStorage.getItem(fieldID);
    if (storageValue) {
        return storageValue;
    }
    if (defaultValue !== undefined) {
        return defaultValue;
    }
    return '';
}

class FormBasic extends Component {
    constructor(props) {
        super(props);

        this.state = {
            [iName]: getLocalData(iName),
            [iSurName]: getLocalData(iSurName),
            [inOccupation]: getLocalData(inOccupation),
            [iFreeText]: getLocalData(iFreeText),
            [iTaC]: getLocalData(iTaC, 'false') === 'true',
            [iSlsAgree]: getLocalData(iSlsAgree, 'true') === 'true',
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
        `Free text ${this.state[iFreeText]}`,
        `Agree to Terms and Conditions ${this.state[iTaC]}`,
        `Get subscription ${this.state[iSlsAgree]}`];
        this.props.setPreview(preview);
        this.props.processNext('preview');
    }

    render() {
        return (<form onSubmit={this.submitForm}>
            <InputTextControlled fieldChanged={this.fieldChanged} fieldID={iName} placeholder='Name' value={this.state[iName]} />
            <InputTextControlled fieldChanged={this.fieldChanged} fieldID={iSurName} placeholder='Surname' value={this.state[iSurName]} />
            <br />
            <InputSelectControlled fieldChanged={this.fieldChanged} fieldID={inOccupation} options={occupationValues} value={this.state[inOccupation]} />
            <br />
            <TextArea fieldChanged={this.fieldChanged} label='Free text' fieldID={iFreeText} value={this.state[iFreeText]} />
            <br />
            <br />
            <CheckBox whenClicked={this.fieldChanged} fieldID={iTaC} value={this.state[iTaC]} caption="I agree to terms and conditons." />
            <br />
            <CheckBox whenClicked={this.fieldChanged} fieldID={iSlsAgree} value={this.state[iSlsAgree]} caption="I want to receive sales materials." />
            <br />
            <input type='submit' value='Next' />
        </form>)
    }

    showStateiInConsole() {
        Object.keys(this.state).forEach(key => console.log(`${key}: ${this.state[key]}`));
    }
}

export default FormBasic;