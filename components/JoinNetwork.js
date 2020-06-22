import React from "react";
import { Box, Heading, Text, Button } from "rebass";
import Container from './Container';
import Bg, { styles } from './Bg';
import Link from 'next/link';

const JoinNetwork = () => (
    <>
      <Box sx={styles} width={[1, 1 / 3]}>
        <Bg url="/images/2.jpg" opacity="1" />
      </Box>
      <Box p={[5]} width={[1, 2 / 3]} textAlign="center" bg="test7">
        <Container justifyContent="center">
          <Heading variant="highlight.orange">Skill-shares</Heading>
          <Text variant="p">
            We’re planning to build a network where we can share skills and
            learning across progressive campaigns - from Excel tips for organisers
            online sessions, through to coding fellowships. Watch this space!
          </Text>
          <Link href="/mentorship"><Button variant="primary">Apply</Button></Link>
        </Container>
      </Box>
    </>
  );

  export default JoinNetwork