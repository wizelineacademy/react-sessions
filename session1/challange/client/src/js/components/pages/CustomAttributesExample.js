import React from 'react';
import Container from '../presentational/Container';
import styled from 'styled-components';

const InlineStyles = {
  lineHeight: 1.3,
  marginBottom: '15px',
};

const Paragraph = ({ position, children }) => (
  <p paragraph-position={position} style={InlineStyles} >
    {children}
  </p>
);

const FirstParagraph = ({ position }) => (
  <Paragraph position="First" >
    Network effects infrastructure hackathon stock focus mass market bootstrapping business model canvas crowdsource vesting period equity. Facebook crowdfunding branding ecosystem venture assets learning curve value proposition rockstar. Innovator customer partnership. Paradigm shift gen-z vesting period series A financing first mover advantage iteration buzz business-to-business conversion angel investor crowdsource. Business plan success stock. Android series A financing branding virality interaction design burn rate gamification leverage. Pitch paradigm shift android low hanging fruit early adopters disruptive partnership burn rate non-disclosure agreement buyer. Infographic value proposition lean startup burn rate equity pivot series A financing monetization branding responsive web design angel investor assets business model canvas. Release value proposition interaction design learning curve iPhone startup gamification metrics. Startup lean startup investor supply chain technology.
  </Paragraph>
);

const SecondParagraph = ({ position }) => (
  <Paragraph position="Second" >
    Graphical user interface advisor channels social media responsive web design holy grail learning curve crowdsource series A financing network effects ownership partnership metrics. Non-disclosure agreement hackathon pivot incubator infographic value proposition return on investment bootstrapping research & development growth hacking. Buzz advisor pitch termsheet graphical user interface lean startup. Bandwidth holy grail ramen. Partnership funding return on investment bootstrapping innovator technology seed round focus research & development analytics buzz product management. Direct mailing research & development MVP business plan early adopters crowdfunding A/B testing. User experience twitter entrepreneur facebook founders technology startup iPad investor. Long tail learning curve buyer A/B testing MVP bootstrapping agile development churn rate direct mailing success value proposition assets business plan. Customer seed round client market buyer mass market freemium prototype business plan disruptive. Backing freemium funding social media startup.
  </Paragraph>
);

const CustomAttributesExample = () => (
  <Container title="Fragments">
    <FirstParagraph />
    <SecondParagraph />
  </Container>
);

export default CustomAttributesExample;
