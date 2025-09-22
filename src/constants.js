// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

import DSA from './assets/tech_logo/DSA.png';
import oops from './assets/tech_logo/oops.png';
import dbms from './assets/tech_logo/dbms.png';
import os from './assets/tech_logo/os.png';
import cn from './assets/tech_logo/cn.png';


// Experience Section Logo's
import celebalLogo from './assets/company_logo/Celebal.png';
import gssocLogo from './assets/company_logo/gssoc.png';


// Education Section Logo's
import aktuLogo from './assets/education_logo/aktu.png';
import sdpsLogo from './assets/education_logo/sdps.png';


// Project Section Logo's
import celebalmartLogo from './assets/work_logo/celebal_mart.png';
import zerodhaLogo from './assets/work_logo/zerodha.png';
import celebeatsLogo from './assets/work_logo/celebeats.png';
import dashboardLogo from './assets/work_logo/admin_dash.png';
import todoLogo from './assets/work_logo/To-do.png';
import simonLogo from './assets/work_logo/simon.png';
import onlinemealLogo from './assets/work_logo/online-meal.png';
import weatherLogo from './assets/work_logo/weather.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
  {
    title: 'Computer Science Fundamentals',
    skills: [
      { name: 'DSA', logo: DSA },
      { name: 'OOPS', logo: oops },
      { name: 'DBMS', logo: dbms },
      { name: 'OS', logo: os },
      { name: 'CN', logo: cn },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: celebalLogo,
      role: "React JS Developer ",
      company: "Celebal Technologies (Internship)",
      date: "June 2025 - August 2025",
      desc: "Built multiple dynamic web applications using React.js , including an Admin Dashboard, Personalized spotify clone, e-commerce website ,form validation. Focused on architecture, responsive design & clean UI.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Firebase",
        "Tailwind CSS",
        "Redux",
        "Material UI",
      ],
    },
    {
      id: 1,
      img: gssocLogo,
      role: "Open Source Contributor",
      company: "Girlscript Summer of Code",
      date: "October 2024 - November 2024",
      desc: "I participated in the Girlscript Summer of Code and was ranked 283rd out of over 30,000 contributors. It was a thrilling experience to be part of such a large and diverse community, and this achievement reflects the dedication and hard work I put into contributing to various open-source projects. I focused on enhancing user interfaces and functionality using HTML, CSS, and JavaScript, and the recognition was a rewarding acknowledgment of my contributions and efforts.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
    
  ];
  
  export const education = [
    {
      id: 0,
      img: aktuLogo,
      school: "Dr APJ Abdul Kalam Technical University",
      date: "Sept 2022 - July 2026",
      grade: "7.6 CGPA",
      desc: "I am currently pursuing a Bachelor of Technology (B.Tech) in Computer Science & technology at S.D College of Engineering & Technology,Muzaffarnagar, set to graduate in 2026. Throughout my academic journey, I have been honing my skills in programming, software development, and problem-solving, with a strong focus on react developer. My coursework has provided a solid foundation in both theoretical concepts and practical applications, and I have actively participated in projects and open-source contributions to apply my learning in real-world scenarios. With a passion for technology and innovation, I aim to leverage my education to make impactful contributions to the tech industry.",
      degree: " Bachelor of Technology - B.Tech",
    },
    {
      id: 1,
      img: sdpsLogo,
      school: "S.D Public School , Muzaffarnagar",
      date: "Apr 2021 - March 2022",
      grade: "84.4%",
      desc: "I completed my class 12 education from S.D Public School, Muzaffarnagar, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Fine Arts.",
      degree: "CBSE(XII) - PCM with Fine Arts",
    },
    {
      id: 2,
      img: sdpsLogo,
      school: "S.D Public School , Muzaffarnagar",
      date: "Apr 2019 - March 2020",
      grade: "86.8%",
      desc: "I completed my class 10 education from S.D Public School, Muzaffarnagar, under the CBSE board, where I studied all 5 core subjects.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Celebal Mart",
      description:
        "An e-commerce platform built for Celebal Technologies as an internship project — featuring cart, payments, admin dashboard, and AI-generated product showcase.",
      image: celebalmartLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API","Firebase", "Tailwind CSS", "Razorpay payment"],
      github: "https://github.com/aakanshimalik/Celebal_Mart",
      webapp: "https://celebal-mart.onrender.com",
    },
    {
      id: 1,
      title: "ZerodhaX",
      description:
        "The ZerodhaX project is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It replicates the core functionalities of a stock trading platform, allowing users to view real-time stock prices, place buy/sell orders, and manage their portfolios. I implemented features such as user authentication, real-time data fetching, and an interactive dashboard, while ensuring a seamless and responsive UI. This project not only showcases my proficiency in full-stack development but also highlights my ability to integrate third-party APIs and handle complex functionalities in a secure, scalable manner.",
      image: zerodhaLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/aakanshimalik/ZerodhaX",
      webapp: " https://zerodhaclone-frontend-3q4m.onrender.com",
    },
    {
      id: 2,
      title: "Cele_Beats",
      description:
        "A React-based web application CeleBeats Celebal x Beats - A music app for celebal Technologies in collaboration with spotify.Cele — short for Celebal Technologies, Beats — emphasizing the rhythmic, musical core of the app. Together, CeleBeats represents the idea of celebrating beats from around the world — music that speaks to a location culture, people, or trending sounds.",
      image: celebeatsLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript","Tailwind CSS"],
      github: "https://github.com/aakanshimalik/CeleBeats-SpotifyClone",
      webapp: "https://celebeats-spotifyclone.onrender.com",
    },
    {
      id: 3,
      title: "Admin dashboard",
      description:
        "Developed a React Admin Dashboard app with customizable themes, tables, charts, calendar, and Kanban board. Implemented interactive features, seamless integration, and smooth user experience.",
      image: dashboardLogo,
      tags: ["React JS", "Javascript","Tailwind CSS"],
      github: "https://github.com/aakanshimalik/CelebalInternship_Assignment4AdminDashboard",
      webapp: "https://celebalinternship.onrender.com",
    },
    {
      id: 4,
      title: "To-Do List using React",
      description:
        "Developed a React To-Do List component allowing task addition, removal, and completion marking. Validate task input, display tasks dynamically, and offer optional sorting, filtering, and localStorage integration.",
      image: todoLogo,
      tags: ["JavaScript","react JS", "HTML", "CSS","Tailwind CSS"],
      github: "https://github.com/aakanshimalik/ToDoList_CelebalAssignment2",
      webapp: "https://todolist-celebalassignment2.onrender.com",
    },
    {
      id: 5,
      title: "Simon-says-Game",
      description:
        "It is a fun,classic game of listening and quick reflexes.One player,Simon gives commands like Simon says red color blink ,Player should click on red color. And in next level player should touch red color then another color blinked by the simon.",
      image: simonLogo,
      tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
      github: "https://github.com/aakanshimalik/Simon-Says-Game",
      webapp: "https://simon-says-game-3swd.onrender.com",
    },
    {
      id: 6,
      title: "Online-Meal Website",
      description:
        "The Online Meal Ordering Project is a simple web application developed using HTML & CSS, designed to provide users with a seamless platform for browsing and ordering meals online. This project highlights my ability to create engaging and functional front-end applications while focusing on UI/UX design and interactivity.",
      image: onlinemealLogo,
      tags: ["HTML", "CSS", "JS"],
      github: "https://github.com/aakanshimalik/Online-Meal-website",
      webapp: "https://online-meal-website.onrender.com",
    },
    {
      id: 7,
      title: "Weather App",
      description:
        "The Weather App is a web application built using HTML, CSS, and JavaScript that fetches real-time weather data from an external API. Users can search for the weather in any location, and the app will display key information such as temperature, humidity, wind speed, and weather conditions. The app features a clean and responsive interface, ensuring a smooth experience across different devices.",
      image: weatherLogo,
      tags: [ "API", "HTML", "CSS", "Javascript"],
      github: "https://github.com/aakanshimalik/Weather",
      webapp: "https://weather-ii01.onrender.com",
    },
    
  ];  
