import React from "react";
import { Box, Flex, Button, Image, Heading } from "rebass";
import { Input, Label, Textarea } from "@rebass/forms";

import PageHeading from "../components/PageHeading";
import Container from "../components/Container";
import Bg, { styles } from "../components/Bg";

const Form = () => (
  <>
    <Box
      width={[1, 1 / 2]}
      as="form"
      onSubmit={(e) => e.preventDefault()}
      pr={[0, 5]}
    >
      <p style={{marginTop: 0}}>
        Let us know if want to contribute any code or tools for the network to
        share amongst progressive organisations. This can be publicly or
        within a private progressive network.
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
          <Label htmlFor="canOffer">
            Let us know a bit about your self and how you are keen to get
            involved
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
const App = (props) => {
  return (
    <Flex flexWrap="wrap">
      <PageHeading heading="Share tools & code" />
      <Box width={1} p={[4, 5]}>
        <Container maxWidth={1200}>
        <Form />
          <Box width={[1, 1 / 2]} flexWrap="wrap">
            <Image height="auto" src="/images/4.jpg" />
          </Box>
          
        </Container>
      </Box>
    </Flex>
  );
};

export default App;
