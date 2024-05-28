import React, { useRef, useState } from "react";
import { useParams } from "react-router";
import { Requests } from "../../api/apiRequests";
import { useEffect } from "react";
import * as S from "./style";
import { useMemo } from "react";
export const UserInfo = () => {
  const { id } = useParams();
  const isRenderer = useRef(true);
  const [profile, setProfile] = useState(null);

  const fetchProfile = async () => {
    const response = await Requests.getUser(id);
    setProfile(response[0]);
  };

  useEffect(() => {
    if (isRenderer.current === true && !profile) {
      fetchProfile();
      isRenderer.current = false;
    }
  }, [isRenderer.current, profile]);

  const registerData = useMemo(() => {
    if (profile) {
      return `${
        profile.reg_data.day < 10
          ? `0${profile.reg_data.day}`
          : profile.reg_data.day
      }.${
        profile.reg_data.month < 10
          ? `0${profile.reg_data.month}`
          : profile.reg_data.month
      }.${profile.reg_data.year}`;
    }
    if (!profile) {
      return null;
    }
  }, [profile]);

  if (profile) {
    return (
      <S.StyledWrapper>
        <S.StyledHeader>
          <S.StyledName>{profile.name}</S.StyledName>
        </S.StyledHeader>
        <S.StyledInformation>
          <S.StyledStaticInfo>
            <strong>information</strong>
          </S.StyledStaticInfo>
          <S.StyledStaticInfo>
            <strong>email:</strong> {profile.email}
          </S.StyledStaticInfo>
          <S.StyledStaticInfo>
            <strong>friends:</strong> 5
          </S.StyledStaticInfo>
          <S.StyledStaticInfo>
            <strong>member since :</strong> {registerData}
          </S.StyledStaticInfo>
        </S.StyledInformation>
      </S.StyledWrapper>
    );
  }

  if (!profile) {
    return <div>user profile is undefined</div>;
  }
};
