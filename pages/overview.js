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
  
  <p>
      Longer term, ProgTech aims to follow in the footstep of projects like the Movement Cooperative in the
      US - collective bargaining, and pooling resources to build the tools we need for powerful, intersectional,
      and just movements. Through collaboration, we can create tools that are driven not by profit motives, or 
      the needs of large US based organisations - but by the needs of those at the forefronts of our movements here.</p>

    <p style={{ marginBottom }}>
      Our founding team is a group of people working across the progressive
      sector - Edie Shepherd (Original Power); Sara Smylie (UWU); Clodagh Schofield (AYCC); Moira Cully (VTHC);
      Harry Cossar-Gilbert (independant progressive developer); Paul Day (Raisely).
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
        The space can be exclusionary - it’s male and white and prizes hard tech
        skills (like coding)
      </li>
      <li>
        A heap of our tech is brought over from the US and doesn’t suit our
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

    <Heading variant="highlight.purple">Who can join?</Heading>
    <p style={{ marginBottom }}>
      ProgTech is made up of partner organisations, and their staff, volunteers and
      activists. Our organisations are unions, environmental organisations, community groups,
      progressive tech agencies and vendors, First Nations organisations, anti-racist groups, 
      women's rights campaigners, LGBTQIA+ organisations & more. We are all committed to intersectional
      system change - and we are committed to teaming up on tech because we recognise that our
      fights are bound together. 
    </p>

    <p> You can express interest in your organisation joining <a href="https://progtech.net.au/join">here</a>, and a member of the team
      will be in touch. ProgTech is for progressive campaigning and movement building organisations,
      and the technologists and vendors that support us - apolitical businesses contribute great things,
      but aren't a fit for this network. ProgTech is also not a network for political parties.</p>

    <Heading variant="highlight.orange">What have we done to date? </Heading>
    <p>
      After listening, testing and incubating, ProgTech is now preparing for launch.
      Consultation through sessions at FWD+Organise 2019 and the largest sector consultation
      on tech informed key interventions the network has tested. 
    </p>

    <p>
      Mentorship pilots ran in the first half of 2020 - pairing a cohort of women, first nations,
      and non-binary campaigners, organisers, and communcations mentees with amazing
      progressive technologists. Skills based trainings were trialled and refined - focussing on 
      React and SQL, which were identified as key areas organisations wanted to see staff cultivate
      skills in.
    </p>

<p>
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
