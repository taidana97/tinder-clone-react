import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Lisa",
      image:
        "https://vnn-imgs-f.vgcloud.vn/2020/05/08/22/lisa-blackpink-bi-anti-fan-doa-giet-yg-dua-ra-phan-hoi-cung-ran.jpg",
      message: "Whats up 1",
    },
    {
      name: "Lisa",
      image:
        "https://vnn-imgs-f.vgcloud.vn/2020/05/08/22/lisa-blackpink-bi-anti-fan-doa-giet-yg-dua-ra-phan-hoi-cung-ran.jpg",
      message: "Whats up 2",
    },
    {
      message: "Whats up 3",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div>
      <p className="chatScreen__timestamp">YOU MATCHED WITH ELEN ON 10/8/20</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message" key={message?.name}>
            <Avatar
              className="chatScreen__avatar"
              alt={message}
              src={message.image}
            ></Avatar>
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Type a message..."
          className="chatScreen__inputField"
        />
        <button
          type="submit"
          onClick={handleSend}
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
