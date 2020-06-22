import React from "react";
import { Box, Heading, Text, Button } from "rebass";
import Link from 'next/link';

import Bg from './Bg';

const Programmes = () => {
    const props = {
      p: 5,
      textAlign: "center",
    };
    // test2
    return (
      <>
        <Box sx={{ position: "relative", overflow: "hidden" }} bg="test1" width={[1, 1 / 3]}>
          <Box {...props} width={1} zIndex="1">
            <Heading variant="highlight.green">Share tools & code</Heading>
            <Text variant="p">
              Our movement is resource starved, but we build the same tools over
              and over again. We’re starting a shared library of tech - including
              tools like custom metrics for Nationbuilder, website themes, and
              code for integrations between common platforms.
            </Text>
            {/* <Link href="/sharecode"><Button variant="primary">Get Involved</Button></Link> */}
          </Box>
        </Box>
  
        <Box sx={{ position: "relative", overflow: "hidden" }} width={[1, 1 / 3]}>
          <Bg url="/images/generic-4.jpg" opacity="1" />
        </Box>
  
        <Box sx={{ position: "relative", overflow: "hidden" }} bg="test7" width={[1, 1 / 3]}>
          <Box {...props} width={1} zIndex="1">
            <Heading variant="highlight.orange">Mentorship program</Heading>
            <Text variant="p">
              We’re seeking applications for people to be both mentors and mentees
              in an 8 week trial.The program seeks to provide mentees with
              practical support with a tech challenge they’re struggling with, as
              well as demystifying careers in tech.
            </Text>
            <Link href="/mentorship"><Button variant="primary">Apply</Button></Link>
          </Box>
        </Box>
  
        <Box sx={{ position: "relative", overflow: "hidden" }} width={[1, 1 / 3]}>
          <Bg url="/images/4.jpg" opacity="1" />
        </Box>
  
        <Box sx={{ position: "relative", overflow: "hidden" }} bg="test3" width={[1, 1 / 3]}>
          <Box {...props} width={1} zIndex="1">
            <Heading variant="highlight.pink">Skill-shares</Heading>
            <Text variant="p">
              We’re planning to build a network where we can share skills and
              learning across progressive campaigns - from Excel tips for
              organisers online sessions, through to coding fellowships. Watch
              this space!
            </Text>
            {/* <Link href="/events"><Button variant="primary">Learn more</Button></Link> */}
          </Box>
        </Box>
  
        <Box sx={{ position: "relative", overflow: "hidden" }} width={[1, 1 / 3]}>
          <Bg url="/images/generic-2.jpg" opacity="1" />
        </Box>
      </>
    );
  };

  export default Programmes