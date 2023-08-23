import React from 'react';
import './chatbot.css';

class Chatbox extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      messages: [],
      inputText: '',
    };
    this.args = {
      openButton: document.querySelector('.chatbox__button button'),
      chatBox: document.querySelector('.chatbox__support'),
      sendButton: document.querySelector('.chatbox__send--footer'),
    };
  }

  display() {
    const { openButton, chatBox, sendButton } = this.args;

    openButton.addEventListener('click', () => this.toggleState());

    sendButton.addEventListener('click', () => this.onSendButton());

    const node = chatBox.querySelector('input');
    node.addEventListener('keyup', ({ key }) => {
      if (key === 'Enter') {
        this.onSendButton();
      }
    });
  }

  toggleState = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  onSendButton = () => {
    const { inputText } = this.state;
    if (inputText === '') {
      return;
    }

    const newMessage = { name: 'User', message: inputText };
    this.setState((prevState) => ({
      messages: [...prevState.messages, newMessage],
      inputText: '',
    }));

    fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      body: JSON.stringify({ message: inputText }),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const responseMessage = { name: 'Sam', message: data.answer };
        this.setState((prevState) => ({
          messages: [...prevState.messages, responseMessage],
        }));
        this.updateChatText();
      })
      .catch((error) => {
        console.error('Error:', error);
        this.updateChatText();
      });
  };

  updateChatText = () => {
    const { messages } = this.state;
    return messages.map((item, index) => (
      <div
        className={`messages__item ${
          item.name === 'Sam' ? 'messages__item--visitor' : 'messages__item--operator'
        }`}
        key={index}
      >
        {item.message}
      </div>
    ));
  };

  removeEventListeners() {
    const { openButton, sendButton, chatBox } = this.args;

    openButton.removeEventListener('click', this.toggleState);
    sendButton.removeEventListener('click', this.onSendButton);
    const node = chatBox.querySelector('input');
    node.removeEventListener('keyup', this.onEnterPress);
  }

render() {
    const { isOpen, messages, inputText } = this.state;
    
    return (    
        <div className={`container ${isOpen ? 'chatbox--active' : ''}`}>
            <div className="chatbox">
                <div className="chatbox__support">
                    <div className="chatbox__header">
                        {/* ... */}
                    </div>
                    <div className="chatbox__messages">
                        {this.updateChatText()}
                    </div>
                    <div className="chatbox__footer">
                        <input
                            type="text"
                            placeholder="Write a message..."
                            value={inputText}
                            onChange={(e) => this.setState({ inputText: e.target.value })}
                        />
                        <button className="chatbox__send--footer send__button" onClick={this.onSendButton}>
                            Send
                        </button>
                    </div>
                </div>
                <div className="chatbox__button">
                    <button onClick={this.toggleState}>
                        <img src="./images/chatbox-iconn.svg" alt="Chatbox Icon" />
                    </button>
                </div>
            </div>
        </div>
    )
}

}

export default Chatbox;


