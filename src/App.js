import "./App.scss";
import { useState, useEffect, Fragment } from "react";
// import ButtonGroup from "react-bootstrap/ButtonGroup";
// import Button from "react-bootstrap/Button";
// import InputGroup from "react-bootstrap/InputGroup";
// import FormControl from "react-bootstrap/FormControl";
// import Badge from "react-bootstrap/Badge";
import Color from "color";
import { useHistory } from "react-router-dom";
import tetrislogo from "./images/tetrislogo.png";
import computesoftware from "./images/computesoftware.svg";
import appearix from "./images/appearix.png";
import shutterbeam from "./images/shutterbeam.png";
import codebuilder from "./images/codebuilder.png";
import wonder4 from "./images/wonder4.png";
import relaxdb from "./images/relaxdb.png";
import essenceprep from "./images/essenceprep.png";
import lingdong from "./images/lingdong.png";
import asterprep from "./images/asterprep.png";
import { nanoid } from "nanoid";

let colors = {
  Technology: "#1b82ff",
  Skill: "#a64dff",
  Language: "#05df89",
};

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

const experiences = [
  {
    logo: asterprep,
    title: "Aster Prep",
    date: "January 2014 - Present",
    role: "Founder",
    description: `At ASTER Prep we're targetting educational reform through a
    supplementary program that teaches science and technology through
    direct application and experiences.
    Through direct application of science we can create first hand experiences that are magnitudes better than
    reading about a phenomenon from textbook theory. The standards for education are constantly growing
    and this method provides an effective solution to making knowledge stick without the hours of plain and boring studying.`,
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
    CloudWatch to monitor operational data, and CloudFront to ensure high and secure availability.`,
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

function ExperienceBlock({ exp, selected, setSelected }) {
  return (
    <div className="project">
      <img
        src={exp.logo}
        width={100}
        height={100}
        style={{ borderRadius: 6 }}
        alt={exp.title}
      />
      <h3 style={{ fontWeight: 600, margin: "8px 0" }}>{exp.title}</h3>
      <h5 style={{ fontSize: "1.2em", padding: "0.5em 0" }}>{exp.role}</h5>
      <p style={{ fontStyle: "italic" }}>{exp.date}</p>
      <p style={{ margin: "2px 0" }}>{exp.description}</p>
      {exp.tags ? (
        <Fragment>
          <h6 style={{ padding: "0.5em 0" }}>Tags</h6>
          <div className="tags">
            {Object.keys(exp.tags).map((skillName, i) => {
              return (
                <Tag
                  key={i}
                  setSelected={setSelected}
                  skillName={skillName}
                  type={exp.tags[skillName]}
                  isOn={selected.includes(skillName)}
                  selected={selected}
                  noTag={true}
                />
              );
            })}
          </div>
        </Fragment>
      ) : null}
      {exp.links ? <h6 style={{ paddingTop: "1.5em" }}>Links</h6> : null}
      <div className="links">
        {exp.links
          ? exp.links.map((link) => {
              return (
                <div key={nanoid()}>
                  <a
                    href={link[1]}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) =>
                      link[1] === "#" ? e.preventDefault() : null
                    }
                  >
                    {link[0]}
                  </a>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

function Tag({ skillName, type, selected, isOn, noTag, setSelected }) {
  const history = useHistory();
  let highlightColor = colors[type];
  let skillCount = !noTag
    ? experiences.reduce((n, exp) => n + (exp.tags[skillName] ? 1 : 0), 0)
    : null;

  function manipulateUrl() {
    let newS = selected.includes(skillName)
      ? selected.filter((x) => x !== skillName)
      : [...selected, skillName];
    setSelected(newS);
    history.push({ hash: newS.map(encodeURI).join("#") });
  }
  return (
    <div className="tag" key={nanoid()}>
      <div className="toggle-tag">
        <button
          onClick={manipulateUrl}
          style={
            isOn ? { backgroundColor: highlightColor, color: "white" } : null
          }
        >
          {skillName}
        </button>
        {!noTag ? (
          <button
            onClick={manipulateUrl}
            style={
              isOn
                ? {
                    backgroundColor: Color(highlightColor).darken(0.3),
                    color: "white",
                  }
                : { backgroundColor: Color("#f4f6f8").darken(0.06) }
            }
          >
            {skillCount}
          </button>
        ) : null}
      </div>
    </div>
  );
}

function getSelected() {
  let hashes = window.location.hash;
  let arr = hashes
    .split("#")
    .slice(1)
    .map((item) => decodeURI(item));
  return arr;
}

function App() {
  const history = useHistory();
  const [selected, setSelected] = useState([]);
  useEffect(() => {
    history.listen(() => setSelected(getSelected));
    setSelected(getSelected());
  }, []);
  return (
    <div className="App">
      <div className="flex-box">
        <div className="section-1">
          <div className="circular--landscape"></div>
          <h2>Alexander Chung</h2>
          <h3>Software Engineer & Tech Lead</h3>
          <p>
            Based in <strong>San Francisco, CA.</strong>
          </p>
          <a
            href="https://github.com/alexander1chung/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/alexander-chung/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:d.31chung@gmail.com" target="_blank" rel="noreferrer">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <div className="section-2">
          <div className="quote">
            <div>Have a clear vision? Let's make it</div>
          </div>
          <h3>About Me</h3>
          <p>Hi I'm Alex!</p>
          <p>
            My Software Engineering story began in 2019, during my last semester
            at USC. Where at the time I was handling two businesses:
          </p>
          <ul>
            <li>
              A tutoring business which I scaled to{" "}
              <strong>35+ students</strong> over the course of{" "}
              <strong>6 years</strong>.
              <ul>
                <li>
                  Teaching students direct <strong>application</strong> of
                  scientific theory.
                </li>
              </ul>
            </li>
            <li>
              And a dropshipping business which I started a year prior.
              <ul>
                <li>
                  Months of planning, <strong>communication</strong> with
                  suppliers and <strong>execution</strong>.
                </li>
              </ul>
            </li>
          </ul>
          <p>
            Juggling the two businesses alongside school proved to be difficult
            as I found their models to be <strong>unsustainable</strong>.
          </p>
          <p>
            Additionally I was also taking a challenging Neural Interfacing
            className which <strong>exploited</strong> my pre-existing beliefs
            on what was possible through code. There was one particular
            assignment where we extrapolated electrical impulse propagation
            throughout the brain. Something which I thought was{" "}
            <strong>not possible</strong>, but there it was, a script, that
            consistently reproduced results, was <strong>distributable</strong>{" "}
            and replicable <strong>anywhere</strong>.
          </p>
          <p>
            And from that moment I had a realization and started investing
            heavily in my programming prowess. I built websites in PHP 7 paired
            with MySQL and HTML/CSS and after becoming proficient I was able to
            find an internship as a <strong>Frontend Developer</strong> where I
            built out components and integrated Charts. After the internship, I
            decided to learn more about the <strong>Full Stack</strong> at{" "}
            <strong>Hack Reactor</strong>.
          </p>
          <p>
            Fast forward to today, I'm a seasoned Software Engineer and have
            experience as the Technical lead for various projects and startups.
          </p>
          <h3 style={{ paddingBottom: "0.5em" }}>
            Filter Experiences by Skill
          </h3>
          {/* <div className="search-container">
            <InputGroup>
              <FormControl
                type="text"
                placeholder="Click on the Tags or Search"
                aria-describedby="btnGroupAddon"
              />
              <InputGroup.Append>
                <Button>Search</Button>
              </InputGroup.Append>
            </InputGroup>
          </div> */}
          {/* <h4>Tags</h4> */}
          <div className="tags">
            {Object.keys(tagsMap).map((skillName, i) => (
              <Tag
                key={i}
                skillName={skillName}
                type={tagsMap[skillName]}
                isOn={selected.includes(skillName)}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
          </div>
          <div className="projects">
            {experiences.map((exp) => {
              let containsSkill = selected.every(
                (skillName) => exp.tags[skillName]
              );
              if (selected.length === 0)
                return (
                  <ExperienceBlock
                    setSelected={setSelected}
                    exp={exp}
                    selected={selected}
                    key={nanoid()}
                  />
                );
              if (containsSkill)
                return (
                  <ExperienceBlock
                    setSelected={setSelected}
                    exp={exp}
                    selected={selected}
                    key={nanoid()}
                  />
                );
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
