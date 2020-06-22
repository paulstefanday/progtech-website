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
      <Box p={[5]} width={[1, 2 / 3]} textAlign="center" bg="test7">
        <Container justifyContent="center">
          <Heading variant="highlight.orange">Sector Consultation</Heading>
          <Text variant="p">
            We have created a sector wide survey to better understand our shared problems and how we can work together to make tech better in progressive organisations. Click below and make your voice apart of how we plan our next programs. 
          </Text>
          <Link target="_blank" href="https://form.typeform.com/to/C8Sthe"><Button variant="primary">Tell us your story</Button></Link>
        </Container>
      </Box>
    </>
  );

  export default SingleAction