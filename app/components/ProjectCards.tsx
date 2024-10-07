import React from 'react';
import projects from '../../data/projects';
import { Card, CardFooter, Image } from "@nextui-org/react";

const ProjectCards = () => {
  return (
    <section className="p-8 grid gap-8 grid-cols-1 ">
      {projects.map((project) => (
        <Card
          key={project.id}
          className="bg-primary/45 shadow-lg p-4 w-full h-full lg:w-[680px] lg:h-[680px] mx-auto rounded-lg"
        >
          <div className="grid grid-cols-3 gap-2">
            <Image src={project.image1} alt={`${project.title} Image 1`} className="col-span-1 w-full" />
            <Image src={project.image2} alt={`${project.title} Image 2`} className="col-span-1 w-full" />
            <Image src={project.image3} alt={`${project.title} Image 3`} className="col-span-1 w-full" />
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <Image src={project.image4} alt={`${project.title} Image 4`} className="col-span-1 w-full" />
            <Image src={project.image5} alt={`${project.title} Image 5`} className="col-span-1 w-full" />
          </div>
          <CardFooter className="mt-4">
            <h3 className="text-2xl font-semibold text-primary mb-4">{project.title}</h3>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
};

export default ProjectCards;
