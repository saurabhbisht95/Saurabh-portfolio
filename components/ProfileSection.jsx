"use client";
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFileAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";

import Image from "next/image";
import useResumePDF from "./useResumePDF";
import {
  careerData,
  projectsData,
  contactData,
  aboutData,
  profileData,
} from "../constants";

// Map icon strings to actual components
const iconMap = {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFileAlt,
  FaEnvelope,
  FaDownload,
};

const ProfileCard1 = () => {
  const { downloadResume, previewResume, PreviewModal } = useResumePDF({
    careerData,
    projectsData,
    contactData,
    aboutData,
    profileData,
  });

  return (
    <div className="w-full max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="relative h-40 bg-gradient-to-r from-primary/60 to-primary/70">
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
          <div className="w-32 h-32 rounded-full border-4  bg-gray-50 border-white dark:border-gray-900 overflow-hidden">
            <Image
              src={profileData.avatar || "/placeholder.svg"}
              alt={profileData.name}
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="pt-20 pb-6 px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          {profileData.name}
        </h2>
        <p className="text-primary font-medium">{profileData.title}</p>

        {profileData.location && (
          <div className="flex items-center justify-center mt-2 text-gray-600 dark:text-gray-400 text-sm">
            <FaMapMarkerAlt className="mr-1" />
            <span>{profileData.location}</span>
          </div>
        )}

        <div className="mt-6 flex justify-center space-x-4">
          {profileData.socialLinks.map((link, index) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={index}
                href={link.url}
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors"
                aria-label={link.platform}
              >
                {Icon && <Icon />}
              </a>
            );
          })}
        </div>

        <div className="mt-6 flex justify-center gap-3">
          {profileData.buttons.map((button, index) => {
            const Icon = iconMap[button.icon];
            return (
              <a
                key={index}
                href={button.url}
                onClick={(e) => {
                  if (button?.printResume) {
                    e.preventDefault();
                    previewResume();
                  }
                }}
                className={`px-4 py-2 rounded-lg flex items-center ${
                  index === 0
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "border border-primary text-primary hover:bg-primary/10"
                } transition-colors`}
              >
                {Icon && <Icon className="mr-2" />}
                {button.text}
              </a>
            );
          })}

          {PreviewModal}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard1;
