"use client";

import { useState, useCallback, useEffect } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Font,
  pdf,
  Link,
} from "@react-pdf/renderer";
import { FaTimes } from "react-icons/fa";
import { getConfig } from "../constants";

// Register fonts
Font.register({
  family: "Open Sans",
  fonts: [
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf",
    },
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf",
      fontWeight: 600,
    },
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-700.ttf",
      fontWeight: 700,
    },
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-800.ttf",
      fontWeight: 800,
    },
  ],
});

// Improved Resume Design with flexible layout options
const useResumePDF = ({
  aboutData,
  careerData,
  profileData,
  contactData,
  projectsData,
}) => {
  const [showPreview, setShowPreview] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const config = getConfig();

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Create styles based on configuration
  const styles = StyleSheet.create({
    page: {
      padding: config.layout.spacing.page,
      fontFamily: "Open Sans",
      fontSize: 10,
      lineHeight: 1.5,
      backgroundColor: config.colors.background.main,
    },
    // Standard header style
    standardHeader: {
      flexDirection: "row",
      marginBottom: config.layout.spacing.header,
      borderBottomWidth: 2,
      borderBottomColor: config.colors.primary,
      paddingBottom: 10,
    },
    // Centered header style
    centeredHeader: {
      marginBottom: config.layout.spacing.header,
      borderBottomWidth: 2,
      borderBottomColor: config.colors.primary,
      paddingBottom: 15,
      alignItems: "center",
      textAlign: "center",
    },
    // Minimal header style
    minimalHeader: {
      marginBottom: config.layout.spacing.header,
      paddingBottom: 5,
    },
    // Split header style
    splitHeader: {
      flexDirection: "row",
      marginBottom: config.layout.spacing.header,
      borderBottomWidth: 2,
      borderBottomColor: config.colors.primary,
      paddingBottom: 10,
      backgroundColor: config.colors.background.accent,
      padding: 10,
      borderRadius: 5,
    },
    headerLeft: {
      flex: 1,
    },
    headerRight: {
      flex: 1,
      alignItems: "flex-end",
    },
    name: {
      fontSize: config.fonts.nameSize,
      fontWeight: 700,
      color: config.colors.secondary,
      marginBottom: 10,
    },
    title: {
      fontSize: config.fonts.sectionSize,
      color: config.colors.primary,
      marginBottom: 5,
      marginTop: 5,
    },
    contactItem: {
      flexDirection: "row",
      marginBottom: 5,
      fontSize: 9,
    },
    contactLabel: {
      color: config.colors.text.light,
      marginRight: 5,
    },
    contactValue: {
      color: config.colors.text.primary,
    },
    centeredContactItem: {
      marginHorizontal: 10,
      marginBottom: 5,
      fontSize: 9,
      color: config.colors.text.secondary,
    },
    contactContainer: {
      flexDirection: "row",
      justifyContent: "center",
      flexWrap: "wrap",
      marginTop: 10,
    },
    section: {
      marginBottom: config.layout.spacing.section,
      width: "100%",
    },
    sectionTitle: {
      fontSize: config.fonts.sectionSize,
      fontWeight: 700,
      color: config.colors.secondary,
      marginBottom: 10,
      backgroundColor: config.colors.background.accent,
      padding: 5,
      borderRadius: 3,
    },
    experienceItem: {
      marginBottom: config.layout.spacing.item,
      width: "100%",
    },
    experienceHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 5,
    },
    experienceTitle: {
      fontWeight: 700,
      color: config.colors.text.primary,
    },
    experienceCompany: {
      fontWeight: 600,
      color: config.colors.primary,
    },
    experiencePeriod: {
      color: config.colors.text.light,
      fontSize: 9,
    },
    experienceDescription: {
      fontSize: 9,
      color: config.colors.text.secondary,
    },
    twoColumnSection: {
      flexDirection: "row",
      marginBottom: config.layout.spacing.section,
    },
    column: {
      flex: 1,
      paddingRight: 10,
    },
    skillsContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: 5,
    },
    skillItem: {
      backgroundColor: config.colors.background.highlight,
      borderRadius: 3,
      padding: "3 6",
      margin: "0 5 5 0",
      fontSize: 9,
      color: config.colors.secondary,
    },
    languageItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 5,
    },
    languageName: {
      color: config.colors.text.primary,
      fontSize: 9,
    },
    languageLevel: {
      color: config.colors.text.light,
      fontSize: 9,
    },
    projectItem: {
      marginBottom: 10,
    },
    projectTitle: {
      fontWeight: 600,
      color: config.colors.text.primary,
    },
    projectDescription: {
      fontSize: 8,
      color: config.colors.text.secondary,
      marginTop: 2,
    },
    projectTech: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: 3,
    },
    projectTechItem: {
      backgroundColor: config.colors.background.accent,
      borderRadius: 3,
      padding: "2 4",
      margin: "0 3 3 0",
      fontSize: 7,
      color: config.colors.primary,
    },
    projectsGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    projectGridItem: {
      width: "48%",
      marginBottom: 10,
      padding: 8,
      backgroundColor: config.colors.background.accent,
      borderRadius: 4,
    },
    pageNumber: {
      position: "absolute",
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: "center",
      fontSize: 8,
      color: config.colors.text.light,
    },
    bio: {
      fontSize: 9,
      color: config.colors.text.secondary,
      marginBottom: 10,
    },
    centeredBio: {
      fontSize: 9,
      color: config.colors.text.secondary,
      marginBottom: 10,
      textAlign: "center",
      maxWidth: 400,
      alignSelf: "center",
    },
  });

  // Render the appropriate header based on configuration
  const renderHeader = () => {
    switch (config.layout.header) {
      case "centered":
        return (
          <View style={styles.centeredHeader}>
            <Text style={styles.name}>{profileData?.name || "Your Name"}</Text>
            <Text style={styles.title}>
              {profileData?.title || "Your Title"}
            </Text>
            {profileData?.bio && (
              <Text style={styles.centeredBio}>{profileData.bio}</Text>
            )}

            <View style={styles.contactContainer}>
              {contactData?.email && (
                <Text style={styles.centeredContactItem}>
                  {contactData.email}
                </Text>
              )}
              {contactData?.phone && (
                <Text style={styles.centeredContactItem}>
                  {contactData.phone}
                </Text>
              )}
              {contactData?.location && (
                <Text style={styles.centeredContactItem}>
                  {contactData.location}
                </Text>
              )}
            </View>

            <View style={styles.contactContainer}>
              {profileData?.socialLinks?.map((social, index) => (
                <Link
                  key={index}
                  src={social.url}
                  style={styles.centeredContactItem}
                >
                  {social.platform}
                </Link>
              ))}
            </View>
          </View>
        );

      case "minimal":
        return (
          <View style={styles.minimalHeader}>
            <Text style={[styles.name, { marginBottom: 5 }]}>
              {profileData?.name || "Your Name"}
            </Text>
            <Text style={styles.title}>
              {profileData?.title || "Your Title"}
            </Text>
            {profileData?.bio && (
              <Text style={styles.bio}>{profileData.bio}</Text>
            )}

            <View
              style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 10 }}
            >
              {contactData?.email && (
                <Text
                  style={{
                    fontSize: 9,
                    marginRight: 15,
                    color: config.colors.text.secondary,
                  }}
                >
                  Email: {contactData.email}
                </Text>
              )}
              {contactData?.phone && (
                <Text
                  style={{
                    fontSize: 9,
                    marginRight: 15,
                    color: config.colors.text.secondary,
                  }}
                >
                  Phone: {contactData.phone}
                </Text>
              )}
              {contactData?.location && (
                <Text
                  style={{
                    fontSize: 9,
                    marginRight: 15,
                    color: config.colors.text.secondary,
                  }}
                >
                  Location: {contactData.location}
                </Text>
              )}
              {profileData?.socialLinks?.slice(0, 2).map((social, index) => (
                <Link
                  key={index}
                  src={social.url}
                  style={{
                    fontSize: 9,
                    marginRight: 15,
                    color: config.colors.primary,
                  }}
                >
                  {social.platform}
                </Link>
              ))}
            </View>
          </View>
        );

      case "split":
        return (
          <View style={styles.splitHeader}>
            <View style={styles.headerLeft}>
              <Text style={styles.name}>
                {profileData?.name || "Your Name"}
              </Text>
              <Text style={styles.title}>
                {profileData?.title || "Your Title"}
              </Text>
              {profileData?.bio && (
                <Text style={styles.bio}>{profileData.bio}</Text>
              )}
            </View>
            <View style={styles.headerRight}>
              {contactData?.email && (
                <View style={styles.contactItem}>
                  <Text style={styles.contactLabel}>Email:</Text>
                  <Text style={styles.contactValue}>{contactData.email}</Text>
                </View>
              )}
              {contactData?.phone && (
                <View style={styles.contactItem}>
                  <Text style={styles.contactLabel}>Phone:</Text>
                  <Text style={styles.contactValue}>{contactData.phone}</Text>
                </View>
              )}
              {contactData?.location && (
                <View style={styles.contactItem}>
                  <Text style={styles.contactLabel}>Location:</Text>
                  <Text style={styles.contactValue}>
                    {contactData.location}
                  </Text>
                </View>
              )}
              {profileData?.socialLinks?.map((social, index) => (
                <View key={index} style={styles.contactItem}>
                  <Text style={styles.contactLabel}>{social.platform}:</Text>
                  <Link src={social.url} style={styles.contactValue}>
                    {social.url.replace(/(^\w+:|^)\/\//, "")}
                  </Link>
                </View>
              ))}
            </View>
          </View>
        );

      // Standard header (default)
      default:
        return (
          <View style={styles.standardHeader}>
            <View style={styles.headerLeft}>
              <Text style={styles.name}>
                {profileData?.name || "Your Name"}
              </Text>
              <Text style={styles.title}>
                {profileData?.title || "Your Title"}
              </Text>
              {profileData?.bio && (
                <Text style={styles.bio}>{profileData.bio}</Text>
              )}
            </View>
            <View style={styles.headerRight}>
              {contactData?.email && (
                <View style={styles.contactItem}>
                  <Text style={styles.contactLabel}>Email:</Text>
                  <Text style={styles.contactValue}>{contactData.email}</Text>
                </View>
              )}
              {contactData?.phone && (
                <View style={styles.contactItem}>
                  <Text style={styles.contactLabel}>Phone:</Text>
                  <Text style={styles.contactValue}>{contactData.phone}</Text>
                </View>
              )}
              {contactData?.location && (
                <View style={styles.contactItem}>
                  <Text style={styles.contactLabel}>Location:</Text>
                  <Text style={styles.contactValue}>
                    {contactData.location}
                  </Text>
                </View>
              )}
              {profileData?.socialLinks?.map((social, index) => (
                <View key={index} style={styles.contactItem}>
                  <Text style={styles.contactLabel}>{social.platform}:</Text>
                  <Link src={social.url} style={styles.contactValue}>
                    {social.url.replace(/(^\w+:|^)\/\//, "")}
                  </Link>
                </View>
              ))}
            </View>
          </View>
        );
    }
  };

  // Render skills and projects based on configuration
  const renderSkillsAndProjects = () => {
    // Check if we have skills or projects to display
    const hasSkills =
      profileData?.skills?.length > 0 || aboutData?.skills?.length > 0;
    const hasProjects = projectsData?.length > 0;

    if (!hasSkills && !hasProjects) return null;

    switch (config.layout.skillsAndProjects) {
      case "separate":
        return (
          <>
            {/* Skills */}
            {hasSkills && (
              <View
                style={styles.section}
                break={config.layout.pageBreaks.beforeProjects}
              >
                <Text style={styles.sectionTitle}>Skills</Text>
                <View style={styles.skillsContainer}>
                  {aboutData?.skills?.map((skill, index) => (
                    <Text key={`additional-${index}`} style={styles.skillItem}>
                      {skill.name}
                    </Text>
                  ))}
                  {aboutData?.circularSkills?.map((skill, index) => (
                    <Text key={`additional-${index}`} style={styles.skillItem}>
                      {skill.name}
                    </Text>
                  ))}
                  {aboutData?.progressSkills?.map((skill, index) => (
                    <Text key={`additional-${index}`} style={styles.skillItem}>
                      {skill.name}
                    </Text>
                  ))}
                </View>
              </View>
            )}

            {/* Languages */}
            {profileData?.languages?.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Languages</Text>
                {profileData.languages.map((lang, index) => (
                  <View key={index} style={styles.languageItem}>
                    <Text style={styles.languageName}>{lang.name}</Text>
                    <Text style={styles.languageLevel}>{lang.level}</Text>
                  </View>
                ))}
              </View>
            )}

            {/* Projects */}
            {hasProjects && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Projects</Text>
                {projectsData?.map((project, index) => (
                  <View key={index} style={styles.projectItem} wrap={false}>
                    <Text style={styles.projectTitle}>{project.title}</Text>
                    {project.description && (
                      <Text style={styles.projectDescription}>
                        {project.description}
                      </Text>
                    )}
                    {project.technologies?.length > 0 && (
                      <View style={styles.projectTech}>
                        {project.technologies.map((tech, techIndex) => (
                          <Text key={techIndex} style={styles.projectTechItem}>
                            {tech}
                          </Text>
                        ))}
                      </View>
                    )}
                  </View>
                ))}
              </View>
            )}
          </>
        );

      case "grid":
        return (
          <>
            {/* Skills */}
            {hasSkills && (
              <View
                style={styles.section}
                break={config.layout.pageBreaks.beforeProjects}
              >
                <Text style={styles.sectionTitle}>Skills</Text>
                <View style={styles.skillsContainer}>
                  {profileData?.skills?.map((skill, index) => (
                    <Text key={index} style={styles.skillItem}>
                      {skill}
                    </Text>
                  ))}
                  {aboutData?.skills?.map((skill, index) => (
                    <Text key={`additional-${index}`} style={styles.skillItem}>
                      {skill.name}
                    </Text>
                  ))}
                </View>
              </View>
            )}

            {/* Languages */}
            {profileData?.languages?.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Languages</Text>
                {profileData.languages.map((lang, index) => (
                  <View key={index} style={styles.languageItem}>
                    <Text style={styles.languageName}>{lang.name}</Text>
                    <Text style={styles.languageLevel}>{lang.level}</Text>
                  </View>
                ))}
              </View>
            )}

            {/* Projects in Grid */}
            {hasProjects && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Projects</Text>
                <View style={styles.projectsGrid}>
                  {projectsData.slice(0, 4).map((project, index) => (
                    <View
                      key={index}
                      style={styles.projectGridItem}
                      wrap={false}
                    >
                      <Text style={styles.projectTitle}>{project.title}</Text>
                      {project.description && (
                        <Text style={styles.projectDescription}>
                          {project.description}
                        </Text>
                      )}
                      {project.technologies?.length > 0 && (
                        <View style={styles.projectTech}>
                          {project.technologies.map((tech, techIndex) => (
                            <Text
                              key={techIndex}
                              style={styles.projectTechItem}
                            >
                              {tech}
                            </Text>
                          ))}
                        </View>
                      )}
                    </View>
                  ))}
                </View>
              </View>
            )}
          </>
        );

      // Two column layout (default)
      default:
        return (
          <View
            style={styles.twoColumnSection}
            break={config.layout.pageBreaks.beforeProjects}
          >
            {/* Left column */}
            <View style={styles.column}>
              {/* Skills */}
              {hasSkills && (
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Skills</Text>
                  <View style={styles.skillsContainer}>
                    {profileData?.skills?.map((skill, index) => (
                      <Text key={index} style={styles.skillItem}>
                        {skill}
                      </Text>
                    ))}
                    {aboutData?.skills?.map((skill, index) => (
                      <Text
                        key={`additional-${index}`}
                        style={styles.skillItem}
                      >
                        {skill.name}
                      </Text>
                    ))}
                  </View>
                </View>
              )}

              {/* Languages */}
              {profileData?.languages?.length > 0 && (
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Languages</Text>
                  {profileData.languages.map((lang, index) => (
                    <View key={index} style={styles.languageItem}>
                      <Text style={styles.languageName}>{lang.name}</Text>
                      <Text style={styles.languageLevel}>{lang.level}</Text>
                    </View>
                  ))}
                </View>
              )}
            </View>

            {/* Right column */}
            <View style={styles.column}>
              {/* Projects */}
              {hasProjects && (
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Projects</Text>
                  {projectsData.slice(0, 3).map((project, index) => (
                    <View key={index} style={styles.projectItem} wrap={false}>
                      <Text style={styles.projectTitle}>{project.title}</Text>
                      {project.description && (
                        <Text style={styles.projectDescription}>
                          {project.description}
                        </Text>
                      )}
                      {project.technologies?.length > 0 && (
                        <View style={styles.projectTech}>
                          {project.technologies.map((tech, techIndex) => (
                            <Text
                              key={techIndex}
                              style={styles.projectTechItem}
                            >
                              {tech}
                            </Text>
                          ))}
                        </View>
                      )}
                    </View>
                  ))}
                </View>
              )}
            </View>
          </View>
        );
    }
  };

  const ResumeDocument = () => (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        {/* Header */}
        {renderHeader()}

        {/* Experience */}
        {careerData?.experience?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Experience</Text>
            {careerData.experience.map((exp, index) => (
              <View key={index} style={styles.experienceItem} wrap={false}>
                <View style={styles.experienceHeader}>
                  <Text style={styles.experienceTitle}>{exp.title}</Text>
                  <Text style={styles.experiencePeriod}>
                    {exp.period?.start || ""} - {exp.period?.end || "Present"}
                  </Text>
                </View>
                <Text style={styles.experienceCompany}>{exp.company}</Text>
                {exp.description && (
                  <Text style={styles.experienceDescription}>
                    {exp.description}
                  </Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Education */}
        {careerData?.education?.length > 0 && (
          <View
            style={styles.section}
            break={config.layout.pageBreaks.afterExperience}
          >
            <Text style={styles.sectionTitle}>Education</Text>
            {careerData.education.map((edu, index) => (
              <View key={index} style={styles.experienceItem} wrap={false}>
                <View style={styles.experienceHeader}>
                  <Text style={styles.experienceTitle}>{edu.degree}</Text>
                  <Text style={styles.experiencePeriod}>
                    {edu.period?.start || ""} - {edu.period?.end || "Present"}
                  </Text>
                </View>
                <Text style={styles.experienceCompany}>{edu.institution}</Text>
                {edu.description && (
                  <Text style={styles.experienceDescription}>
                    {edu.description}
                  </Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Skills and Projects Section */}
        {renderSkillsAndProjects()}

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );

  // Generate PDF blob for download
  const generatePdfDocument = async () => {
    const blob = await pdf(<ResumeDocument />).toBlob();
    return blob;
  };

  // Handle download
  const handleDownload = useCallback(async () => {
    try {
      // Show loading indicator or message for mobile
      if (isMobile) {
        // You could add a loading state here if needed
      }

      const blob = await pdf(<ResumeDocument />).toBlob();
      const url = URL.createObjectURL(blob);

      // For iOS Safari and some mobile browsers that have issues with programmatic downloads
      if (isMobile && /iPhone|iPad|iPod|iOS/i.test(navigator.userAgent)) {
        // Open in new tab (this works better on iOS)
        window.open(url, "_blank");
      } else {
        // Standard download approach
        const link = document.createElement("a");
        link.href = url;
        link.download = `${
          profileData?.name?.replace(/\s+/g, "_") || "resume"
        }_resume.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      // Clean up the URL object
      setTimeout(() => {
        URL.revokeObjectURL(url);
      }, 100);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("There was an error generating your PDF. Please try again.");
    }
  }, [profileData?.name, isMobile]);

  // Toggle preview
  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  // Mobile-friendly preview component
  const MobilePreview = () => (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex flex-col left-0">
      <div className="p-4 border-b flex justify-between items-center bg-white dark:border-gray-600 dark:bg-gray-900 shadow-sm z-10">
        <h2
          className="text-xl font-bold"
          style={{ color: config.colors.primary }}
        >
          Resume Preview
        </h2>
        <div className="flex items-center gap-2">
          <button
            onClick={togglePreview}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Close preview"
          >
            <FaTimes size={20} />
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-auto bg-gray-100 dark:bg-gray-800 p-2">
        <div className="text-center p-4 mb-4">
          <button
            onClick={handleDownload}
            className="px-4 py-2 rounded-md text-white w-full"
            style={{ backgroundColor: config.colors.primary }}
          >
            Download Resume PDF
          </button>
        </div>
        <div className="bg-white p-4 rounded shadow-lg text-center dark:bg-gray-900 dark:text-gray-300">
          <p className="mb-4">
            PDF preview is not available on mobile devices, but you can download
            this resume using the button above.
          </p>
        </div>
      </div>
    </div>
  );

  // Desktop preview component
  const DesktopPreview = () => (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
      <div className="fixed inset-0 flex flex-col  ">
        <div className="p-4 border-b flex justify-between items-center dark:bg-gray-900 dark:border-gray-600 bg-white shadow-sm z-10">
          <h2
            className="text-2xl font-bold"
            style={{ color: config.colors.primary }}
          >
            Resume Preview
          </h2>
          <div className="flex items-center gap-4">
            <button
              onClick={handleDownload}
              className="px-4 py-2 rounded-md text-white"
              style={{ backgroundColor: config.colors.primary }}
            >
              Download PDF
            </button>
            <button
              onClick={togglePreview}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Close preview"
            >
              <FaTimes size={24} />
            </button>
          </div>
        </div>
        <div className="flex-1 w-full h-full">
          <PDFViewer width="100%" height="100%" className="border-0">
            <ResumeDocument />
          </PDFViewer>
        </div>
      </div>
    </div>
  );

  return {
    downloadResume: handleDownload,
    previewResume: togglePreview,
    PreviewModal: showPreview ? (
      isMobile ? (
        <MobilePreview />
      ) : (
        <DesktopPreview />
      )
    ) : null,
  };
};

export default useResumePDF;
