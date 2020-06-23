import React from "react";
import { Box, Flex, Button, Image, Heading } from "rebass";
import { Input, Label, Textarea } from "@rebass/forms";

import PageHeading from "../components/PageHeading";
import Container from "../components/Container";
import Bg, { styles } from "../components/Bg";

const Form = () => (
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
        Effective Date: <span id="span_id_effective_date">23/06/2020</span>
      </p>
      <p>
        <br />
        This privacy policy (hereinafter "Privacy Policy") deals with the
        protection of Your privacy while You use Our website which is
        hereinafter referred to as "the Product" and which is located at:{" "}
        <span id="span_id_web_address">www.progtech.net.au</span>{" "}
      </p>
      <p>
        The Product is owned and operated by:{" "}
        <span id="span_id_owner">Progtech Network Australia</span> <br />
        <br />
        We are committed to the protection of Your privacy while You use the
        Product. <br />
        <br />
        This Privacy Policy only applies to the Product. The Product may contain
        links to other websites or applications, but if that is the case, the
        Privacy Policy does not apply to any of those linked websites or
        applications.
        <br />
        <br />
        We gather certain information from users of the Product, so this Privacy
        Policy explains what information we collect, how we use it, and your
        rights in relation to it. <br />
        <br />
        By continuing to use the Product You acknowledge that You have had the
        chance to review and consider this Privacy Policy, and You acknowledge
        that You agree to it. This means that You also consent to the use of
        Your information and the method of disclosure as described in this
        Privacy Policy. If You do not understand the Privacy Policy or do not
        agree to it then please do not use the Product.
      </p>
      <p>
        <strong>
          <br />
          1. DEFINITIONS
        </strong>
      </p>
      <p>
        <em>"Company IP"</em> includes, but is not limited to, the contents,
        layout, design, colours, appearance, graphics and imagery of the
        Website, Content and Materials as well as all copyrights, trademarks,
        trade secrets, patents and other intellectual property contained in the
        Product, Content and Materials.
        <br />
        <br />
        <em>"Content"</em> means any content, writing, images, audiovisual
        content or other information published on the Product.
      </p>
      <p>
        <em>"Effective Date" </em>means the date that this Privacy Policy comes
        into force.
        <br />
        <br />
        <em>"Items" </em>means any and all of the Product, Content and Materials
        collectively.
        <br />
        <br />
        <em>"Materials"</em> means any materials, information or documentation
        that We may provide to You in connection with Your use of the Product
        including documentation, data, information developed by Us or owned by
        Us, and other materials which may assist in Your use of the Product.
      </p>
      <p>
        <em>"Parties"</em> means both You (the user of the Product) and Us (the
        owner of the Product) collectively.
        <br />
        <br />
        <em>"Personal Information" </em>means information that we obtain from
        You in connection with Your use of the Product.
      </p>
      <p>
        <em>"Privacy Policy" </em>means this privacy policy.
        <em>
          <br />
          <br />
          "Product"{" "}
        </em>
        means the website including all pages, all sub pages, all blogs, all
        forums, all other connected pages and all other connected internet
        content whatsoever, the home page or main page of which is located at:{" "}
        <span id="span_id_web_address">www.progtech.net.au</span>{" "}
      </p>
      <p>
        <em>"Third Party Links"</em> means links or references to websites other
        than the Website, to content other than the Content or to materials
        other than the Materials, none of which are controlled by Us. <br />
        <br />
        <em>"Us", "We", "Our"</em> or "<em>the Owner"</em> refers to{" "}
        <span id="span_id_owner">Progtech Network Australia</span>
        <br />
        <br />
        <em>"Us", "We", "Our"</em> or "<em>the Owner"</em> also includes any
        employees, affiliates, agents or other representatives of{" "}
        <span id="span_id_owner">Progtech Network Australia</span>
        <br />
        <br />
        <em>"You"</em> or <em>"Your" </em>refers to the user of the Website.
        <br />
        <br />
        <em>"Your Content" </em>means any Content posted to or added to the
        Website, Content or Materials by You or by somebody authorised by You or
        doing so on Your behalf.
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>
          <br />
          2. INTERPRETATION
        </span>
      </p>
      <p style={{ paddingLeft: "30px" }}>
        a. In this Privacy Policy, unless the context otherwise requires, the
        following rules of interpretation shall apply:
      </p>
      <p style={{ paddingLeft: "60px" }}>
        I. Words referring to one gender include every other gender.
        <br />
        <br />
        II. Words referring to a singular number include the plural, and words
        referring to a plural include the singular.
        <br />
        <br />
        III. Words referring to a person or persons include companies, firms,
        corporations, organisations and vice versa.
        <br />
        <br />
        IV. Headings and titles are included in this Privacy Policy for
        convenience only and shall not affect the interpretation of this Privacy
        Policy.
        <br />
        <br />
        V. Each Party must, at its own expense, take all reasonable steps and do
        all that is reasonably necessary to give full effect to this Privacy
        Policy and the events contemplated by it.
        <br />
        <br />
        VI. Any obligation on a Party not to do something includes an obligation
        not to allow that thing to be done.
      </p>
      <p>
        <strong>
          <br />
          3. TYPE OF INFORMATION AND HOW IT IS COLLECTED
        </strong>
      </p>
      <p style={{ paddingLeft: "30px" }}>
        a. When You use the Product, We may collect information from You through
        automatic tracking systems (such as information about your browsing
        preferences). <br />
        <br />
        b. In addition, We may collect information that You volunteer to Us
        (such as information that You provide during a sign up process or at
        other times while using the Product).
      </p>
      <p style={{ paddingLeft: "30px" }}>
        c. In order to access all of the features of the Product, You are
        required to register as a user. During the registration process, We
        collect some of Your Personal Information, in the following manner:
      </p>
      <p style={{ paddingLeft: "60px" }}>
        I. We will not collect information that identifies You personally,
        except when You specifically volunteer that information to Us.
      </p>
      <p style={{ paddingLeft: "60px" }}>
        II. The information that We will collect from You at registration
        includes:
      </p>
      <p style={{ paddingLeft: "90px" }}>
        <span id="span_id_registration">name, email, organisation, role</span>
      </p>
      <p style={{ paddingLeft: "60px" }}>
        III. By undergoing the registration process You consent to Us collecting
        Your Personal Information, including the Personal Information described
        in this clause. You also consent to Us collecting any other Personal
        Information as well as storing, using or disclosing Your Personal
        Information in accordance with this Privacy Policy.
      </p>
      <p style={{ paddingLeft: "30px" }}>
        d. In order to access some specific features of the Product, You are
        required to provide some Personal Information. During this process, We
        collect some of Your Personal Information, in the following manner:
      </p>
      <p style={{ paddingLeft: "60px" }}>
        I. We will not collect information that identifies You personally,
        except when You specifically volunteer that information to Us when using
        specific Product features. These specific Product features might
        include, but are not limited to:{" "}
      </p>
      <p style={{ paddingLeft: "90px" }}>
        A. receiving notifications by text message or email about events and
        promotions{" "}
      </p>
      <p style={{ paddingLeft: "90px" }}>
        B. receiving general emails from Us{" "}
      </p>
      <p dir="ltr" style={{ paddingLeft: "90px" }}>
        C.{" "}
        <span id="span_id_other_participation">
          Answering questions about the programs we run, giving feedback
        </span>
      </p>
      <p style={{ paddingLeft: "60px" }}>
        II. In addition to any Personal Information that You are required to
        provide in order to access these additional Product features, in some
        cases You may be required to provide more specific information. For
        example, in order to make purchases, You may need to provide credit card
        information, billing information and postal addresses.
      </p>
      <p>
        <strong>
          <br />
          4. COOKIES
        </strong>
      </p>
      <p style={{ paddingLeft: "30px" }}>
        a. Cookies are small files stored on Your computer or mobile device
        which collect information about Your browsing behaviour. <br />
        <br />
        b. Cookies do not access information which is stored on Your computer.
      </p>
      <p style={{ paddingLeft: "30px" }}>
        c. Cookies enable us to tailor our configurations to Your needs and
        preferences, in order to improve Your user experience.
        <br />
        <br />
        d. Most internet browsers accept cookies automatically, although You are
        able to change Your browser settings to control cookies, including
        whether or not You accept them, and how to remove them. You may also be
        able to set Your browser to advise You if You receive a cookie, or to
        block or delete cookies. However, if You do this, You may be prevented
        from taking full advantage of the Product.{" "}
      </p>
      <p>
        <strong>
          <br />
          5. HOW YOUR INFORMATION IS STORED
        </strong>
      </p>
      <p style={{ paddingLeft: "30px" }}>
        a. Please note that no systems involving the transmission of information
        via the internet, or the electronic storage of data, are completely
        secure. However, we take the protection and storage of Your Personal
        Information very seriously. We take all reasonable steps to protect Your
        Personal Information.
      </p>
      <p style={{ paddingLeft: "30px" }}>
        b. We use appropriate physical, digital, managerial and security systems
        to store Your Personal Information and to protect it against
        unauthorised access, destruction or disclosure.{" "}
      </p>
      <p>
        <strong>
          <br />
          6. COMBINING INFORMATION
        </strong>
      </p>
      <p style={{ paddingLeft: "30px" }}>
        a. We may combine, link or aggregate some of Your information in order
        to obtain a better understanding of Your requirements. This may enable
        Us to better design the Product and may also assist with Our business or
        administration requirements. <br />
        <br />
      </p>
      <p>
        <strong>7. HOW YOUR INFORMATION IS USED</strong>
      </p>
      <p style={{ paddingLeft: "30px" }}>
        a. We use Your Personal Information to help us improve your experience
        with Our Product. We may use Your Personal Information for purposes
        including but not limited to:
      </p>
      <p style={{ paddingLeft: "60px" }}>
        I. providing customer service to You.
      </p>
      <p style={{ paddingLeft: "60px" }}>
        II. marketing and advertising to You including both direct and indirect
        marketing and advertising and including marketing and advertising about
        products that may interest You based on Your personal preferences or
        demographics.{" "}
      </p>
      <p style={{ paddingLeft: "60px" }}>
        III. advising You about updates to the Product or related Items.{" "}
      </p>
      <p>
        <strong>
          <br />
          8. MERGER, RESTRUCTURE OR SALE OF OUR BUSINESS
        </strong>
      </p>
      <p style={{ paddingLeft: "30px" }}>
        a. Part or all of Our business may be merged, restructured or sold
        including but not limited to through an ordinary sale of business or of
        stock, a corporate reorganisation, a change in control, bankruptcy or
        insolvency proceedings. <br />
        <br />
        b. In the event that such a merger, restructure or sale occurs as
        described in the preceding sub-clause hereof, We may transfer Your
        Personal Information, including personally identifiable information, as
        part of that merger, restructure or sale.{" "}
      </p>
      <p>
        <br />
        <strong>9. EMAIL OPT IN/OUT</strong>
      </p>
      <p style={{ paddingLeft: "30px" }}>
        If You receive an email from Us in relation to the Product and would
        prefer not to receive such correspondence in the future, You may follow
        the instructions in the email to opt out of future correspondence. You
        may also contact Us, using the details at the bottom of this Privacy
        Policy, in order to opt out of future correspondence. We will make all
        reasonable efforts to promptly comply with Your requests. However, You
        may receive subsequent correspondence from Us while Your request is
        being handled.{" "}
      </p>
      <p>
        <strong>
          <br />
          10. ACCESSING, UPDATING AND CORRECTING YOUR PERSONAL INFORMATION
        </strong>
      </p>
      <p style={{ paddingLeft: "30px" }}>
        a. You have the right to request access to any of Your Personal
        Information which We are holding.
        <br />
        <br />
        b. You have the right to request that any of Your Personal Information
        which We are holding be updated or corrected.
      </p>
      <p style={{ paddingLeft: "30px" }}>
        c. In order to request access, an update or a correction to Your
        Personal Information, you may contact us using the details at the end of
        this Privacy Policy.{" "}
      </p>
      <p style={{ paddingLeft: "30px" }}>
        d. In addition, You should use the following procedure in order to
        request access or correction to Your Personal Information:
      </p>
      <p style={{ paddingLeft: "60px" }}>
        <span id="span_id_procedure">
          Please contact us at hello@progtech.net.au for a complete copy of your
          personal data.
        </span>
      </p>
      <p>
        <strong>
          <br />
          12. CHANGES TO THIS POLICY
        </strong>
      </p>
      <p style={{ paddingLeft: "30px" }}>
        a. We may make changes to this Privacy Policy at any time in Our sole
        discretion. <br />
        <br />
        b. If We make changes to this Privacy Policy, unless We obtain Your
        express consent to those changes, then such changes will only apply to
        any information that We obtain from You after the date that the changes
        take effect. <br />
        <br />
        c. If We make changes to this Privacy Policy, Your continued use of the
        Product after the date that the changes take effect confirms that You
        acknowledge, accept and agree to those changes.
      </p>
      <p>
        <strong>
          <br />
          13. COMPLAINTS
        </strong>
      </p>
      <p style={{ paddingLeft: "30px" }}>
        a. We take customer satisfaction very seriously. If You have a complaint
        in relation to Our handling of Your Personal Information, We will
        endeavour to handle it promptly and fairly. For Your information, an
        overview of Our complaints handling procedure is as follows:{" "}
      </p>
      <p style={{ paddingLeft: "60px" }}>
        I. Any complaints are forwarded to Our complaints officer for review. We
        aim to review all complaints within 7 days of receiving them (although
        this cannot be guaranteed). If necessary, the complaints officer may
        then refer the complaint to another section within Our organisation for
        consideration. If further information is required, We may contact You to
        request that information. If We accept fault in relation to the
        complaint then We will propose a resolution (which may or may not be the
        same as any resolution proposed by You). If We do not accept fault, then
        We will contact You to advise You of this. We aim to complete this
        entire process within 21 days, provided that We are provided complete
        information in the first place (although this cannot be guaranteed).
        However, if You do not provide complete information then this is likely
        to delay the handling of Your complaint.{" "}
      </p>
      <p style={{ paddingLeft: "60px" }}>
        II. All complaints should be provided in writing either by email or
        regular mail, using the contact details at the end of this privacy
        policy. Describe the nature of your complaint including any relevant
        dates, people involved, any consequences that have occurred, and what
        you believe should be done to rectify the issue. We will endeavour to
        respond within 21 days, although we cannot guarantee this.{" "}
      </p>
      <p style={{ paddingLeft: "60px" }}>
        III. If You are not satisfied with Our response to Your complaint, You
        may refer your complaint to the relevant external dispute resolution
        organisation in Your area.
      </p>
      <p>
        <strong>
          <br />
          14. CONTACT US
        </strong>
      </p>
      <p style={{ paddingLeft: "30px" }}>
        You can contact Us about this Privacy Policy using the following
        details:
      </p>
      <p style={{ paddingLeft: "60px" }}>
            hello@progtech.net.au
      </p>
    </Box>
  </>
);
const App = (props) => {
  return (
    <Flex flexWrap="wrap">
      <PageHeading heading="Privacy Policy" />
      <Box width={1} p={[4, 5]}>
        <Container maxWidth={1200}>
          <Form />
          {/* <Box width={[1, 1 / 2]} flexWrap="wrap">
            <Image height="auto" src="/images/4.jpg" />
          </Box> */}
        </Container>
      </Box>
    </Flex>
  );
};

export default App;
