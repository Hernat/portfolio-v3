"use client";

import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

import React, { useState } from "react";
import { MultiStepLoader as Loader } from "./ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";

const servicesData = [
   {
      icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
      title: "Front-end",
      description:
         "Crafting seamless digital experiences through innovative Front-end Development",
      loadingStates: [
         { text: "Enhanced User Experience (UX)" },
         { text: "Interactivity and Engagement" },
         { text: "Visual Design and Aesthetics" },
         { text: "Optimization for Devices and Browsers" },
         { text: "Speed and Performance" },
         { text: "Collaboration with Back-end" },
      ],
   },
   {
      icon: <Blocks size={72} strokeWidth={0.8} />,
      title: " Back-end",
      description:
         "Architecting robust digital foundations with Back-end Development expertise.",
      loadingStates: [
         { text: "Server-Side Logic" },
         { text: "Database Management" },
         { text: "Security Implementation" },
         { text: "Scalability and Performance Optimization" },
         { text: "API Integration" },
         { text: "Collaboration with Front-end" },
      ],
   },
   {
      icon: <Gem size={72} strokeWidth={0.8} />,
      title: " Full Web Design",
      description:
         "Bringing your digital vision to life with Full Web Design Development mastery.",
      loadingStates: [
         { text: "Comprehensive Solution" },
         { text: "Tailored and Customized Approach" },
         { text: "End-to-End Management" },
         { text: "Consistent Design Language" },
         { text: "Optimization for Performance and User Experience" },
         { text: "Support and Maintenance" },
      ],
   },
];

const Services = () => {
   const [loading, setLoading] = useState(false);
   return (
      <section className="mb-12 xl:mb-36 mt-12 xl:mt-36">
         <div className="container mx-auto">
            <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
               My Services
            </h2>
            {/* grid items */}
            <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
               {servicesData.map((service, index) => (
                  <Card
                     className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                     key={index}
                  >
                     <CardHeader className="text-primary absolute -top-[60px]">
                        <div className="w-[140px] h-[80px] bg-background   flex justify-center items-center">
                           {service.icon}
                        </div>
                     </CardHeader>
                     <CardContent className="text-center ">
                        <CardTitle className="mb-4 bg-clip-text text-transparent bg-gradient-to-t from-amber-900 via-yellow-500 to-orange-800 bg-opacity-50">
                           {service.title}
                        </CardTitle>
                        <CardDescription className="text-lg">
                           {service.description}
                        </CardDescription>
                     </CardContent>
                     <CardFooter>
                        <Popover modal>
                           <PopoverTrigger asChild>
                              <button
                                 className="underline underline-offset-2"
                                 onClick={() => setLoading(true)}
                              >
                                 View Details
                              </button>
                           </PopoverTrigger>
                           <PopoverContent className="w-auto ">
                              {/* Core Loader Modal */}
                              <Loader
                                 loadingStates={service.loadingStates}
                                 loading={loading}
                                 duration={1500}
                              />
                              <PopoverClose asChild>
                                 {loading && (
                                    <button
                                       className="fixed top-4 right-4 text-foreground z-[120]"
                                       onClick={() => setLoading(false)}
                                    >
                                       <IconSquareRoundedX className="h-6 w-6" />
                                    </button>
                                 )}
                              </PopoverClose>
                           </PopoverContent>
                        </Popover>
                     </CardFooter>
                  </Card>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Services;
