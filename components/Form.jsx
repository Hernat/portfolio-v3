"use client";

import { ArrowRightIcon, MailIcon, MessageSquare, User } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useToast } from "./ui/use-toast";

const Form = () => {
    const form = useRef();
    const { toast } = useToast();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_ydch1fh", "template_k81vz2y", form.current, {
                publicKey: "user_8xeeeHbXMMwKmnnQYgIDj",
            })
            .then(
                () => {
                    toast({
                        title: "Email",
                        description: "Email send successfully",
                    });
                },
                (error) => {
                    console.log(error.text);
                }
            );

        e.target.reset();
    };

    return (
        <form
            ref={form}
            onSubmit={sendEmail}
            className=" flex flex-col gap-y-4"
        >
            {/* input */}
            <div className="relative flex items-center">
                <Input
                    type="name"
                    name="user_name"
                    id="name"
                    placeholder="John Doe"
                />
                <User className="absolute right-4 " size={20} />
            </div>
            {/* input */}
            <div className="relative flex items-center">
                <Input
                    type="email"
                    id="email"
                    name="user_email"
                    placeholder="exemple@mail.com"
                />
                <MailIcon className="absolute right-4 " size={20} />
            </div>
            {/* textarea */}
            <div className="relative flex items-center">
                <Textarea
                    type="message"
                    id="message"
                    name="message"
                    placeholder="Comments..."
                />
                <MessageSquare className="absolute right-4 top-4" size={20} />
            </div>
            <Button className="flex items-center gap-x-2 max-w-[166px]">
                Let&apos;s Talk
                <ArrowRightIcon size={20} />
            </Button>
        </form>
    );
};

export default Form;
