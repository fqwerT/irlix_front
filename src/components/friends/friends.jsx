import { useState, useEffect, useCallback, useMemo } from "react";
import * as S from "./style";
import { Requests } from "../../api/apiRequests";
import { useNavigate } from "react-router";
import img from "../../assets/img/friends.svg";
import { StyledIcon } from "../ui/img/style";
import { useSelector } from "react-redux";
export const Friends = ({ isHovered }) => {
  const [friends, setFriends] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const fetch = useCallback(async () => {
    setFriends(await Requests.getFriends());
  }, []);

  useEffect(() => {
    if (!friends) {
      fetch();
    }
  }, [friends]);

  const isOpenList = useMemo(() => {
    if (isOpen && isHovered) {
      return true;
    } else {
      setIsOpen(false);
      return false;
    }
  }, [isOpen, isHovered]);

  return (
    <div>
      <S.FriendsTitle onClick={() => setIsOpen(!isOpen)}>
        <StyledIcon src={img} />
      </S.FriendsTitle>
      {friends?.map((item) => (
        <S.FriendCard
          key={item.id}
          onClick={() => navigate(`/home/chat/${item.id}`)}
        >
          <S.StyledName>{item.name}</S.StyledName>
          <S.StyledEmail>{item.email}</S.StyledEmail>{" "}
        </S.FriendCard>
      ))}
    </div>
  );
};
