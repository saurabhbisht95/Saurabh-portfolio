import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJava,
  FaPython,
  FaNodeJs,
  FaLaptopCode,
  FaCalendarAlt,
  FaCheckCircle,
  FaGithub,
} from "react-icons/fa";
import { SiPostgresql, SiMongodb,SiPostman } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { aboutData } from "../constants";

const iconMap = {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJava,
  FaPython,
  FaNodeJs,
  FaLaptopCode,
  FaCalendarAlt,
  FaCheckCircle,
  SiPostgresql,
  SiMongodb,
  GrMysql,
  FaGithub,
  SiPostman
};

const AboutUs5 = () => {
  return (
    <div className="py-4" id="about">
      {/* Greeting */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {aboutData?.greeting?.split(" ")?.map((word, i) => (
            <span
              key={i}
              className={i === 1 ? "text-primary" : "dark:text-white"}
            >
              {word}{" "}
            </span>
          ))}
        </h2>
        {aboutData?.introduction && (
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
            {aboutData.introduction}
          </p>
        )}
      </div>

      {/* Stats */}
      {aboutData?.stats?.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-3 mb-12">
          {aboutData.stats.map((stat, index) => {
            const Icon = iconMap[stat.icon] || FaLaptopCode; // fallback icon
            return (
              <div
                key={index}
                className="bg-primary/5 dark:bg-gray-900 rounded-2xl p-6 flex items-center group hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary text-2xl" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-800 dark:text-white">
                    {stat.value ?? "N/A"}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.label ?? ""}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Skills Section */}
      <div>
        <h3 className="text-2xl font-bold mb-8 flex items-center">
          <span className="text-primary">My</span>
          <span className="ml-2 dark:text-white">Skills</span>
          <span className="ml-4 h-px w-32 bg-primary/30"></span>
        </h3>

        {/* Skill Cards */}
        {aboutData?.skills?.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {aboutData.skills.map((skill, index) => {
              const Icon = iconMap[skill.icon] || FaLaptopCode;
              return (
                <div
                  key={index}
                  className="bg-primary/5 dark:bg-gray-900 rounded-2xl p-6 flex flex-col items-center text-center group hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors"
                >
                  <div className="mb-4 text-primary text-4xl">
                    <Icon />
                  </div>
                  <div className="text-gray-800 dark:text-white font-medium mb-2">
                    {skill.name ?? "Unnamed"}
                  </div>
                  <div className="text-primary font-bold">
                    {skill.percentage ?? 0}%
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Circular Skills */}
        {aboutData?.circularSkills?.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {aboutData.circularSkills.map((skill, index) => {
              const Icon = iconMap[skill.icon] || FaLaptopCode;
              return (
                <div
                  key={index}
                  className="bg-primary/5 dark:bg-gray-900 rounded-2xl p-6 flex items-center"
                >
                  <div className="relative w-24 h-24 mr-6">
                    <svg
                      className="w-full h-full transform -rotate-90"
                      viewBox="0 0 100 100"
                    >
                      <circle
                        className="text-gray-200 dark:text-gray-700"
                        strokeWidth="10"
                        stroke="currentColor"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                      />
                      <circle
                        className="text-primary"
                        strokeWidth="10"
                        stroke="currentColor"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                        strokeDasharray="251.2"
                        strokeDashoffset={
                          251.2 - (251.2 * (skill.percentage ?? 0)) / 100
                        }
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                      <Icon className="text-primary text-2xl mx-auto mb-1" />
                      <span className="text-sm font-bold text-gray-800 dark:text-white">
                        {skill.percentage ?? 0}%
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xl font-medium text-gray-800 dark:text-white mb-1">
                      {skill.name ?? "Unnamed"}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Progress Skills */}
        {aboutData?.progressSkills?.length > 0 && (
          <div className="bg-primary/5 dark:bg-gray-900 rounded-2xl p-8">
            <div className="space-y-6">
              {aboutData.progressSkills.map((skill, index) => {
                const Icon = iconMap[skill.icon] || FaLaptopCode;
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mr-3">
                          <Icon className="text-primary" />
                        </div>
                        <span className="text-gray-800 dark:text-white font-medium">
                          {skill.name ?? "Unnamed"}
                        </span>
                      </div>
                      <span className="text-primary font-medium">
                        {skill.percentage ?? 0}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-primary h-2.5 rounded-full"
                        style={{ width: `${skill.percentage ?? 0}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutUs5;
