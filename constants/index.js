export const profileData = {
  name: "Saurabh Bisht",
  title: "Full-Stack Web Developer",
  avatar: "./images/profile.png", // Path to your avatar image
  bio: "Passionate developer with 10+ years of experience creating elegant solutions to complex problems. Specializing in web technologies and cloud architecture.",
  location: "Dehradun, Uttarakhand",
  email: "nick.williams@example.com",
  phone: "+1 (555) 123-4567",
  socialLinks: [
    {
      platform: "GitHub",
      icon: "FaGithub",
      url: "https://github.com/nickwilliams",
    },
    {
      platform: "Twitter",
      icon: "FaTwitter",
      url: "https://twitter.com/nickwilliams",
    },
    {
      platform: "Instagram",
      icon: "FaInstagram",
      url: "https://instagram.com/nickwilliams",
    },
    {
      platform: "LinkedIn",
      icon: "FaLinkedin",
      url: "https://linkedin.com/in/nickwilliams",
    },
  ],
  languages: [
    { name: "English", level: "Native" },
    { name: "Spanish", level: "Fluent" },
    { name: "French", level: "Intermediate" },
  ],
  buttons: [
    {
      text: "My Resume",
      icon: "FaDownload",
      url: "#resume",
      printResume: true, // false if you want to attach your custom resume link
    },
    { text: "Contact Me", icon: "FaEnvelope", url: "#contact" },
  ],
};

export const aboutData = {
  greeting: "Hey there! 👋",
  introduction:
    "I’m a motivated Full Stack Web Developer with 4 months of practical experience crafting modern, responsive, and scalable web applications. Proficient in both frontend and backend technologies, I enjoy turning ideas into intuitive user experiences and building robust server-side solutions. With a strong focus on clean code, performance, and problem-solving, I’m eager to contribute to innovative projects and grow alongside forward-thinking teams, let's connect!",
  stats: [
    { value: "2K+", label: "Websites Designed", icon: "FaLaptopCode" },
    { value: "5+", label: "Years of Experience", icon: "FaCalendarAlt" },
    { value: "10+", label: "Completed Projects", icon: "FaCheckCircle" },
  ],
  skills: [
    { name: "HTML5", icon: "FaHtml5", percentage: 95 },
    { name: "CSS", icon: "FaCss3Alt", percentage: 90 },
    { name: "React", icon: "FaReact", percentage: 85 },
    { name: "Java", icon: "FaJava", percentage: 80 },
  ],
  circularSkills: [
    { name: "MySQL", icon: "GrMysql", percentage: 85 },
    { name: "MongoDB", icon: "SiMongodb", percentage: 80 },
    { name: "Node.js", icon: "FaNodeJs", percentage: 90 },
  ],
  progressSkills: [
    { name: "Git", icon: "FaGit", percentage: 80 },
    { name: "Github", icon: "FaGithub", percentage: 95 },
    { name: "Postman", icon: "SiPostman", percentage: 85 },
  ],
};

export const careerData = {
  experience: [
    {
      title: "Full Stack Web Developer",
      company: "Dabhand Solutions Pvt.",
      period: { start: "April, 2025", end: "Present" },
      description:
        "Led the development of machine learning algorithms and data processing pipelines. Collaborated with cross-functional teams to implement scalable solutions for complex data challenges. Mentored junior developers and contributed to open-source projects.",
      icon: "FaPython",
    },
    {
      title: "Web Developer",
      company: "Dezka Technical Solutions",
      period: { start: "Oct, 2023", end: "Mar, 2024" },
      description:
        "Developed responsive web applications using modern JavaScript frameworks. Built RESTful APIs and integrated third-party services. Implemented CI/CD pipelines and automated testing strategies to ensure code quality.",
      icon: "FaCode",
    },
  ],
  education: [
    {
      degree: "Master of Computer Applications",
      institution: "Graphic Era University",
      period: { start: "2023", end: "2025" },
      description:
        "Specialized in Artificial Intelligence and Machine Learning. Completed thesis on neural network optimization techniques.",
      icon: "FaGraduationCap",
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "OIMT",
      period: { start: "2020", end: "2023" },
      description:
        "Graduated with honors. Participated in robotics club and software development competitions.",
      icon: "FaUniversity",
    },
  ],
};

