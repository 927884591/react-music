import styled, { keyframes } from "styled-components";

const heartButton = keyframes`
  0% {
  transform: scale(1);
 }

 25% {
  transform: scale(1.3);
 }

 50% {
  transform: scale(1);
 }

 75% {
  transform: scale(1.3);
 }

 100% {
  transform: scale(1);
 }
`;
const Style = styled.div`
  //喜欢按钮的样式
  label {
    position: relative;
    top: 5px;
    display: inline;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    border-radius: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    color: white;
  }

  input {
    display: none;
  }

  input:checked + label svg {
    fill: hsl(0deg 100% 50%);
    stroke: hsl(0deg 100% 50%);
    animation: ${heartButton} 1s;
  }
  input + label .action {
    position: relative;
    overflow: hidden;
    display: grid;
  }

  input + label .action span {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 1;
    transition: all 0.5s;
  }

  input + label .action span.option-1 {
    transform: translate(0px, 0%);
    opacity: 1;
  }

  input:checked + label .action span.option-1 {
    transform: translate(0px, -100%);
    opacity: 0;
  }

  input + label .action span.option-2 {
    transform: translate(0px, 100%);
    opacity: 0;
  }

  input:checked + label .action span.option-2 {
    transform: translate(0px, 0%);
    opacity: 1;
  }
`;
export default Style;
