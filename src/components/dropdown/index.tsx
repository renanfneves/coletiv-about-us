import React, { FC, useCallback, useState } from 'react';
import { DownArrow } from 'src/assets';

import { Container, Label, Content } from './styles';

interface Props {
  label: string;
  onClick: () => void;
}

const Dropdown: FC<Props> = ({ label, children, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = useCallback((open: boolean) => {
    setIsOpen(open);
  }, []);

  return (
    <Container
      onMouseOver={() => toggleDropdown(true)}
      onMouseLeave={() => toggleDropdown(false)}
      onClick={onClick}
    >
      <Label>{label}</Label>
      <DownArrow />
      {isOpen && <Content>{children}</Content>}
    </Container>
  );
}

export default Dropdown;