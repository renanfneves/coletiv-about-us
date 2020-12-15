import React, { FC } from 'react';

import { 
  Header,
  Article,
  Paragraph,
  ContactUs,
  Footer,
} from '../../components';

import { 
  FutureImg,
  GrowthImg,
  OfficeImg,
  PastImg,
  PresentTeamImg,
  TeamImg
} from '../../assets';

import {
  Title,
  ArticlesWrapper,
  ParagraphWrapper,
  ProgressBar,
  BlueProgress,
  Bullet
} from './styles';

const AboutUs: FC = () => {
  return (
    <>
      <Header />
      <Title>Our Story</Title>
      <ArticlesWrapper>
        <Bullet style={{ top: -18 }} filled />
        <ProgressBar>
          <BlueProgress />
        </ProgressBar>
        <Article 
          image={PastImg}
          alt="THE PAST"
          subject="THE PAST"
          subTitle="How it Began"
        >
            <Bullet filled />
            <ParagraphWrapper>
              <Paragraph>
                In 2016 Coletiv Studio was born. 
                A Software Company with an ambitious vision and no more than four members.
              </Paragraph>
              <Paragraph>
                Coletiv wanted to help companies of all shapes, sizes, and colors, 
                to launch digital products that people would use and love. 
                At that time we knew we had to address many challenges, 
                ranging from UX/UI to Software Development and Cybersecurity.
              </Paragraph>
              <Paragraph italic>
                Seems impossible right?
              </Paragraph>
            </ParagraphWrapper>
        </Article>
        
        <Article 
          image={GrowthImg}
          alt="GROWTH"
          subject="GROWTH"
          subTitle="Small Steps"
          reverse
        >
          <Bullet filled />
          <ParagraphWrapper>
            <Paragraph>
              During the next months, we invited more like minded, 
              talented friends to join our small team. 
              A small team, but strong enough to master any project you might have at hands.
            </Paragraph>
            <Paragraph>
              Coletiv team and its partners started helping companies from several nationalities 
              including Switzerland, Hong Kong, Spain, and the United Kingdom.
            </Paragraph>
            <Paragraph italic>
              There was still a long road ahead...
            </Paragraph>
          </ParagraphWrapper>
        </Article>

        <Article 
          image={TeamImg}
          alt="THE TEAM"
          subject="THE TEAM"
          subTitle="Making Friends"
        >
          <Bullet />
          <ParagraphWrapper>
            <Paragraph>
              Working together in a cozy and peaceful environment, naturally, 
              party members became close friends.
            </Paragraph>
            <Paragraph>
              Coletiv values friendship and collaboration among the teams, 
              since brainstorming, sharing feedback and project planning are part of the everyday life.
            </Paragraph>
            <Paragraph italic>
              Team gatherings are essential to evaluate the positives and negatives of our daily challenges!
            </Paragraph>
          </ParagraphWrapper>
        </Article>

        <Article 
          image={OfficeImg}
          alt="THE OFFICE"
          subject="THE OFFICE"
          subTitle="Building a Home"
          reverse
        >
          <Bullet />
          <ParagraphWrapper>
            <Paragraph>
              Every week, we sit down and work together to build stunning high-quality applications. 
              We gather at our office in the heart of Porto, packed with a hand-picked library, 
              large working desks and fresh snacks!
            </Paragraph>
            <Paragraph>
              Since every hit needs planning, every now and then, 
              Coletiv works face-to-face with local and international clients on their offices.
            </Paragraph>
            <Paragraph italic>
              If you’d like to chat, you can stop by our office or we can drop by yours.
            </Paragraph>
          </ParagraphWrapper>
        </Article>

        <Article 
          image={PresentTeamImg}
          alt="THE PRESENT"
          subject="THE PRESENT"
          subTitle="Making it Happen"
        >
          <Bullet />
          <ParagraphWrapper>
            <Paragraph>
              Throughout all these years we have grown bigger and more experienced. 
              We have matured our processes as well as our technology stack. 
              We learned a lot from our past projects as well as from our clients, who became friends as well!
            </Paragraph>
            <Paragraph>
              One thing we learned is that there is no challenge that can't be solved with enough time, 
              patience and knowledge.
            </Paragraph>
            <Paragraph italic>
              Don't believe in us? Let's have a chat...
            </Paragraph>
          </ParagraphWrapper>
        </Article>
        
        <Article 
          image={FutureImg}
          alt="THE FUTURE"
          subject="THE FUTURE"
          subTitle="Getting Better"
          reverse
        >
          <Bullet />
          <ParagraphWrapper>
            <Paragraph>
              The best definition as to why Coletiv exists comes from Shoe Dogg by Phill Knight, 
              creator of Nike:
            </Paragraph>
            <Paragraph>
              “Every runner knows this. You run and run, mile after mile, and never quite know why. 
              You tell yourself that you are running toward some goal, chasing some rush, 
              but really you run because the alternative, stopping, scares you to death. 
              (…) Let everyone call your idea crazy… just keep going. Don’t stop.”
            </Paragraph>
            <Paragraph>
              We couldn’t frame it better. We do not know where we are heading, 
              but we know how we want to get there: with quality, 
              with honesty and with this sense that we can become better individuals every single day!
            </Paragraph>
          </ParagraphWrapper>
        </Article>
        <Bullet style={{ bottom: 0 }} />
      </ArticlesWrapper>
      <ContactUs />
      <Footer />
    </>
  );
}

export default AboutUs;