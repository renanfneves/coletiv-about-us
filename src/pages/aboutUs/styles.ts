import styled from "styled-components";

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  text-align: left;
  margin: 50px 24px 25px;

  @media (min-width: 768px) {
    font-size: 64px;
    margin: 120px 0;
    text-align: center;
  }
`;

export const ArticlesWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 60px auto;

  @media (min-width: 768px) {
    margin: 120px auto;
  }
`;

export const ParagraphWrapper = styled.div`
  p {
    margin-bottom: 30px;
  }
`;

export const ProgressBar = styled.div`
  position: absolute;
  top: 0px;
  left: 20px;
  width: 5px;
  height: 100%;

  background-color: rgb(240, 241, 242);
  overflow-y: scroll;

  @media (min-width: 768px) {
    left: calc((100% - 4px) / 2);
  }
`;

export const BlueProgress = styled.div`
  border-radius: 2px;
  background-color: rgb(26, 125, 255);
  min-height: 35%;
  width: 9px;
`;

interface BulletProps {
  filled?: boolean;
}

export const Bullet = styled.div<BulletProps>`
  position: absolute;
  top: calc(100% - 2px);
  left: 12px;
  width: 21px;
  height: 21px;
  border: 4px solid ${({ filled }) => filled ? '#1A7DFF' : '#F0F1F2'};
  transition: border-color 200ms linear 300ms;
  border-radius: 21px;
  background-color: rgb(255, 255, 255);

  @media (min-width: 768px) {
    left: calc((100% - 21px) / 2);
  }
`