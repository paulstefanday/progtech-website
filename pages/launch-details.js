/* eslint no-unused-vars: 0 */
import React, { useState } from "react";
import { Flex, Heading, Button, Box, Text, Link, Image } from "rebass";
import Head from "next/head";

import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
// import Link from "next/link";
import Bg, { styles } from "../components/Bg";

const Details = () => (
  <>
    <Box sx={styles} width={[1, 1 / 3]}>
      <Bg url="/images/generic-4.jpg" opacity="1" />
    </Box>
    <Box p={[4, 5]} width={[1, 2 / 3]} textAlign="center" bg="test2">
      <Container justifyContent="center">
        <Heading variant="highlight.purple">Event Details</Heading>
        <Text variant="p">
          We'll be hearing from Edie Shepherd (ProgTech, Original Power) on the
          tech support BIPOC activists need, Josh Nussbaum (Movement Cooperative
          US) on what US organisations have achieved through teaming up on tech,
          and the key learnings from the biggest consultation on where
          progressive tech is at in Australia.
        </Text>
        <Text variant="p">
          Join us at Thursday, Aug 27th at 11am AEST / 10.30 ACST / 9 AWST!
        </Text>
        <Text variant="p" width={1}>
          <Link
            target="_blank"
            href="https://progtech.typeform.com/to/ZAU0MgR5"
          >
            <Button variant="primary">Count me in</Button>
          </Link>
        </Text>
      </Container>
    </Box>
  </>
);

const Josh = () => (
  <>
    <Box sx={styles} width={[1, 1 / 3]}>
      <Bg url="/images/2.jpg" opacity="1" />
    </Box>
    <Box p={[4, 5]} width={[1, 2 / 3]} textAlign="center" bg="test2">
      <Container justifyContent="center">
        <Heading variant="highlight.purple">Josh Nussbaum</Heading>
        <Text variant="p">
          Josh Nussbaum is the Founder and CEO of Movement Cooperative. They have brought more than 30 progressive organizations together to bargain collectively
for critical tools, technology and data (like the voter file) and providing technical
expertise to administer them, the Movement Cooperative has fundamentally
changed and improved how the movement accesses critical resources, making
the entire field more effective.
        </Text>
      </Container>
    </Box>
  </>
);

const Edie = () => (
  <>
    <Box p={[4, 5]} width={[1, 2 / 3]} textAlign="center" bg="test3">
      <Container justifyContent="center">
        <Heading variant="highlight.pink">Edie Shepherd</Heading>
        <Text variant="p">
          Edie Shepherd is a proud Wiradjuri and Noongar woman and senior
          organiser at Original Power. She has worked as a youth worker,
          community organiser and campaigner within Aboriginal and Torres Strait
          Islander communities, as well as in broader social and economic
          justice spaces.
        </Text>
        <Text variant="p">
          Before OP, Edie has spent 3 years working as an organiser in the trade
          union movement, running Aboriginal and Torres Strait Islander
          organising and political capacity building programs in Victoria.
        </Text>
      </Container>
    </Box>
    <Box sx={styles} width={[1, 1 / 3]}>
      <Image height="100%" src="/images/team-edie.jpg" />
    </Box>
  </>
);

const About = () => (
  <>
    <Box p={[4, 5]} width={[1, 2 / 3]} textAlign="center" bg="test7">
      <Container justifyContent="center">
        <Heading variant="highlight.orange">About Progtech</Heading>
        <Text variant="p">
          The Progressive Tech Network is a growing collective of progressive
          organisations from across our movements teaming up on tech - including
          unions, not for profits, enviro groups, and community organisations.
        </Text>
        <Text variant="p">
          We want a world where progressive organisations and activists have the
          best tools possible, and the skills and support to use them.
        </Text>
        <Text variant="p" width={1}>
          <Link href="/overview">
            <Button variant="primary">Learn more</Button>
          </Link>
        </Text>
      </Container>
    </Box>
    <Box sx={styles} width={[1, 1 / 3]}>
      <Bg url="/images/2.jpg" opacity="1" />
    </Box>
  </>
);

const JumboContent = () => {
  return (
    <Container maxWidth={1200}>
      <Box width={1}>
        <Heading fontSize={[25, 50]} sx={{ maxWidth: "500px" }}>
          Progressive Tech Network Australia Launch
        </Heading>
        <p>
          Calling all progressive technologists, comms whizzes, directors and
          the digitally inclined
        </p>
        <a target="_blank" href="https://progtech.typeform.com/to/ZAU0MgR5">
          <Button>Count me in</Button>
        </a>
      </Box>
    </Container>
  );
};

const App = (props) => {
  return (
    <Flex flexWrap="wrap">
      <Head>
        <title>ProgTech Network Australia</title>
      </Head>
      <Jumbotron>
        <JumboContent />
      </Jumbotron>
      <Details />
      {/* <Edie />
      <Josh /> */}
      <About />
    </Flex>
  );
};

export default App;

//Thursday, Aug 27th at 11am AEST / 10.30 ACST / 9 AWST!
