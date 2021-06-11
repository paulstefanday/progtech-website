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
            <Heading variant="highlight.green">Progressive Tech Network </Heading>
            <Text variant="p">
           Joining Progressive Tech will tap you into a community of over 120 tech, digital and communication practitioners across the progressive movement. 
            </Text>
            <Link href="/sharecode"><Button variant="primary">Get Involved</Button></Link>
          </Box>
        </Box>

        <Box sx={{ position: "relative", overflow: "hidden" }} width={[1, 1 / 3]}>
          <Bg url="/images/generic-4.jpg" opacity="1" />
        </Box>

        <Box sx={{ position: "relative", overflow: "hidden" }} bg="test7" width={[1, 1 / 3]}>
          <Box {...props} width={1} zIndex="1">
            <Heading variant="highlight.orange">How we will do it </Heading>
            <Text variant="p">
            <ol style={{ textAlign: "left"}}>
            <li style={{ marginBottom: "15px" }}>Building a community practicing great digital and tech together</li>
            <li style={{ marginBottom: "15px" }}>Delivering practical training to level up our tech and digital skills</li>
            <li style={{ marginBottom: "15px" }}>Solving tech and digital challenges through peer to peer coaching </li>
            <li style={{  marginBottom: "15px"}}>Creating a library of shared resources and research </li>
            <li style={{ marginBottom: "15px" }}>Investing in better progressive tech products through research, product development and building strategic partnerships</li>
          </ol> 
            </Text>
        
          </Box>
        </Box>

        <Box sx={{ position: "relative", overflow: "hidden" }} width={[1, 1 / 3]}>
          <Bg url="/images/4.jpg" opacity="1" />
        </Box>

        <Box sx={{ position: "relative", overflow: "hidden" }} bg="test3" width={[1, 1 / 3]}>
          <Box {...props} width={1} zIndex="1">
            <Heading variant="highlight.pink">Trainings and Events</Heading>
            <Text variant="p">
              We are running events and training sessions for progressive campaigners, organisers, comms whizzes, and techies.
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
