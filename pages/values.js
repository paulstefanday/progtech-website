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
    <Heading variant="highlight.pink">Intersectionality</Heading>
    <p>
      Our movements must be led by the people affected by the issues we fight
      for, and these leaders need the tools, resources and support to win.
      ProgTech Network Members prioritise supporting staff/volunteers who
      identify as and organisations led by Aboriginal and Torres Strait Islander
      peoples, people of colour, people with disabilities, women, and trans
      people.
    </p>
    <Heading variant="highlight.pink">Open and collaborative </Heading>

    <p>
      The people we fight for and with, and the people who fund us will not
      thank us for being competitive, and passing up on the chances to help each
      other win and create a better world. Together we are movement generous -
      which means wherever possible, we trust each other and share our tools,
      work, insight, and experience - especially with network members that don’t
      have the same access to resources.
    </p>
    <Heading variant="highlight.pink">Systems change</Heading>

    <p>
      The change we need doesn’t come from tinkering around the edges of the
      social and economic systems we have. We’re fighting for the deep shifts we
      need to secure social, economic and environmental justice. Network Members
      fight for a better world through many different pathways - but we’re
      united in pursuing deep, transformative change to help create a society
      that works for the many, not the few.
    </p>
  </Flex>
);

const App = (props) => {
  return (
    <Flex flexWrap="wrap">
      <PageHeading heading="Our Values" />
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
