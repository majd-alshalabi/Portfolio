import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import supplyz from "../../Assets/Projects/my supplyz.png";
import futchat from "../../Assets/Projects/futchat.png";
import codelab from "../../Assets/Projects/code-lab.png";
import saladinus from "../../Assets/Projects/saladinus.png";
import yolo from "../../Assets/Projects/yolo.png";

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
            ghLink={"https://github.com/Zouher-20/Codelabs"}
              imgPath={codelab}
              isBlog={false}
              title="Codelabs"
              description="This graduation project, built with React and Next.js, is a platform for sharing and exploring code snippets, known as 'labs.' Users can upload, edit, and render these labs in real time, enabling personalized experimentation. The platform also supports educators by offering virtual classrooms where teachers can manage and interact with students. Additionally, it features a community space for idea sharing and a competitive section for coding challenges, making learning both collaborative and engaging." />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yolo}
              isBlog={false}
              title="Yolo"
              link="https://play.google.com/store/apps/details?id=com.lila.lila"
              iosLink="https://apps.apple.com/us/app/yolo-clinic-app/id6443390787https://apps.apple.com/us/app/yolo-clinic-app/id6443390787"
              description="Streamline Your Clinic Operations
Welcome to the Yolo Clinic App, the all-in-one solution to streamline and optimize your clinic operations. Take your clinic management to new heights with our powerful and user-friendly app designed specifically for healthcare professionals."/>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={futchat}
              isBlog={false}
              title="FutChat"
              iosLink="https://apps.apple.com/us/app/futchat/id6449300809"
              link="https://play.google.com/store/apps/details?id=com.futchat.dib"
              description="Introducing FutChat - The Future of Productivity and Communication
Welcome to FutChat, the ultimate productivity app that combines powerful chatting capabilities with efficient task management. With FutChat, you'll experience a new era of seamless communication and enhanced productivity that will revolutionize the way you work, collaborate, and achieve your goals."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={saladinus}
              isBlog={false}
              title="Saladinus"
              link="https://play.google.com/store/apps/details?id=com.saladinus.saladinus"
              description="Discover Saladinus - your innovative platform for deals and classifieds! Saladinus is designed to enrich and simplify the lives of Arabic speakers in Germany. Dive into a world full of bargains and opportunities. Saladinus offers you a variety of deals and the ability to create free listings. Find, buy, sell, and trade with ease. Get Saladinus today and explore a new dimension of commerce!"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={supplyz}
              isBlog={false}
              title="My Supplyz"
              description="MySuppliyz is a user-friendly e-commerce platform designed for the Malaysian market, connecting customers, suppliers, and restaurants. The app offers a seamless shopping experience with a wide range of products, secure online payments, and real-time order tracking. Whether you're a customer looking for everyday items or a restaurant sourcing supplies, MySuppliyz simplifies the process with easy order management and personalized recommendations. Available in multiple languages, MySuppliyz is your go-to app for convenient and reliable shopping in Malaysia"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
