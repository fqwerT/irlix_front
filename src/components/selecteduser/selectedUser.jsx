import React from "react";
import { useParams } from "react-router";
import { StyledUserProfile } from "./style";
import { useGetUserByIdQuery } from "../../redux/getUser/getUser";
export const SelectedUser = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetUserByIdQuery(id);

  if (isLoading) {
    return <div>...loading</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <StyledUserProfile>
      <h1>{data[0].name}</h1>
      <p>{data[0].email}</p>
    </StyledUserProfile>
  );
};
