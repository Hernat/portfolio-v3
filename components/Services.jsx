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

const servicesData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: "Web Design",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem assumenda, ",
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: "Web Developer",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem assumenda, ",
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: "App Design",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem assumenda, ",
    },
];

const Services = () => {
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
                                <Button>More..</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
