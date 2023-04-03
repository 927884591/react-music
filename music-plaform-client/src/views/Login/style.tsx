import styled, { keyframes } from "styled-components";
const sphereAnimation = keyframes`
  0% {
    width: 10%;
  }
  100% {
    width: 90%;
    transform: translate(-30%, 5%);
  }
`;
const peopleAnimation = keyframes`
  0% {
    width: 40%;
  }
  100% {
    width: 70%;
    transform: translate(90%, -10%);
  }
`;
const pOtherAnimation = keyframes`
    0% {
    transform: translate(90%, -10%);
  }
  100% {
    transform: translate(90%, -15%);
  }`;
const sOtherAnimation = keyframes`
    0% {
    transform: translate(-30%, 5%);
  }
  100% {
    transform: translate(-30%, 10%);
  }
  `;
const style = styled.div`
  .content {
    width: 90vw;
    height: 82vh;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.18);
    display: flex;
  }
  .content .left {
    flex: 1;
    position: relative;
  }
  .content .left .sphere {
    position: absolute;
    left: 30%;
    width: 90%;
    z-index: 1;
    animation: ${sphereAnimation} 2s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
  }
  .content .left .people {
    position: absolute;
    left: -50%;
    top: 20%;
    width: 70%;
    z-index: 2;
  }
  .content .left .p-animtion {
    animation: ${peopleAnimation} 2s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
  }
  .content .left .p-other-animtion {
    animation-name: ${pOtherAnimation};
    animation-direction: alternate;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: 3s;
  }
  .content .left .s-animtion {
    animation: ${sphereAnimation} 2s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
  }
  .content .left .s-other-animtion {
    animation-name: ${sOtherAnimation};
    animation-direction: alternate;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: 3s;
  }
  .content .right {
    flex: 1;
    position: relative;
    z-index: 12;
  }
  .content .right .top {
    width: 80%;
    margin-left: 38px;
    color: rgb(51, 52, 124);
    font-size: 20px;
    font-weight: 600;
    font-family: "Century Gothic", Times, serif;
    position: absolute;
    left: 50%;
    top: 5%;
    transform: translate(-50%, 0);
  }
  .content .right .top .top-item {
    float: left;
    width: 150px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin-right: 10px;
    transition: 0.5s;
  }
  .content .right .top .top-item:hover {
    border: 0;
    background-color: #fff;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: -20px 10px 32px 1px rgba(182, 183, 185, 0.37);
  }
  .content .right .form-wrappepr {
    width: 60%;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    text-align: right;
  }
  .content .right .form-wrappepr h1 {
    float: left;
    font-family: "Century Gothic", Times, serif;
    margin: 30px 0;
  }
  .content .right .form-wrappepr .inputs {
    display: block;
    width: 100%;
    height: 70px;
    margin: 30px 0;
    border-radius: 10px;
    border: 0;
    background-color: rgb(210, 223, 237);
    color: rgb(80, 82, 84);
    font-family: "Century Gothic", Times, serif;
    outline: none;
    padding: 20px;
    box-sizing: border-box;
    font-size: 20px;
  }
  .content .right .form-wrappepr .tips {
    display: block;
    margin-top: -15px;
    color: rgb(160, 170, 182);
    cursor: pointer;
  }
  .content .right .form-wrappepr button {
    width: 100%;
    height: 50px;
    background-color: rgb(68, 96, 241);
    border-radius: 10px;
    font-size: 15px;
    color: #fff;
    border: 0;
    font-weight: 600;
    margin: 30px 0;
    cursor: pointer;
    box-shadow: -20px 28px 42px 0 rgba(62, 145, 255, 0.37);
    font-family: "Century Gothic", Times, serif;
  }
  .content .right .form-wrappepr .other-login .divider {
    width: 100%;
    margin: 20px 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .content .right .form-wrappepr .other-login .divider .line {
    display: inline-block;
    max-width: 35%;
    width: 35%;
    flex: 1;
    height: 1px;
    background-color: rgb(162, 172, 185);
  }
  .content .right .form-wrappepr .other-login .divider .divider-text {
    vertical-align: middle;
    margin: 0px 20px;
    display: inline-block;
    width: 150px;
    color: rgb(162, 172, 185);
    white-space: normal;
  }
  .content .right .form-wrappepr .other-login .other-login-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content
    .right
    .form-wrappepr
    .other-login
    .other-login-wrapper
    .other-login-item {
    width: 70px;
    padding: 10px;
    text-align: center;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    color: rgb(51, 49, 116);
    margin: 0 10px;
    transition: 0.4s;
  }
  .content
    .right
    .form-wrappepr
    .other-login
    .other-login-wrapper
    .other-login-item
    img {
    width: 40px;
    height: 40px;
    vertical-align: middle;
  }
  .content
    .right
    .form-wrappepr
    .other-login
    .other-login-wrapper
    .other-login-item
    span {
    vertical-align: middle;
  }
  .content
    .right
    .form-wrappepr
    .other-login
    .other-login-wrapper
    .other-login-item:hover {
    width: 80px;
    height: 50%;
    background-color: #fff;
    border: 0;
    box-shadow: -20px 10px 32px 1px rgba(182, 183, 185, 0.37);
  }
`;
export default style;
