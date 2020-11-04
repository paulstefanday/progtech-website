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
    <p>We're building skilled tech capacity for organisations across the progressive movement. RSVP here for upcoming trainings, including: </p>
        <Heading mt={4} variant="highlight.pink">Intro to data science</Heading>
    <p><strong>Wednesday 4 November, 5-6pm AEDT</strong></p>
    <p>Everyone is excited about data science but a lot of orgs aren’t in a position to take advantage of it. This session will introduce data science concepts for campaigning, and start a convo about the kinds of data science projects we might like to work on collectively.</p>
    <p><Link href="https://progtech.typeform.com/to/WPzYDrtD#source=progtech-website" target="_blank" variant="buttons.primary">RSVP Here</Link></p>
    <Heading mt={4} variant="highlight.pink">Excel for organisers skillshare - run by Tipping Point</Heading>
    <p><strong>Tuesday 1 December, 12.30-1.30pm AEDT</strong></p>
    <p>This is a spreadsheet workshop for organisers that will cover intermediate tips/tricks and shortcuts for Excel and Google Sheets.

This workshop is for you if you know how to SUM a column but want to learn some practical tips to take your skills to the next level. We'll be covering using filters, VLOOKUP, data validation, conditional formatting and more. This workshop is open to the public.</p>
    <p><Link href="https://progtech.typeform.com/to/jYw4AhYQ" target="_blank" variant="buttons.primary">RSVP Here</Link></p>

    <p>More coming soon! Please note that these trainings are for the volunteers and staff of network members only - except for Excel for Organisers. If there's a training that would help you, find out more about how your organisation can join <a href="https://progtech.net.au/join">here</a>. If you need our help to speak to your manager about why joining the Progressive Tech Network is a good idea, get in touch at <a href="mailto:hello@progtech.net.au">hello@progtech.net.au</a></p>
  </Flex>
);

const App = (props) => {
  return (
    <Flex flexWrap="wrap">
      <PageHeading heading="Trainings" />
      <Box width={1} p={[4, 5]}>
        <Container maxWidth={1200}>
          <Description />
          <Box width={[1, 1 / 2]} flexWrap="wrap">
            <Image height="auto" src="/images/2.jpg" />
          </Box>
        </Container>
      </Box>
    </Flex>
  );
};

export default App;
