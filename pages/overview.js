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
      The Progressive Tech Network is a growing collective of progressive organisations
      from across our movements teaming up on tech - including unions, not for
      profits, enviro groups, and community organisations.
    </p>

    <p>
      ProgTech is in its founding stages - and so focussing on learning about our shared needs,
      and the key interventions we can make through collaboration. When the network launches in late
      August, members will have access to a library of shared tools, resources and code; training and
      mentorship programs; and a networked community who work together on solutions to shared challenges.
    </p>


    <p style={{ marginBottom }}>
      Our founding team is a group of people working across the progressive
      sector - Edie Shepherd (Original Power); Sara Smylie (UWU); Clodagh Schofield (AYCC); Moira Cully (VTHC);
      Harry Cossar-Gilbert (independant progressive developer); Paul Day (Raisely).
    </p>

    <Heading variant="highlight.green">Why do we exist?</Heading>
    <p>
      It’s hard enough to win progressive change. It’s harder when our tech doesn’t work for us, and when we’re trying to solve our common challenges in isolation.
    </p>
    <p>
    We’ve just run the biggest ever tech consultation with the progressive sector in Australia. Our results, plus meetings with key stakeholders and our own experience, tell us strongly that the progressive sector is lagging behind.
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

    <Heading variant="highlight.orange">What have we done to date? </Heading>
    <p >
      After listening, testing and incubating, ProgTech is now preparing for launch.
      Consultation through sessions at FWD+Organise 2019 and the largest sector consultation
      on tech informed key interventions the network has tested.
    </p>
    <p>
      Mentorship pilots ran in the first half of 2020 - pairing a cohort of women, non-binary
      and First Nations campaigners, organisers, and communcations mentees with amazing
      progressive technologists. Skills based trainings were trialled and refined - focussing on
      React and SQL, which were identified as key areas organisations wanted to see staff cultivate
      skills in.
    </p>

<p style={{ marginBottom }}>
      Before launching in late August, ProgTech is focussing on consulting with the organisations
      and activists at the forefront of progressive change - first nations and people of colour led
      groups - to ensure the network is grounded from the start in supporting this vital work. We're developing
      structured mentorships, and technical volunteering programs to bring in expertise from inside and
      outside the sector to add extra support without the extra hassle.
    </p>
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
