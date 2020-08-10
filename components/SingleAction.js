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
          <Heading variant="highlight.purple">Sector Consultation</Heading>
          <Text variant="p">
            We've wrapped on the formal consultations on progressive organisations and our tech tools - and analysts are putting together anonymised and aggregated analysis to be released Thursday August 13th 2020 so we can all see the state of progressive tech in Australia. Sign up for updates above to keep in the loop! If you'd like to share how your organisation is using tech, please do still fill out the survey - your input will support ProgTech in better identifying our common challenges, and the highest impact interventions we can collectively make with precision.
          </Text>
          <Link target="_blank" href="https://form.typeform.com/to/C8Sthe"><Button variant="primary">Take the survey now</Button></Link>
        </Container>
      </Box>
    </>
  );

  export default SingleAction
