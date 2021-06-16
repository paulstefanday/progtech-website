import React, { useState } from "react";
import { Box, Flex, Button, Heading, Link } from "rebass";
import { Input, Label, Textarea } from "@rebass/forms";
import { ToastContainer, toast } from "react-toastify";

import PageHeading from "../components/PageHeading";
import Container from "../components/Container";

const Description = () => (
  <Box width={1}>
    <Heading variant="highlight.pink">
      What does it mean to be a member organisation of the Progressive Tech Network?
    </Heading>
    <p>
      Progressive Tech is made up of progressive campaigning organisations, grassroots groups, and the progressive agencies and vendors who support us.   </p> 
     
     <p>
       Membership includes access to our online community, events, coaching, resources, research and product tools with training free or heavily discounted. 
      Partners also have access to our community events, research and our Slack community. They also will have opportunities to work on partner-specific projects that are purpose-aligned to Progressive Tech.
      Please note that Progressive is for progressive campaigning and movement building organisations, and the technologists and vendors that support us - apolitical businesses contribute great things, but aren't a fit for this network. Progressive Tech is also not a network for political parties.
    </p>

     <Heading variant="highlight.orange">
      Can you tell me more?
    </Heading>
      
     <p>
     As part of the Progressive Tech Network, you’ll have access to our toolbox:
     </p>
        
     <p><strong>Community </strong></p>
     <p>
    Access to community events and networking including regular in-person meet ups, a Slack community of over 130+ tech, digital and communication practitioners and leadership roundtables. 
     </p>  

     <p><strong>Coaching </strong></p>
     <p>
   Practical training to level up tech and digital skills specifically in data, strategy and digital organising.
     </p>  

     <p><strong> Training </strong></p>
     <p>
    Solving tech and digital challenges through regular Tech Help Please coaching days
     </p>  
    
     <p><strong> Resources </strong></p>
     <p>
        A library of shared resources and research including a Progressive Tech tool database and scoping opportunities for movement-wide tech leading up to the federal election.
     </p> 

     <p><strong> Product </strong></p>
     <p>
        Investing in better progressive tech products through research, product development and building strategic partnerships
     </p> 
    
    <Heading variant="highlight.purple">
    Membership Contribution 
    </Heading>
     
     <p>
      Progressive Tech is committed to equity by providing free access to our membership offering for any activist, cause and not-profit that has limited resources. We ask that members that have financial resources to contribute a membership fee to keep us running.
     </p> 
     
      <ol style={{ textAlign: "left"}}>
            <li style={{ marginBottom: "15px" }}>First nations, disability rights, racial justice, refugee and LGBTIQ+ organisations, causes and individual activist | Free </li>
            <li style={{ marginBottom: "15px" }}>For non-profits with an annual budget of less than $500,000 | Free </li>
            <li style={{ marginBottom: "15px" }}>For non-profits with an annual budget between $500,000 - $1 million  | $250 + GST </li>
            <li style={{  marginBottom: "15px"}}>For non-profits with an annual budget between $1-3 million. | $750 + GST  </li>
            <li style={{ marginBottom: "15px" }}>For non-profits with an annual budget between $3 million plus | $5,000 + GST</li>
        </ol> 

    


    <br />
    <br />
    {/* <Heading variant="highlight.orange">
      Examples of what you could give, and could gain
    </Heading>
    <ul>
      <li>
        Apps and tools you’ve built (think doorknocking apps, dialling apps,
        metrics tools)
      </li>
      <li>
        Maps of your tech stack (all your tools and websites, and how they
        connect) so that other teams considering your tools can ask your advice
      </li>
      <li>
        Your expertise, running a one off training, a series, or mentoring
        someone one on one
      </li>
      <li>Spreadsheets of MP contact details</li>
      <li>
        Spreadsheets with superb formulas in them useful for other campaigners,
        organisers, ops workers, techies, fundraisers
      </li>
      <li>
        Your time, or that of other techies or tech volunteers in your
        community, to help other organisations and campaigners build, deploy,
        and troubleshoot tech
      </li>
      <li>
        Your time organising the community - running induction calls for
        volunteers, surveying new organisations, reaching out to campaigning
        groups of marginalised people to see where our community can support
        their work
      </li>
    </ul>
    < br/>< br/> */}
    <Heading variant="highlight.green">
      Once you have expressed interest
    </Heading>
    <p>
      A member of the ProgressiveTech team will get in touch to discuss further. If
      your organisation and the network are a good fit, we'll then form a
      membership agreement that outlines in detail what your organisation can
      share, and the key ways the network will support you in the tech you need
      to win and better our world.
    </p>
    <p>
      If your membership application is accepted, you and the tech & digital
      staff, volunteers, and activists that make up your organisation will be
      invited to join our Slack community, our shared library of code, tools,
      and resources, and upcoming trainings and events.
    </p>
    <p>Looking forward to taking these next steps together.</p>
  </Box>
);