export const projectsData = [
  {
    id: 1,
    title: "Crypto Dashboard",
    category: "Web Application",
    image: "/crypto-tracker.png?height=300&width=400",
    description:
      "A full-featured crypto dashboard with coin-gecko api, chart js, and crypto coin tracking.",
    technologies: ["React", "Coin Gecko API", "Chart Js", "Material UI"],
    link: "https://crypto-trackerbysaurabh.netlify.app",
    github: "https://github.com/saurabhbisht95/crypto-dashboard-saurabh",
  },
  {
    id: 2,
    title: "LMS Portal",
    category: "Web Application",
    image: "/lms-portal.png?height=300&width=400",
    description:
      "Learning management portal like udemy. similar features",
    technologies: ["React", "Node", "Material UI", "Context API", "MongoDB"],
    link: "https://lms-portal-bysaurabh.netlify.app",
    github: "https://github.com/saurabhbisht95/LMS-Using-React",
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Web Design",
    image: "/portfolio.png?height=300&width=400",
    description:
      "A responsive portfolio website showcasing projects and skills with a modern design.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/saurabhbisht95/Saurabh-portfolio",
    github: "https://github.com/saurabhbisht95/Saurabh-portfolio",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    category: "Web Application",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "A weather dashboard that displays current and forecasted weather data for multiple locations.",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
    link: "https://example.com/weather",
    github: "https://github.com/username/weather",
  },
  {
    id: 5,
    title: "Blog Platform",
    category: "Web Development",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "A content management system for creating and managing blog posts with user authentication.",
    technologies: ["PHP", "MySQL", "Bootstrap", "jQuery"],
    link: "https://example.com/blog",
    github: "https://github.com/username/blog",
  },
  {
    id: 6,
    title: "E Commerce Store Frontend",
    category: "Web Design",
    image: "/ecommerce-frontend.png?height=300&width=400",
    description:
      "A frontend of e commerce website, search, and sort products.",
    technologies: ["React", "Tailwind", "Context API"],
    link: "https://github.com/saurabhbisht95/E-Commerce-Frontend",
    github: "https://e-commerce-bysaurabh.netlify.app/",
  },
];

export const categories = [
  "All",
  "Web Development",
  "Web Application",
  "Web Design",
  "Mobile App",
];

export const contactData = {
  description:
    "  Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!",
  email: "bishtsaurabh15@gmail.com",
  phone: "+91 9557896413",
  location: "Dehradun, Uttarakhand",
  availability: {
    status: "Available",
    message:
      "I'm currently available for freelance work and full-time positions.",
  },
};

export const pdfConfigurations = {
  // Base configuration with default settings
  base: {
    colors: {
      primary: "#2563EB", // Blue
      secondary: "#1E40AF",
      text: {
        primary: "#1F2937",
        secondary: "#4B5563",
        light: "#6B7280",
      },
      background: {
        main: "#FFFFFF",
        accent: "#EFF6FF",
        highlight: "#DBEAFE",
      },
    },
    layout: {
      header: "standard", // standard, centered, minimal, split
      skillsAndProjects: "twoColumn", // twoColumn, separate, grid

      // Page break controls
      pageBreaks: {
        afterExperience: false,
        afterEducation: false,
        beforeProjects: false,
      },

      // Spacing and margins
      spacing: {
        header: 20,
        section: 15,
        item: 10,
        page: 30,
      },
    },
    fonts: {
      nameSize: 24,
      sectionSize: 14,
    },
  },

  variation1: {
    name: "Variation 1",
    colors: {
      primary: "#5A9CFF",
      secondary: "#155DFC",
    },
    layout: {
      header: "standard",
      skillsAndProjects: "separate",
    },
  },
};

export const getConfig = (variation = "variation1") => {
  const baseConfig = pdfConfigurations.base;
  const variationConfig = pdfConfigurations[variation] || {};

  // Deep merge the base config with the variation config
  return {
    ...baseConfig,
    ...variationConfig,
    colors: {
      ...baseConfig.colors,
      ...(variationConfig.colors || {}),
    },
    layout: {
      ...baseConfig.layout,
      ...(variationConfig.layout || {}),
    },
  };
};
