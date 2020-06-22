import React from "react";
import { Box, Flex, Button, Image, Heading } from "rebass";
import { Input, Label, Textarea } from "@rebass/forms";

const JoinNewsletter = ({ inverse }) => (
  <>
    <Input
      height="40px"
      width={3 / 5}
      mb={0}
      sx={{
        bg: inverse ? "white" : "black" ,
        borderBottom: `1px solid ${inverse ? "black" : "white"}`,
      }}
      id="email"
      name="email"
      type="email"
      placeholder="Your Email"
    />
    <Button width={2 / 5} variant={inverse ? "primary" : "secondary"} height="40px">
      Join Mailing List
    </Button>
  </>
);

export default JoinNewsletter;
