import React, { useEffect, useRef, useState } from "react";
import useTranslation from "../../hooks/useTranslation";
import emailjs from "emailjs-com";
import Button from "@components/Button/Button";
import "./index.scss";
interface FormInput {
  fullName?: string;
  email?: string;
  companyName?: string;
  phone?: string;
  message?: string;
  call_me?: string;
}

function Form() {
  const { t, setLanguage, language } = useTranslation();

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = async (event: any) => {
    // Pervents a default post request associated with the form
    event.preventDefault();
    // if no form exist in the ref something went very wrong
    if (!form.current) {
      console.error("Something must have gone wrong...");
      return false;
    }

    const validateInput = (input: FormInput) => {
      const errors: string[] = [];

      //TODO: The push errors needs to be more beautiful

      // if (!input.fullName) errors.push("Provide a name!");
      if (!input.email) errors.push("Provide an email!");
      // if (!input.companyName) errors.push("Provide a company name!");
      // if (!input.phone) errors.push("Provide a phone nr!");
      // if (!input.message) errors.push("Provide a message!");

      if (errors.length === 0) return null;
      return errors;
    };

    const values: FormInput = {
      companyName: form.current.companyName.value,
      email: form.current.email.value,
      message: form.current.message.value,
      fullName: form.current.fullName.value,
      phone: form.current.phone.value,
      call_me: (form.current.call_me.value === true).toString(),
    };

    const errors = validateInput(values);

    if (errors !== null) {
      alert(errors.join("\n"));
      return;
    }

    try {
      await emailjs.sendForm(
        "service_xf3l6xg",
        "template_sjt8u7f",
        form.current,
        "user_k0ZJNxep5Jd9wlP37YY93"
      );

      alert(
        t(
          "Tack för ditt meddelande! Vi svarar till din mejladress ({{email}}) så snart vi kan. 🎈",
          { email: values.email }
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <h2 style={{ marginBottom: "1em" }}>{t("Kontakta oss")}</h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="md:flex-row flex-col"
        style={{
          display: "flex",
          width: "100%",
          gap: "4em",
        }}
      >
        <div className="contact-form" style={{ flexGrow: 1 }}>
          <label htmlFor="fullName">{t("För- och efternamn")}</label>
          <input type="text" id="fullName" name="from_name" />
          <label htmlFor="companyName">{t("Företag")}</label>
          <input type="text" id="companyName" name="company" />
          <label htmlFor="email">{t("Mejladress")}</label>
          <input type="email" id="email" name="reply_to" />
          <label htmlFor="phone">{t("Telefonnummer")}</label>
          <input type="number" id="phone" name="phone" />
          <br />
        </div>
        <div style={{ flexGrow: 1 }}>
          <label htmlFor="message">{t("Meddelande")}</label>
          <textarea id="message" name="message" rows={10}></textarea>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              marginBottom: "1em",
            }}
          >
            <label
              htmlFor="callMe"
              style={{
                display: "inline-block",
                marginRight: "1em",
                cursor: "pointer",
                width: "100%",
                textAlign: "right",
              }}
            >
              {t("Jag gillar att prata i telefon, ring mig!")}
            </label>
            <input type="checkbox" id="callMe" name="call_me" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <Button type="primary" formAction="submit">
              {t("Skicka")}
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Form;