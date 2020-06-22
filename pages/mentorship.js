import React from "react";
import { Box, Flex, Button, Image, Heading } from "rebass";
import { Input, Label, Textarea, Checkbox } from "@rebass/forms";

import PageHeading from "../components/PageHeading";
import Container from "../components/Container";
import Bg, { styles } from "../components/Bg";

const list = [
  "/images/logo-raisely.png",
  "/images/logo-uwu.png",
  "/images/logo-vthc.png",
];

const marginBottom = "60px";

const Form = () => (
  <>
    <Box width={[1]} as="form" onSubmit={(e) => e.preventDefault()} py={3}>
      <Flex flexWrap="wrap" mb={3}>
        <Box width={1 / 2}>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" defaultValue="" />
        </Box>
        <Box width={1 / 2}>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" defaultValue="" />
        </Box>

        <Box width={1 / 2}>
          <Label>
            <Checkbox id="remember" name="remember" />
            <span style={{ paddingTop: "3px" }}>I want to be a mentor</span>
          </Label>
        </Box>

        <Box width={1 / 2} pb={4}>
          <Label>
            <Checkbox id="remember" name="remember" />
            <span style={{ paddingTop: "3px" }}>I want to be a mentee</span>
          </Label>
        </Box>

        <Box width={1}>
          <Label htmlFor="canOffer">
            Let us know a bit about your self and what you are looking for
          </Label>
          <Textarea id="canOffer" name="canOffer" />
        </Box>
        <Box textAlign="right" width={1}>
          <Button width={1 / 2}>Send</Button>
        </Box>
      </Flex>
    </Box>
  </>
);

const Description = () => (
  <Box width={[1, 1 / 2]} pr={5}>
    <p style={{ marginTop: 0 }}>
      We don't have applications open for our next mentorshop program yet but please register your interest and we will get back to you. 
      {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum. */}
    </p>
    <Form />
  </Box>
);

const App = (props) => {
  return (
    <Flex flexWrap="wrap">
      <PageHeading heading="Mentorship" />
      <Box width={1} p={5}>
        <Container maxWidth={1200}>
          <Description />
          <Box width={[1, 1 / 2]} flexWrap="wrap">
            <Image height="auto" src="/images/generic-1.jpg" />
          </Box>
        </Container>
      </Box>
    </Flex>
  );
};

export default App;
