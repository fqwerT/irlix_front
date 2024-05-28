import React, { useState, useCallback } from "react";
import { LoginContainer, StyledWrapper } from "./style";
import { StyledInputBox } from "./style";
import { StyledButton } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../redux/user/userSlice";
import { Link } from "react-router-dom";
import { responseHandler } from "../../utils/utils";
import { setError } from "../../redux/user/userSlice";
import { useNavigate } from "react-router";
export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({});
  const user = useSelector((state) => state.user.userPayload);

  const HandleChange = (elem) => {
    setLoginData({ ...loginData, [`${elem.target.id}`]: elem.target.value });
  };

  const submiteLogin = useCallback(async () => {
    responseHandler("signin", loginData, dispatch, setAuth, setError).then(
      (res) => {
        if (res.payload.token) {
          localStorage.setItem("token", res.payload.token);
          navigate("/");
        }
      }
    ).catch((err) => console.log(err))
  }, [loginData, user]);

  return (
    <LoginContainer>
      <StyledWrapper>
        <StyledInputBox>
          <h1>Login</h1>
          <input placeholder={"Email"} onChange={HandleChange} id={"email"} />
          <input
            placeholder={"Password"}
            onChange={HandleChange}
            id={"password"}
          />
        </StyledInputBox>

        <StyledButton onClick={() => submiteLogin()}>Login</StyledButton>
        <Link to="/register">
          <code> or create new account</code>
        </Link>
      </StyledWrapper>
    </LoginContainer>
  );
};
