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

    <Heading mt={4} variant="highlight.pink">Digital Strategy - Supporter Journey Mapping Bootcamp </Heading>
    <p><strong>Mon Oct 4th - Oct 26th Online</strong></p>
    <p> Digital Strategy: Supporter Journey Mapping Bootcamp  is a new training for people from non-profit organisations and grassroots groups to practically understand the fundamentals of digital strategy, develop skills in supporter journey mapping and implement automated supporter journeys on common toolsets.
Over four half-days in October, the program will coach participants to develop a basic digital strategy, design supporter journeys and implement these journeys on common tools. </p>
    <p>
         <Link href="https://www.eventbrite.com.au/e/digital-strategy-supporter-journey-mapping-bootcamp-tickets-166479004183"><Button variant="primary">Find out more</Button></Link>
    </p>
    <Heading mt={4} variant="highlight.orange"> Movement Tech Product Scoping Paper Briefing </Heading>
    <p><strong>Tue, 31 Aug 2021 12:00 PM </strong></p>
    <p>Find out more about our initial findings scoping movement-wide campaigning and organising product solutions. This research paper worked with eight progressive campaigning organisations to explore product solutions for campaign technology, organising technology and data solutions leading up to the Federal Election.</p>  
     <p>
         <Link href="https://www.eventbrite.com.au/e/progressive-tech-product-scoping-briefing-tickets-162385203515"><Button variant="primary">Register Now</Button></Link>
    </p>

    <p>More coming soon! Please note that these trainings are for the volunteers and staff of network members only. If there's a training that would help you, find out more about how your organisation can join <a href="https://progtech.net.au/join">here</a>. If you need our help to speak to your manager about why joining the Progressive Tech Network is a good idea, get in touch at <a href="mailto:hello@progtech.net.au">hello@progtech.net.au</a></p>
  </Flex>
);

const App = (props) => {
  return (
    <Flex flexWrap="wrap">
      <PageHeading heading="Upcoming Trainings and Events" />
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
