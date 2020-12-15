import styled from "styled-components";

export const Container = styled.footer`
  position: relative;
  padding-top: 140px;
`;

export const Background = styled.footer`
  background-color: #0C1A2B;
  padding: 120px 24px 30px;
  width: 100%;

  color: rgb(255, 255, 255);

  @media (min-width: 768px) {
    padding: 240px 48px 0;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const PrivacyWrapper = styled.p`
  margin: 12px 0px 8px;
  display: flex;
  flex-direction: row;

  > span {
    color: rgb(255, 255, 255);
    margin-right: 5px;
  }

  @media (min-width: 768px) {
    flex-direction: column;

    > span {
      margin: 30px 0 5px;
    }
  }

  > a { 
    color: rgb(130, 142, 153);
    opacity: 1;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0.16px;
    transition: opacity 200ms ease-in-out 0s;
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0 0;

  > h3 { 
    margin-bottom: 20px;
  }

  > ul {
    li {
      margin-bottom: 40px;
      a {
        color: rgb(130, 142, 153);
        opacity: 1;
      }
    }
  }

  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (min-width: 768px) {
    padding: 0;
    border: none;

    > h3 { 
      margin-bottom: 7px;
    }
  }
`;

export const Socials = styled.nav`
  width: 60%;
  display: flex;
  margin: 30px 0;

  @media (min-width: 768px) {
    margin: 0;
    width: 150px;
    flex-direction: column;
  }

  > h3 {
    display: none;

    @media (min-width: 768px) {
      display: block;
      margin-bottom: 7px;
    }
  }

  > ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
   
    @media (min-width: 768px) {
      flex-wrap: wrap;
      justify-content: flex-start;

      li {
        margin-right: 15px;
      }

    }
  }
`;

export const Copyright = styled.footer`
  width: 100%;
  padding: 15px 0px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 0;
  text-align: left;


  > a {
    font-size: 12px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0px;
    color: rgb(255, 255, 255);
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    margin-top: 40px;
    text-align: center;
    line-height: 18px;
    letter-spacing: 0px;
  }
`;

export const ContactsBanner = styled.article`
  position: absolute;
  top: 80px;
  left: 8px;
  right: 8px;
  display: flex;


  @media (min-width: 768px) {
    max-width: 1200px;
    height: 300px;
    margin: auto;
    top: 0;
    left: 10%;
    right: 10%;
  }
`;

export const Slogan = styled.article`
  color: #FFFFFF;
  padding: 16px;
  background-color: rgb(26, 125, 255);
  text-align: center;
  display: flex;
  align-items: center;

  > h3 {
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0px;
  }

  @media (min-width: 768px) {
    width: 50%; 
    
    > h3 {
      font-size: 48px;
      font-weight: 800;
      line-height: 56px;
      letter-spacing: 0.5px;
      text-align: center;
    }
  }
`;

export const ContactsWrapper = styled.article`
    width: 60%;
    background-color: rgb(14, 37, 64);
    display: flex;

    @media (min-width: 768px) {
      width: 50%;
      justify-content: center;
      align-items: center;
    }
`;

export const ContactsContent = styled.article`
  display: flex;
  flex-direction: column;
  padding: 16px;
  padding: 30px 20px;
  align-items: flex-start;
  justify-content: space-around;

  > h3 {
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0.16px;
  }

  a {
    color: rgb(130, 142, 153);
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0.16px;
  }

  @media (min-width: 768px) {
    width: fit-content;
    height: fit-content;
    padding: 16px;
    justify-content: center;

    > h3, a {
      font-size: 24px;
    }

    > h3 {
      margin-bottom: 20px;
    }
  }
`;