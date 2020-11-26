import React from "react";
import { Box, Flex, Button, Image } from "rebass";
import { Input, Label, Textarea } from "@rebass/forms";

import PageHeading from "../components/PageHeading";
import Container from "../components/Container";
import Bg, { styles } from "../components/Bg";

const list = [
  
  { image:"/images/logo-uwu.png", link: "https://www.unitedworkers.org.au/" },
  { image:"/images/logo-vthc.png", link: "https://www.weareunion.org.au/" },
  { image:"/images/logo-ap.png", link: "https://www.australianprogress.org.au/" },
  { image:"/images/logo-actionskills.png", link: "https://actionskills.co/" },
  { image:"/images/logo-actu.png", link: "https://www.actu.org.au/" },
  { image:"/images/logo-asu-nsw-act.png", link: "http://www.asu.asn.au/" },
  { image:"/images/logo-aycc.png", link: "https://www.aycc.org.au/" },
  { image:"/images/logo-codenation.png", link: "https://www.codenation.com/" },
  { image:"/images/logo-cpsu.png", link: "https://www.cpsu.org.au/" },
  // { image:"/images/logo-cpsuvic.jpg", link: "https://www.cpsuvic.org/" },
  { image:"/images/logo-dic.png", link: "https://democracyincolour.org/" },
  { image:"/images/logo-essential.png", link: "https://essentialmedia.com.au/" },
  { image:"/images/logo-foe.png", link: "https://www.foe.org.au/" },
  { image:"/images/logo-gratafund.png", link: "https://www.gratafund.org.au/" },
  { image:"/images/logo-newmode.png", link: "https://www.newmode.net/" },
  // { image:"/images/logo-originalpower.png", link: "https://www.originalpower.org.au/" },
  { image:"/images/logo-principleco.png", link: "https://www.principleco.com.au/" },
  // "/images/logo-raisely.png",
  { image:"/images/logo-seed.png", link: "https://www.seedmob.org.au/" },
  { image:"/images/logo-uih.png", link: "https://www.uhub.org.au/" },
  { image:"/images/logo-tippingpoint.png", link: "https://www.tippingpoint.org.au/" },
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
  <Flex width={[1]} flexWrap="wrap">
    {list.map(({ link, image }) => (
      
      <Box width={[1/2, 1/5]} minHeight={230} sx={styles}>
        <a target="_blank" href={link}><Image src={image} width={[1]} opacity={1}  /></a>
        {/* <a target="_blank" style={{ width: "100%", height: "100%", position: "absolute"}} href={link}></a> */}
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
          {/* <Description /> */}
          <Partners />
        </Container>
      </Box>
    </Flex>
  );
};

export default App;
