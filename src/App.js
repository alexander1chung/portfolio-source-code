import "./App.scss";
import { useEffect, Fragment } from "react";
import { useHistory } from "react-router-dom";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { setSelected } from "./actions";
import Color from "color";

let colors = {
  Technology: "#1b82ff",
  Skill: "#a64dff",
  Language: "#05df89",
};

function ExperienceBlock({ exp }) {
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
                  skillName={skillName}
                  activeColor={colors[exp.tags[skillName]]}
                  removeCount={true}
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

function Tag({ skillName, activeColor, removeCount, skillCounter }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.mainstate.selected);
  const isOn = selected.includes(skillName);
  let skillCount = !removeCount ? skillCounter[skillName] : null;
  let disabled = !skillCount;
  function manipulateUrl() {
    let newS = selected.includes(skillName)
      ? selected.filter((x) => x !== skillName)
      : [...selected, skillName];
    dispatch(setSelected(newS));
    history.push({ hash: newS.map(encodeURI).join("#") });
  }

  return (
    <div className="tag" key={nanoid()}>
      <div className="toggle-tag">
        <button
          onClick={manipulateUrl}
          style={
            disabled && !removeCount
              ? { backgroundColor: "#808080", color: "white" }
              : isOn
              ? { backgroundColor: activeColor, color: "white" }
              : null
          }
          disabled={disabled && !removeCount}
        >
          {skillName}
        </button>
        {!removeCount ? (
          <button
            onClick={manipulateUrl}
            style={
              disabled
                ? {
                    backgroundColor: Color("#808080").darken(0.2),
                    color: "white",
                  }
                : isOn
                ? {
                    backgroundColor: Color(activeColor).darken(0.3),
                    color: "white",
                  }
                : { backgroundColor: Color("#f4f6f8").darken(0.06) }
            }
            disabled={disabled}
          >
            {skillCount ? skillCount : 0}
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
  const selected = useSelector((state) => state.mainstate.selected);
  const experiences = useSelector((state) => state.mainstate.experiences);
  const skillCounter = useSelector((state) => state.mainstate.skillCounter);
  const tagsMap = useSelector((state) => state.mainstate.tagsMap);
  const dispatch = useDispatch();
  useEffect(() => {
    history.listen(() => {
      dispatch(setSelected(getSelected()));
    });
    dispatch(setSelected(getSelected()));
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
            <div>{`Let's Change the World Together`}</div>
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
            class which <strong>exploited</strong> my pre-existing beliefs on
            what was possible through code. There was one particular assignment
            where we extrapolated electrical impulse propagation throughout the
            brain. Something which I thought was <strong>not possible</strong>,
            but there it was, a script, that consistently reproduced results,
            was <strong>distributable</strong> and replicable{" "}
            <strong>anywhere</strong>.
          </p>
          <p>
            And from that moment I started heavily investing in my programming
            prowess. I built websites in PHP 7 paired with MySQL and HTML/CSS
            and after becoming proficient I was able to find an internship as a{" "}
            <strong>Frontend Developer</strong> where I built out components and
            integrated Charts. After the internship, I then decided to learn
            more about the <strong>Full Stack</strong> at{" "}
            <strong>Hack Reactor</strong>.
          </p>
          <p>
            Fast forward to today, I'm a seasoned Software Engineer and have
            experience as the Technical lead for various projects and startups.
          </p>
          <h3 style={{ paddingBottom: "0.5em" }}>
            Filter Experiences by Skill
          </h3>
          <div className="tags">
            {Object.keys(tagsMap).map((skillName, i) => (
              <Tag
                key={i}
                skillName={skillName}
                skillCounter={skillCounter}
                activeColor={colors[tagsMap[skillName]]}
              />
            ))}
          </div>
          <div className="projects">
            {experiences.map((exp) => (
              <ExperienceBlock exp={exp} key={nanoid()} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
