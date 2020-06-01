import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import WebsocketComponent from "./DataComponent/WebsocketComponent"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open : false
        };

        this.switchOpen = this.switchOpen.bind(this);
        this.postFn = this.postFn.bind(this);
    }

    switchOpen() {
        this.setState((prevState, props) => {
            var open = prevState.open;
            return {open : !open};
        })
    }

    postFn() {
        const requestOptions = {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify({title : 'React POST Request Example'})
        };
        fetch('http://hosh.it:43000/ports', requestOptions)
        //fetch('http://localhost:43000/ports', requestOptions)
    }

    render = () => (
        <div className="App">

            <h1>Welcome at the Hosh.it main page</h1>
            <Button onClick={this.switchOpen}>
                {this.state.open ? 'Hide' : 'Display'} notice
            </Button>
            <div className={this.state.open ? 'displayed' : 'hidden'}>
                <p>This server host several random services and experiments</p>
                <p>It is a perpetual work in progress and therefore hold no guarantee of functionality to you, dear
                    visitor.</p>
                <br/>
                <p>This page itself is an experiment to build a react app with real-time data capabilities. </p>
            </div>
            <Button onClick={this.postFn}>
                Lookup ports
            </Button>
            <div>
                <WebsocketComponent>
                </WebsocketComponent>
            </div>
        </div>
    );
}

export default App;
