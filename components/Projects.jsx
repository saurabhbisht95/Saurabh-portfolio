"use client";

import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaSearch, FaTimes } from "react-icons/fa";
import { projectsData, categories } from "../constants";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = projectsData.filter((project) => {
    const categoryMatch =
      activeCategory === "All" || project.category === activeCategory;

    const searchMatch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return categoryMatch && searchMatch;
  });

  return (
    <div className="py-4 space-y-8" id="projects">
      {/* Header Section */}
      <h3 className="text-2xl font-bold mb-8 flex items-center">
        <span className="text-primary">My</span>
        <span className="ml-2 dark:text-white">Projects</span>
        <span className="ml-4 h-px w-32 bg-primary/30"></span>
      </h3>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search Bar */}
        <div className="relative flex-1">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects by name, description or technology..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              <FaTimes />
            </button>
          )}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Gallery */}
      {filteredProjects.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const {
              id,
              image,
              title,
              description,
              github,
              link,
              category,
              technologies,
            } = project;
            return (
              <div
                key={id}
                className="group relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                onMouseEnter={() => setHoveredProject(id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={title}
                    className={`w-full h-full object-fit transition-all duration-500 ${
                      hoveredProject === id ? "scale-110 blur-sm" : ""
                    }`}
                  />

                  <div
                    className={`absolute inset-0 bg-black/70 flex flex-col justify-center items-center p-6 transition-opacity duration-300 ${
                      hoveredProject === id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <h3 className="text-xl font-bold text-white mb-2 text-center">
                      {title}
                    </h3>
                    <p className="text-white/80 text-center mb-4 line-clamp-3">
                      {description}
                    </p>
                    <div className="flex gap-3">
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                      >
                        <FaGithub />
                        <span>Code</span>
                      </a>
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                      >
                        <FaExternalLinkAlt />
                        <span>Demo</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-primary">{title}</h3>
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                      {category}
                    </span>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-2">
                    {technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {technologies.length > 3 && (
                      <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded">
                        +{technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            No projects found matching your criteria.
          </p>
          <button
            onClick={() => {
              setActiveCategory("All");
              setSearchTerm("");
            }}
            className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
