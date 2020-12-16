import React, { FC } from 'react';

import { Container, Title, SubTitle, Text, ContactButton } from './styles';

const contactUs: FC = () => {
  return (
    <Container>
      <Title>CONTACT US</Title>
      <SubTitle>From humble beginnings</SubTitle>
      <Text>We know the challenges of creating a business. Want us to help create yours?</Text>
      <ContactButton href="https://coletiv.com/contact">Get In Touch</ContactButton>
    </Container>
  );
}

export default contactUs;