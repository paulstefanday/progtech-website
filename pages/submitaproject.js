import React from "react";
import { Box, Flex, Button, Image, Heading, Link } from "rebass";
import { Input, Label, Textarea } from "@rebass/forms";
// import Link from "next/link"
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
      <p style={{ marginTop: 0 }}>
        We have a team of skilled volunteers and project managers to help
        support your organisation. Let us know what projects you need help with.
        Whether it's a big or small project we can try and bring resources
        together to help. Let us know a bit more about your idea and we will be
        in touch.
      </p>
      <br />
      <Link
        variant="buttons.primary"
        href="https://progtech.typeform.com/to/iDIWKxGY"
        target="_blank"
      >
        Submit idea here
      </Link>
    </Box>
  </>
);
const App = (props) => {
  return (
    <Flex flexWrap="wrap">
      <PageHeading heading="Submit a Project" />
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