const Form = () => (
  <Box width={[1]} py={3} mb={5}>
    <Heading width={1} variant="highlight.green">
      I want to join as a:
    </Heading>
    <Flex flexWrap="wrap">
      <Box width={[1 / 2]} pr={3}>
        <Link href="https://progtech.typeform.com/to/pfsA07mJ" target="_blank" variant="buttons.primary" pt={4} pb={4} width={1}>
            Partner
        </Link>
      </Box>
      <Box width={[1 / 2]}>
        <Link href="https://progtech.typeform.com/to/QGD6dgX2" target="_blank" variant="buttons.primary"  pt={4} pb={4} width={1}>
            Skilled Volunteer
        </Link>
      </Box>
    </Flex>
  </Box>
);

const Apply = () =>  <Link href="https://progtech.typeform.com/to/pfsA07mJ" target="_blank" variant="buttons.primary" pt={4} pb={4} width={1}>
Apply to join
</Link>

const App = (props) => {
  return (
    <Flex flexWrap="wrap">
      <PageHeading heading="Join the network - Expression of interest" />
      <Flex p={[4, 5]} width={1}>
        <Container maxWidth={1200}>
        <Box width={[1, 1/2]}>
          <Description />
          <Apply />
          </Box>
          <Box display={["none", "block"]} width={[1, 1/2]} pl={5}>
          <Apply />
          </Box>
        </Container>
      </Flex>
    </Flex>
  );
};

// const Form = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [organisation, setOrganisation] = useState("");
//   const [role, setRole] = useState("");
//   const [keyChallenges, setKeyChallenges] = useState("");
//   const [wishYouCouldDo, setWishYouCouldDo] = useState("");
//   const [keyBenefits, setKeyBenefits] = useState("");
//   const [canOffer, setCanOffer] = useState("");
//   const [buttonText, setButtonText] = useState("Join");

//   const submit = async (e) => {
//     e.preventDefault();
//     const body = {
//       name,
//       email,
//       data: { role, organisation, keyChallenges, wishYouCouldDo, keyBenefits, canOffer },
//       form: "PARTNER",
//     };
//     const url = `${window.location.protocol}://${window.location.hostname}${
//       window.location.port && ":" + window.location.port
//     }`;
//     setButtonText("Loading...");
//     try {
//       const res = await fetch(`/api/submission`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(body),
//       });
//       const data = await res.json();
//       setButtonText("Success");
//       toast.dark("Thanks for your submission")
//     } catch (error) {
//       console.error(error);
//       setButtonText("An Error Occured");
//     }
//   };
//   return (
//     <>
//       <Description />
//       <Box width={[1, 1 / 2]} as="form" onSubmit={submit} py={3}>
//         <Flex flexWrap="wrap" mb={3}>
//           <Box width={1 / 2}>
//             <Label htmlFor="name">Name</Label>
//             <Input
//               id="name"
//               name="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </Box>
//           <Box width={1 / 2}>
//             <Label htmlFor="email">Email</Label>
//             <Input
//               id="email"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </Box>
//           <Box width={1 / 2}>
//             <Label htmlFor="organisation">Organisation Name</Label>
//             <Input
//               id="organisation"
//               name="organisation"
//               value={organisation}
//               onChange={(e) => setOrganisation(e.target.value)}
//             />
//           </Box>
//           <Box width={1 / 2}>
//             <Label htmlFor="role">Role</Label>
//             <Input
//               id="role"
//               name="role"
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//             />
//           </Box>
//           <Box width={1}>
//             <Label htmlFor="keyChallenges">
//               What are the key challenges your organisation faces with tech and
//               data?
//             </Label>
//             <Textarea
//               id="keyChallenges"
//               name="keyChallenges"
//               value={keyChallenges}
//               onChange={(e) => setKeyChallenges(e.target.value)}
//             />
//           </Box>
//           <Box width={1}>
//             <Label htmlFor="wishYouCouldDo">
//               What are the things you wish you could do?
//             </Label>
//             <Textarea
//               id="wishYouCouldDo"
//               name="wishYouCouldDo"
//               value={wishYouCouldDo}
//               onChange={(e) => setWishYouCouldDo(e.target.value)}
//             />
//           </Box>
//           <Box width={1}>
//             <Label htmlFor="keyBenefits">
//               What are the key ways your organisation could benefit from
//               collaboration with other organisations and the network?
//             </Label>
//             <Textarea
//               id="keyBenefits"
//               name="keyBenefits"
//               value={keyBenefits}
//               onChange={(e) => setKeyBenefits(e.target.value)}
//             />
//           </Box>
//           <Box width={1}>
//             <Label htmlFor="canOffer">
//               What are the key things your organisation has to offer and share
//               with other progressive organisations and the network?
//             </Label>
//             <Textarea
//               id="canOffer"
//               name="canOffer"
//               value={canOffer}
//               onChange={(e) => setCanOffer(e.target.value)}
//             />
//           </Box>
//           <Box textAlign="right" width={1}>
//             <Button width={1 / 2}>{buttonText}</Button>
//           </Box>
//         </Flex>
//       </Box>
//     </>
//   );
// };

export default App;
