import React, { Component } from 'react';
import InputTextControlled from './input-text';

const iName = 'txtName';
const inOccupation = 'occupation';
const iFreeText = 'occupation';

class FormBasic extends Component {
    constructor(props) {
        super(props);

        this.state = {
            [iName]: '',
            [inOccupation]: '',
            [iFreeText]: '',
        };
        this.fieldChanged = this.fieldChanged.bind(this);
    }

    fieldChanged(event, fieldID) {
        this.setState({ [fieldID]: event.target.value });
        this.showStateiInConsole();
    }

    render() {
        return (<form>
            <h3>Survey</h3>
            <label htmlFor={iName}>Name</label>
            <InputTextControlled fieldChanged={this.fieldChanged} fieldID={iName} placeholder='Name' />
            <label htmlFor={inOccupation}>Occupation</label>
            <select id={inOccupation} ><option>sdasdas</option></select>
            <label htmlFor={iFreeText}>Review of W3Schools:</label>
            <textarea id={iFreeText} name={iFreeText} rows="4" cols="50"></textarea>        </form>)
    }

    showStateiInConsole() {
        Object.keys(this.state).forEach(key => console.log(`${key}: ${this.state[key]}`));
    }
}

export default FormBasic;