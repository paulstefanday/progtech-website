import React from "react";
import { Box, Flex, Button } from "rebass";
import { Input, Label, Textarea } from "@rebass/forms";

import PageHeading from "../components/PageHeading";
import Container from "../components/Container";
import Bg, { styles } from "../components/Bg";

const list = [
  "/images/logo-raisely.jpg",
  "/images/logo-uwu.jpg",
  "/images/logo-vthc.jpg",
];

const Description = () => (
  <Box width={[1, 1 / 2]} pr={[0, 5]}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </Box>
);

const Partners = () => (
  <Flex width={[1, 1 / 2]} flexWrap="wrap">
    {list.map((url) => (
      <Box width={1 / 2} minHeight={230} sx={styles}>
        <Bg url={url} opacity={1} mb={5} />
      </Box>
    ))}
  </Flex>
);

const App = (props) => {
  return (
    <Flex flexWrap="wrap">
      <PageHeading heading="Our Partners" />
      <Box width={1} p={[4, 5]}>
        <Container maxWidth={1200}>
          <Description />
          <Partners />
        </Container>
      </Box>
    </Flex>
  );
};

export default App;
