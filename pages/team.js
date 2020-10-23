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
    url: "/images/team-sara.png",
    name: "Sara Smylie",
    bio: (
      <>
        <p>
          Sara is a National Coordinator of New Organising at United Workers Union. United Workers Union members - including cleaners, early childhood educators and care workers - are at the coalface of rising inequality and changes to the nature of work, and are at the forefront of fighting back.
        </p>
        <p>
          Sara trials new approaches to organising, using tech to allow workers in disparate sites to connect, take action and build power collectively.
        </p>
      </>
    ),
  },
  {
    url: "/images/team-edie.png",
    name: "Edie Shepherd",
    bio: (
      <>
        <p>
        Edie Shepherd is a proud Wiradjuri and Noongar woman and senior organiser at Original Power. She has worked as a youth worker, community organiser and campaigner within Aboriginal and Torres Strait Islander communities, as well as in broader social and economic justice spaces.
        </p>
        <p>
          Before Original Power, Edie spent 3 years working as an organiser in the trade union movement, running Aboriginal and Torres Strait Islander organising and political capacity building programs in Victoria.
        </p>
      </>
    ),
  },
  {
    url: "/images/team-bridger.png",
    name: "Bridger Rossiter",
    bio: (
      <>
        <p>
          Bridger brings extensive experience, working for 6 years as GetUp’s Digital Director alongside inspiration drawn from working on Bernie Sanders’ tech team to the Network Board.
          </p>
        <p>
          He’s driven by a vision of powerful movement scale tools possible only through strategic collaboration - and his contribution to the ProgTech lies in mapping shared need across the sector to pitch projects with widespread and scalable impact potential.
          </p>
      </>
    ),
  },
  {
    url: "/images/team-moira.png",
    name: "Moira Cully",
    bio: (
      <>
        <p>
          Moira is a data and digital organiser at Vic Trades Hall specialising
          in supporting unions in best practice digital campaigning.
        </p>
        <p>
        She leads one of the most effective technological
        collaborations between Australian unions, Megaphone, facilitating
        digital growth and campaign impact across the sector. Moira brings
        expertise in network organising and using digital to scale the union movement.
        </p>
      </>
    ),
  },
  {
    url: "/images/team-sofia.png",
    name: "Sofia Madden",
    bio: (
      <>
        <p>
          Using great stories, technology and targeted data, Sofia has established and run strategic and creative businesses for impact -- most recently (since 2014) as the Co-Founder and Managing Director of Principle Co., an agency dedicated to social change and engaging people with causes and purposes.
        </p>
        <p>
          Her clients over the last 10 years include leaders of Australia’s civil society, politics and Government, as well as corporate, sporting, and cultural organisations. Sofia has worked with these organisations, campaigns and individuals to use their position in society to create positive social change in-line with their values which have culminated in some of the largest social movements of the decade such as Marriage Equality for Australia.
        </p>
        <p>
        Sofia is an award-winning impact documentary producer, has worked in television, and holds a Bachelor of Communications from Western Sydney University.
        </p>
      </>
    ),
  },
  {
    url: "/images/team-tom.png",
    name: "Tom Sulston",
    bio: (
      <>
        <p>
          Tom is a principal consultant at ThoughtWorks, helping not-for-profit clients run software delivery projects. He’s also a board member of Digital Rights Watch and volunteers supporting activists create secure and robust systems.
        </p>
        <p>
          At ProgTech, Tom is piloting programs to channel private sector tech expertise into projects for organisations lead by people of colour, First Nations people, people with disabilities and queer and trans people.
        </p>
      </>
    ),
  },
  {
    url: "/images/team-elise.png",
    name: "Elise Dalley",
    bio: (
      <>
        <p>
          Elise is Impact Director at Australian Progress, leading projects including Progress Labs and the Economic Media Centre. Through Progress Labs, Elise has incubated 17 new advocacy organisations and continues to build their capacity for impact as a mentor, trainer and fundraising strategist.
        </p>
        <p>
          Elise brings her expertise in managing startups to fruition, alongside strong networks in the Australian progressive movement and a deep understanding of what the movement ecosystem needs to thrive.
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
          <Image src={url} mb={2} width="85%" />
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
