import React, { useCallback, useEffect, useState } from "react";

import { LoginContainer, StyledWrapper } from "../login/style";
import { StyledInputBox } from "../login/style";
import { StyledButton } from "../login/style";
import { setError } from "../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Login } from "../login/login";
import { setAuth } from "../../redux/user/userSlice";
import { responseHandler } from "../../utils/utils";

export const Register = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.authError);
  const [regData, setRegData] = useState({});
  const navigate = useNavigate();
  const HandleChange = (elem) => {
    setRegData({ ...regData, [`${elem.target.id}`]: elem.target.value });
  };

  const submiteReg = useCallback(() => {
    responseHandler("signup", regData, dispatch, setAuth, setError)
      .then((res) => {
        if (res.payload.token) {
          localStorage.setItem("token", res.payload.token);
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  }, [regData, error]);

  return (
    <LoginContainer>
      <StyledWrapper>
        <StyledInputBox>
          <h1>Register</h1>
          <input placeholder={"Email"} onChange={HandleChange} id={"email"} />
          <input
            placeholder={"Password"}
            onChange={HandleChange}
            id={"password"}
          />
          <input placeholder={"Name"} onChange={HandleChange} id={"name"} />
          <StyledButton onClick={submiteReg}>Register</StyledButton>
        </StyledInputBox>
        <Link to="/login" element={<Login />}>
          <code>Alredy have account?</code>
        </Link>
      </StyledWrapper>
    </LoginContainer>
  );
};
