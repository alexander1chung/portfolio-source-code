import { combineReducers } from "redux";

import tetrislogo from "../images/tetrislogo.png";
import computesoftware from "../images/computesoftware.svg";
import appearix from "../images/appearix.png";
import shutterbeam from "../images/shutterbeam.png";
import codebuilder from "../images/codebuilder.png";
import wonder4 from "../images/wonder4.png";
import relaxdb from "../images/relaxdb.png";
import essenceprep from "../images/essenceprep.png";
import lingdong from "../images/lingdong.png";
import asterprep from "../images/asterprep.png";

const experiences = [
  {
    logo: asterprep,
    title: "Aster Prep",
    date: "January 2014 - Present",
    role: "Founder",
    description: `A little side project that I've been working on for a long time where I'm conducting educational reform with
    direct application of theory. The standards for education are constantly growing and
    this method provides an effective solution to making knowledge stick without the hours of plain and boring studying.`,
    tags: {
      "React.js": "Technology",
      Redux: "Technology",
      AWS: "Technology",
      GraphQL: "Technology",
      Apollo: "Technology",
      CORS: "Technology",
      "Web Application": "Skill",
      Frontend: "Skill",
      "CI/CD": "Skill",
      Backend: "Skill",
      "SCSS/SASS": "Language",
      "Node.js": "Language",
    },
    links: [["Work In Progress", "#"]],
  },
  {
    logo: essenceprep,
    title: "Essence Prep",
    date: "January 2021 - Present",
    role: "Tech Lead",
    description: `Built full website for academic and career consultations website, 
    Essence Prep, using React and Wordpress. Used Wordpress as CMS so that client can 
    interact with Website without being a developer. Integrated authentication and paid services 
    to allow client to scale consultation services. This website is deployed on AWS EC2, uses a
    continuous deployment pipeline with elastic beanstalk paired with a load balancer, as well as
    Route 53 for DNS Management, AWS S3 for Data Storage, AWS RDS for creating relations, AWS SES and SMS for verification and sending emails, AWS certificate manager for deploying SSL/TLS, 
    CloudWatch to monitor operational data, and CloudFront to ensure high and secure availability. Project currently in stealth mode.`,
    tags: {
      SMTP: "Technology",
      AWS: "Technology",
      "React.js": "Technology",
      CORS: "Technology",
      Redux: "Technology",
      "Route 53": "Technology",
      CloudFront: "Technology",
      "Elastic Beanstalk": "Technology",
      CloudWatch: "Technology",
      "CSS Modules": "Technology",
      "HTML5 Canvas": "Technology",
      "Web Application": "Skill",
      "CI/CD": "Skill",
      "UI/UX": "Skill",
      "Graphic Design": "Skill",
      SEO: "Skill",
      Frontend: "Skill",
      Backend: "Skill",
      "SCSS/SASS": "Language",
      PHP: "Language",
      "Node.js": "Language",
      Bash: "Language",
    },
    links: [["Work In Progress", "#"]],
  },
  {
    logo: lingdong,
    title: "LingDong Pigeon Club",
    date: "November 2020 - December 2020",
    role: "Frontend Developer",
    description: `Rebuilt the frontend of a static legacy website for a client
    with little access to backend API. Implemented a proxy to original website
    and scraped data and configured into a new format.`,
    tags: {
      "React.js": "Technology",
      CORS: "Technology",
      "UI/UX": "Skill",
      "Web Scraping": "Skill",
      Frontend: "Skill",
      Backend: "Skill",
      "SCSS/SASS": "Language",
      "Node.js": "Language",
    },
  },
  {
    logo: shutterbeam,
    title: "Shutterbeam",
    date: "September 2020 - October 2020",
    role: "Technical Co-Founder",
    description: `Helped with formation of the concept for this project and initial tech setup.
    Worked on the IOS and Android prototype for the mobile version of the application, designing the 
    frontend for the application and hooking up Firebase for authentication and data storage. 
    A new social media app that won't sell your data, won't show ads 
    and put's the user in control`,
    tags: {
      "React Native": "Technology",
      "Firebase Auth": "Technology",
      "Firebase Firestore": "Technology",
      "UI/UX": "Skill",
      Frontend: "Skill",
      Backend: "Skill",
      iOS: "Skill",
      Android: "Skill",
      "Mobile Application": "Skill",
      "Node.js": "Language",
    },
  },
  {
    title: "Tetris By Alex",
    role: "Founder",
    date: "August 2020 - September 2020",
    description: `This is a Tetris game built with React, Redux, Bootstrap, Nodejs, Express, Webpack, Sass/Scss, and Styled Components.
              This game was originally deployed using AWS EC2 with Docker, but it's currently deployed with Github pages as it's only a frontend game.
              The inspiration for this game was to advance my object oriented programming proficiency as games are generally
              pretty challenging to make without an engine.`,
    logo: tetrislogo,
    tags: {
      SPA: "Technology",
      "React.js": "Technology",
      Redux: "Technology",
      "CSS Modules": "Technology",
      "Web Application": "Skill",
      SEO: "Skill",
      "UI/UX": "Skill",
      "Graphic Design": "Skill",
      Frontend: "Skill",
      "Node.js": "Language",
      "SCSS/SASS": "Language",
    },
    links: [["Website", "https://tetris-by-alex-c.com/"]],
  },
  {
    logo: computesoftware,
    title: "Compute Software",
    date: "June 2020 - July 2020",
    role: "Fullstack Software Engineer",
    description: `Built components using Clojure/Clojurescript, Datomic, Reagent and other tools such as HighCharts. 
      Components I created were for displaying cloud metrics and were developed based off wireframes and mockups.`,
    tags: {
      SPA: "Technology",
      Frontend: "Skill",
      "UI/UX": "Skill",
      Backend: "Skill",
      "Clojure/ClojureScript": "Language",
      "SCSS/SASS": "Language",
    },
  },
  {
    logo: codebuilder,
    title: "CodeBuilder",
    date: "February 2020 - May 2020",
    role: "Founder",
    description: `A community for coders to answer JavaScript problems. Similar to Leetcode and Codewars
    this application allows users to test their coding skills and see how they rank among other 
    coders with real time results.
    This project was initially built with React, but eventually it was decided to use Angular as the codebase
    was inherited and perfect for a minimal viable product. This project safely executes code from users and prevents
    malicious users from cross site scripting attacks. This project also uses Bootstrap, 
    Prismjs, Angular components, CORS, MongoDB, Nodejs, Web Sockets, and 
    Isomorphic SSR reducing page loading speeds by 40x and increasing legacy browser compatibility.`,
    tags: {
      "Prism.js": "Technology",
      "Socket.io": "Technology",
      Angular: "Technology",
      "React.js": "Technology",
      Frontend: "Skill",
      Backend: "Skill",
      SEO: "Skill",
      "Node.js": "Language",
      "SCSS/SASS": "Language",
    },
    links: [["Website", "https://codebuilder.herokuapp.com"]],
  },
  {
    logo: relaxdb,
    title: "Relax.DB",
    date: "February 2020 - May 2020",
    role: "Founder",
    description: `This is a backend project for an apartment rentals application where I horizontally scaled
    an application to handle over 5K concurrent requests per second exceeding initial server thresholds by 17x.
    A manual load balancer was devised using NGINX hooking up multiple AWS servers for load balancing. Redis was
    also utilized on each server to cache requests which ultimately lowered serving latency to just under 500
    µs per request. To simulate massive web traffic and querying, a production level data set was loaded with 15+ million
    users in PostgreSQL and Cassandra. Bottlenecks were identified with Loader.io and New Relic APM and appropriate indexes
    were created and partitioned within the respective databases.`,
    tags: {
      AWS: "Technology",
      NGINX: "Technology",
      SEO: "Skill",
      Backend: "Skill",
      "Node.js": "Language",
    },
    links: [
      [
        "Stess Test",
        "https://loader.io/reports/c74b75f17f5c43f188aa02a7d3d40239/results/64607eb336c209782c896ee352eb1eb8",
      ],
    ],
  },
  {
    logo: wonder4,
    title: "Wonder4",
    date: "February 2020 - May 2020",
    role: "Founder",
    description: ` A web application that displays Restaurant Information with high availability. This project uses a http proxy to
    connect multiple microservices each of which are served using AWS and are all wrapped with Docker to reduce page 
    loading speeds, ensure low latency and browser compatibility. This project uses multiple NoSQL and SQL databases, along with
    Node.js/Express and React.`,
    tags: {
      SPA: "Technology",
      CORS: "Technology",
      "React.js": "Technology",
      Docker: "Technology",
      AWS: "Technology",
      Frontend: "Skill",
      Backend: "Skill",
      "Node.js": "Language",
      "SCSS/SASS": "Language",
    },
    links: [["Preview Video", "https://www.youtube.com/watch?v=S4oqU-klbxQ"]],
  },
  {
    logo: appearix,
    title: "Appearix Inc.",
    date: "May 2019 - November 2019",
    role: "Frontend Developer Intern",
    description: `Integrated Firebase for authentication, real time data syncing across all devices
    and rapid data exchange using the Firebase API. Configured
    Firebase to accept OAuth providing single sign-on (SSO) allowing user sign on without passwords
    reducing data storage. Built onboarding features using Reactjs and CSS Modules to ensure user retention and reduce user bounce rate.
    Allowed users who post events to view analytics visualized through Chartjs giving users the ability to collate and analyze
    information on event outreach, engagement, and audience.`,
    tags: {
      SPA: "Technology",
      GraphQL: "Technology",
      Apollo: "Technology",
      "React.js": "Technology",
      "CSS Modules": "Technology",
      "Firebase Auth": "Technology",
      "Firebase Firestore": "Technology",
      "Web Application": "Skill",
      "UI/UX": "Skill",
      SEO: "Skill",
      Frontend: "Skill",
      Backend: "Skill",
      "Node.js": "Language",
      "SCSS/SASS": "Language",
    },
    links: [
      ["Website", "https://appearix.com/"],
      ["iOS App Store", "https://apps.apple.com/us/app/appearix/id1474876873"],
    ],
  },
];

