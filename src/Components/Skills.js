import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "./Title";
import ProgressBar from "./ProgressBar";

function Skills() {
  return (
    <SkillsStyled>
      <Title title={"My Skills"} span={"my skills"} />
      <InnerLayout>
        <div className="skills">
          <ProgressBar title={"React"} width={"100%"} text={"100%"} />
          <ProgressBar title={"NextJs"} width={"90%"} text={"90%"} />
          <ProgressBar title={"TypeScript"} width={"90%"} text={"90%"} />
          <ProgressBar title={"JavaScript"} width={"90%"} text={"90%"} />
          <ProgressBar title={"Redux State Management"} width={"90%"} text={"90%"} />
          <ProgressBar title={"Unit Testing"} width={"100%"} text={"100%"} />
          <ProgressBar title={"GCP"} width={"90%"} text={"90%"} />
          <ProgressBar title={"Jira"} width={"90%"} text={"90%"} />
          <ProgressBar title={"Git"} width={"90%"} text={"90%"} />
          <ProgressBar title={"Performance Optimization"} width={"90%"} text={"90%"} />
          <ProgressBar title={"NodeJS"} width={"90%"} text={"90%"} />
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Skills;
