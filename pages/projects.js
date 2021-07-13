import React from "react";
import { Box, Flex, Button, Image, Heading, Link } from "rebass";
import { Input, Label, Textarea, Checkbox } from "@rebass/forms";

import PageHeading from "../components/PageHeading";
import Container from "../components/Container";
import Bg, { styles } from "../components/Bg";

const list = [
  "/images/logo-raisely.png",
  "/images/logo-uwu.png",
  "/images/logo-vthc.png",
];

const marginBottom = "60px";

const Form = () => (
  <>
    <Box width={[1]} as="form" onSubmit={(e) => e.preventDefault()} py={3}>
    <Heading variant="highlight.pink">Apply Here</Heading>
      <Flex flexWrap="wrap" mb={3}>
        <Box width={1 / 2}>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" defaultValue="" />
        </Box>
        <Box width={1 / 2}>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" defaultValue="" />
        </Box>

        <Box width={1 / 2}>
          <Label>
            <Checkbox id="remember" name="remember" />
            <span style={{ paddingTop: "3px" }}>I want to be a mentor</span>
          </Label>
        </Box>

        <Box width={1 / 2} pb={4}>
          <Label>
            <Checkbox id="remember" name="remember" />
            <span style={{ paddingTop: "3px" }}>I want to be a mentee</span>
          </Label>
        </Box>

        <Box width={1}>
          <Label htmlFor="canOffer">
            Let us know a bit about your self and what you are looking for
          </Label>
          <Textarea id="canOffer" name="canOffer" />
        </Box>
        <Box textAlign="right" width={1}>
          <Button width={1 / 2}>Send</Button>
        </Box>
      </Flex>
    </Box>
  </>
);

const Description = () => (
  <Box width={[1, 1 / 2]} pr={[0, 5]}>
    <p style={{ marginTop: 0 }}>
        <Heading variant="highlight.pink">Movement Wide Tech Research Paper</Heading>
          <p>
            We’re working with eight campaigning organisations to determine key opportunities for product and tech collaboration. This piece of research focuses on campaign technology, organising technology and data solutions required leading up to the Federal Election.    
          </p>
         
         <Heading variant="highlight.orange">Progressive Tech Talks & Drinks</Heading>
         <p>
            Progressive Tech Talks & Drinks are bi-monthly in-person events in Sydney and Melbourne to build community connections, share knowledge and seed collaborations. If you’re outside these cities and would like to start one up contact Hunter Lee at lee@australianprogress.org.au 
          </p>        

         <Heading variant="highlight.purple">Tech Help Please</Heading>
         <p>
            We’re setting up a monthly peer to peer coaching day for Progressive Tech Members to access peer to peer learning and technical volunteers. <a href="https://airtable.com/shrGlWp6wgz7qDeO2">Apply to be a coach</a> or <a href="https://airtable.com/shr7QJENmCKms2hBE">submit your problem/project</a>.

         </p>

         <Heading variant="highlight.orange">ActionNetwork Dashboard Working Group</Heading>
         <p>
            ProgresssiveTech is partnering with Citiva, a non-profit releasing the power of data to everyone, to develop an ActionNetwork analytics dashboard product. 
            We are working with four organisations to develop a minimum viable analytics dashboard for campaigners and organisers. 
 
         </p>

      
      {/* <Button>Send</Button> */}
      <br /><br />
      {/* <Heading variant="highlight.orange">Who mentees are</Heading>

      <p>
        You’re working in or around tech - this covers both technical and non-technical
  roles (eg maybe you’re not a developer, but you’re working with digital platforms and
  technologies).</p>
<p>You can commit to 6 mentorship meetings over an 12 week period (via video calls),
  and you have an idea for a key project you'd like to work on or develop that will support
your work as a progressive campaigner.
      </p>
      <br /><br />
      <Heading variant="highlight.green">Who mentors are</Heading>
      <p>
        Our mentors are seasoned techies keen to build skills in our movement, particularly in people
who've had less access to tech skills because of gender, race, class and other factors. If you’re
interested but you've never mentored someone before, please apply! Mentors are provided with
support to step up.
      </p> */}
      {/* We don't have applications open for our next mentorshop program yet but please register your interest and we will get back to you.  */}
      {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum. */}
    </p>
    {/* <Form /> */}
  </Box>
);

const App = (props) => {
  return (
    <Flex flexWrap="wrap">
      <PageHeading heading="Current Projects" />
      <Box width={1} p={[4, 5]}>
        <Container maxWidth={1200}>
          <Description />
          <Box width={[1, 1 / 2]} flexWrap="wrap">
            <Image height="auto" src="/images/generic-1.jpg" />
          </Box>
        </Container>
      </Box>
    </Flex>
  );
};

export default App;
