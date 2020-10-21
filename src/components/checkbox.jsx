import React, { Component } from 'react';

class CheckBox extends Component {
    static defaultProps = {
        caption: "define caption",
        checked: true,
        whenClicked: function (value) {
            console.log(`New value ${value}`);
        }
    }

    constructor(props) {
        super(props);
        this.whenClicked = this.whenClicked.bind(this);
        this.state = { checked: this.props.checked };
    }

    whenClicked() {
        this.setState(previous => ({ checked: !previous.checked }),
            () => {
                this.props.whenClicked(this.state.checked);
            });

    }

    render() {
        return (<label>
            <input type='checkbox' onInput={e => this.whenClicked(e)} checked={this.state.checked} />{this.props.caption}
        </label>);
    }
}

export default CheckBox;