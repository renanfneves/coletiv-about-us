import styled from "styled-components";

export const Container = styled.article`
  padding: 0 24px;

  @media (min-width: 768px) {
    margin: auto;
    max-width: 500px;
    display: flex;
    flex-wrap: wrap;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    text-align: center;
    padding-bottom: 100px;
  }
`;

export const Title = styled.h4`
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.86px;
  color: rgb(130, 142, 153);
  text-transform: uppercase;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 1px;
  }
`;

export const SubTitle = styled.h3`
    font-size: 28px;
    line-height: 38px;
    letter-spacing: 0.5px;
    color: rgb(10, 25, 43);
    margin-bottom: 25px;
    font-weight: 700;

    @media (min-width: 768px) {
      font-size: 48px;
      line-height: 56px;
    }
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.12px;

  font-weight: 500;
  color: rgb(130, 142, 153);
  margin-bottom: 25px;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.16px;
  }
`;

export const ContactButton = styled.a`
    display: inline-flex;
    padding: 7px 16px;
    border-radius: 2px;
    color: rgb(255, 255, 255);
    background-color: rgb(26, 125, 255);
    border: 2px solid rgb(26, 125, 255);
    text-transform: capitalize;
    transition: all 200ms ease-in-out 0s;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0.16px;
    word-break: normal;
    text-decoration: none;
    cursor: pointer;

    @media (min-width: 768px) {
      display: inline-block;
  
  }
`;