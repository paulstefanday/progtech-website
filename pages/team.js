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
  { url: "/images/team-clo.jpg", name: "Clodagh", bio: "" },
  { url: "/images/team-harry.jpg", name: "Harry", bio: "" },
];

const Team = () => (
  <Flex width={[1, 1 / 2]} flexWrap="wrap">
    {list.map(({ url, name, bio }, index) => (
      <Box textAlign="center" width={1 / 2} minHeight={230} sx={styles}>
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
      <Box width={1} p={5}>
        <Container maxWidth={1200}>
          <Team />
        </Container>
      </Box>
    </Flex>
  );
};

export default App;
