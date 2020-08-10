import React from "react";
import { Box, Flex, Button, Image, Heading } from "rebass";
import { Input, Label, Textarea } from "@rebass/forms";

import PageHeading from "../components/PageHeading";
import Container from "../components/Container";
import Bg, { styles } from "../components/Bg";

const Policy = () => (
  <>
    <Box
      width={[1]}
      as="form"
      onSubmit={(e) => e.preventDefault()}
      pr={[0, 5]}
    >
      <p>
        <em>
          <strong>
            <span id="span_id_web_address">www.progtech.net.au</span>
          </strong>
        </em>{" "}
      </p>

      <p>
        Effective Date: <span id="span_id_effective_date">10/08/2020</span>
      </p>
      <p>
        <br />
        The Progressive Tech Network (ProgTech) is a growing collective of progressive organisations from across our movements teaming up on tech - including unions, not for profits, enviro groups, and community organisations.
      </p>
      <p>
ProgTech is committed to protecting your privacy and providing you with information and services relevant to you. ProgTech complies with the Privacy Act 1988 (Cth) (Privacy Act) and the Australian Privacy Principles (APPs). This Privacy Policy (Policy) should be read in conjunction with the Privacy Act and the APPs.
      </p>
      <p>
        <strong>
          <br />
          When we collect data:
        </strong>
      </p>
      <p>
        This policy applies to personal information ProgTech collects from (but not limited to) the following:
        <ul>
        <li>When you apply to join the network e.g. through our website or a form;</li>
        <li>When you register to attend a ProgTech event, training, or program;</li>
        <li>When you request to sign up to our community e.g. through our website or Slack;</li>
        <li>When you email us;</li>
        <li>When we speak to you on the phone or in person; and/or</li>
        <li>In writing.</li>
        </ul>
      </p>
      <p>
      This policy also applies to personal information about you that the ProgTech Network collects from partner organisations or any other third party.
      </p>
      <p>
        <strong>
        <br />
        What we collect:
        </strong>
      </p>
      <p>
        Depending upon the circumstances, you may provide to ProgTech, and ProgTech may collect, information such as, but not limited to:
        <ul>
        <li>Your name, email and phone number</li>
        <li>Personal information such as gender, race and age, where it is relevant</li>
        <li>The organisation you work or volunteer for, and your role there</li>
        <li>Records of your participation in our events</li>
        <li>Records of your areas of interest e.g. skills that you already have or want to learn</li>
        <li>Information about your organisation’s participation in our events and network</li>
        <li>Information about your organisation’s tech capacity and needs</li>
        </ul>
     </p>
     <p>
      <strong>
      <br />
      Why we collect it:
      </strong>
      </p>
    <p><ul>
    <li>To promote relevant opportunities of interest to you e.g. through email, phone calls, SMS, social media, or other means</li>
    <li>To manage incoming inquiries (e.g. applications to take part in programs and other requests), and ensure we have responded appropriately</li>
    <li>To evaluate our outcomes and impact against our mission, including on individual, organisational and sector-wide capacity</li>
    <li>To provide insights to support our planning and design relevant programs</li>
    <li>To provide information to members of the network about the capacity and needs of the Australian progressive tech sector</li>
    </ul>
    <p>
    <strong>
    <br />
    Who we share your information with:
    </strong>
    </p>
    <p>
    We do not sell or rent your contact information, personal data or organisational data to any third parties. We do not share or distribute data unless specifically stated so, and never without your explicit consent.
    </p>
    <p>
    ProgTech may disclose data, in connection with or to further the purposes outlined above, to:
    <ul>
    <li>affiliated partner or member organisations e.g. we may provide your information to partner or member organisations to enable us to deliver network programs or events;</li>
    <li>otherwise as you have consented; and/or</li>
    <li>otherwise as required by law.</li>
    </ul> </p>
    <p>
    By providing information to ProgTech, you consent to us transferring it to such other organisations.
    </p>
    <p>
    If we are required by law to disclose any information that you have submitted, we will attempt to provide you with prior notice (unless we are prohibited or it would be futile) that a request for your information has been made in order to give you an opportunity to object to the disclosure. If you do not challenge the disclosure request, we may be legally required to turn over your information.
    </p>
    <p>
    <strong>
    <br />
    Where we store data:
    </strong>
    </p>
    <p>
    Wherever reasonably practicable ProgTech holds electronic personal and organisational information on servers that are password protected and login secured. ProgTech will take reasonable steps to ensure that any third party providers comply with the APPs, or are subject to a law or scheme that is at least substantially similar to the way in which the APPs protect information.
    </p>
    <p>
    We will always take reasonable steps to protect personal information that we hold, to protect it from misuse, interference and loss, as well as unauthorised access, modification or disclosure. Where we no longer need personal information for any purpose, we will destroy the information or ensure that it is de-identified.
    </p>
    <p>
    <strong>
    <br />
    Control of your data:
    </strong>
    </p>
    <p>
    If you no longer wish to receive direct marketing or other communications, you may request at any time to cancel your consent to such communications by communicating in writing to us at <a href="mailto:hello@progtech.net.au">hello@progtech.net.au</a>. You may also unsubscribe from our email communications by clicking the “unsubscribe” button at the bottom of our emails.
    </p>
    <p>
    You have the right to request access to your personal information and request that it be updated or corrected. ProgTech may require that you provide proof of identity in order to seek access to your personal information and/or that of your employer. We will update the data we have on you, e.g. correcting an email address or employer. Given our limited resources, we ask for your patience as this may take up to 30 days to process. We will provide access to a listing of the personal information we have collected within 30 days.
    </p>
    <p>
    To request access to, correction of, or updating of any personal information held about you, if you have any questions or concerns about your data, or if you would like to make a privacy complaint you can email us at <a href="mailto:hello@progtech.net.au">hello@progtech.net.au</a>. Please provide all details about your complaint as well as any supporting documentation. You should also lodge a complaint with the <a href="https://www.oaic.gov.au/privacy/privacy-complaints/">Office of the Information Commissioner</a>.
    </p>
    <p>
    <strong>
    <br />
    Variations to this policy:
    </strong>
    </p>
    <p>
    This policy may be varied from time to time and an updated version will be posted on our website. Please check our websites regularly to ensure that you have the most recent version of the policy. If you have any questions about our policy listed above, please contact <a href="mailto:hello@progtech.net.au">hello@progtech.net.au</a>.
    </p>
  </>
);
const App = (props) => {
  return (
    <Flex flexWrap="wrap">
      <PageHeading heading="Privacy Policy" />
      <Box width={1} p={[4, 5]}>
        <Container maxWidth={1200}>
          <Policy />
          {/* <Box width={[1, 1 / 2]} flexWrap="wrap">
            <Image height="auto" src="/images/4.jpg" />
          </Box> */}
        </Container>
      </Box>
    </Flex>
  );
};

export default App;
