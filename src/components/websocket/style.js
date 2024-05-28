import styled from "styled-components";
import img from "../../assets/img/chat.png";
console.log(img);
export const StyledChat = styled.div`
  width: 100%;
  height: 100%;
  background-color: #37393f;
  display: flex;
  /* justify-content:center; */
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 7px;
`;

export const StyledFormBox = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  gap: 10px;
  padding: 10px;
  background-color: #4f5660;
`;

export const MessageList = styled.ul`
  box-sizing: border-box;
  width: 99.7%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: end;
  max-height: 93%;
  height: 100%;
  overflow-y: auto;
  background-color: #202225;
  //background:url('/static/media/chat.a364631098e71ec5573a.png');
  background-color: white;
  border-radius: 12px 12px 0 0;
  background-repeat: no-repeat;
`;

export const StyledInput = styled.input`
  padding: 4px;
  border-radius: 7px;
  width: 96%;
  outline: 0;
  height: 30px;
  padding-left: 5px;
  color: white;
  background-color: #40444b;
  border: 0;
  font-family: "Roboto";
`;

export const StyledChatButton = styled.button`
  background-color: inherit;
  width: 50px;
  height: 50px;
  border: 0;
  &:hover {
    transform: scale(1.1);
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
