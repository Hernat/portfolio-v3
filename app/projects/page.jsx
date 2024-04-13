"use client";

import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/components/projectData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const Projects = () => {
   const uniqueCategories = [
      "all projects",
      ...new Set(projectsData.map((project) => project.category)),
   ];
   const [categories, setCategories] = useState(uniqueCategories);
   const [category, setCategory] = useState("all projects");

   const filteredProjects = projectsData.filter((project) => {
      return category === "all projects"
         ? project
         : project.category === category;
   });

   return (
      <section className="min-h-screen pt-12">
         <div className="container mx-auto">
            <h2 className="section-title mb-8 xl:mb-16 text-center m-auto">
               My Projects
            </h2>
            <Tabs defaultValue={category} className="mb-24 xl:mb-48">
               <TabsList className="md:w-full w-72 grid h-full md:grid-cols-5 lg:max-w-[740px] mb-12 mx-auto border border-primary/20 ">
                  {categories.map((category, index) => (
                     <TabsTrigger
                        onClick={() => setCategory(category)}
                        key={index}
                        value={category}
                        className="capitalize w-[172px] md:w-auto "
                     >
                        {category}
                     </TabsTrigger>
                  ))}
               </TabsList>
               {/* tabs contents */}
               <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredProjects.map((project, index) => (
                     <TabsContent key={index} value={category}>
                        <ProjectCard project={project} />
                     </TabsContent>
                  ))}
               </div>
            </Tabs>
         </div>
      </section>
   );
};

export default Projects;
