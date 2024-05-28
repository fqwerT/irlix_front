import React, { useState } from "react";
import { handleTypeData } from "./utils";
import * as S from "./style";
import Button from "@mui/material/Button";

export const NewPost = ({ createPost, data, setData, setOpen }) => {
  // const [data, setData] = useState();
  console.log(createPost);
  return (
    <S.ModalContainer>
      <S.StyledAddPost>
        <S.StyledTitleInput
          placeholder="title"
          onChange={(e) => handleTypeData(e.target, setData, data)}
        />
        <S.StyledContentAria
          placeholder="content"
          onChange={(e) => handleTypeData(e.target, setData, data)}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Button variant="contained" onClick={() => createPost()}>
            Создать запись
          </Button>
          <Button variant="contained" onClick={() => setOpen(false)}>
            Отмена
          </Button>
        </div>
      </S.StyledAddPost>
    </S.ModalContainer>
  );
};
