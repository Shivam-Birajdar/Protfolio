// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      // { name: 'Redux', logo: reduxLogo },
      // { name: 'Node JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      // { name: 'C', logo: cLogo },
      // { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      // { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      // { name: 'Postman', logo: postmanLogo },
      // { name: 'Compass', logo: mcLogo },
      // { name: 'Vercel', logo: vercelLogo },
      // { name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Web Developer Intern",
      company: "InternPe",
      date: "Dec 2023 - Jan 2024",
      desc: "Contributed to the development and maintenance of web applications during my internship at InternPe. Worked with HTML, CSS, and JavaScript to create interactive and user-friendly interfaces, enhancing overall user experience. Gained practical exposure to front-end development practices and collaborative workflows in a remote environment.",
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
      img: glaLogo,
      school: "Sinhgad Institute of Technology, Lonavala",
      date: "2021 - 2025",
      grade: "8.56 CGPA",
      desc: "I have completed my Bachelor’s degree in Electronics and Telecommunication Engineering from Sinhgad Institute of Technology, Lonavala. While my core education was in electronics, I developed a strong passion for software development and mastered modern web technologies alongside my studies. Over time, I gained expertise in the MERN stack, Java, and core computer science concepts such as OOP, DBMS, and Data Structures. Through internships, projects, and continuous learning, I have combined my electronics background with full-stack development skills to build practical, user-focused solutions.",
      degree: "Bachelor of Engineering",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "Rajmata Jijamata Education Institute, Latur",
      date: "2021",
      grade: "91%",
      desc: "I completed my Class 12 education from Rajmata Jijamata Education Institute, Latur, under the Maharashtra State Board, where I studied Physics, Chemistry, and Mathematics (PCM) along with Electronics.",
      degree: "Maharashtra State Board (XII) – PCM with Electronics",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Z.P. High School Lamjana, Ausa",
      date: "2019",
      grade: "82.80%",
      desc: "I completed my Class 10 education from Z. P. High School, Lamjana, Ausa, under the Maharashtra State Board, where I studied subjects including Marathi, Multi Skill Foundation, English, Mathematics, Science & Technology, and Social Science.",
      degree: "Maharashtra State Board (X)",

    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: " WanderLust– Listing & Review Management Web App",
      description:
        "A full-stack travel listing and review web app built with Node.js, Express.js, and MongoDB. Features CRUD operations via RESTful APIs, secure authentication with Passport.js, cloud storage on MongoDB Atlas, and a responsive EJS-based UI.",
      image: csprepLogo,
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "EJS", "Passport.js", "RESTful API", "MongoDB Atlas"],
      github: "https://github.com/Shivam-Birajdar/Wanderlust_Project",
      webapp: "https://wanderlust-project-l6gm.onrender.com/",
    },
    
  ];  