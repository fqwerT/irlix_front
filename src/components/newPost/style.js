import styled from "styled-components";

export const StyledAddPost = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  max-height: 150px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 10px;
  margin: 15px;
  background: white;
  padding: 15px;
  @media screen and (max-width: 1024px) {
    max-width: 95%;
  }
`;
export const StyledContentAria = styled.textarea`
  width: 100%;
  height: 100%;

  border: 1px solid gray;
  border-radius: 6px;
  padding-left: 5px;
  padding-top: 5px;
  resize: none;
`;

export const StyledTitleInput = styled.input`
  border-radius: 6px;
  padding: 4px;
  border: 1px solid gray;
  width: 100%;
`;

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.315);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;
