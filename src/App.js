import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetch('https://sabia-m-chat-server.herokuapp.com/messages')
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
      });
  }, [setMessages]);

  return (
    <div className="App">
      <h1>Chat Server</h1>
      {messages.map(message => (
        <div className="chat-box">
        <div className="chat">
          {message.id} -
          Sent from "{message.from}":
          <div>{message.text}</div>
          </div>
        </div>
      ))}
      <form action="/messages" method="post">
      <p>
        Name: <input type="text" name="from" placeholder="Your Name" /> <br />
        Message: <input type="text" name="text" placeholder="The message..." />
        <br/>
      </p>
      <button type="submit">
        Send
      </button>
    </form>
    </div>
  );
}

export default App;
