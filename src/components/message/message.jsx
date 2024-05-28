import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router";
export const Messsage = ({ messages }) => {
  const navigate = useNavigate()
  console.log(messages)
  return messages.map((mess, index) => (
    <S.StyledMessage key={index}>
      <div>
        <S.StyledUserName>{mess.username}:</S.StyledUserName>
        <S.StyledMessageText>{mess.message}</S.StyledMessageText>
      </div>
      <S.StyledDate> {mess.date}</S.StyledDate>
    </S.StyledMessage>
  ));
};
