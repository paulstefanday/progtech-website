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
          <Heading variant="highlight.purple">State of Progressive Tech Report 2020</Heading>
          <Text variant="p">
          It’s hard enough to win progressive change. It’s harder when our tech doesn’t work for us, and when we’re trying to solve our common challenges in isolation. This survey makes the challenges clear: organisations report that they’re constantly reinventing the wheel, operating in silos, using inadequate tools with insufficient skills, making do with minimal investment, that the tech space is exclusionary, that tech staff are often unsupported, and that we’re not doing the long-term movement-wide thinking on tech that we need.
          </Text>
          <Link target="_blank" href="https://2020report.progtech.net.au/"><Button variant="primary">Read the report here</Button></Link>
        </Container>
      </Box>
    </>
  );

  export default SingleAction
