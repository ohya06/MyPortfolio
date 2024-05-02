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
  euchre,
  insta485,
  mapreduce,
  searchengine,
  dbfakebook,
  piazza,
  ohqueue,
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
        name: "threeJS",
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
        name: "mongoDBAtlas",
        color: "pink-text-gradient",
      },
    ],
    image: pinect,
    source_code_link: "https://github.com/",
  },
  {
    name: "Search Engine",
    description:
      "A Python application that employs information retrieval techniques like tf-idf and PageRank, alongside parallel data processing via MapReduce. This project unfolds in three stages: first, constructing a segmented inverted index and an Index server through a MapReduce pipeline; second, enhancing the Index server with a REST API for JSON search results; and finally, building a Search server with a user interface that simulates search engines like Google or Bing.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: searchengine,
    source_code_link: "https://github.com/",
  },
  {
    name: "Mapreduce Project",
    description:
      "A Python-based MapReduce framework inspired by Google's original concept, for distributed processing on platforms like AWS EMR or Microsoft Azure HDInsight. It focuses on executing MapReduce programs, exploring distributed systems, fault tolerance, OS-level concurrency with threads and processes, and networking via sockets. The framework consists of a Manager that distributes MapReduce tasks to multiple Workers, who then execute the map and reduce functions, demonstrating efficient data processing across a computer cluster.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
    ],
    image: mapreduce,
    source_code_link: "https://github.com/",
  },
  {
    name: "Instagram App Clone",
    description:
      "A three-part project that begins with a Python static site generator, advances to server-side dynamic pages with CRUD operations on a SQL database, and culminates in a client-side dynamic application using JavaScript and AJAX, to interact with a REST API, enabling a full interactive experience similar to modern web applications.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
    ],
    image: insta485,
    source_code_link: "https://github.com/",
  },
  {
    name: "Social Media Database",
    description:
      "A fictional social media platform called Fakebook, employs Java and SQL for its design and implementation with a relational database. This project involves developing a Java application that executes SQL queries against the database, effectively managing query results within specially designed data structures.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
      {
        name: "databases",
        color: "pink-text-gradient",
      },
    ],
    image: dbfakebook,
    source_code_link: "https://github.com/",
  },
  // {
  // name: "MongoDB & Hashing Database",
  // description: "This project delves into MongoDB, extracting data from the Fakebook database and seamlessly importing it for advanced querying. Subsequently, participants transition to implementing the Grace Hash Join algorithm in C++",
  // tags: [
  //   {
  //     name: "Hashing",
  //     color: "blue-text-gradient",
  //   },
  //   {
  //     name: "sql",
  //     color: "green-text-gradient",
  //   },
  //   {
  //     name: "databases",
  //     color: "pink-text-gradient",
  //   },
  // ],
  // image: cplusplus,
  // source_code_link: "https://github.com/",
  // },
  {
  name: "Office Hour Queue",
  description: "A web server dedicated to managing an office hours queue. Using concepts such as container ADTs, dynamic memory, the Big Three, linked lists, and iterators, allows it to be an effective web application accessible with any web browser.",
  tags: [
    {
      name: "c++",
      color: "blue-text-gradient",
    },
    {
      name: "json",
      color: "green-text-gradient",
    },
    {
      name: "databases",
      color: "pink-text-gradient",
    },
  ],
  image: ohqueue,
  source_code_link: "https://github.com/",
  },
  {
    name: "Piazza Post Identifier",
    description: "An application using NLP and machine learning to identify Piazza post subjects. It employs concepts like Container ADTs, Dynamic Memory, Linked Lists, and Iterators. Through recursion, binary trees, templates, comparators, and map data structures, it accurately parses and identifies  post subjects.",
    tags: [
      {
        name: "c++",
        color: "blue-text-gradient",
      },
      {
        name: "ml",
        color: "green-text-gradient",
      },
      {
        name: "bst",
        color: "pink-text-gradient",
      },
    ],
    image: piazza,
    source_code_link: "https://github.com/",
    },
  {
    name: "Euchre Game",
    description:
      "A comprehensive C++ application with foundational OOP concepts, incorporating Abstract Data Types, progresses to utilizing Derived Classes and Inheritance, and culminates in a sophisticated use of Polymorphism. The result is a dynamic Euchre game simulator that supports interactions between AI and human players.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "AbstractDataTypes",
        color: "green-text-gradient",
      },
      {
        name: "ObjectOrientedProgramming",
        color: "pink-text-gradient",
      },
    ],
    image: euchre,
    source_code_link: "https://github.com/",
  },
  // {
  //   name: "New project four",
  //   description:
  //     "adfl;sdfkdsja;fjasdlkjfdsla;kjflkjsadlfjksadlkjf",q
  //   tags: [
  //     {
  //       name: "python",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "pandas",
  //       color: "green-text-gradient",
  //     },q
  //     {
  //       name: "Anaconda",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: bayes,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, listCodeLanguages, experiences, testimonials, projects };
