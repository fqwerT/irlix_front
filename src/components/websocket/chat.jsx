import React, { useState, useRef, useCallback } from "react";
import { useSelector } from "react-redux";
import * as S from "./style";
import { useParams } from "react-router";
import { useEffect } from "react";
import img from "../../assets/img/send.svg";
import { useMemo } from "react";
import { Messsage } from "../message/message";
import { ChatHeader } from "../chatHeader/chatHeader";

export const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");
  const socket = useRef(null);
  const firstmount = useRef(true);
  const user = useSelector((state) => state.user.userPayload);
  const { id } = useParams();
  const messagesList = useRef(null);

  const connect = () => {
    socket.current = new WebSocket("ws://localhost:5000");

    if (user) {
      socket.current.onopen = () => {
        const message = {
          event: "connection",
          name: user.name,
          id: user.id,
        };
        socket.current.send(JSON.stringify(message));
        socket.current.id = user.id;
      };
    }

    socket.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, message]);
    };
    socket.current.onclose = () => {
      console.log("Соединение закрыто");
    };

    socket.current.onerror = (error) => {
      console.error("Произошла ошибка:", error);
    };
  };

  useEffect(() => {
    if (firstmount.current) {
      connect();

      firstmount.current = false;
    }
  }, [firstmount, socket]);

  const sendMessage = async () => {
    messagesList.current.scrollTo({ top: 0, behavior: "smooth" });
    if (value.length !== 0 && socket) {
      const message = {
        username: user?.name,
        message: value,
        id: user.id,
        event: "message",
        targetId: Number(id),
        chatId: Number(id) + user.id,
      };

      socket.current.send(JSON.stringify(message));
      setValue("");
    }
  };

  const currMessages = useMemo(() => {
    if ((user, id)) {
      const chatId = Number(id) + user?.id;
      return messages.filter((item) => item.chatId === chatId);
    }
  }, [user, id, messages]);
  return (
    <S.StyledChat>
      <ChatHeader messages={currMessages} id={id} />
      <S.MessageList className="messages" ref={messagesList}>
        <Messsage messages={currMessages} />
      </S.MessageList>
      <S.StyledFormBox className="form">
        <S.StyledInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
        />
        <S.StyledChatButton onClick={sendMessage}>
          <img src={img} />
        </S.StyledChatButton>
      </S.StyledFormBox>
    </S.StyledChat>
  );
};
