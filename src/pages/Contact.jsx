import { EnvelopeIcon, CalendarIcon } from "@heroicons/react/24/outline";
import { CardButton, Title, Page } from "components";
import { Size } from "constants";
import React from "react";

function Contact() {
  const handleSendMail = (event) => {
    window.location.href =
      "mailto:mail@ivanlynch.me?subject=Hey Iván, i want to talk to you about...";
    event.preventDefault();
  };

  const handleGoToCalendar = () => {
    window.open("https://calendly.com/ivanlynch/30min", "_blank");
  };

  return (
    <Page id={"contact"}>
      <div className="h-screen landscape:my-16 w-full flex flex-col justify-center items-start">
        <Title size={Size.H1}>Get In Touch</Title>
        <p className="paragraph mb-4">
          I'm always open to new opportunities, so if you have any questions or
          have a project you'd like to discuss, please feel free to contact me.
        </p>
        <div className="w-full flex gap-10 md:scale-100 scale-75 -m-10 md:m-0">
          <CardButton
            onClick={handleSendMail}
            text={"Send me an email"}
            icon={<EnvelopeIcon height={"12rem"} />}
          />
          <CardButton
            disabled={true}
            onClick={handleGoToCalendar}
            text={"Schedule a meeting"}
            icon={<CalendarIcon height={"12rem"} />}
          />
        </div>
      </div>
    </Page>
  );
}

export default Contact;
