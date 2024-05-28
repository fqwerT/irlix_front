import React, { useEffect, useCallback } from "react";
import { PanelList } from "../components/panel/panel";
import { Outlet } from "react-router";
import * as S from "./style";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Requests } from "../api/apiRequests";
import { setAuth, setError } from "../redux/user/userSlice";
import { useRef } from "react";
export const Home = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.userPayload);
  const isAuth = useSelector((state) => state.user.userPayload);
  const isError = useSelector((state) => state.user.authError);
 // const key = localStorage.getItem("token");
  const dispatch = useDispatch();
  const firstRender = useRef(true)

  const isLoggined = useCallback(async () => {
    await Requests.CheckAuth(localStorage.getItem("token"))
      .then((res) => dispatch(setAuth(res)))
      .catch((err) => dispatch(setError(err)));
  }, [localStorage.getItem("token")]);

  useEffect(() => {
    if (firstRender.current && localStorage.getItem("token")) {
      isLoggined();
      firstRender.current = false
    }
    if (firstRender.current && !localStorage.getItem("token")) {
      navigate('/login')
      console.log(1)
    }

  }, [isAuth, isError,localStorage.getItem("token")]);


  return (
    <S.StyledHomePage>
      {
        isAuth && (
          <S.StyledHomeWrapper>
          <PanelList />
          <Outlet />
        </S.StyledHomeWrapper>
        )
      }   
    </S.StyledHomePage>
  );
};
