import React, { useState } from "react";
import { Box, Flex, Button, Text, Image } from "rebass";
import { Input, Label, Textarea } from "@rebass/forms";
import fetch from "isomorphic-unfetch";
import Router from "next/router";
import { ToastContainer, toast } from 'react-toastify';

import PageHeading from "../components/PageHeading";
import Container from "../components/Container";

const Form = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [buttonText, setButtonText] = useState("Send");

const submit = async (e) => {
  e.preventDefault()
  const body = {
    name, email, data: { message }, form: "CONTACT" 
  }
  const url = `${window.location.protocol}://${window.location.hostname}${
  window.location.port && ":" + window.location.port
}`;
  setButtonText("Loading...");
  try {
    const res = await fetch(`/api/submission`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    setButtonText("Success");
    toast.dark("Thanks for your submission")
    setName("");
    setEmail("");
    setMessage("");
  } catch (error) {
    console.error(error);
    setButtonText("An Error Occured");
  }
};

  return (
    <>
      <Box
        width={[1, 1 / 2]}
        pr={5}
        as="form"
        onSubmit={submit}
        py={3}
      >
        <p style={{ marginTop: 0 }}>
          Thoughts? Questions? Feedback? Get in touch via{" "}
          <a href="mailto:hello@progtech.net.au">email</a> or fill out this
          form.
        </p>
        <br />
        <Flex flexWrap="wrap" mb={3}>
          <Box width={1 / 2}>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" defaultValue="" value={name} onChange={e => setName(e.target.value)} />
          </Box>
          <Box width={1 / 2}>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" defaultValue="" value={email} onChange={e => setEmail(e.target.value)} />
          </Box>
          <Box width={1}>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" value={message} onChange={e => setMessage(e.target.value)} />
          </Box>
          <Box textAlign="right" width={1}>
            <Button width={1 / 2}>{buttonText}</Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

const App = (props) => {
  return (
    <Flex flexWrap="wrap">
      <PageHeading heading="Contact Us" />
      <Flex p={5} width={1}>
        <Container maxWidth={1200}>
          <Form />
          <Box width={[1, 1 / 2]} flexWrap="wrap">
            <Image height="auto" src="/images/generic-1.jpg" />
          </Box>
        </Container>
      </Flex>
    </Flex>
  );
};

export default App;
