import React, { PropsWithChildren, ReactNode, useEffect, useRef, useState } from "react";
import Button from "../Button";
import classNames from "classnames";
import { TemplateParams, sendEmail } from "utils/sendEmail";
import { useRouter } from "next/router";
import Image from "@components/Image";


function Form(props: PropsWithChildren<{tag?: string, image?: boolean; description?: string; title?: ReactNode, className?: string }>) {
    const DEFAULT_TITLE = "Kontakta oss gärna"
    const { className, tag, title = DEFAULT_TITLE, description, image= true } = props

    const [isDisabled, setIsDisabled] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [validationErrors, setValidationErrors] = useState<string[]>([]);
    const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
    const [newsletter, setNewsletter] = useState(true);
    const form = useRef<HTMLFormElement | null>(null);
    const router = useRouter()

    function isEmailValid(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
        return emailRegex.test(email);
    }

    const validateInput = (input: TemplateParams) => {
        const errors: string[] = [];

        if (!isEmailValid(input.email!)) {
            errors.push("Ogiltigt e-postformat.");
        }

        setIsDisabled(errors.length === 0);
        return errors;

    };

    const submit = async (event: any) => {

        event.preventDefault();
        // if no form exist in the ref something went very wrongs

        const email: TemplateParams = {
            email: form.current!.email.value,
            name: tag ?  tag + "::" +  form.current!._name.value : form.current!._name.value,
            newsletter: newsletter
        }

        const errors = validateInput(email);
        setValidationErrors(errors);

        if (errors.length > 0) return
        try {
            setIsSending(true)
            await sendEmail(email);
            await router.replace("/events/email-capture")
            setIsSubmittedSuccessfully(true);
        } catch (error) {
            console.error(error);
            setIsSubmittedSuccessfully(false);
        } finally {
            setIsSending(false)
        }
    }

    const HandleAlert = (props: PropsWithChildren<{ severity: string }>) => {
        const { severity, children } = props

        if (severity === "success") {
            return <div>{children}</div>
        }

        if (severity === "failed") {
            return <div className="text-red-500">{children}</div>
        }

        return <div>{children}</div>

    }

    const Checkbox = (props: PropsWithChildren<{ defaultChecked: boolean, className?: string, onChange: (e: any) => void }>) => {
        const { className, onChange, defaultChecked, children } = props
        return <div className={classNames("flex items-center gap-2", className)}>
            <input type="checkbox" className="" defaultChecked={defaultChecked} onChange={onChange} style={{ color: "black" }} />
            {children}
        </div>
    }


    return (
        <div className="w-full flex gap-12">
            <div id="contact_us" className={classNames("flex flex-col my-2 space-y-3", className, "w-2/3")} >
                <div>
                    <p className="text-4xl md:text-7xl w-fit underline bold">
                        {title}
                    </p>
                    <div className="my-2 md:text-2xl">
                        <p>
                            {description ?? "Hej! Mitt namn är Erik Rehn och jag är VD och medgrundare av altostruct. Vi skulle gärna vilja prata med dig om ditt nästa projekt. Skriv ditt namn och email nedan så återkommer vi snart."}
                        </p>
                    </div>
                </div>
                <form ref={form} onSubmit={submit} className="flex gap-4 flex-col">
                    <input placeholder="Ditt namn" type="text" id="_name" name="_name" className="h-12 md:w-96 text-white rounded-none inline-block outline-none border pl-2 border-[#7d7d7d]" style={{ color: "black" }} />
                    <input placeholder="Din mejladress" type="email" id="email" name="reply_to" className="h-12 md:w-96 text-white rounded-none inline-block outline-none border pl-2 border-[#7d7d7d]" style={{ color: "black" }} />
                    <div className="md:w-fit">
                        <Button loading={isSending} onClick={submit} label="Skicka"></Button>
                    </div>
                </form>
                {/* <Checkbox defaultChecked={newsletter} onChange={e => setNewsletter(e.target.checked)}>
                <p className="max-w-full">Jag vill prenumerera på Altos nyhetsbrev och få tips från experter.</p>
            </Checkbox> */}
                {/* {isSubmittedSuccessfully && (
                <HandleAlert severity="success"> Ditt e-postmeddelande har skickats! </HandleAlert>
            )} */}
                {!isSubmittedSuccessfully && validationErrors.length > 0 && (
                    <HandleAlert severity="failed"> {validationErrors} </HandleAlert>
                )}
            </div>
            {image && <div className="flex w-1/3">
                <Image alt="" className="m-auto w-full rounded-full" width={400} height={400} src={"/images/persons/erik_rehn.jpeg"}></Image>
            </div>}
        </div>
    )

}


export default Form;