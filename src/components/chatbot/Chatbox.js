import React, { useState } from 'react'
import './chatbot.css'
import chatIcon from "./images/chatbox-icon.svg"
import axios from 'axios';

function Chatbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [allMessages, setAllMessages] = useState([]);


  const onSendButton = async () => {
  if (message === '') {
    return;
  }

  const newMessage = { name: 'User', message: message };
  setAllMessages((prevMessages) => [...prevMessages, newMessage]);
  setMessage('');

  const body = {
    message: message
  };

  const response = await axios.post("http://localhost:5000/predict", body);
  const responseMessage = { name: 'Sam', message: response.data.answer };
  setAllMessages((prevMessages) => [...prevMessages, responseMessage]);
};

 const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSendButton();
    }
  };
  
  return (
    <div className="container" >
      <div className="chatbox">

        <div className={` ${!isOpen ? "chatbox__active" : "chatbox__support"} `} >
          <div className="chatbox__header">
             <div class="chatbox__image--header">
<img width="50" height="50" src="https://img.icons8.com/doodle/48/frog-face.png" alt="frog-face"/>                      </div>
                <div class="chatbox__content--header">
                    <h4 class="chatbox__heading--header">Chat support</h4>
                    <p class="chatbox__description--header">Hi. Would you like to get to know me better?</p>
                </div>
          </div>
          <div className="chatbox__messages">
  {allMessages.slice().reverse().map((item, index) => {
    return (
      <div
        className={`messages__item ${item.name === 'Sam' ? 'messages__item__visitor' : 'messages__item__operator'
          }`}
        key={index}
      >
        {item.message}
      </div>
    );
  })}
</div>

          <div className="chatbox__footer">
            <input
              type="text"
              placeholder="Write a message..."
              value={message}
               onChange={(event) => setMessage(event.target.value)}
              onKeyPress={handleKeyPress} // Add this line
            />
            <button className="chatbox__send--footer send__button" onClick={() => { onSendButton() }}>
              Send
            </button>
          </div>
        </div>
        <div className="chatbox__button">
          <button onClick={() => { setIsOpen(!isOpen) }}>
            <img src={chatIcon} alt="Chatbox Icon" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Chatbox
