import styled from "styled-components";

interface Props {
  reverse?: boolean;
}

export const Container = styled.article<Props>`
  position: relative;
  display: flex;
  margin: 0;
  padding: 0 10% 60px 15%;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 60px 10px;
    justify-content: space-around;
    align-items: center;
    flex-direction: ${({ reverse }) => reverse ? 'row-reverse' : 'row'};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  border-radius: 10px;

  @media (min-width: 768px) {
    width: calc((100% - 100px) / 2);
    height: 368px;
    max-width: 500px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;

  @media (min-width: 768px) {
    width: calc((100% - 100px) / 2);
  }
`;

export const Subject = styled.h2`
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 1px;
  color: rgb(26, 125, 255);
  text-transform: uppercase;
  margin: 20px 0 10px;
`;

export const SubTitle = styled.h3`
  width: 100%;
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  color: rgb(10, 25, 43);
  margin-bottom: 25px;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 50px;
  }
`;