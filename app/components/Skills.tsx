import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import skills from "../../data/skills";

const Skills = () => {
  return (
    <section className="p-8 mt-8">
      <h1 className="text-3xl lg:text-4xl font-semibold mb-8 text-center text-primary">
        SKILLS
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src={skill.icon}
                alt={`${skill.name} icon`}
                width={80}
                height={80}
                className="object-contain fit-c"
              />
            </div>
            <p className="mt-4 text-lg text-primary text-center font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
      <Link
        href="/skills"
        className="flex justify-end mt-5 mr-5 text-secondary font-semibold cursor-pointer text-start hover:underline gap-1 items-center text-xl"
      >
        Details
        <FaChevronRight />
      </Link>
    </section>
  );
};

export default Skills;
