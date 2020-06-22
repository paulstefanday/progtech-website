import React from "react";
import { Box, Flex, Link, Image } from "rebass";

const styles = {
  alignItems: "center",
  flexDirection: ["column", "row"],
  zIndex: "100000",
  position: ["inline-block", "fixed"],
  width: "100%",
  transition: "background-color 200ms linear",
  top: 0,
  left: 0,
  p: 2,
  img: {
    width: "150px",
  },
  a: {
    variant: "buttons.primary",
    bg: "transparent",
    letterSpacing: "2px",
    textTransform: "uppercase",
    fontWeight: 900,
    fontSize: 0,
    mr: 3,
    transition: "background-color 200ms linear",
    color: "inherit",
    textDecoration: "none",
    ":hover,:focus,&.active": {
      bg: "black",
      color: "white",
    },
  },
  "& .logo": {
    ":hover,:focus": {
      bg: "transparent",
    },
  },
  "& .dropdown-content a": {
    width: "100%",
    textAlign: "left",
    color: "black",
    ":hover,:focus,&.active": {
      bg: "rgba(255,255,255,0.3)",
    },
  },
}

class Nav extends React.Component {
    state = { bg: "transparent" };
  
    componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
    }
  
    handleScroll = () => {
      if (window.pageYOffset > 50) {
        if (this.state.bg === "transparent") {
          this.setState({ bg: "white" });
        }
      } else {
        if (this.state.bg === "white") {
          this.setState({ bg: "transparent" });
        }
      }
    };
  
    render() {
      return (
        <Flex sx={{ 
          ...styles, 
          ...this.state.bg === "white" && { boxShadow:"0 2px 20px rgba(0, 0, 0, 0.255)" } 
        }} bg={this.state.bg}>
          <Link className="logo" href="/">
            <Image src="/logo.png" />
          </Link>
          <Box mx="auto" />
          <Link className="dropdown" href="/overview">
            About
            <Box className="dropdown-content">
              <Link href="/overview">Overview</Link>
              {/* <Link href="#!">News</Link> */}
              <Link href="/partners">Partners</Link>
              <Link href="/team">Team</Link>
              <Link href="/contact">Contact Us</Link>
            </Box>
          </Link>
          <Link className="dropdown" href="#!">
            Programmes
            <Box className="dropdown-content">
              <Link href="/mentorship">Mentorship</Link>
              <Link href="/events">Workshops & events</Link>
              <Link href="/sharecode">Tools & Code</Link>
            </Box>
          </Link>
          <Link className="active" href="/join">
            Join
          </Link>
        </Flex>
      );
    }
  }

  export default Nav