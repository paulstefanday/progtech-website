import React from "react";
import { Box, Flex, Button, Image, Heading, Text, Link } from "rebass";
import { Input, Label, Textarea } from "@rebass/forms";
import Script from 'next/script';
// import Link from "next/link";
import PageHeading from "../components/PageHeading";
import Container from "../components/Container";
import Bg, { styles } from "../components/Bg";
import JoinNewsletter from "../components/JoinNewsletter";

const Description = () => (
  <Flex flexDirection="column" width={[1, 1 / 2]} pr={[0, 5]}>
    <p> <b> Tuesday, September 7th, 2021 from 10am - 4pm. </b> </p>
    <p> On the first Tuesday of every month we offer progressives free coaching sessions with digital and tech experts. </p>
    <p> Digital tech projects of any size are encouraged! Our coaches can help out with things like setting up Google Analytics website events, fixing NationBuilder bugs, advise on your digital strategy and digital fundraising program analysis. </p>
    <p> Pop in an application form and we will do our best to pair you with a suitable coach. </p>
    <p> <b> Got questions?</b> Shoot an email to Hunter Lee at lee@australianprogress.org.au  </p>
    <p> <b> Want to sign up as a coach?</b>  Fill in this form <a href="https://airtable.com/shrGlWp6wgz7qDeO2">here</a> </p>



    <Heading mt={4} variant="highlight.pink"> September coaches:</Heading>
    <p><ul>
      <li><b>Aaron Takizad (National Coordinator of Digital Organising, Media and Entertainment Arts Alliance).</b> Aaron is responsible for developing strategies and implementing new technologies to meet the challenges of organising freelance and gig economy workers. He is also completing a B. Science (Computer Science) at UNSW. He can help with: automation, data analytics/data science, digital campaigning, digital organising, digital strategy, front and back end development, Google Analytics, WordPress.</li>
      <li><b>Corey McCann (Digital Director, Code Nation).</b> Corey has been working at Code Nation for 7 years building websites, data automations and webapps. He can help with website and coding questions (HTML, CSS, JavaScript, React.js, Next.js, Ruby, Rails) as well as general support for data management and automation requirements, or helping deploy existing open source tools that organisations might want to try (e.g. Metabase for data analytics, existing NationBuilder integrations etc).</li>
      <li><b>Fred Stark (Software Developer, Fingerprint for Success).</b> Former organiser - community and digital - now senior software developer outside the movement. Paying off activist guilt by helping wherever possible. He can help with: NationBuilder, automation, back and front end development, digital campaigning, digital organising, digital strategy, and data analytics/data science.</li>
      <li><b>Georgia Kriz (Digital and Social Media Manager, Australian Council of Trade Unions).</b> Georgia has previously worked as a Senior Communications Officer for the Australian Manufacturing Workers' Union and as the NSW Field Director on the Australian Marriage Equality campaign. She can help with: digital campaigning, digital communications and digital organising.</li>
      <li><b>Glenn Todd (<a href="https://actionskills.co/">actionskills.co</a>).</b> Glenn has been building websites for businesses and community groups for over 20 years and is passionate about empowering people to use technology to solve important problems. Addtionally, Glenn has developed WordPress for over 9 years and has been delivering technical training for over 6 years. He can help with: digital strategy, WordPress, and Action Network.</li>
      <li><b>Luke Marshall (Digital Training and Growth Consultant, <a href="https://www.lukemarshall.net/">lukemarshall.net</a>).</b> 15 years of digital marketing, sales and tech. Interested in NFP and mental health. He can help with: automation, digital marketing, digital strategy, Google Analytics, NoCode/proof of concept.</li>
      </ul></p>

    <p>These will be monthly sessions, so if you can't make it this time don't worry! Let us know about your problem or project using the form on this page.</p>
  </Flex>
);

const App = (props) => {
  return (
    <Flex flexWrap="wrap">
      <PageHeading heading="Tech Help Please" />
      <Box width={1} p={[4, 5]}>
        <Container maxWidth={1200}>
          <Description />
          <Box width={[1, 1 / 2]} flexWrap="wrap">
            <Script
              src="https://static.airtable.com/js/embed/embed_snippet_v1.js"
              strategy="lazyOnload"
            />
            <iframe class="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shr7QJENmCKms2hBE?backgroundColor=blue" frameborder="0" onmousewheel="" width="100%" height="2584" style={{background: "transparent", border: "1px solid #ccc"}}></iframe>
          </Box>
        </Container>
      </Box>
    </Flex>
  );
};

export default App;
