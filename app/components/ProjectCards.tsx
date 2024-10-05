import React from 'react';
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";

const projects = [
  {
    title: "What to watch",
    subtitle: "Stream the Acme event",
    imageUrl: "https://nextui.org/images/card-example-4.jpeg"
  },
  {
    title: "Plant a tree",
    subtitle: "Contribute to the planet",
    imageUrl: "https://nextui.org/images/card-example-3.jpeg"
  },
  {
    title: "Supercharged",
    subtitle: "Creates beauty like a beast",
    imageUrl: "https://nextui.org/images/card-example-2.jpeg"
  },
  {
    title: "New",
    subtitle: "Acme camera",
    imageUrl: "https://nextui.org/images/card-example-6.jpeg",
    footer: {
      text: "Available soon. Get notified.",
      buttonText: "Notify Me",
    }
  },
  {
    title: "Your day your way",
    subtitle: "Your checklist for better sleep",
    imageUrl: "https://nextui.org/images/card-example-5.jpeg",
    footer: {
      image: "https://nextui.org/images/breathing-app-icon.jpeg",
      title: "Breathing App",
      description: "Get a good night's sleep.",
      buttonText: "Get App",
    }
  },
];

const ProjectCards = () => {
  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
      {projects.map((project, index) => (
        <Card
          key={index}
          className={`col-span-12 sm:col-span-${index === 3 ? 5 : index === 4 ? 7 : 4} h-[300px]`}
          isFooterBlurred={!!project.footer}
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">{project.title}</p>
            <h4 className={`text-${index === 3 ? 'black' : 'white'} font-medium ${index === 4 ? 'text-xl' : 'text-large'}`}>{project.subtitle}</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className={`z-0 w-full h-full ${index === 3 ? 'scale-125 -translate-y-6' : ''} object-cover`}
            src={project.imageUrl}
          />
          {project.footer && (
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              {project.footer.image ? (
                <>
                  <div className="flex flex-grow gap-2 items-center">
                    <Image
                      alt="Footer icon"
                      className="rounded-full w-10 h-11 bg-black"
                      src={project.footer.image}
                    />
                    <div className="flex flex-col">
                      <p className="text-tiny text-white/60">{project.footer.title}</p>
                      <p className="text-tiny text-white/60">{project.footer.description}</p>
                    </div>
                  </div>
                  <Button radius="full" size="sm">{project.footer.buttonText}</Button>
                </>
              ) : (
                <>
                  <div>
                    <p className="text-black text-tiny">{project.footer.text}</p>
                  </div>
                  <Button className="text-tiny" color="primary" radius="full" size="sm">
                    {project.footer.buttonText}
                  </Button>
                </>
              )}
            </CardFooter>
          )}
        </Card>
      ))}
    </div>
  );
}

export default ProjectCards;
