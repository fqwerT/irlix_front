import * as S from "./style";
import { useGetUserByIdQuery } from "../../redux/getUser/getUser";
import { UserProfile } from "../userProfile/userProfile";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
export const ChatHeader = ({ messages, id }) => {
  const { data, error, isLoading } = useGetUserByIdQuery(id);
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);
  const userData = useMemo(() => {
    if (data) {
      return data[0];
    }
    if (!data) {
      return { name: null, email: null };
    }
  }, [data]);

  return (
    <S.StyledChatHeader
      onMouseEnter={() => setIsHover(!isHover)}
      onMouseLeave={() => setIsHover(false)}
    >
      {messages.length <= 0 ? (
        <S.StyledMessagePlaceholder
          onClick={() => navigate(`/home/profile/${userData.id}`)}
        >
          {userData?.name}
        </S.StyledMessagePlaceholder>
      ) : (
        <UserProfile user={userData} type={"target"} />
      )}
    </S.StyledChatHeader>
  );
};
