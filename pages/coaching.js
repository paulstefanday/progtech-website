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
    <p>Progressive Tech is coordinating a monthly Tech Help Please coaching day on the second Tuesday of every month from 10am to 4pm. The upcoming dates are August 10th, September 7th and October 12th.</p>
    <p>Let us know about the problem you need help with, and you will be paired with a coach for a 1 to 2 hour session. Coaching is open to all progressive organisations, not just Progressive Tech Network members.</p>

    <Heading mt={4} variant="highlight.pink">Coaches for 10 August</Heading>
    <p><ul>
      <li><b>Aaron Takizad</b>, Media and Entertainment Arts Alliance</li>
      <li><b>Bridger Rossiter</b>, Progressive Tech Network</li>
      <li><b>Corey McCann</b>, Code Nation</li>
      <li><b>David Kohn</b>, Australian Youth Climate Coalition</li>
      <li><b>Fred Stark</b>, Fingerprint for Success</li>
      <li><b>Georgia Kriz</b>, Australian Council of Trades Unions</li>
      <li><b>Glenn Todd</b>, actionskills.co</li>
      <li><b>Luke Marshall</b>, Digital Marketing Consultant</li>
      </ul></p>

    <p>These will be monthly sessions, so if you can't make it this time don't worry! If you'd like to volunteer as a coach, you can apply here:</p>
    <p>
         <Link href="https://airtable.com/shrGlWp6wgz7qDeO2"><Button variant="primary">Apply to be a coach here</Button></Link>
    </p>
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
          <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script><iframe class="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shr7QJENmCKms2hBE?backgroundColor=blue" frameborder="0" onmousewheel="" width="100%" height="2584" style="background: transparent; border: 1px solid #ccc;"></iframe>
          </Box>
        </Container>
      </Box>
    </Flex>
  );
};

export default App;
