import React, { FC } from 'react';

import { Container } from './styles';

interface Props {
  italic?: boolean;
}

const Paragraph: FC<Props> = ({ italic, children }) => {
  return <Container italic={italic}>{children}</Container>;
}

export default Paragraph;