import React, { FC } from 'react';
import { CompleteLogo, Dribbble, Facebook, Instagram, LinkedIn, Twitter } from 'src/assets';

import { Container, Background, Main, PrivacyWrapper, FooterNav, Socials, Copyright, ContactsBanner, Slogan, ContactsWrapper, ContactsContent } from './styles';

const footer: FC = () => {
  return (
    <Container>
      <ContactsBanner>
        <Slogan>
          <h3>Your full-service digital agency</h3>
        </Slogan>
        <ContactsWrapper>
          <ContactsContent>
            <h3>Contacts</h3>
            <a target="_self" href="mailto:humans@coletiv.com" rel="noopener noreferrer">humans@coletiv.com</a>
            <a target="_self" href="tel:+351914541645" rel="noopener noreferrer">+351 914 541 645</a>
          </ContactsContent>
        </ContactsWrapper>
      </ContactsBanner>
      <Background>
        <Main>
          <div>
            <a href="https://coletiv.com/">
              <CompleteLogo />
            </a>
            <PrivacyWrapper>
              <span>@ 2020 Coletiv</span>
              <a href="https://coletiv.com/legal">{"Privacy & Policy"}</a>
            </PrivacyWrapper>
          </div>
          <FooterNav>
            <h3>Company</h3>
            <ul>
              <li><a href="https://coletiv.com/showcase/">Showcase</a></li>
              <li><a href="https://coletiv.com/services/">Services</a></li>
              <li><a href="https://coletiv.com/blog/">Blog</a></li>
              <li><a href="/">About Us</a></li>
            </ul>
          </FooterNav>
          <FooterNav>
          <h3>Contacts</h3>
          <ul>
            <li>
              <a 
                target="_self"
                href="mailto:humans@coletiv.com"
                rel="noopener noreferrer">
                  Email humans@coletiv.com
              </a>
            </li>
            <li>
              <a target="_self"
              href="tel:+351914541645"
              rel="noopener noreferrer"
              >
                Phone +351 914 541 645
              </a>
            </li>
          </ul>
          </FooterNav>
          <Socials>
          <h3>Social</h3>
          <ul>
            <li>
              <a
                href="//linkedin.com/company/coletiv"
                title="See Coletiv on LinkedIn"
                target="_blank" rel="noopener noreferrer"
              >
                <LinkedIn />
              </a>
            </li>

            <li>
              <a
                href="//twitter.com/coletivstudio"
                title="See Coletiv on Twitter"
                target="_blank" rel="noopener noreferrer"
              >
                <Twitter />
              </a>
            </li>

            <li>
              <a
                href="//facebook.com/wearecoletiv"
                title="See Coletiv on Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
            </li>

            <li>
              <a
                href="//instagram.com/coletiv"
                title="See Coletiv on Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
            </li>

            <li>
              <a
                href="//dribbble.com/Coletiv"
                title="See Coletiv on Dribbble"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Dribbble />
              </a>
            </li>
          </ul>
        </Socials>
        </Main>
        <Copyright>
          <a href="https://coletiv.com//legal">
            Copyright © Coletiv Studio, Lda. 2020 All rights reserved. 
            If you are bored and want to read some legal bits, see our legal page.
          </a>
        </Copyright>
      </Background>
    </Container>
  );
}

export default footer;