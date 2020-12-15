import styled from "styled-components";
import Modal from 'react-modal';

export const Container = styled.div`
  width: 100%;
  background-color: transparent;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  margin: auto;
  max-width: 1200px;
  padding: 0 20px;
`;

export const LogoButton = styled.button`
  border: none;
  background: transparent;
  display: flex;
`;

export const WebNav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const MobileNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  justify-content: space-between;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const WebLink = styled.a`
    display: inline-block;
    padding: 7px 16px;
    font-size: 16px;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 0.16px;
    color: rgb(130, 142, 153);
    word-break: normal;
    text-decoration: none;
    cursor: pointer;
    transition: opacity 200ms ease-in-out 0s;
`;

export const TalkToUs = styled(WebLink)`
    display: inline-flex;
    border-radius: 2px;
    color: rgb(255, 255, 255);
    background-color: rgb(26, 125, 255);
    border: 2px solid rgb(26, 125, 255);
    text-transform: capitalize;
    transition: all 200ms ease-in-out 0s;
`;

export const BurgerIcon = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  transition: opacity 200ms ease-in-out 0s;
  display: flex;
  flex-direction: column;

  span {
    display: block;
    width: 22px;
    height: 2px;
    margin: 3px 1px;
    background-color: rgb(26, 125, 255);
    border-radius: 2px;
    padding: 1px;
    transition: transform 200ms ease-in-out 0s;
  }
`;

export const StyledModal = styled(Modal)`
  background: #FFFFFF;
  width: 100%;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 67px;
`;

export const CloseButton = styled.button`
  border: none;
  background: transparent;
  color: rgb(26, 125, 255);
  font-size: 20px;
  width: 20px;
  height: fit-content;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
`;

export const ModalLinks = styled.nav`
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const ModalLink = styled(WebLink)`
  margin-bottom: 15px;
`;

export const SubMenu = styled(ModalLink)`
  opacity: 0.6;
  margin-bottom: 10px;
`;

export const DropdownSubmenu = styled(WebLink)`
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 17px;
  padding: 0;
`;