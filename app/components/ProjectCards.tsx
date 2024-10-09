"use client";

import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import projects from '../../data/projects';

const itemsPerPage = 8;

const ProjectCards = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const offset = currentPage * itemsPerPage;
  const currentProjects = projects.slice(offset, offset + itemsPerPage);

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3">
        {currentProjects.map((project) => (
          <div key={project.id} className="bg-primary/15 rounded-xl p-4 cursor-pointer shadow-md hover:shadow-primary transition-all">
            <img src={project.image} alt={project.title} className="w-full h-80 object-cover rounded-lg" />
            <h2 className="text-xl font-semibold my-2">{project.title}</h2>
            <p className="text-base text-gray-700 mb-2">{project.summary}</p>
            <div className="flex  mt-2">
              <div className="flex space-x-2 border border-primary/25 rounded-xl px-4 py-1 bg-background">
                {project.skills.map((skill, skillIndex) => (
                  <img key={skillIndex} src={skill} alt="skill" className="w-8 h-8 rounded-full hover:scale-110 transition-transform" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={Math.ceil(projects.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default ProjectCards;
