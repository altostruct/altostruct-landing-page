import React, { useEffect, useRef, useState } from "react";

import emailjs from "emailjs-com";

import styles from "./Form.module.scss";
import Button from "components/Button/Button";
import classNames from "classnames";
import useTranslation from "hooks/useTranslation";
import { useRouter } from "next/router";
interface FormInput {
  fullName?: string;
  email?: string;
  companyName?: string;
  phone?: string;
  message?: string;
  call_me?: string;
}

function Formshort() {
  const { t } = useTranslation();
  const router = useRouter();

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

      if (!input.email) errors.push("Provide an email!");
    
      if (errors.length === 0) return null;

      return errors;
    };

    const values: FormInput = {
      email: form.current.email.value,
      message: form.current.message.value,
      fullName: form.current.fullName.value,
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
      router.push("/events/reached-out", {
        query: "email=" + encodeURI(values.email!),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="text-white">
      <form
        ref={form}
        onSubmit={sendEmail}
        className={classNames(styles["form"], "md:flex-row", "flex-col")}
        style={{
          display: "flex",
          width: "100%",
          gap: "1.4em",
          paddingBottom: "2em"
        }}
      >
        <div style={{ flexGrow: 1, paddingTop: "0.2rem"}}>
          <label htmlFor="fullName">{t("För- och efternamn")}</label>
          <input type="text" id="fullName" name="from_name" />
          <label style={{paddingTop: "0.35em"}} htmlFor="email">{t("Mejladress")}</label>
          <input type="email" id="email" name="reply_to" />
          <br />
        </div>
        <div style={{ flexGrow: 1, backgroundColor: "bg-emerald-300"}}>
          <label htmlFor="message">{t("Meddelande")}</label>
          <textarea id="message" name="message" rows={6}></textarea>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              marginBottom: "1em",
            }}
          >
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

export default Formshort;
