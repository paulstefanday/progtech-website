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
      <p style={{marginTop: 0}}>
        Let us know if want to volunteer your skills to work on big or small projects to help progressive organisations. 
      </p>
      <p>We will be talking to organisations to find out key shared issues across the sector as well as smaller one off projects to help grassroots organisations. Fill out the form below and we will let you know about upcomming projects.</p>
      <br />
      <Link href="https://progtech.typeform.com/to/QGD6dgX2" target="_blank"><Button>Apply Here</Button></Link>
    </Box>
  </>
);
const App = (props) => {
  return (
    <Flex flexWrap="wrap">
      <PageHeading heading="Become a Skilled Volunteer" />
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
