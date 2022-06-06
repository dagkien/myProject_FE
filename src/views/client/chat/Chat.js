// @flow
import React, { useState } from "react";
// import $ from "jquery";
import {
  AppstoreOutlined,
  ArrowLeftOutlined,
  AudioOutlined,
  CameraOutlined,
  FolderOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
  SendOutlined,
  SmileOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
export const Chat = () => {
  const [message, setMessage] = useState("");
  const [arrMessage, setArrMessage] = useState([]);
  const [arrFriendMessage, setArrFriendMessage] = useState([]);
  const FakeMessage = [
    "Hello",
    "Chào Em",
    "Rất vui được làm quen với em",
    "Em tuyệt lắm",
  ];
  // var $messages = $(".messages-content");
  // func get value in input
  const handleGetMessage = (e) => {
    setMessage(e.target.value);
  };
  const handleSendMessage = () => {
    insertMessage(message);
    setMessage("");

    setTimeout(() => {
      friendInsertMessage(FakeMessage[arrMessage.length]);
    }, 2000);
    // $messages.mCustomScrollbar();
  };

  const insertMessage = (msg) => {
    if (msg.trim().length === 0) {
      alert("Don't send Message");
    } else {
      setArrMessage([...arrMessage, msg]);
    }
  };

  const friendInsertMessage = (msg) => {
    if (msg.trim().length === 0) {
      alert("Don't send Message");
    } else {
      setArrFriendMessage([...arrFriendMessage, msg]);
    }
  };

  // function updateScrollbar() {
  //   $messages
  //     .mCustomScrollbar("update")
  //     .mCustomScrollbar("scrollTo", "bottom", {
  //       scrollInertia: 10,
  //       timeout: 0,
  //     });
  // }

  return (
    <div className="container_chat">
      <div className="chat">
        <div className="chat-header">
          <div className="leave-chat">
            <ArrowLeftOutlined />
          </div>
          <div className="chat-title">
            <h1>Fabio Ottaviani</h1>
            <h2>Supah</h2>
            <figure className="avatar">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg"
                alt="img"
              />
            </figure>
          </div>
          <div className="chat-video-call">
            <PhoneOutlined />
            <VideoCameraOutlined />
            <InfoCircleOutlined />
          </div>
        </div>
        <div className="messages">
          <div className="messages-content">
            <div className="message message-personal mCSB_container">Alo</div>
            <div className="new mCSB_container">
              <div className="message new">
                <figure className="avatar">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg"
                    alt="img"
                  />
                </figure>
                123123
              </div>
              <div className="message loading new">
                <figure className="avatar">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg"
                    alt="img"
                  />
                </figure>
                <span></span>
              </div>
            </div>
            {arrMessage?.map((item, index) => (
              <div
                className="message message-personal mCSB_container"
                key={index}
              >
                {item}
              </div>
            ))}
            {arrFriendMessage.length > 0 &&
              arrFriendMessage?.map((item, index) => (
                <div className="new mCSB_container" key={index}>
                  <div className="message new">
                    <figure className="avatar">
                      <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg"
                        alt="img"
                      />
                    </figure>
                    {item}
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="message-box">
          <div className="box-icon">
            <AppstoreOutlined />
            <CameraOutlined />
            <FolderOutlined />
            <AudioOutlined />
          </div>
          <div className="message-animated">
            <input
              type="text"
              className="message-input"
              placeholder="Type message..."
              onChange={handleGetMessage}
              value={message}
            />
            <span>
              <SmileOutlined />
            </span>
          </div>
          <div className="message-submit" onClick={handleSendMessage}>
            <SendOutlined />
          </div>
        </div>
      </div>
      <div className="bg"></div>
    </div>
  );
};

export default Chat;
