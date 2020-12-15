import React, { FC } from 'react';

import { Container, Image, Subject, SubTitle, Content } from './styles';

interface Props {
  image: string;
  alt: string;
  subject: string;
  subTitle: string;
  reverse?: boolean;
}

const Article: FC<Props> = ({ image, alt, subject, subTitle, children, reverse }) => (
  <Container reverse={reverse}>
    <Image src={image} alt={alt} />
    <Content>
      <Subject>{subject}</Subject>
      <SubTitle>{subTitle}</SubTitle>
      {children}
    </Content>
  </Container>
);

export default Article;