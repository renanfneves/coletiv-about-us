import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 7px 16px;
`;

export const Label = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  margin-right: 5px;
  letter-spacing: 0.16px;
  color: #0A192B;
  word-break: normal;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 200ms ease-in-out 0s;
`;

export const Content = styled.div`
  position: absolute;
  top: 40px;
  left: 50px;

  transform: translateX(-50%);
  padding: 24px;
  z-index: 999;
  width: 211px;
  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.06) 4px 20px 68px, rgba(0, 0, 0, 0.08) 0px 10px 34px;
  border-radius: 2px;
`;