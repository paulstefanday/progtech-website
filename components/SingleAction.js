import React from "react";
import { Box, Heading, Text, Button, Link } from "rebass";
import Container from './Container';
import Bg, { styles } from './Bg';
// import Link from 'next/link';

const SingleAction = () => (
    <>
      <Box sx={styles} width={[1, 1 / 3]}>
        <Bg url="/images/2.jpg" opacity="1" />
      </Box>
      <Box p={[4, 5]} width={[1, 2 / 3]} textAlign="center" bg="test2">
        <Container justifyContent="center">
          <Heading variant="highlight.purple">Launch Event</Heading>
          <p><Text variant="p">
         
          We'll be hearing from Edie Shepherd (ProgTech, Original Power) on the tech support BIPOC activists need, Josh Nussbaum (Movement Cooperative US) on what US organisations have achieved through teaming up on tech, and the key learnings from the biggest consultation on where progressive tech is at in Australia.
</Text>
          <Text variant="p">
Join us at Thursday, Aug 27th at 11am AEST / 10.30 ACST / 9 AWST!
          </Text></p>
          <Link target="_blank" href="https://form.typeform.com/to/ZAU0MgR5"><Button variant="primary">Count me in</Button></Link>
        </Container>
      </Box>
    </>
  );

  export default SingleAction
