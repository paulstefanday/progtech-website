import React from "react";
import { Box } from "rebass";
import * as typeformEmbed from "@typeform/embed";

// const ReactTypeformEmbed = dynamic(
//   () => import("react-typeform-embed/lib/ReactTypeformEmbed"),
//   {
//     ssr: false,
//   }
// );

class Form extends React.Component {
  componendDidMount() {
    typeformEmbed.makePopup("https://form.typeform.com/to/ZAU0MgR5");
  }

  render() {
    return (
      <>
        <Box
          width={[1]}
          as="form"
          onSubmit={(e) => e.preventDefault()}
          pr={[0, 5]}
        >
          {/* <ReactTypeformEmbed url="https://form.typeform.com/to/ZAU0MgR5" /> */}
          <Form />
        </Box>
      </>
    );
  }
}

export default Form;
