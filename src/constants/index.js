import {
  enlight,
  legaci,
  newEagle,
  logo3,
  engineer,
  fullstack,
  uiux,
  ai,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  portfolio,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  bayes,
  pinect,
  threejs,
  cplusplus,
  matlab,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: engineer,
  },
  {
    title: "Full Stack Engineer",
    icon: fullstack,
  },
  {
    title: "UI / UX Designer",
    icon: uiux,
  },
  {
    title: "Generative AI Learner",
    icon: ai,
  },
];

const listCodeLanguages = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "Matlab",
    icon: matlab,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Student Mentor",
    company_name: "Enlight",
    icon: enlight,
    iconBg: "#458cec",
    date: "March 2020 - Aug 2021",
    points: [
      "Managed multiple cohorts of 50+ new developers while they created 4 personal projects.",
      "Helped students enhance their problem solving abilities and build unique coding projects by answering questions and providing resources through Discord and Zoom.",
      "Taught Html, CSS, and JavaScript for the creation of personal websites.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Legaci",
    icon: legaci,
    iconBg: "#000000",
    date: "May 2021 - Aug 2021",
    points: [
      "Created dynamic webpages and efficient React components using Next.js and Node.js, enhancing functionality to webpages.",
      "Built database-supported dynamic webpages through a PostgreSQL database via GraphQL ensuring high performance and innovative features.",
      "Collaborated with a diverse team of developers to create a smooth and stylish merchandise website.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "New Eagle",
    icon: newEagle,
    iconBg: "#7c1424",
    date: "May 2022 - Aug 2022",
    points: [
      "Created an automated testing framework for unit testing of ECUs software in MATLAB before monthly client releases.",
      "Developed and executed unit test for task monitoring, IEEE754, and UDP stack for multiple controllers using MATLAB and Simulink.",
      "Initiated development of a Kvaser LIN bus API wrapper for a future unit testing framework and utilized the Vehicle Network Toolbox for controller unit testing.",
      "Presented project completions to the entire company at the end of the internship and delivered regular personal progress reports during daily standups with my manager and team.",
    ],
  },
  {
    title: "Freelancer / AI Gen Certification",
    company_name: "Self Employed",
    icon: logo3,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Creating and developing web applications using React.js and other related technologies.",
      "Working on various projects to learn new languages and libraries such as three.js and tailwind",
      "Currently pursuing and learning Generative AI",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Portfolio",
    description:
      "Introducing my 3D developer portfolio: Created using ThreeJS, React Three Fiber, TailwindCSS, and Framer Motion. The combination of technology and design, while showcasing my skills and creativity in web development.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/",
  },
  {
    name: "Pinect Web Application",
    description:
      "Web application that enables users to connect with others by facilitating real-time meetups based on shared interests and location. Overcoming the challenge of post-graduation social isolation, the app aims to foster informal connections among young adults through easy-to-use features and spontaneous gatherings.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "MongoDBAtlas",
        color: "pink-text-gradient",
      },
    ],
    image: pinect,
    source_code_link: "https://github.com/",
  },
  {
    name: "Naive Bayes Classifier",
    description:
      "A Naive Bayes classifier to distinguish fake from real news articles, utilizing data from the Kaggle fake and real news dataset. A tool for spotting deceptive online content, showcasing expertise in machine learning, text classification, and data analysis.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pandas",
        color: "green-text-gradient",
      },
      {
        name: "Anaconda",
        color: "pink-text-gradient",
      },
    ],
    image: bayes,
    source_code_link: "https://github.com/",
  },
];

export { services, listCodeLanguages, experiences, testimonials, projects };
