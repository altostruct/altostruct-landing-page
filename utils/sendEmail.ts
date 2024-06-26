import emailjs from "emailjs-com";
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "../constants/emailjs";

emailjs.init(PUBLIC_KEY);

export interface TemplateParams {
  email?: string;
  name?: string;
  newsletter: boolean;
}

export const sendEmail = async (data: TemplateParams) => {
  const params: Record<string, unknown> = { ...data };

  await emailjs.send(SERVICE_ID, TEMPLATE_ID, params).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      return response;
    },
    function (error) {
      console.log("FAILED...", error);
      throw new Error("Something went wrong.. ", error);
    }
  );
};
