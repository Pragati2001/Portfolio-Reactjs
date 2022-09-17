import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Scribbl from "../../Assets/Projects/Scribbl.png";
import Hangman from "../../Assets/Projects/Hangman.png";
import Movies_Point from "../../Assets/Projects/MoviesPoint.jpg";
import Shade_Selector from "../../Assets/Projects/ShadeSelector.png";
import Task_Manager from "../../Assets/Projects/TaskManager.png";
import To_do_list from "../../Assets/Projects/todo_list.png";
import Weather from "../../Assets/Projects/weather.png";
import Mario_game from "../../Assets/Projects/mario.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Scribbl}
              isBlog={false}
              title="Skribbl Game"
              description="Realtime Multiplayer pictionary game driven by websockets.Reactjs for
client side and nodejs and express fro server side .Game and room
management by react-redux"
              techstack="Reactjs | Nodejs | Socket.io"
              link="https://github.com/Pragati2001/Skribbl-game"
              git="https://github.com/Pragati2001/Skribbl-game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hangman}
              isBlog={false}
              title="Hangman Game"
              description="A single player based game where user have to guess random word.Each
time you guess wrong lives are deducted.Reactjs on client side and
nodejs and express on server side"
              techstack="Reactjs | Nodejs | JS"
              link="https://golden-kleicha-8c7a9b.netlify.app/"
              git="https://github.com/Pragati2001/hangman"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Movies_Point}
              isBlog={false}
              title="Movies Point Clone"
              description="Reactjs based application which uses api to fetch movies details from
backend."
              techstack="Reactjs | Nodejs | JS"
              link="https://kind-hoover-b627b8.netlify.app/"
              git="https://github.com/Pragati2001/movies-point-react"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Shade_Selector}
              isBlog={false}
              title="Shade Selector"
              description="A simple Html ,css and js project which randomly generates colors with their hex values.You can create your own color palette and save them in library.Also you can lock one particular colour if you like"
              techstack="HTML | CSS | JS "
              link="https://infallible-ptolemy-2a0368.netlify.app/"
              git="https://github.com/Pragati2001/shade-selector"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Task_Manager}
              isBlog={false}
              title="task Manager"
              description="A Django based app that can allow a userto sign in and new users to sign
up
• In this user can add new tasks including name ,description completion
status and deadline
• Also user can search for any task and view its whole description
"
              techstack="Django | Python  "
              link="https://pragatikabrataskmanagerapp.herokuapp.com/"
              git="https://github.com/Pragati2001/Task-Manager-Django"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={To_do_list}
              isBlog={false}
              title="To-do-list"
              description="A react based application to perform to manage your activities
• In this User can add and delete the tasks
• Mark the task as completed and sort the list"
              techstack="Reactjs | JS "
              link="https://github.com/Pragati2001/to-do-list"
              git="https://elegant-swartz-b94fb5.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={false}
              title="Weather app"
              description="An app which uses weather api to fetch temperature of particular city"
              techstack="Reactjs | JS "
              link="https://github.com/Pragati2001/basic-api-to-find-country-n-city"
              git="https://github.com/Pragati2001/basic-api-to-find-country-n-city"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Mario_game}
              isBlog={false}
              title="Mario game"
              description="A simple Javascript application where mario needs to get to princess avoiding obstacles"
              techstack="Html | CSS | JS "
              link="https://github.com/Pragati2001/mario-game"
              git="https://xenodochial-mayer-f28607.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
