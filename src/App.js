import "./index.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/login/login";
import { Register } from "./components/register/register";
import { SelectedUser } from "./components/selecteduser/selectedUser";
import { Home } from "./pages/home";
import { Chat } from "./components/websocket/chat";
import { News } from "./components/news/news";
import { CurrentPost } from "./components/currentPosts/currentPosts";
import { UserInfo } from "./components/userInfo/userInfo";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/home/chat/:id" element={<Chat />} />
          <Route path="/home/news" element={<News />} />
          <Route path="/home/news/:id" element={<CurrentPost />} />
          <Route path="/home/profile/:id" element={<UserInfo />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/:id" element={<SelectedUser />} />
      </Routes>
    </>
  );
};
