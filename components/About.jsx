import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Calendar,
    Briefcase,
} from "lucide-react";
import { cn } from "@/lib/utils";

const infosData = [
    {
        icon: <User2 size={20} />,
        text: "Lorem Ipsum",
    },

    {
        icon: <PhoneCall size={20} />,
        text: "+261 38 51 121 32",
    },
    {
        icon: <MailIcon size={20} />,
        text: "X5fZM@example.com",
    },
    {
        icon: <Calendar size={20} />,
        text: "Born in 26 March, 1998",
    },
    {
        icon: <GraduationCap size={20} />,
        text: "Master of Computer Science",
    },
    {
        icon: <HomeIcon size={20} />,
        text: "Abidjan, Cote d'Ivoire",
    },
];

const skillsData = [
    {
        title: "skills",
        data: [
            {
                name: "HTML",
                level: 100,
            },
            {
                name: "CSS",
                level: 100,
            },
            {
                name: "JavaScript",
                level: 90,
            },
            {
                name: "ReactJS",
                level: 70,
            },
            {
                name: "NextJS",
                level: 70,
            },
            {
                name: "NodeJS",
                level: 60,
            },
        ],
    },
    {
        title: "tools",
        data: [
            {
                imgPath: "/about/vscode.svg",
            },
            {
                imgPath: "/about/figma.svg",
            },
            {
                imgPath: "/about/notion.svg",
            },
            {
                imgPath: "/about/wordpress.svg",
            },
        ],
    },
];

