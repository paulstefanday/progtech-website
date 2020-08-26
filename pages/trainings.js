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
  <Heading variant="highlight.pink">Upcoming trainings:</Heading>
  <p>From our research a lot of organisations are on nation builder and struggle to do good data analysis. Especially if they don't have a budget for it. So we have put together a course that runs for
  6 sessions where you will learn to set up the AYCC's metrics apps and better analyise your data.</p>
  <p><Link href="" target="_blank" variant="buttons.primary">Apply Here</Link></p>
    <Heading variant="highlight.pink">Custom metrics for NationBuilder + SQL training</Heading>
    <p>From our research a lot of organisations are on nation builder and struggle to do good data analysis. Especially if they don't have a budget for it. So we have put together a course that runs for
    6 sessions where you will learn to set up the AYCC's metrics apps and better analyise your data.</p>
    <p><Link href="https://progtech.typeform.com/to/BnGdlq#source=pt-nb" target="_blank" variant="buttons.primary">Apply Here</Link></p>
    <Heading mt={4} variant="highlight.pink">Advanced Zapier integrations</Heading>
    <p>Many small orgs are using out of the box tools, and a key frustration for a small team is siloed data and having to repeat processes that could be automated. So this course will teach you how to use webhooks and run scripts in Zapier to better integrate between platforms.</p>
    <p><Link href="https://progtech.typeform.com/to/BnGdlq#source=pt-z" target="_blank" variant="buttons.primary">Apply Here</Link></p>
    <Heading mt={4} variant="highlight.pink">Advanced Zapier integrations by Raisely</Heading>
    <p>Many small orgs are using out of the box tools, and a key frustration for a small team is siloed data and having to repeat processes that could be automated. So this course will teach you how to use webhooks and run scripts in Zapier to better integrate between platforms.</p>
    <p><Link href="https://progtech.typeform.com/to/BnGdlq#source=pt-an" target="_blank" variant="buttons.primary">Apply Here</Link></p>
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
