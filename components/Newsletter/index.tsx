import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import Button from "components/Button/Button";
import { useRouter } from "next/router";

interface Newsletter {
    email?:string
}

function Newsletter(props: Newsletter) {
    
    const {email} = props;
    const router = useRouter();

    const [isDisabled, setIsDisabled] = useState(false);
    const form = useRef<HTMLFormElement | null>(null);

    const validateInput = (input: Newsletter) => {
        const errors: string[] = [];

        if (!input.email) errors.push("Provide an email!");

        if (errors.length === 0) {
            setIsDisabled(true)
            console.log(input.email)
            return null;
        }

        return errors;
    };

    const sendEmail = async (event: any) => {
        
        event.preventDefault();
        // if no form exist in the ref something went very wrong
        if (!form.current) {
            console.error("Something must have gone wrong...");
            return false;
        }

        const values: Newsletter = {
            email: form.current.email.value,
        };


        const errors = validateInput(values);

        if (errors !== null) {
            alert(errors.join("\n"));
            return;
        }

        try {
            var data = {
                service_id: 'service_000yrxa',
                template_id: 'template_qyjqk4q',
                user_id: 'kvweTUQW1OG1YNf9p',
                template_params: {
                    'mail': values.email,
                }
            };

            $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
                type: 'POST',
                data: JSON.stringify(data),
                contentType: 'application/json'
            }).done(function () {
                alert('Your mail is sent!');
            }).fail(function (error: any) {
                alert('Oops... ' + JSON.stringify(error));
            });
        } 
        catch (error) {
            console.error(error);
        }
    }

        return (
            <section className="text-white pt-10">
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="pb-20"
                >
                    <div className="md:pb-5 pb-6" id="newsletter">
                        <p className="text-4xl pb-2 md:pb-2">Prenumerera på vårt nyhetsbrev!</p>
                        <p className="text-xl">Ta del av tankar och handlingsbara råd från AWS experter gällande teknologi och entreprenörskap.</p>
                    </div>
                    <div className="flex justify-between pb-4">
                        <div className="w-full">
                            <label style={{ paddingTop: "0.35em" }} htmlFor="email">Mejladress</label>
                            <input type="email" id="email" name="reply_to" className="h-12 md:w-1/2 w-full text-white bg-[#424242] rounded-none inline-block outline-none border pl-2 border-[#7d7d7d]" />
                        </div>
                    </div>
                    <Button className="" type={isDisabled === true ? "secondary" : "primary"} formAction="submit">
                        Prenumera
                    </Button>
                </form>
            </section>
        )
        
}

export default Newsletter;
