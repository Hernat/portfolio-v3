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
import { EvervaultCard, Icon } from "./ui/evervault-card";

const infosData = [
   {
      icon: <User2 size={20} />,
      text: "Toky Hernat RIJAMANJAKA",
   },

   {
      icon: <PhoneCall size={20} />,
      text: "+261 34 17 694 59",
   },
   {
      icon: <MailIcon size={20} />,
      text: "tokyhernat@gmail.com",
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
      text: "Ambohipo, Antananarivo, Madagascar",
   },
];

const skillsData = [
   {
      title: "skills",
      data: [
         {
            name: "HTML, Tailwind CSS, JS",
            level: 100,
         },
         {
            name: "PHP",
            level: 90,
         },
         {
            name: "Node JS",
            level: 70,
         },
         {
            name: "React JS, Next JS",
            level: 80,
         },
         {
            name: "MongoDB, MySQL, PostgreSQL",
            level: 70,
         },
         {
            name: "FIGMA",
            level: 75,
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
      ],
   },
];

const qualificationsData = [
   {
      title: "education",
      data: [
         {
            university:
               "National School of Computer Science (ENI) - Fianarantsoa",
            qualification: "Master's Degree (Masters 2)",
            years: "2019 - 2020",
         },
         {
            university:
               "National School of Computer Science (ENI) - Fianarantsoa",
            qualification: "Bachelor's degree",
            years: "2016 - 2017",
         },
      ],
   },
   {
      title: "experiences",
      data: [
         {
            company: "SAHAZA GROUP",
            role: "Developer Web",
            years: "2021 - 2024",
         },
         {
            company:
               "Ministry of Industry, Commerce, and Handicrafts (MICA) - IHOSY",
            role: "Developer Web",
            years: "3 months internship 2020",
         },
         {
            company: "Mada-Ozi - Ivato Antananarivo",
            role: "Software Engineer",
            years: "2019 - 2020",
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
               <div className="hidden xl:flex gap-x-10 flex-1 relative">
                  <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start  mx-auto p-4 relative h-[32rem] w-[32rem] ">
                     <Icon className="absolute h-6 w-6 -top-3 -left-3 text-foreground" />
                     <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-foreground" />
                     <Icon className="absolute h-6 w-6 -top-3 -right-3 text-foreground" />
                     <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-foreground" />

                     <EvervaultCard image="/about/moi.png" />
                  </div>
               </div>
               {/* tabs */}
               <div className="flex-1">
                  <Tabs defaultValue="personal">
                     <TabsList className="xl:w-full w-1/2 mx-auto grid xl:grid-cols-3  border border-primary/20  ">
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
                                 Unmatched Service Quality for over 2 years
                              </h3>
                              <p className="subtitle max-w-2xl mx-auto  xl:mx-0 text-justify">
                                 Immersed in the realm of cutting-edge
                                 technologies and fueled by a passion for web
                                 development, I am a seasoned professional with
                                 two years of experience, eager for challenges
                                 and ready to bring your most ambitious projects
                                 to life.
                              </p>
                              {/* icons */}
                              <div className="md:flex-row lg:grid lg:grid-cols-2   gap-4 mt-8 mb-8">
                                 {infosData.map((info, index) => (
                                    <div
                                       className="flex items-center  text-left  xl:mb-2 gap-x-4 mx-auto xl:mx-0"
                                       key={index}
                                    >
                                       <div className="text-primary ">
                                          {info.icon}
                                       </div>
                                       <div className="text-left">
                                          {info.text}
                                       </div>
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
                                    <span className=" text-sm font-medium me-2 px-2.5 py-0.5 rounded  border border-primary bg-clip-text text-transparent bg-gradient-to-t from-amber-900 via-yellow-500 to-orange-800 h-full bg-opacity-50 ">
                                       Malagasy
                                    </span>
                                    <span className=" text-sm font-medium me-2 px-2.5 py-0.5 rounded  border border-primary bg-clip-text text-transparent bg-gradient-to-t from-amber-900 via-yellow-500 to-orange-800 h-full bg-opacity-50 w-[90%] ">
                                       French
                                    </span>
                                    <span className=" text-sm font-medium me-2 px-2.5 py-0.5 rounded  border border-primary bg-clip-text text-transparent bg-gradient-to-t from-amber-900 via-yellow-500 to-orange-800 h-full bg-opacity-50 w-[70%] ">
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
                                       <h4 className="capitalize font-medium bg-clip-text text-transparent bg-gradient-to-t from-amber-900 via-yellow-500 to-orange-800 h-full bg-opacity-50">
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
                                          const { company, role, years } = exp;
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
                                                      {company}
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
                                       <h4 className="capitalize font-medium bg-clip-text text-transparent bg-gradient-to-t from-amber-900 via-yellow-500 to-orange-800 h-full bg-opacity-50">
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
                                                      {university}
                                                   </div>
                                                   <div className="text-lg leading-none text-muted-foreground mb-4">
                                                      {qualification}
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
                              <h3 className="h3 mb-8">What I use everyday</h3>
                              <div>
                                 <h4 className="h4 mb-2">Skills</h4>
                                 <div className="border-b border-border mb-4"></div>
                                 {/* skills list */}
                                 <div className="mb-12">
                                    {getData(skillsData, "skills").data.map(
                                       (skill, index) => {
                                          const { name, level } = skill;

                                          return (
                                             <div
                                                key={index}
                                                className="text-left mx-auto xl:mx-0"
                                             >
                                                <div className="flex flex-col font-medium mb-2">
                                                   <span
                                                      key={index}
                                                      className={cn(
                                                         "rounded-sm border-b-8 text-md font-medium mb-2 px-2.5 py-0.5 bg-clip-text text-transparent bg-gradient-to-t from-amber-900 via-yellow-500 to-orange-800 h-full bg-opacity-50 border-primary bg-muted-foreground",
                                                         level &&
                                                            `w-[${level}%]`
                                                      )}
                                                   >
                                                      {name}
                                                   </span>
                                                </div>
                                             </div>
                                          );
                                       }
                                    )}
                                 </div>
                                 {/* Tools */}
                                 <div>
                                    <h3 className="h3 mb-2">Tools</h3>
                                    <div className="border-b border-border mb-4"></div>
                                    {/* tools list */}
                                    <div className="flex gap-x-8 justify-center xl:justify-start">
                                       {getData(skillsData, "tools").data.map(
                                          (tool, index) => {
                                             const { imgPath } = tool;
                                             return (
                                                <div key={index}>
                                                   <Image
                                                      src={imgPath}
                                                      alt="dev image"
                                                      width={48}
                                                      height={48}
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
