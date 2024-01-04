import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import Button from "../Button";
import classNames from "classnames";
import { TemplateParams, sendEmail } from "utils/sendEmail";


function Form(props: PropsWithChildren<{ className?: string }>) {

    const { className } = props

    const [isDisabled, setIsDisabled] = useState(false);
    const [validationErrors, setValidationErrors] = useState<string[]>([]);
    const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
    const [newsletter, setNewsletter] = useState(true);
    const form = useRef<HTMLFormElement | null>(null);

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
            newsletter: newsletter
        }
        const errors = validateInput(email);

        console.log(errors);
        setValidationErrors(errors);

        if (errors.length > 0) return

        try {
            sendEmail(email);
            setIsSubmittedSuccessfully(true);
        } catch (error) {
            console.error(error);
            setIsSubmittedSuccessfully(false);
        }
    }

    const HandleAlert = (props: PropsWithChildren<{ severity: string }>) => {
        const { severity, children } = props

        if (severity === "success") {
            return <div>{children}</div>
        }

        if (severity === "failed") {
            return <div>{children}</div>
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
        <div className={classNames("flex flex-col my-2 space-y-3", className)} >
            <div>
                <p className="text-4xl w-fit underline">
                    <b>
                        Vill du veta mer om Altostruct?
                    </b>
                </p>

                <div className="my-2">
                    <p>
                        Skriv ditt email så hör vi av oss!
                    </p>
                </div>
            </div>
            <form ref={form} onSubmit={submit} className="flex gap-4">
                <input placeholder="Din mejladress" type="email" id="email" name="reply_to" className="h-12 w-96 text-white rounded-none inline-block outline-none border pl-2 border-[#7d7d7d]" style={{ color: "black" }} />
                <Button onClick={submit} label="Skicka"></Button>
            </form>
            <Checkbox defaultChecked={newsletter} onChange={e => setNewsletter(e.target.checked)}>
                <p>Jag vill prenumerera på Alto:s nyhetsbrev och få tips från AWS-experter.</p>
            </Checkbox>
            {isSubmittedSuccessfully && (
                <HandleAlert severity="success"> Ditt e-postmeddelande har skickats! </HandleAlert>
            )}
            {!isSubmittedSuccessfully && validationErrors.length > 0 && (
                <HandleAlert severity="failed"> {validationErrors} </HandleAlert>
            )}
        </div>
    )

}


export default Form;