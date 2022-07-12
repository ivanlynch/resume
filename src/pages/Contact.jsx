import { Page, Title } from "components";
import { useDevice } from "hooks";
import React from "react";

function Contact() {
  const { isMobile } = useDevice();
  return (
    <Page
      isMobile={isMobile}
      header={
        <Title
          title={"Contact"}
          subtitle={"Do you want us to work together?"}
        />
      }
      content={<div>Contact</div>}
    />
  );
}

export default Contact;
