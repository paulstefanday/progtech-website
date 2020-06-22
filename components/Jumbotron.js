import React from "react";
import { Box, Flex, Heading, Button } from "rebass";

import Bg from './Bg';

const Jumbotron = ({ children }) => (
    <Box className="gradient" width={1} sx={{ position: "relative", overflow: "hidden" }}>
      <Bg url="/images/2.jpg" />
      <Box
        px={[4, 5]}
        py={[5, 7]}
        width={1}
        sx={{
          zIndex: 1,
          position: "relative",
        }}
      >
        {children}
      </Box>
    </Box>
  );

  export default Jumbotron