import React from "react";
import { Box, Flex, Button, Image, Heading, Text } from "rebass";
import { Input, Label, Textarea } from "@rebass/forms";
import Link from "next/link";
import PageHeading from "../components/PageHeading";
import Container from "../components/Container";
import Bg, { styles } from "../components/Bg";
import JoinNewsletter from '../components/JoinNewsletter';

const Description = () => (
  <Flex flexDirection="column" width={[1, 1 / 2]} pr={[0, 5]}>
    <p style={{marginTop: 0}}>
      We don't currently have any upcomming workshop or events but join our newsletter and
      we can let you know when the next one is. Also if you have any skills you
      want to share or workshops you want to run <Link href="/contact"><a>please get in touch</a></Link>.
    </p>
    <Flex><JoinNewsletter inverse /></Flex>
  </Flex>
);

const Partners = () => (
  <Box width={[1, 1 / 2]} flexWrap="wrap">
    <Image height="auto" src="/images/2.jpg" />
  </Box>
);

const App = (props) => {
  return (
    <Flex flexWrap="wrap">
      <PageHeading heading="Events & Workshops" />
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
