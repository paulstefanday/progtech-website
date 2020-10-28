/* eslint no-unused-vars: 0 */
import React, { useState } from "react";
import { Flex, Heading, Button, Box } from "rebass";
import { Input } from "@rebass/forms";
// import dynamic from "next/dynamic";
import { ToastContainer, toast } from "react-toastify";
import Head from "next/head";

import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Programmes from "../components/Programmes";
import Slider from "../components/Slider";
import Partners from "../components/Partners";
import SingleAction from "../components/SingleAction";
import Link from "next/link";


const JumboContent = () => {
  // const [email, setEmail] = useState("");
  // const [buttonText, setButtonText] = useState(
  //   "Hear about next steps"
  // );

  // const submit = async (e) => {
  //   e.preventDefault();

  //   const body = {
  //     email,
  //     form: "NEWSLETTER",
  //   };
  //   const url = `${window.location.protocol}://${window.location.hostname}${
  //     window.location.port && ":" + window.location.port
  //   }`;
  //   setButtonText("Loading...");
  //   try {
  //     const res = await fetch(`/api/submission`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(body),
  //     });
  //     const data = await res.json();
  //     setButtonText("Success");
  //     setEmail("");
  //     toast.dark("Thanks. We will be in touch.");
  //   } catch (error) {
  //     console.error(error);
  //     setButtonText("An Error Occured");
  //   }
  // };
  return (
    <Container maxWidth={1200}>
      <Box width={1}>
        <Heading fontSize={[25, 55]} mb={0} sx={{ maxWidth: "500px" }}>
        We’re teaming up on tech to win 
        </Heading>
        <Heading mb={4} fontSize={[14, 25]} sx={{ maxWidth: "700px" }}>Join our national collective of progressive organisations</Heading>
      </Box>
      <Box width={1} sx={{ maxWidth: "500px" }}>
      <Link href="/join"><Button width={[1/3]} variant="primary">Join Us</Button></Link>
        {/* <Flex
          flexWrap="wrap"
          sx={{
            boxShadow: "0 2px 20px rgba(0, 0, 0, 0.225)",
            maxWidth: "500px",
          }}
        >
          <Input
            bg="white"
            width={[1, 1 /2]}
            mb={0}
            sx={{ borderBottom: 0 }}
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button onClick={submit} width={[1, 1/2]} variant="primary">
            {buttonText}
          </Button>
        </Flex> */}
      </Box>
    </Container>
  );
};

const App = (props) => {
  return (
    <Flex flexWrap="wrap">
      <Head>
        <title>ProgTech Network Australia</title>
      </Head>
      <Jumbotron>
        <JumboContent />
      </Jumbotron>
      <SingleAction />
      <Programmes />
      {/* <Slider content={sliderContent} /> */}
      {/* <Partners /> */}
      {/* <Container maxWidth={1200}>
        <Box width={1}>
          <ReactTypeformEmbed url="https://form.typeform.com/to/C8Sthe" />
        </Box>
      </Container> */}
      
    </Flex>
  );
};

export default App;