const tagsMap = {
  NGINX: "Technology",
  "Socket.io": "Technology",
  SPA: "Technology",
  "React.js": "Technology",
  SMTP: "Technology",
  Redux: "Technology",
  "Route 53": "Technology",
  CloudFront: "Technology",
  "Elastic Beanstalk": "Technology",
  CloudWatch: "Technology",
  "CSS Modules": "Technology",
  "HTML5 Canvas": "Technology",
  "Firebase Auth": "Technology",
  "Firebase Firestore": "Technology",
  "Prism.js": "Technology",
  Docker: "Technology",
  AWS: "Technology",
  CORS: "Technology",
  "React Native": "Technology",
  Angular: "Technology",
  GraphQL: "Technology",
  Apollo: "Technology",
  "Web Application": "Skill",
  "Web Scraping": "Skill",
  "CI/CD": "Skill",
  "UI/UX": "Skill",
  "Graphic Design": "Skill",
  Frontend: "Skill",
  Backend: "Skill",
  iOS: "Skill",
  Android: "Skill",
  "Mobile Application": "Skill",
  SEO: "Skill",
  PHP: "Language",
  Bash: "Language",
  "SCSS/SASS": "Language",
  "Node.js": "Language",
  "Clojure/ClojureScript": "Language",
};

function countSkills(exps) {
  return exps.reduce((x, exp) => {
    Object.keys(exp.tags).forEach((tag) =>
      x[tag] ? (x[tag] += 1) : (x[tag] = 1)
    );
    return x;
  }, {});
}

function filterExperiences(selected) {
  let out = [];
  for (let i = 0; i < experiences.length; i++) {
    let exp = experiences[i];
    let containsSkill = selected.every((skillName) => exp.tags[skillName]);
    if (containsSkill) out.push(exp);
  }
  return out;
}

function getRemainingTags(currSkillCount) {
  let remainingTags = {};
  for (let skill in currSkillCount) {
    remainingTags[skill] = tagsMap[skill];
  }
  return remainingTags;
}

function setSelectedObject(action) {
  let selected = action.payload;
  let experiences = filterExperiences(selected);
  let skillCounter = countSkills(experiences);
  // let tagsMap = getRemainingTags(skillCounter);
  return { selected, experiences, skillCounter, tagsMap };
}

const initialState = {
  selected: [],
  experiences,
  skillCounter: countSkills(experiences),
  tagsMap,
};

const mainstate = function (state = initialState, action) {
  switch (action.type) {
    case "SET_SELECTED":
      return setSelectedObject(action);
    default:
      return state;
  }
};

export default combineReducers({ mainstate });
