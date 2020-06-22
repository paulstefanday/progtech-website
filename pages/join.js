import React from "react";
import { Box, Flex, Button, Heading } from "rebass";
import { Input, Label, Textarea } from "@rebass/forms";

import PageHeading from "../components/PageHeading";
import Container from "../components/Container";

const Description = () => (
  <Box width={[1, 1 / 2]} pr={5}>
    <Heading variant="highlight.pink">What does being a partner look like?</Heading>
    <p style={{ marginBottom: "60px" }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <Heading variant="highlight.green">Once you have applied</Heading>
    <p>
      A member of the ProgTech team will get in touch to
      discuss your application. We'll then form a membership agreement that
      outlines in detail what your organisation can share, and the key ways the
      network will support you in the tech you need to bring on a better world.
    </p>
    <p>
      If your membership application is accepted, you and the tech & digital
      staff, volunteers, and activists that make up your organisation will be
      invited to join our Slack community, our shared library of code, tools,
      and resources, and upcoming trainings and events.
    </p>
    <p>Looking forward to taking these next steps together.</p>
  </Box>
);

const Form = () => (
  <>
    <Description />
    <Box width={[1, 1 / 2]} as="form" onSubmit={(e) => e.preventDefault()} py={3}>
      <Flex flexWrap="wrap" mb={3}>
        <Box width={1 / 2}>
          <Label htmlFor="name">
            Name
          </Label>
          <Input id="name" name="name" defaultValue="" />
        </Box>
        <Box width={1 / 2}>
          <Label htmlFor="email">
            Email
          </Label>
          <Input id="email" name="email" defaultValue="" />
        </Box>
        <Box width={1 / 2}>
          <Label htmlFor="organisationName">
            Organisation Name
          </Label>
          <Input
            id="organisationName"
            name="organisationName"
            defaultValue=""
          />
        </Box>
        <Box width={1 / 2}>
          <Label htmlFor="role">
            Role
          </Label>
          <Input id="role" name="role" defaultValue="" />
        </Box>
        <Box width={1}>
          <Label htmlFor="keyChallenges">
            What are the key challenges your organisation faces with tech and
            data?
          </Label>
          <Textarea id="keyChallenges" name="keyChallenges" />
        </Box>
        <Box width={1}>
          <Label htmlFor="wishYouCouldDo">
            What are the things you wish you could do?
          </Label>
          <Textarea id="wishYouCouldDo" name="wishYouCouldDo" />
        </Box>
        <Box width={1}>
          <Label htmlFor="keyBenefits">
            What are the key ways your organisation could benefit from
            collaboration with other organisations and the network?
          </Label>
          <Textarea id="keyBenefits" name="keyBenefits" />
        </Box>
        <Box width={1}>
          <Label htmlFor="canOffer">
            What are the key things your organisation has to offer and share
            with other progressive organisations and the network?
          </Label>
          <Textarea id="canOffer" name="canOffer" />
        </Box>
        <Box textAlign="right" width={1}>
          <Button width={1 / 2}>Join</Button>
        </Box>
      </Flex>
    </Box>
  </>
);

const App = (props) => {
  return (
    <Flex flexWrap="wrap">
      <PageHeading heading="Become a Partner" />
      <Flex p={5} width={1}>
        <Container maxWidth={1200}>
          <Form />
        </Container>
      </Flex>
    </Flex>
  );
};

export default App;
