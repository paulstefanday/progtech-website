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
    <Heading variant="highlight.pink">Who are we?</Heading>
    <p>
      The Progressive Tech Network is building a world progressive organisations and activists have the best tools possible, and the skills and support to use them to win.
    </p>

    <p>
    To achieve this, we're  bringing together a national collective of nonprofits, campaigning organisations, unions, vendors, agencies, and grassroots groups to build a thriving community, create accessible pathways to tech, widen access to innovative tech and drive collaboration across the sector.
    </p>
  <p>
  ProgTech is in its founding stages with a key focus on learning about the shared needs of the sector, developing the key interventions we can make through collaboration and expanding our membership network on a national scale to amplify our impact.
  </p>
  <p>ProgTech is incubated by the Centre for Australian Progress.</p>



    <Heading variant="highlight.green">Why do we exist?</Heading>
    <p>
      It’s hard enough to win progressive change. It’s harder when our tech doesn’t work for us, and when we’re trying to solve our common challenges in isolation.
    </p>
    <p>
    In 2020, we ran a tech consultation with more than 50 organisations across the progressive sector in Australia. Our results, plus meetings with key stakeholders and our own experience, tell us strongly that the progressive sector is lagging behind.
    </p>
    <p>
    Organisations report that they’re constantly reinventing the wheel, operating in silos, using inadequate tools with insufficient skills, making do with minimal investment, that the tech space is exclusionary, that tech staff are often unsupported, and that we’re not doing the long term movement wide thinking on tech that we need.
    </p>
    <p>It doesn’t have to be this way. Networks like the Progressive Coders Network (US); the Movement Cooperative (US) and the OPEN Tech Network (international) show us how much we have to gain from working and learning together here in Australia.
    </p>
    <p style={{ marginBottom }}>
    But it will take organisations coming together as a network to build the relationships and trust needed for tech collaboration to take root. </p>



    <Heading variant="highlight.purple">Who can join?</Heading>
    <p >
      ProgTech is made up of partner organisations, and their staff, volunteers and
      activists. Our organisations are unions, environmental organisations, community groups,
      progressive tech agencies and vendors, First Nations organisations, anti-racist groups,
      women's rights campaigners, LGBTQIA+ organisations & more. We are all committed to intersectional
      system change - and we are committed to teaming up on tech because we recognise that our
      fights are bound together.
    </p>

    <p style={{ marginBottom }}> You can express interest in your organisation joining <a href="https://progtech.net.au/join">here</a>, and a member of the team
      will be in touch. ProgTech is for progressive campaigning and movement building organisations,
      and the technologists and vendors that support us - apolitical businesses contribute great things,
      but aren't a fit for this network. ProgTech is also not a network for political parties.</p>


  </Box>
);

const Partners = () => (
  <Box width={[1, 1 / 2]} flexWrap="wrap">
    <Image height="auto" src="/images/team-all.jpg" />
  </Box>
);

const App = (props) => {
  return (
    <Flex flexWrap="wrap">
      <PageHeading heading="About Us" />
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
