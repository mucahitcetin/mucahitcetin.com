import React from 'react'
import experiences from "../../data/experiences";

const Experience = () => {
  return (
    <section className="p-8 mt-8">
      <h1 className="text-3xl lg:text-4xl font-semibold mb-8 text-center text-primary">EXPERIENCE</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-primary/10 backdrop-blur-lg p-6 rounded-lg shadow-lg border border-gray-200/20"
          >
            <h2 className="text-2xl font-bold mb-2 text-primary">{exp.title}</h2>
            <h3 className="text-lg font-semibold mb-4 text-primary">{exp.company}</h3>
            <ul className="list-disc pl-5 ">
              {exp.details.map((detail, i) => (
                <li key={i} className="mb-2">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
