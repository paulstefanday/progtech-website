import React from "react";
import { Box, Flex, Button, Image, Heading } from "rebass";
import { Input, Label, Textarea } from "@rebass/forms";

import PageHeading from "../components/PageHeading";
import Container from "../components/Container";
import Bg, { styles } from "../components/Bg";

const list = [
  "/images/logo-raisely.png",
  "/images/logo-uwu.png",
  "/images/logo-vthc.png",
];

const marginBottom = "60px"

const Description = () => (
  <Box width={[1, 1 / 2]} pr={[0, 5]}>
  
   <p> As part of the Progressive Tech Network you're eligible for the following offerings </p>
  
  <Heading variant="highlight.pink">Supporter Base</Heading>
    <p>
    SupporterBase was launched in 2019 by the same team of digital experts behind the award-winning creative agency for progressives, Code Nation. This tool powered by NationBuilder
empowers your volunteers to organise their own local groups, host events, contact supporters and build your community of action.
    </p>

<p> 
Leading up to the Australian Federal Election, Progressive Tech members are eligible for a 50%  discount with a 25% discount available for non-ProgTech members. 
</p>
    
  

  
</Box>
);

//const Partners = () => (
  //<Box width={[1, 1 / 2]} flexWrap="wrap">
    //<Image height="auto" src="/images/team-all.jpg" />
  //</Box>
//);

const App = (props) => {
  return (
    <Flex flexWrap="wrap">
      <PageHeading heading="Member Offers" />
      <Box width={1} p={[4, 5]}>
        <Container maxWidth={1200}>
          <Description />
        </Container>
      </Box>
    </Flex>
  );
};

export default App;
