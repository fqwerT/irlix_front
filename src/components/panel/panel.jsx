import * as S from "./style.js";
import { useNavigate } from "react-router";
import { useState } from "react";
import { UserProfile } from "../userProfile/userProfile.jsx";
import { Friends } from "../friends/friends.jsx";
import img from "../../assets/img/news.svg";
import userIcon from "../../assets/img/user.png";
import { StyledIcon } from "../ui/img/style.js";
import { useSelector, shallowEqual } from "react-redux";

export const PanelList = () => {
  const user = useSelector((state) => state.user.userPayload, shallowEqual);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <S.Panel>
      <S.StyledPanelWrapper>
        <div>
          <S.NavigateNews>
            <StyledIcon src={img} onClick={() => navigate("/home/news")} />
          </S.NavigateNews>
          <Friends isHovered={isHovered} />
        </div>
        <S.SyledProfile>
          {/* <S.StyledIcon src={userIcon} /> */}
          <UserProfile user={user} />
        </S.SyledProfile>
      </S.StyledPanelWrapper>
    </S.Panel>
  );
};
