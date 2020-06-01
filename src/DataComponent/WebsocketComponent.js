import React from 'react';
import socketIOClient from "socket.io-client";

class WebsocketComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data : "",
        };
        this.socketClient = socketIOClient('http://hosh.it:43000');
        //this.socketClient = socketIOClient('http://localhost:43000');
    }

    componentWillMount() {

    }
    componentDidMount() {

        this.socketClient.on('connect', function(){
            console.log('WebSocket Client Connected');
        });

        this.socketClient.on( 'list-updated',(data) => {
            console.log("got")
            console.log(data)
            this.setState({
                data : data
            })
        });
        this.socketClient.on( 'ports-updated',(data) => {
            console.log("got")
            console.log(data)
            this.setState({
                data : data
            })
        });
    }

    render() {

        return (
            <React.Fragment>
                {
                    this.state.data.split('LISTEN').map((service,i) => {
                    // Return the element. Also pass key
                    return (<p key={i}>{service}</p>)
                })
                }
            </React.Fragment>
        );
    }
}

export default WebsocketComponent;