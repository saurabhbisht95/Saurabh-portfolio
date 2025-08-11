import React from "react";
import {
  FaPython,
  FaDatabase,
  FaCode,
  FaGraduationCap,
  FaUniversity,
} from "react-icons/fa";
import { careerData } from "../constants";

// Map icon strings to actual components
const iconMap = {
  FaPython,
  FaDatabase,
  FaCode,
  FaGraduationCap,
  FaUniversity,
};

const Career = () => {
  return (
    <div id="career">
      {/* Experience Section */}
      {careerData?.experience?.length > 0 && (
        <div className="py-4">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <span className="text-primary">My</span>
            <span className="ml-2 dark:text-white">Experience</span>
            <span className="ml-4 h-px w-32 bg-primary/30"></span>
          </h3>

          <div className="relative border-l-2 border-primary/30 pl-8 ml-3 space-y-10">
            {careerData.experience.map((exp, index) => {
              const Icon = iconMap[exp.icon] || FaCode; // fallback icon
              return (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[47px] w-7 h-7 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <Icon className="text-primary text-sm" />
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp?.title ?? "Unknown Title"}
                      </h3>
                      <span className="text-sm text-primary font-medium px-3 py-1 bg-primary/10 rounded-full">
                        {exp?.period?.start ?? "?"} - {exp?.period?.end ?? "?"}
                      </span>
                    </div>
                    {exp?.company && (
                      <div className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                        {exp.company}
                      </div>
                    )}
                    {exp?.description && (
                      <p className="text-gray-600 dark:text-gray-300">
                        {exp.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Education Section */}
      {careerData?.education?.length > 0 && (
        <div className="py-4">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <span className="text-primary">My</span>
            <span className="ml-2 dark:text-white">Education</span>
            <span className="ml-4 h-px w-32 bg-primary/30"></span>
          </h3>

          <div className="relative border-l-2 border-primary/30 pl-8 ml-3 space-y-10">
            {careerData.education.map((edu, index) => {
              const Icon = iconMap[edu.icon] || FaGraduationCap; // fallback icon
              return (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[47px] w-7 h-7 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <Icon className="text-primary text-sm" />
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {edu?.degree ?? "Unknown Degree"}
                      </h3>
                      <span className="text-sm text-primary font-medium px-3 py-1 bg-primary/10 rounded-full">
                        {edu?.period?.start ?? "?"} - {edu?.period?.end ?? "?"}
                      </span>
                    </div>
                    {edu?.institution && (
                      <div className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                        {edu.institution}
                      </div>
                    )}
                    {edu?.description && (
                      <p className="text-gray-600 dark:text-gray-300">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;
