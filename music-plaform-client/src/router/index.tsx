//导入常量
import {
  ROOT,
  HOME,
  SINGERS,
  SONGLIST,
  SONGLISTDETAIL,
  LOGIN,
  SINGER,
  SEARCH,
  PROFILE,
  CHANGEINFO,
  SIGNUP,
} from "@/constants/router";
import Singers from "@/views/Singers";
import Songlist from "@/views/Songlist";
import SongListDetail from "@/views/SongListDetail";
import Singer from "@/views/Singer";
import Login from "@/views/Login";
import Search from "@/views/Search";
import Profile from "@/views/Profile";
import ChangeInfor from "@/views/ChangeInfo";
import Home from "@/views/Home";
import { lazy } from "react";
import { Navigate } from "react-router-dom";
import SignupForm from "@/views/Signup";

export const router = [
  {
    path: ROOT,
    element: <Navigate to={HOME}></Navigate>,
  },
  {
    path: HOME,
    element: <Home />,
  },
  {
    path: SINGERS,
    element: <Singers></Singers>,
  },
  {
    path: `${SONGLIST}`,
    element: <Songlist></Songlist>,
  },
  {
    path: `${SONGLISTDETAIL}/:id`,
    element: <SongListDetail></SongListDetail>,
  },
  {
    path: LOGIN,
    element: <Login></Login>,
  },
  {
    path: `${SINGER}/:id`,
    element: <Singer></Singer>,
  },
  {
    path: `${SEARCH}`,
    element: <Search></Search>,
  },
  {
    path: PROFILE,
    element: <Profile></Profile>,
  },
  {
    path: CHANGEINFO,
    element: <ChangeInfor></ChangeInfor>,
  },
  {
    path: SIGNUP,
    element: <SignupForm></SignupForm>,
  },
];
