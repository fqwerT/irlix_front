import React from "react";
import { StyledProfile } from "./style";
import { StyledTextHeading } from "./style";
import { UserStatus } from "../userStatus/userStatus";
import { useNavigate } from "react-router";

export const UserProfile = ({ user, type }) => {
  const navigate = useNavigate();
  return (
    <StyledProfile onClick={() => navigate(`/home/profile/${user.id}`)}>
      <div>
        <StyledTextHeading>
          {user?.name} {type === "target" && <UserStatus />}
        </StyledTextHeading>
        <p>{user?.email}</p>
      </div>
    </StyledProfile>
  );
};
