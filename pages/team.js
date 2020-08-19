import React from "react";
import { Box, Flex, Button, Heading, Image } from "rebass";
import { Input, Label, Textarea } from "@rebass/forms";

import PageHeading from "../components/PageHeading";
import Container from "../components/Container";
import Bg, { styles } from "../components/Bg";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const colors = ["purple", "orange", "green", "pink"];

const list = [
  {
    url: "/images/team-clo.jpg",
    name: "Clodagh Schofield",
    bio: (
      <>
        <p>
          Clodagh Schofield is a highly enthusiastic nerd with a passion for
          getting the tech we need to scale our movements into the hands of
          every progressive activist that needs it.
        </p>
        <p>
          She's currently excited about building a network to share tech skills
          & tools across our movements. She works as the AYCC's Tech & Data
          Manager, and on the team at the Progressive Tech Network.
        </p>
      </>
    ),
  },
  {
    url: "/images/team-harry.jpg",
    name: "Harry Cossar-Gilbert",
    bio: (
      <>
        <p>
          Harry is a progressive technologist and lawyer, with a background in
          developing lightweight technological solutions for small to medium
          campaigning organisations.
        </p>
        <p>
          Harry leads finance, governance, and fundraising for ProgTech, and
          brings both expertise and passion for climate justice to the team.
        </p>
      </>
    ),
  },
  {
    url: "/images/team-moira.jpg",
    name: "Moira Cully",
    bio: (
      <>
        <p>
          Moira is a digital strategist and technologist specialising in
          supporting unions in best practice digital recruitment and
          campaigning. She leads one of the most effective technological
          collaborations between Australian unions, Megaphone, facilitating
          digital growth and campaign impact across the sector.
        </p>
        <p>
          Moira brings expertise in network organising and using digital to
          scale the union movement, and leads the training program and
          institutional fundraising work of ProgTech.
        </p>
      </>
    ),
  },
  {
    url: "/images/team-edie.jpg",
    name: "Edie Shepherd",
    bio: (
      <>
        <p>
          Edie Shepherd is a proud Wiradjuri and Noongar woman and senior
          organiser at Original Power. She has worked as a youth worker,
          community organiser and campaigner within Aboriginal and Torres Strait
          Islander communities, as well as in broader social and economic
          justice spaces.
        </p>
        <p>
          Before OP, Edie has spent 3 years working as an organiser in the trade
          union movement, running Aboriginal and Torres Strait Islander
          organising and political capacity building programs in Victoria.
        </p>
      </>
    ),
  },
  {
    url: "/images/team-paul.jpg",
    name: "Paul Day",
    bio: (
      <>
        <p>
          Paul Day is a full stack developer specialising in progressive
          technology in Australia. He brings his expertise in building
          best-in-class tools that make digital fundraising accessible to
          grassroots groups and small organisations through his work at Chuffed
          and Raisely.
        </p>
        <p>
          Paul focuses on identifying areas where shared challenges offer
          potential for building shared solutions - alongside running solidarity
          tech support and training. He's excited to grow the strong progressive
          tech community to further support organisations in doing good work.
        </p>
      </>
    ),
  },
  {
    url: "/images/team-sara.jpg",
    name: "Sara Smylie",
    bio: (
      <>
        <p>
          Sara is a National Coordinator of New Organising at United Workers
          Union. United Workers Union members - including cleaners, early
          childhood educators and care workers - are at the coalface of rising
          inequality and changes to the nature of work, and are at the forefront
          of fighting back.
        </p>
        <p>
          {" "}
          Sara trials new approaches to organising, using tech to allow workers
          in disparate sites to connect, take action and build power
          collectively.
        </p>
      </>
    ),
  },
];

const Team = () => (
  <Flex width={[1]} flexWrap="wrap">
    {list.map(({ url, name, bio }, index) => (
      <Box
        textAlign="center"
        width={[1, 1 / 2, 1 / 3]}
        minHeight={230}
        mb={5}
        sx={styles}
      >
        <div style={{ width: "100%", height: "300px", overflow: "hidden" }}>
          <Image src={url} mb={2} width="100%" />
        </div>
        <br />
        <Heading variant={`highlight.${colors[getRandomInt(4)]}`}>
          {name}
        </Heading>
        <Box textAlign="left" p={3}>{bio}</Box>
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
