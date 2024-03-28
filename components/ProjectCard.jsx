import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardContent } from "./ui/card";
import { GitHubLogoIcon, Link2Icon } from "@radix-ui/react-icons";
import { Badge } from "./ui/badge";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const ProjectCard = ({ project }) => {
    return (
        // <Card className="group overflow-hidden relative">
        //     <CardHeader className="pb-0">
        //         <div className="relative w-full h-[300px] flex items-center justify-center bg-secondary dark:bg-secondary/40">
        //             <Image
        //                 className="absolute bottom-0 shadow-2xl "
        //                 src={project.image}
        //                 alt={project.name}
        //                 width={247}
        //                 height={250}
        //                 priority
        //             />
        //             {/* btns */}
        //             <div className="flex gap-x-4">
        //                 <Link
        //                     target="_blank"
        //                     href={project.link}
        //                     className="bg-secondary dark:bg-secondary/70 w-[54px] h-[54px]  rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 border-[1px] border-primary"
        //                 >
        //                     <Link2Icon className="w-4 h-4" />
        //                 </Link>
        //                 <Link
        //                     target="_blank"
        //                     href={project.github}
        //                     className="bg-secondary dark:bg-secondary/70 w-[54px] h-[54px]  rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 border-[1px] border-primary"
        //                 >
        //                     <GitHubLogoIcon className="w-4 h-4" />
        //                 </Link>
        //             </div>
        //         </div>
        //     </CardHeader>
        //     <CardContent className="space-y-2 px-8 py-6">
        //         <Badge className="uppercase font-bold absolute top-8 left-8">
        //             {project.category}
        //         </Badge>
        //         <h4 className="h4 mb-1">{project.name}</h4>
        //         <p className="text-muted-foreground text-lg truncate">
        //             {project.description}
        //         </p>
        //     </CardContent>
        // </Card>
        <CardContainer className="inter-var">
            <CardBody className="bg-background shadow-lg relative group/card  dark:hover:shadow-2xl dark:hover:shadow-amber-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-foreground"
                >
                    {project.name}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className=" text-muted-foreground text-sm max-w-sm mt-2 "
                >
                    {project.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src={project.image}
                        alt={project.name}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    />
                </CardItem>
                <div className="flex justify-between items-center mt-10">
                    <CardItem
                        translateZ={20}
                        className="text-sm font-bold text-foreground"
                    >
                        <Badge className="uppercase font-bold ">
                            {project.category}
                        </Badge>
                    </CardItem>
                </div>
                <div className="flex justify-between items-center mt-10">
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl text-xs font-normal text-foreground"
                    >
                        <Link
                            target="_blank"
                            href={project.link}
                            className="flex items-center gap-x-2"
                        >
                            <Link2Icon className="w-4 h-4" /> Visit now →
                        </Link>
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-foreground text-secondary text-xs font-bold"
                    >
                        <Link target="_blank" href={project.github}>
                            <GitHubLogoIcon className="w-4 h-4" />
                        </Link>
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
};

export default ProjectCard;
