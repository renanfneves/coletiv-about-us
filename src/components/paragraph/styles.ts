import styled, { css } from "styled-components";

interface Props {
  italic?: boolean;
}

export const Container = styled.p<Props>`
  ${({ italic }) => italic && css`
    font-style: italic;
    color: rgb(130, 142, 153);
  `};

  ${({ italic }) => !italic && css`
    color: rgb(10, 25, 43);
  `};

  font-weight: 600;
  letter-spacing: 0.16px;

  @media (min-width: 768px) {
    font-size: 16px;
    font-weight: 600;
    line-height: 26px;
  }
`;