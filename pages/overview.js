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
  <Box width={[1, 1 / 2]} pr={5}>
    <Heading variant="highlight.pink">Who are we?</Heading>
    <p>
      The Progressive Tech Network is a community of people working in or
      adjacent to tech in the Australian progressive sector - unions, not for
      profits, enviro groups, and community organisations.
    </p>

    <p>
      We aim to team up on tech to win - through sharing skills, tools and code;
      running trainings and mentorships; and creating a networked community who
      work together on solutions to shared challenges.
    </p>

    <p style={{ marginBottom }}>
      Our founding team is a group of people working across the progressive
      sector - Edie Shepherd (Original Power); Sara Smylie (UWU); Clodagh Schofield (AYCC); Moira Cully (VTHC);
      Harry Cossar-Gilbert (PHD student); Paul Day (Raisely).
    </p>

    <Heading variant="highlight.green">Why do we exist?</Heading>
    <p>
      There are frustrations with the way ‘digital’ or ‘tech’ operates in
      Australia that can be summed up as:
    </p>
    <ul>
      <li>
        We don’t share our skills, resources, lessons between organisations
        apart from at events which shut people and organisations out
      </li>
      <li>
        Different organisations are constantly reinventing the wheel and wasting
        resources
      </li>
      <li>
        The space is exclusionary - it’s male and white and prizes hard tech
        skills (like coding)
      </li>
      <li>
        A heap of our tech is brought over from America and doesn’t suit our
        needs. Individual organisations understandably don’t want to or can’t
        resource development on their own or extract changes from large
        companies - but if we teamed up on shared requests we could shift them.
      </li>
    </ul>

    <p>
      There are some really obvious (and genuine) reasons why the above is the
      case - everything from resourcing, to internal competition, to not wanting
      to get bogged down in a massive process every time you want to do
      something.
    </p>

    <p style={{ marginBottom }}>
      We’re going into this with our eyes wide open - it won’t be easy. But this
      network is an attempt to change our siloed approach to tech - and networks
      like the Progressive Coders Network and the Movement Cooperative in the US
      and the OPEN Tech network internationally show us how much we have to gain
      from collaborating and learning together here in Australia.
    </p>

    <Heading variant="highlight.purple">How do we function?</Heading>
    <p style={{ marginBottom }}>
      Any individual working within a progressive organisation in Australia can
      be part of this network. We’re powered by activists who participate and
      run our program. We’re funded by Organisational Members who contribute
      time or money.
    </p>

    <Heading variant="highlight.orange">What have we done to date? </Heading>
    <p>
      We kicked off the conversation by running an informal lunchtime session at
      FWD+Organise in Dec 2019. A huge 60 people came to this session - and the
      ideas we heard there drove our next steps.
    </p>

    <p>
      We ran pilot projects in the subsequent months - a mentorship trial; skill
      sharing workshops; a sector-wide consultation about tech challenges
      organisations are facing. We’ve learned a lot in that process - and have
      developed our core values and organisational structure along the way.
    </p>
  </Box>
);

const Partners = () => (
  <Box width={[1, 1 / 2]} flexWrap="wrap">
    <Image height="auto" src="/images/generic-1.jpg" />
  </Box>
);

const App = (props) => {
  return (
    <Flex flexWrap="wrap">
      <PageHeading heading="About Us" />
      <Box width={1} p={5}>
        <Container maxWidth={1200}>
          <Description />
          <Partners />
        </Container>
      </Box>
    </Flex>
  );
};

export default App;
