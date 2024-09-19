"use client";
import { Download, Send } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

import { RiArrowDownSLine, RiBriefcase4Fill, RiTeamFill, RiTodoFill } from "react-icons/ri";

import { ScrollParallax } from "react-just-parallax";
import Badge from "./Badge";
import Socials from "./Socials";
import { Spotlight } from "./ui/Spotlight";
import { EvervaultCard, Icon } from "./ui/evervault-card";

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

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/CV_2024-09-19_Toky Hernat_Rijamanjaka.pdf";
        link.download = "CV_2024-09-19_Toky Hernat_Rijamanjaka.pdf";
        link.click();
    };

    return (
        <section className="py-12 xl:py-4 h-[84vh] xl:pt-28 ">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#f8e4a6" />
            <div className="container mx-auto ">
                <div className="flex justify-between gap-x-8">
                    {/* Text */}
                    <div className=" flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left antialiased relative overflow-hidden ">
                        <div className="text-sm uppercase font-semibold  text-primary tracking-[4px]">
                            <TypewriterEffectSmooth words={words} className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]" />
                        </div>
                        <h1 className="h1 mb-4">
                            Hello, my name is{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-t from-amber-900 via-yellow-500 to-orange-800 h-full bg-opacity-50">
                                Toky Hernat.
                            </span>
                        </h1>
                        <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
                            I am passionate, creative, and determined, always ready to take on new challenges with curiosity and perseverance.
                        </p>
                        {/* buttons */}
                        <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                            <Link href="/contact">
                                <Button className="gap-x-2">
                                    Contact me <Send size={18} />
                                </Button>
                            </Link>

                            <Button variant="outline" className="gap-x-2 border border-primary" onClick={handleDownload}>
                                Download my CV <Download size={18} />
                            </Button>
                        </div>

                        {/* socials */}
                        <Socials containerStyles="flex gap-x-6 mx-auto xl:mx-0" iconsStyles="text-foreground text-[22px] hover:text-primary transition-all" />
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
                            <Badge containerStyles="absolute top-[80%] -left-[1rem]" icon={<RiTodoFill />} endCountNum={10} badgeText="Finished Projects" />

                            {/* badge 3 */}

                            <Badge
                                containerStyles="absolute top-[55%] -right-[1rem] "
                                icon={<RiTeamFill />}
                                endCountNum={5}
                                endCountText="y"
                                badgeText="Software Engineer"
                            />
                        </ScrollParallax>

                        <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start  mx-auto p-4 relative h-[36rem] w-[36rem] ">
                            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-foreground" />
                            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-foreground" />
                            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-foreground" />
                            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-foreground" />

                            <EvervaultCard image="/hero/moi-lunnete.png" />
                        </div>
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
