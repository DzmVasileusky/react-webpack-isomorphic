import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './App.scss';

const propTypes = {
    initialName: PropTypes.string
};

const defaultProps = {
    initialName: 'Аноним'
};

class App extends Component {
    constructor(props) {
        super(props);

        this.handleNameChange = this.handleNameChange.bind(this);
        this.renderGreetingWidget = this.renderGreetingWidget.bind(this);

        this.state = {
            name:            this.props.initialName,
            touched:         false,
            greetingWidget:  () => null
        };
    }

    handleNameChange(event) {
        const name = event.target.value;

        this.setState({ touched: true });

        if (name.length === 0) {
            this.setState({ name: this.props.initialName });
        } else {
            this.setState({ name });
        }
    }

    renderGreetingWidget() {
        if (!this.state.touched) {
            return null;
        }

        return (
            <div>
                <hr />
                <p>Hello, {this.state.name}!</p>
            </div>
        );
    }

    render() {
        return (
            <div className='App'>
                <h1>Application</h1>
                <div>
                    <p>Your name:</p>
                    <div>
                        <input onChange={this.handleNameChange} />
                    </div>
                    {this.renderGreetingWidget()}
                </div>
            </div>
        );
    }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;