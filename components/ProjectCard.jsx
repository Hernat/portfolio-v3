import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardContent } from "./ui/card";
import { GitHubLogoIcon, Link2Icon } from "@radix-ui/react-icons";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }) => {
    return (
        <Card className="group overflow-hidden relative">
            <CardHeader className="pb-0">
                <div className="relative w-full h-[300px] flex items-center justify-center bg-secondary dark:bg-secondary/40">
                    <Image
                        className="absolute bottom-0 shadow-2xl "
                        src={project.image}
                        alt={project.name}
                        width={247}
                        height={250}
                        priority
                    />
                    {/* btns */}
                    <div className="flex gap-x-4">
                        <Link
                            target="_blank"
                            href={project.link}
                            className="bg-secondary dark:bg-secondary/70 w-[54px] h-[54px]  rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 border-[1px] border-primary"
                        >
                            <Link2Icon className="w-4 h-4" />
                        </Link>
                        <Link
                            target="_blank"
                            href={project.github}
                            className="bg-secondary dark:bg-secondary/70 w-[54px] h-[54px]  rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 border-[1px] border-primary"
                        >
                            <GitHubLogoIcon className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-2 px-8 py-6">
                <Badge className="uppercase font-bold absolute top-8 left-8">
                    {project.category}
                </Badge>
                <h4 className="h4 mb-1">{project.name}</h4>
                <p className="text-muted-foreground text-lg truncate">
                    {project.description}
                </p>
            </CardContent>
        </Card>
    );
};

export default ProjectCard;
