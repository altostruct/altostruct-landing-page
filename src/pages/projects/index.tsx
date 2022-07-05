import CardGrid from "@components/CardGrids";
import Form from "@components/Form";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Section from "@components/Section";
import Topbar from "@components/Topbar/Topbar";
import Footer from "@components/Footer/Footer";

const data = [
  { name: "Test", description: "test" },
  { name: "Test", description: "test" },
  { name: "Test", description: "test" },
  { name: "Test", description: "test" },
];

interface CustomerCaseProps {
  title: string;
  description: string;
}

function CustomerCase(props: CustomerCaseProps) {
  const { title, description } = props;
  return (
    <div>
      <h1>"{title}"</h1>
      <div>{description}</div>
    </div>
  );
}

function Projects() {
  return (
    <>
      <Topbar pathName=""></Topbar>
      <div>
        <Section position="full">
          <div style={{ paddingBottom: "1em" }}>
            <p>Kundcases</p>
            <div
              style={{ display: "flex", gap: "1em", flexDirection: "column" }}
            >
              <CustomerCase
                title="Saluto journey for better health"
                description="asdf"
              />
              <CustomerCase
                title="Saluto journey for better health"
                description="adf"
              />
            </div>
          </div>
        </Section>
        <Section dark position="full">
          <Form />
        </Section>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Projects;
