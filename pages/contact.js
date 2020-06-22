import React from "react";
import { Box, Flex, Button, Text, Image } from "rebass";
import { Input, Label, Textarea } from "@rebass/forms";

import PageHeading from "../components/PageHeading";
import Container from "../components/Container";

const Description = () => <Box width={[1, 1 / 2]} pr={5}></Box>;

const Form = () => (
  <>
    <Box
      width={[1, 1 / 2]}
      pr={5}
      as="form"
      onSubmit={(e) => e.preventDefault()}
      py={3}
    >
      <p style={{ marginTop: 0}}>
        Thoughts? Questions? Feedback? Get in touch via{" "}
        <a href="mailto:hello@progtech.net.au">email</a> or fill out this form.
      </p>
      <br />
      <Flex flexWrap="wrap" mb={3}>
        <Box width={1 / 2}>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" defaultValue="" />
        </Box>
        <Box width={1 / 2}>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" defaultValue="" />
        </Box>
        <Box width={1}>
          <Label htmlFor="canOffer">Message</Label>
          <Textarea id="canOffer" name="canOffer" />
        </Box>
        <Box textAlign="right" width={1}>
          <Button width={1 / 2}>Send</Button>
        </Box>
      </Flex>
    </Box>
  </>
);

const App = (props) => {
  return (
    <Flex flexWrap="wrap">
      <PageHeading heading="Contact Us" />
      <Flex p={5} width={1}>
        <Container maxWidth={1200}>
          <Form />
          <Box width={[1, 1 / 2]} flexWrap="wrap">
            <Image height="auto" src="/images/generic-1.jpg" />
          </Box>
        </Container>
      </Flex>
    </Flex>
  );
};

export default App;
