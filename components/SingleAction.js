import React from "react";
import { Box, Heading, Text, Button, Link } from "rebass";
import Container from "./Container";
import Bg, { styles } from "./Bg";
// import Link from 'next/link';

const SingleAction = () => (
  <>
    <Box sx={{ ...styles }} width={[1, 1 / 3]}>
      <Bg url="/images/2.jpg" opacity="1" />
    </Box>
    <Box p={[4, 5]} width={[1, 2 / 3]}  bg="test2">
      <Container justifyContent="center">
        <Heading textAlign="center"  variant="highlight.purple"> Who is ProgressiveTech?          
</Heading>
        <Text width={1} variant="p">
        Progressive Tech is a growing national collective of progressive organisations - non profits, unions, vendors, agencies and grassroots groups - building the digital and tech capability of the progressive movement to campaign and organise. 
       
        </Text>
        <Link href="/partners"><Button variant="primary">Our Network</Button></Link>
        {/* <Link target="_blank" href="https://2020report.progtech.net.au/">
          <Button variant="primary">Read the report here</Button>
        </Link> */}
      </Container>
    </Box>
  </>
);

export default SingleAction;
