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
    <p>We're coordinating a monthly <em>Tech Help Please!</em> peer-to-peer coaching day on the second Tuesday of every month. The next one is from 10am-4pm on Tuesday 10th August.</p>
    <p>Sign up now to get help from digital and tech coaches. If you have a tech or digital problem or project you need help with,<a href="https://airtable.com/shr7QJENmCKms2hBE">let us know here</a>! Problems or projects of any size are invited (e.g. help to set up website events in Google Analytics, fix a weird NationBuilder bug, review a digital strategy, analyse digital fundraising statistics), but sessions will run for a maximum of 2 hours.</p>
    <p>Coaching is open to all progressive organisations, not just network members.</p>

    <p>
         <Link href="https://airtable.com/shr7QJENmCKms2hBE"><Button variant="primary">Submit your tech help problem</Button></Link>
    </p>

    <Heading mt={4} variant="highlight.pink">Coaches for 10 August</Heading>
    <p><ul>
      <li><b>Aaron Takizad (National Coordinator of Digital Organising, Media and Entertainment Arts Alliance).</b> Aaron is responsible for developing strategies and implementing new technologies to meet the challenges of organising freelance and gig economy workers. He is also completing a B. Science (Computer Science) at UNSW. He can help with: automation, data analytics/data science, digital campaigning, digital organising, digital strategy, front and back end development, Google Analytics, WordPress.</li>
      <li><b>Bridger Rossiter (Board Member and Product Lead, Progressive Tech Network).</b> Bridger is leading the Progressive Tech Network's movement-wide product scoping project, looking at movement-wide campaigning, organising and data product solutions in the lead up to the Federal Election. He has previously worked for 6 years at GetUp's Digital Director and on Bernie Sanders' tech team. He can help with: NationBuilder, automation, digital strategy, front and back-end development.</li>
      <li><b>Corey McCann (Digital Director, Code Nation).</b> Corey has been working at Code Nation for 7 years building websites, data automations and webapps. He can help with website and coding questions (HTML, CSS, JavaScript, React.js, Next.js, Ruby, Rails) as well as general support for data management and automation requirements, or helping deploy existing open source tools that organisations might want to try (e.g. Metabase for data analytics, existing NationBuilder integrations etc).</li>
      <li><b>Fred Stark (Software Developer, Fingerprint for Success).</b> Former organiser - community and digital - now senior software developer outside the movement. Paying off activist guilt by helping wherever possible. He can help with: NationBuilder, automation, back and front end development, digital campaigning, digital organising, digital strategy, and data analytics/data science.</li>
      <li><b>Jack Alexander (Digital Strategy and Comms Organiser, Victorian Trades Hall Council).</b> Jack is a strategic content specialist and digital designer. Over the last few years they have worked with small businesses, not-for-profits, artists and startups in social media management, strategic consulting, website designs and builds, photography and audio editing. They can help with: digital communications, digital marketing, digital strategy.</li>
      <li><b>Georgia Kriz (Digital and Social Media Manager, Australian Council of Trade Unions).</b> Georgia has previously worked as a Senior Communications Officer for the Australian Manufacturing Workers' Union and as the NSW Field Director on the Australian Marriage Equality campaign. She can help with: digital campaigning, digital communications and digital organising.</li>
      <li><b>Glenn Todd (<a href="https://actionskills.co/">actionskills.co</a>).</b> Glenn has been building websites for businesses and community groups for over 20 years and is passionate about empowering people to use technology to solve important problems. Addtionally, Glenn has developed WordPress for over 9 years and has been delivering technical training for over 6 years. He can help with: digital strategy, WordPress, and Action Network.</li>
      <li><b>Luke Marshall (Digital Training and Growth Consultant, <a href="https://www.lukemarshall.net/">lukemarshall.net</a>).</b> 15 years of digital marketing, sales and tech. Interested in NFP and mental health. He can help with: automation, digital marketing, digital strategy, Google Analytics, NoCode/proof of concept.</li>
      </ul></p>

    <p>These will be monthly sessions, so if you can't make it this time don't worry! Let us know about your problem or project here:</p>
    <p>
         <Link href="https://airtable.com/shr7QJENmCKms2hBE"><Button variant="primary">Submit your tech help problem</Button></Link>
    </p>
    <p>Or <a href="mailto:hello@progtech.net.au">get in touch</a> if you'd like to volunteer as a coach.</p>
  </Flex>
);

const App = (props) => {
  return (
    <Flex flexWrap="wrap">
      <PageHeading heading="Tech Help Please Coaching Day" />
      <Box width={1} p={[4, 5]}>
        <Container maxWidth={1200}>
          <Description />
          <Box width={[1, 1 / 2]} flexWrap="wrap">
          <p>I can write something here</p>
          </Box>
        </Container>
      </Box>
    </Flex>
  );
};

export default App;