const qualificationsData = [
    {
        title: "education",
        data: [
            {
                university: "University of Computer Science",
                qualification: "Bachelor of Computer Science",
                years: "2018 - 2022",
            },
            {
                university: "University of Computer Science",
                qualification: "Master of Computer Science",
                years: "2022 - 2023",
            },
            {
                university: "University of Computer Science",
                qualification: "Master of Computer Science",
                years: "2022 - 2023",
            },
        ],
    },
    {
        title: "experiences",
        data: [
            {
                company: "Company 1",
                role: "Software Engineer",
                years: "2018 - 2022",
            },
            {
                company: "Company 2",
                role: "Software Engineer",
                years: "2018 - 2022",
            },
            {
                company: "Company 3",
                role: "Software Engineer",
                years: "2018 - 2022",
            },
        ],
    },
];

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    };

    return (
        <section className="xl:h-[860px] pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                    About me
                </h2>

                <div className="flex flex-col xl:flex-row ">
                    {/* image */}
                    <div className="hidden xl:flex flex-1 relative">
                        <DevImg
                            containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
                            imgSrc="/about/developer.png"
                        />
                    </div>
                    {/* tabs */}
                    <div className="flex-1">
                        <Tabs defaultValue="personal">
                            <TabsList className="xl:w-full w-1/2 mx-auto grid xl:grid-cols-3  border border-primary  ">
                                <TabsTrigger
                                    className="w-[162px] xl:w-auto"
                                    value="personal"
                                >
                                    Personal infos
                                </TabsTrigger>
                                <TabsTrigger
                                    className="w-[162px] xl:w-auto"
                                    value="qualifications"
                                >
                                    Qualifications
                                </TabsTrigger>
                                <TabsTrigger
                                    className="w-[162px] xl:w-auto"
                                    value="skills"
                                >
                                    Skills
                                </TabsTrigger>
                            </TabsList>
                            {/* tabs content */}
                            <div className="text-lg mt-12 xl:mt-8">
                                <TabsContent value="personal">
                                    <div className="text-center xl:text-justify  ">
                                        <h3 className="h3 mb-4 ">
                                            Unmatched Service Quality for over
                                            10 years
                                        </h3>
                                        <p className="subtitle max-w-xl mx-auto  xl:mx-0 ">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Molestiae harum consectetur quis
                                            ipsa accusantium! Possimus mollitia,
                                            vitae molestias reiciendis impedit
                                            eaque temporibus ratione sunt modi
                                            deserunt, commodi, sequi vero in.
                                        </p>
                                        {/* icons */}
                                        <div className="grid xl:grid-cols-2 gap-4 mt-8 mb-8">
                                            {infosData.map((info, index) => (
                                                <div
                                                    className="flex items-center xl:mb-2 gap-x-4 mx-auto xl:mx-0"
                                                    key={index}
                                                >
                                                    <div className="text-primary">
                                                        {info.icon}
                                                    </div>
                                                    <div>{info.text}</div>
                                                </div>
                                            ))}
                                        </div>
                                        {/* language */}
                                        <div className="flex flex-col gap-y-2">
                                            <div className="text-primary font-semibold">
                                                Language Skills
                                            </div>
                                            <div className="border-b border-border"></div>
                                            <div className="flex flex-col gap-y-2 text-left">
                                                <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400  ">
                                                    Malagasy
                                                </span>
                                                <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 w-[90%]">
                                                    French
                                                </span>
                                                <span className="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300 w-[65%]">
                                                    English
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* Qualifications */}
                                <TabsContent value="qualifications">
                                    <div>
                                        <h3 className="h3 mb-8 text-center xl:text-left">
                                            My awesome journey
                                        </h3>
                                        {/* XP et Education */}
                                        <div className="grid md:grid-cols-2 gap-y-8">
                                            {/* XP */}
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <Briefcase />
                                                    <h4 className="capitalize font-medium">
                                                        {
                                                            getData(
                                                                qualificationsData,
                                                                "experiences"
                                                            ).title
                                                        }
                                                    </h4>
                                                </div>
                                                {/* List */}
                                                <div className="flex flex-col gap-y-8 ">
                                                    {getData(
                                                        qualificationsData,
                                                        "experiences"
                                                    ).data.map((exp, index) => {
                                                        const {
                                                            company,
                                                            role,
                                                            years,
                                                        } = exp;
                                                        return (
                                                            <div
                                                                key={index}
                                                                className="flex gap-x-8 group "
                                                            >
                                                                <div className="h-[84px] w-[1px] bg-border relative ml-2 ">
                                                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                </div>
                                                                <div>
                                                                    <div className="font-semibold text-xl leading-none mb-2">
                                                                        {
                                                                            company
                                                                        }
                                                                    </div>
                                                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                                                        {role}
                                                                    </div>
                                                                    <div className="text-base font-medium">
                                                                        {years}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>

                                            {/* education */}
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <GraduationCap size={28} />
                                                    <h4 className="capitalize font-medium">
                                                        {
                                                            getData(
                                                                qualificationsData,
                                                                "education"
                                                            ).title
                                                        }
                                                    </h4>
                                                </div>
                                                {/* List */}
                                                <div className="flex flex-col gap-y-8 ">
                                                    {getData(
                                                        qualificationsData,
                                                        "education"
                                                    ).data.map((ed, index) => {
                                                        const {
                                                            university,
                                                            qualification,
                                                            years,
                                                        } = ed;
                                                        return (
                                                            <div
                                                                key={index}
                                                                className="flex gap-x-8 group "
                                                            >
                                                                <div className="h-[84px] w-[1px] bg-border relative ml-2 ">
                                                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                </div>
                                                                <div>
                                                                    <div className="font-semibold text-xl leading-none mb-2">
                                                                        {
                                                                            university
                                                                        }
                                                                    </div>
                                                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                                                        {
                                                                            qualification
                                                                        }
                                                                    </div>
                                                                    <div className="text-base font-medium">
                                                                        {years}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="skills">
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-8">
                                            What I use everyday
                                        </h3>
                                        <div>
                                            <h4 className="h4 mb-2">Skills</h4>
                                            <div className="border-b border-border mb-4"></div>
                                            {/* skills list */}
                                            <div className="mb-12">
                                                {getData(
                                                    skillsData,
                                                    "skills"
                                                ).data.map((skill, index) => {
                                                    const { name } = skill;
                                                    //console.log(level);
                                                    return (
                                                        <div
                                                            key={index}
                                                            className="text-left mx-auto xl:mx-0"
                                                        >
                                                            <div className="flex flex-col font-medium mb-2">
                                                                <span
                                                                    key={index}
                                                                    className={cn(
                                                                        " bg-secondary rounded-sm border-b-8 text-md font-medium mb-2 px-2.5 py-0.5 rounde ",
                                                                        name.toLowerCase() ===
                                                                            "html" &&
                                                                            `text-green-500  border-green-500 w-[100%]`,
                                                                        name.toLowerCase() ===
                                                                            "css" &&
                                                                            `text-orange-500  border-orange-500 w-[100%]`,
                                                                        name.toLowerCase() ===
                                                                            "reactjs" &&
                                                                            `text-blue-500  border-blue-500 w-[70%]`,
                                                                        name.toLowerCase() ===
                                                                            "nodejs" &&
                                                                            `text-green-900  border-green-900 w-[60%]`,
                                                                        name.toLowerCase() ===
                                                                            "nextjs" &&
                                                                            ` border-black/90 dark:border-white/90 w-[65%]`,
                                                                        name.toLowerCase() ===
                                                                            "javascript" &&
                                                                            `text-yellow-500  border-yellow-500 w-[80%]`
                                                                    )}
                                                                >
                                                                    {name}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            {/* Tools */}
                                            <div>
                                                <h3 className="h3 mb-2">
                                                    Tools
                                                </h3>
                                                <div className="border-b border-border mb-4"></div>
                                                {/* tools list */}
                                                <div className="flex gap-x-8 justify-center xl:justify-start">
                                                    {getData(
                                                        skillsData,
                                                        "tools"
                                                    ).data.map(
                                                        (tool, index) => {
                                                            const { imgPath } =
                                                                tool;
                                                            return (
                                                                <div
                                                                    key={index}
                                                                >
                                                                    <Image
                                                                        src={
                                                                            imgPath
                                                                        }
                                                                        alt="dev image"
                                                                        width={
                                                                            48
                                                                        }
                                                                        height={
                                                                            48
                                                                        }
                                                                    />
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
