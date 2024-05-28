import React from "react";
import { StyledHeader } from "./style";
import { UserProfile } from "../userProfile/userProfile";

export const Header = () => {
  const path = window.location.pathname;
  return <StyledHeader>{path !== "/login" | '/register' && <UserProfile />}</StyledHeader>;
};
