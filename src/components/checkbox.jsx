import React, { Component } from 'react';

class CheckBox extends Component {
    static defaultProps = {
        caption: "define caption",
        value: true,
        whenClicked: function (value) {
            console.log(`New value ${value}`);
        }
    }

    constructor(props) {
        super(props);
        this.whenClicked = this.whenClicked.bind(this);
    }

    whenClicked(value) {
        this.props.whenClicked(!value, this.props.fieldID);
    }

    render() {
        return (<label>
            <input type='checkbox' onInput={e => this.whenClicked(e.target.checked)} checked={this.props.value} />{this.props.caption}
        </label>);
    }
}

export default CheckBox;