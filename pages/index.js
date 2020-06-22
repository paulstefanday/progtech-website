/* eslint no-unused-vars: 0 */
import React from "react";
import { Flex, Heading, Button, Box } from "rebass";
import { Input } from "@rebass/forms";

import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Programmes from "../components/Programmes";
import Slider from "../components/Slider";
import Partners from "../components/Partners";
import JoinNetwork from "../components/JoinNetwork";
import Link from 'next/link';

const sliderContent = [
  {
    title: "Share tools, resources & code",
    copy:
      "Our ambitious movements need the best tools we can get - but often, we end up build the same tools over and over, reinventing the wheel in isolation from each other. We’re starting a shared library of tech - including tools like custom metrics for Nationbuilder, website themes, and code for integrations between common platforms.",
    buttonText: "Get Involved",
    buttonLink: "/sharecode",
  },
  {
    title: "Mentorship program",
    copy:
      "We’re seeking applications for people to be both mentors and menteesin an 8 week trial. The program seeks to provide mentees withpractical support with a tech challenge they’re struggling with, aswell as demystifying careers in tech.",
    buttonText: "Apply",
    buttonLink: "/mentorship",
  },
];

const JumboContent = () => (
  <Container maxWidth={1200}>
    <Box width={1}>
      <Heading fontSize={[25, 50]} sx={{ maxWidth: "500px" }}>
        It’s time we teamed up on progressive tech, don’t you think?
      </Heading>
    </Box>
    <Box width={1} sx={{maxWidth: "500px" 
        }}>
      <Box
        sx={{ 
          // boxShadow: "0 2px 20px rgba(0, 0, 0, 0.225)", 
          maxWidth: "500px" 
        }}
      >
        {/* <Input
          bg="white"
          width={3 / 5}
          mb={0}
          sx={{ borderBottom: 0 }}
          id="email"
          name="email"
          type="email"
          placeholder="Your Email"
        /> */}
        <Link href="/overview"><Button mr={3} variant="primary">
          Learn more
        </Button></Link>
        <Link href="/join"><Button variant="secondary" sx={{ 
          boxShadow: "0 2px 20px rgba(0, 0, 0, 0.225)", 
        }}>
          Become a Partner
        </Button></Link>
      </Box>
    </Box>
  </Container>
);

const App = (props) => {
  return (
    <Flex flexWrap="wrap">
      <Jumbotron>
        <JumboContent />
      </Jumbotron>
      <Programmes />
      {/* <Slider content={sliderContent} /> */}
      {/* <Partners /> */}
      <JoinNetwork />
    </Flex>
  );
};

export default App;
