import React, { useState } from "react";
import { Box, Flex, Link, Image, Button } from "rebass";
import NextLink from "next/link";

const styles = {
  alignItems: "center",
  flexDirection: "row",
  zIndex: "100000",
  position: "fixed",
  width: "100%",
  transition: "background-color 200ms linear",
  top: 0,
  left: 0,
  p: 2,
  img: {
    width: ["100px", "150px"],
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
    cursor: "pointer",
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
};

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const menu = [
    { title: "About", href: "/overview" },
    { title: "Projects", href: "/projects" },
    { title: "Team", href: "/team" },
    { title: "Join", href: "/join" },
    { title: "Contact Us", href: "/contact" },
    
  ];

  if (!open)
    return (
      <>
      <Box mx="auto" />
        <Button onClick={() => setOpen(true)}>Menu</Button>
      </>
    );

  return (
    <Flex
      bg="white"
      flexDirection="column"
      p={5}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        textAlign: "center",
      }}
    >
      <Button
        onClick={() => setOpen(false)}
        sx={{ position: "fixed", top: "15px", right: "10px" }}
      >
        Close
      </Button>
      {menu.map((item) =>
        item.target ? (
          <Link  width={1} {...item}>
            {item.title}
          </Link>
        ) : (
            <Box py={2}><Link width={1} {...item}>{item.title}</Link></Box>
        )
      )}
    </Flex>
  );
};

const DesktopNav = () => (
  <>
    <Box mx="auto" />
    <Link className="dropdown" href="/overview">
      About
      <Box className="dropdown-content">
        
        <NextLink href="/overview">
          <a>Overview</a>
        </NextLink>
  
        {/* <Link href="#!">News</Link> */}
        
        <NextLink href="/partners">
          <a>Partners</a>
        </NextLink>
        
        <NextLink href="/team">
          <a>Team</a>
        </NextLink>
        <NextLink href="/contact">
          <a>Contact Us</a>
        </NextLink>
      </Box>
    </Link>
    <Link className="dropdown" href="#!">
      Programmes
      <Box className="dropdown-content">
        
        <Link target="_blank" href="https://2020report.progtech.net.au">
          Sector Consultation
        </Link>

        <NextLink href="/projects">
        <a>Projects</a>
        </NextLink>

        <NextLink href="/trainings">
        <a>Trainings and Events</a>
        </NextLink>

        <NextLink href="/coaching">
        <a>Tech Help Please Coaching Day</a>
        </NextLink>
    

       {/* <Link href="/events">Workshops & events</Link> */}
              {/* <Link href="/sharecode">Share Code</Link>  */}

               {/*<Link href="/submitaproject">Submit a project</Link>*/}
      </Box>  

  <Link className="dropdown" href="offers">
      Member Offers
  </Link>
    <Link
      className="active"
      href="/join"
    >
      Join
    </Link>
  </>
);

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
      <Flex
        sx={{
          ...styles,
          ...(this.state.bg === "white" && {
            boxShadow: "0 2px 20px rgba(0, 0, 0, 0.255)",
          }),
        }}
        bg={this.state.bg}
      >
        <NextLink href="/">
          <Image className="logo" src="/logo.png" />
        </NextLink>
        {this.props.isMobile ? <MobileNav /> : <DesktopNav />}
      </Flex>
    );
  }
}

export default Nav;
