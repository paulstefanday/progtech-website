import React from "react";
import { Box, Heading, Text, Button } from "rebass";
import Link from 'next/link';

import Bg from './Bg';

const Programmes = () => {
    const props = {
      p: [4, 5],
      textAlign: "center",
    };
    // test2
    return (
      <>
        <Box sx={{ position: "relative", overflow: "hidden" }} bg="test1" width={[1, 1 / 3]}>
          <Box {...props} width={1} zIndex="1">
            <Heading variant="highlight.green">Share tools & code</Heading>
            <Text variant="p">
              Our ambitious movements need the best tools we can get - but often,
              we end up build the same tools over and over, reinventing the wheel in
              isolation from each other. We’re starting a shared library of tech -
              including tools like custom metrics for Nationbuilder, website themes, and
              code for integrations between common platforms.
            </Text>
            <Link href="/sharecode"><Button variant="primary">Get Involved</Button></Link>
          </Box>
        </Box>

        <Box sx={{ position: "relative", overflow: "hidden" }} width={[1, 1 / 3]}>
          <Bg url="/images/generic-4.jpg" opacity="1" />
        </Box>

        <Box sx={{ position: "relative", overflow: "hidden" }} bg="test7" width={[1, 1 / 3]}>
          <Box {...props} width={1} zIndex="1">
            <Heading variant="highlight.orange">How do we win</Heading>
            <Text variant="p">
            <ol style={{ textAlign: "left"}}>
            <li style={{ marginBottom: "15px" }}>We’re building a community of technologists</li>
            <li style={{ marginBottom: "15px" }}>We’re creating pathways into tech</li>
            <li style={{  marginBottom: "15px"}}>We’re widening access to tech</li>
            <li style={{ marginBottom: "15px" }}>We’re driving collaboration across our sector</li>
          </ol>
            </Text>
        
          </Box>
        </Box>

        <Box sx={{ position: "relative", overflow: "hidden" }} width={[1, 1 / 3]}>
          <Bg url="/images/4.jpg" opacity="1" />
        </Box>

        <Box sx={{ position: "relative", overflow: "hidden" }} bg="test3" width={[1, 1 / 3]}>
          <Box {...props} width={1} zIndex="1">
            <Heading variant="highlight.pink">Skill-shares and trainings</Heading>
            <Text variant="p">
              We're gearing up to launch a series of trainings for progressive campaigners,
              organisers, comms whizzes, and techies - from Excel tips for
              organisers online sessions, through to coding fellowships.
            </Text>
            <Link href="/trainings"><Button variant="primary">Learn More</Button></Link>
          </Box>
        </Box>

        <Box sx={{ position: "relative", overflow: "hidden" }} width={[1, 1 / 3]}>
          <Bg url="/images/generic-2.jpg" opacity="1" />
        </Box>
      </>
    );
  };

  export default Programmes
