"use client";

import { ArrowRightIcon, MailIcon, MessageSquare, User } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const Form = () => {
    return (
        <form className=" flex flex-col gap-y-4">
            {/* input */}
            <div className="relative flex items-center">
                <Input type="name" id="name" placeholder="John Doe" />
                <User className="absolute right-4 " size={20} />
            </div>
            {/* input */}
            <div className="relative flex items-center">
                <Input type="email" id="email" placeholder="exemple@mail.com" />
                <MailIcon className="absolute right-4 " size={20} />
            </div>
            {/* textarea */}
            <div className="relative flex items-center">
                <Textarea type="name" id="name" placeholder="Comments..." />
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
