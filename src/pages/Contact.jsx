import { EnvelopeIcon, CalendarIcon } from "@heroicons/react/24/outline";
import { CardButton, Text, Title } from "components";
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
    <div className="h-full w-full">
      <Title size={Size.H1}>Get In Touch</Title>
      <Text>
        I'm always open to new opportunities, so if you have any questions or
        have a project you'd like to discuss, please feel free to contact me.
      </Text>
      <div className="w-full flex gap-10">
        <CardButton
          onClick={handleSendMail}
          text={"Send me an email"}
          icon={<EnvelopeIcon height={"12rem"} />}
        />
        <CardButton
          onClick={handleGoToCalendar}
          text={"Schedule a meeting"}
          icon={<CalendarIcon height={"12rem"} />}
        />
      </div>
    </div>
  );
}

export default Contact;
