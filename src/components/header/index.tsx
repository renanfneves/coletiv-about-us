import React, { FC, useCallback, useState } from 'react';

import {
  Container,
  LogoButton,
  WebNav,
  MobileNav,
  WebLink,
  TalkToUs,
  BurgerIcon,
  StyledModal,
  ModalHeader,
  CloseButton,
  ModalLinks,
  SubMenu,
  ModalLink,
  DropdownSubmenu,
} from './styles';

import { Logo } from '../../assets';
import Dropdown from '../dropdown';

const Header: FC = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);


  return (
    <Container>
      <StyledModal isOpen={modalIsOpen} ariaHideApp={false}>
        <ModalHeader>
          <LogoButton onClick={() => { window.location.href = "https://coletiv.com/"}}>
            <Logo />
          </LogoButton>
          <CloseButton onClick={closeModal}>X</CloseButton>
        </ModalHeader>
        <ModalLinks>
          <ModalLink href="https://coletiv.com/showcase/">Showcase</ModalLink>
          <ModalLink href="https://coletiv.com/showcase/">Services</ModalLink>
          <SubMenu href="https://coletiv.com/services/ux-ui-design/">UX/UI Design</SubMenu>
          <SubMenu href="https://coletiv.com/services/web-development/">Web Development</SubMenu>
          <SubMenu href="https://coletiv.com/services/android-app-development/">Android Development</SubMenu>
          <SubMenu href="https://coletiv.com/services/ios-app-development/">iOS Development</SubMenu>
          <SubMenu href="https://coletiv.com/services/flutter-development">Flutter Development</SubMenu>
          <SubMenu href="https://coletiv.com/services/elixir-backend/">Backend Development</SubMenu>
          <ModalLink href="https://coletiv.com/blog/">Blog</ModalLink>
          <ModalLink href="/" style={{ fontWeight: 700, color: 'black' }}>About Us</ModalLink>
        </ ModalLinks>
      </StyledModal>
      <LogoButton onClick={() => { window.location.href = "https://coletiv.com/"}}>
        <Logo />
      </LogoButton>
      <WebNav>
        <WebLink href="https://coletiv.com/showcase/">Showcase</WebLink>
        <Dropdown 
          label="Services"
          onClick={() => { window.location.href = "https://coletiv.com/services/"}}
        >
          <nav>
            <DropdownSubmenu href="https://coletiv.com/services/ux-ui-design/">UX/UI Design</DropdownSubmenu>
            <DropdownSubmenu href="https://coletiv.com/services/web-development/">Web Development</DropdownSubmenu>
            <DropdownSubmenu href="https://coletiv.com/services/android-app-development/">Android Development</DropdownSubmenu>
            <DropdownSubmenu href="https://coletiv.com/services/ios-app-development/">iOS Development</DropdownSubmenu>
            <DropdownSubmenu href="https://coletiv.com/services/flutter-development">Flutter Development</DropdownSubmenu>
            <DropdownSubmenu href="https://coletiv.com/services/elixir-backend/">Backend Development</DropdownSubmenu>
          </nav>
        </Dropdown>
        <WebLink href="https://coletiv.com/blog/">Blog</WebLink>
        <WebLink href="/" style={{ fontWeight: 700, color: 'black' }}>About Us</WebLink>
        <TalkToUs href="https://coletiv.com/contact">Talk To Us</TalkToUs>
      </WebNav>
      <MobileNav>
        <TalkToUs href="https://coletiv.com/contact">Talk To Us</TalkToUs>
        <BurgerIcon onClick={openModal}>
          <span />
          <span />
          <span />
        </BurgerIcon>
      </MobileNav>
    </Container>
  );
};

export default Header;