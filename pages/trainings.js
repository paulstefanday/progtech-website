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
    <Heading variant="highlight.pink">Data automations with Zapier & custom webhooks</Heading>
    <p><strong>Session 1: Getting started with Zapier, Thursday 22 October 11am - 12.30pm</strong></p>
    <p><strong>Session 2: Zapier automations using webhooks and custom API requests, Thursday 29 October 11am - 12.30pm</strong></p>
    <p>Many organisations are using out-of-the-box tools that don't integrate well. It's frustrating working with siloed data and having to repeat processes that could be automated. This training course will run over 2 sessions. The first session is an intro to using Zapier to connect commonly-used platforms, and the second session will teach you how to use webhooks and custom API requests in Zapier for custom integrations.</p>
    <p><Link href="https://progtech.typeform.com/to/dYZWQJEJ#source=progtech-website" target="_blank" variant="buttons.primary">RSVP Here</Link></p>
    <Heading mt={4} variant="highlight.pink">Intro to data science</Heading>
    <p><strong>Wednesday 4 November, 5-6pm</strong></p>
    <p>Everyone is excited about data science but a lot of orgs aren’t in a position to take advantage of it. This session will introduce data science concepts for campaigning, and start a convo about the kinds of data science projects we might like to work on collectively.</p>
    <p><Link href="https://progtech.typeform.com/to/WPzYDrtD#source=progtech-website" target="_blank" variant="buttons.primary">RSVP Here</Link></p>
    <p>More coming soon! Please note that these trainings are for the volunteers and staff of network members only. If there's a training that would help you, find out more about how your organisation can join <a href="https://progtech.net.au/join">here</a>. If you need our help to speak to your manager about why joining the Progressive Tech Network is a good idea, get in touch at <a href="mailto:hello@progtech.net.au">hello@progtech.net.au</a></p>
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
