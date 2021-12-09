import "./Contact.css";
import React, { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
import Text from "../common/Text";
import Button from "../common/Button";
import Font from "../common/Font";

const FORMSPARK_FORM_ID = "4alARlM3";

const Contact = () => {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [isToggled, setIsToggled] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  

  const onSubmit = async (e) => {
    e.preventDefault();
    await submit({ name, email, message });
    alert("Form submitted");
  };
  
  return (
    <div className="contact-wrapper" id="contact">
        <div className="contact-section">
        <Text title="Kontakta mig"/>
        <hr className="underline"/>
        <div className="all-section">
        <div className="contact-left">
        <div className="form-area">
        <form onSubmit={onSubmit}>
        <div className="subtile-contact">
        <Text subtitle2="Namn & Efternamn"/>
        <textarea className="textarea" placeholder= "Ditt namn..." value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="subtile-contact">
        <Text subtitle2="Email"/>
        <textarea className="textarea" placeholder= "Din email..." value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="subtile-contact">
        <Text subtitle2="Meddelande"/>
        <textarea className="textarea" placeholder= "Skriv något..." value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <Button filled type="submit" disabled={submitting}>Skicka</Button>
        </form>
        </div>
        </div>
        <div className="contact-right">
        <div className="contact-section"></div>
        <button className="button-rendering" onClick={() => setIsToggled(!isToggled)}>Social media</button>
            { isToggled && <Font />}
        </div>
      </div>
      </div>
      </div>

  );
};

export default Contact;