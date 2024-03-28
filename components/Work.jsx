"use client";
import Link from "next/link";
import { Button } from "./ui/button";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "./ProjectCard";

import { projectsData } from "./projectData";

const Work = () => {
    return (
        <section className="relative mb-12 xl:mb-80">
            <div className="container mx-auto mb-32">
                {/* text */}
                <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
                    <h2 className="section-title mb-4">Latest Projects</h2>
                    <p className="subtitle mb-8">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                    </p>
                    <Link href="/projects">
                        <Button>All projects</Button>
                    </Link>
                </div>
                {/* slider */}
                <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
                    <Swiper
                        className="h-[664px] "
                        slidesPerView={1}
                        breakpoints={{
                            1024: {
                                slidesPerView: 2,
                            },
                        }}
                        spaceBetween={30}
                        modules={[Pagination]}
                        pagination={{ clickable: "true" }}
                    >
                        {/* show only first 4 projects */}
                        {projectsData.slice(0, 4).map((project, index) => (
                            <SwiperSlide key={index}>
                                <ProjectCard project={project} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Work;
