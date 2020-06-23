import React from "react";
import { Box, Flex, Button, Heading, Image } from "rebass";
import { Input, Label, Textarea } from "@rebass/forms";

import PageHeading from "../components/PageHeading";
import Container from "../components/Container";
import Bg, { styles } from "../components/Bg";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const colors = [
  'purple', 'orange', 'green', 'pink'
]

const list = [
  { url: "/images/team-clo.jpg", name: "Clodagh Schofield", bio: "" },
  { url: "/images/team-harry.jpg", name: "Harry Cossar-Gilbert", bio: "" },
  { url: "/images/team-moira.jpg", name: "Moira Cully", bio: "" },
  { url: "/images/team-edie.jpg", name: "Edie Shepherd", bio: "" },
  { url: "/images/team-paul.jpg", name: "Paul Day", bio: "" },
  { url: "/images/team-sara.jpg", name: "Sara Smylie", bio: "" },
];

const Team = () => (
  <Flex width={[1]} flexWrap="wrap">
    {list.map(({ url, name, bio }, index) => (
      <Box textAlign="center" width={[1, 1/2, 1 / 4]} minHeight={230} mb={5} sx={styles}>
        <div style={{ width: "100%", height: "240px", overflow:"hidden"}}><Image src={url} mb={2} width="100%" /></div>
        <br /><Heading variant={`highlight.${colors[getRandomInt(4)]}`}>{name}</Heading>
      </Box>
    ))}
  </Flex>
);

const App = (props) => {
  return (
    <Flex flexWrap="wrap">
      <PageHeading heading="Our Team" />
      <Box width={1} p={[4, 5]}>
        <Container maxWidth={1200}>
          <Team />
        </Container>
      </Box>
    </Flex>
  );
};

export default App;
