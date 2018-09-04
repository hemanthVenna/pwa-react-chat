import React, { Component } from 'react';
import io from "socket.io-client";


class Chat extends Component {
  constructor (props){
   super(props);
   this.state = {
   messages : []
   }

   this.socket = io('https://boiling-cove-13790.herokuapp.com/');
    this.socket.on('chat message', function(data){
        addMessage(data);
    });
    
    const addMessage = data => {
        console.log(data);
        this.setState({messages: [...this.state.messages, data]});
        console.log(this.state.messages);
    };
  }



  render() {
  const listMessages = this.state.messages.map((message,index) => <p key={index}>{message}</p>);
    return (
      <div>
      
        <div> {listMessages}</div>
      </div>
    );
  }
};

export default Chat;