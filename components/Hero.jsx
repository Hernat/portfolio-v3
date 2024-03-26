"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine,
} from "react-icons/ri";

import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";
import { ScrollParallax } from "react-just-parallax";

const Hero = () => {
    const words = [
        {
            text: "Web",
        },
        {
            text: "Developer",
        },

        // {
        //     text: "Aceternity.",
        //     className: "text-blue-500 dark:text-blue-500",
        // },
    ];

    return (
        <section className="py-12 xl:py-4 h-[84vh] xl:pt-28 ">
            <div className="container mx-auto ">
                <div className="flex justify-between gap-x-8">
                    {/* Text */}
                    <div className=" flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                        <div className="text-sm uppercase font-semibold  text-primary tracking-[4px]">
                            <TypewriterEffectSmooth
                                words={words}
                                className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]"
                            />
                        </div>
                        <h1 className="h1 mb-4">
                            Hello, my name is Lorem Ipsum
                        </h1>
                        <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Vel quasi fuga tempore eius tenetur recusandae
                            quos, assumenda quaerat voluptatibus ullam ut.
                        </p>
                        {/* buttons */}
                        <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                            <Link href="/contact">
                                <Button className="gap-x-2">
                                    Contact me <Send size={18} />
                                </Button>
                            </Link>

                            <Button
                                variant="outline"
                                className="gap-x-2 border border-primary"
                            >
                                Download my CV <Download size={18} />
                            </Button>
                        </div>

                        {/* socials */}
                        <Socials
                            containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                            iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
                        />
                    </div>

                    {/* Image */}
                    <div className="hidden xl:flex relative">
                        {/* Badge */}
                        <ScrollParallax isAbsolutelyPositioned zIndex={10}>
                            <Badge
                                containerStyles="absolute top-[24%] -left-[5rem]"
                                icon={<RiBriefcase4Fill />}
                                endCountNum={2}
                                badgeText="Years Of Experiences"
                            />

                            {/* badge 2 */}
                            <Badge
                                containerStyles="absolute top-[80%] -left-[1rem]"
                                icon={<RiTodoFill />}
                                endCountNum={10}
                                badgeText="Finished Projects"
                            />

                            {/* badge 3 */}

                            <Badge
                                containerStyles="absolute top-[55%] -right-[1rem]"
                                icon={<RiTeamFill />}
                                endCountNum={1}
                                endCountText="K"
                                badgeText="Happy Clients"
                            />
                        </ScrollParallax>

                        <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
                        <DevImg
                            containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom "
                            imgSrc="/hero/developer.png"
                        />
                    </div>
                </div>
                {/* icons */}
                <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
                    <RiArrowDownSLine className="text-3xl text-primary" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
