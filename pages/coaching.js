import React from "react";
import { Box, Flex, Button, Image, Heading, Text, Link } from "rebass";
import { Input, Label, Textarea } from "@rebass/forms";
// import Link from "next/link";
import PageHeading from "../components/PageHeading";
import Container from "../components/Container";
import Bg, { styles } from "../components/Bg";
import JoinNewsletter from "../components/JoinNewsletter";

const Description = () => (
  <Flex flexDirection="column" width={[1, 1 / 2]} pr={[0, 5]}>
    <p>The Progressive Tech Network is coordinating a monthly Tech Help Please coaching day on the second Tuesday of every month from 10am to 4pm. The upcoming dates are August 10th, September 7th and October 12th.</p>
    <p>If you have a tech or digital problem you need help with,<a href="https://airtable.com/embed/shr7QJENmCKms2hBE?backgroundColor=blue">let us know here</a> and you will be paired with a coach for a 1 to 2 hour session on Tuesday 10 August.</p>
    <p>Coaching is open to all progressive organisations, not just network members.</p>

    <Heading mt={4} variant="highlight.pink">Coaches for 10 August</Heading>
    <p><ul>
      <li><b>Aaron Takizad</b>, National Coordinator of Digital Organising, Media and Entertainment Arts Alliance. Aaron is responsible for developing strategies and implementing new technologies to meet the challenges of organising freelance and gig economy workers. He is also completing a B. Science (Computer Science) at UNSW. Can help with: automation, data analytics/data science, digital campaigning, digital organising, digital strategy, front and back end development, Google Analytics, WordPress.</li>
      <li><b>Bridger Rossiter</b>, board member, Progressive Tech Network. Bridger is on the board of the Progressive Tech Network and is leading the movement-wide product scoping project. He has previously worked for 6 years at GetUp's Digital Director and on Bernie Sanders' tech team. Can help with: NationBuilder, automation, digital strategy, front and back-end development.</li>
      <li><b>Corey McCann</b>, Digital Director, Code Nation. Corey has been working at Code Nation for 7 years building websites, data automations and webapps. He can help with website and coding questions (HTML, CSS, JavaScript, React.js, Next.js, Ruby, Rails) as well as general support for data management and automation requirements, or helping deploy existing open source tools that organisations might want to try (e.g. Metabase for data analytics, existing NationBuilder integrations etc).</li>
      <li><b>Fred Stark</b>, Software Developer, Fingerprint for Success. Former organiser - community and digital - now senior software developer outside the movement. Paying off my activist guilt by helping wherever possible. Can help with: NationBuilder, automation, back and front end development, digital campaigning, digital organising, digital strategy, and data analytics/data science.</li>
      <li><b>Jack Alexander</b>, Digital Strategy and Comms, Victorian Trades Hall Council. Jack is a strategic content specialist and digital designer. Over the last few years they have worked with small businesses, not-for-profits, artists and startups in social media management, strategic consulting, website designs and builds, photography and audio editing. Can help with: digital communications, digital marketing, digital strategy.</li>
      <li><b>Georgia Kriz</b>, Digital and Social Media Manager, Australian Council of Trade Unions. Georgia previously worked as a Senior Communications Officer for the Australian Manufacturing Workers' Union and as the NSW Field Director on the Australian Marriage Equality campaign. Can help with: digital campaigning, digital communications and digital organising.</li>
      <li><b>Glenn Todd</b>, <a href="https://actionskills.co/">actionskills.co</a>. Glenn has been building websites for businesses and community groups for over 20 years and is passionate about empowering people to use technology to solve important problems. Addtionally, Glenn has developed WordPress for over 9 years and has been delivering technical training for over 6 years.</li>
      <li><b>Luke Marshall</b>, Digital Training and Growth Consultant, <a href="https://www.lukemarshall.net/">lukemarshall.net</a>. 15 years of digital marketing, sales and tech. Interest in NFP and mental health. Can help with: automation, digital marketing, digital strategy, Google Analytics, NoCode/proof of concept.</li>
      </ul></p>

    <p>These will be monthly sessions, so if you can't make it this time don't worry! Let us know about your problem here:</p>
    <p>
         <Link href="https://airtable.com/embed/shr7QJENmCKms2hBE?backgroundColor=blue"><Button variant="primary">Submit your tech help problem</Button></Link>
    </p>
    <p>Or <a href="mailto:hello@progtech.net.au">get in touch</a> if you'd like to volunteer as a coach.</p>
  </Flex>
);

const App = (props) => {
  return (
    <Flex flexWrap="wrap">
      <PageHeading heading="Upcoming Coaching Days" />
      <Box width={1} p={[4, 5]}>
        <Container maxWidth={1200}>
          <Description />
          <Box width={[1, 1 / 2]} flexWrap="wrap">
          
          </Box>
        </Container>
      </Box>
    </Flex>
  );
};

export default App;
