import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import design from "../assets/design.svg";
import intelligence from "../assets/intelligence.svg";
import gamedev from "../assets/game-dev.svg";

function ServicesSection() {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={"Services"} span={"services"} />
        <div className="services">
          <ServiceCard
            image={design}
            title={"Single Page Applications"}
            paragraph={
              "Writing is designing with words. Designing is writing without having them."
            }
          />
          <div className="mid-card">
            <ServiceCard
              image={intelligence}
              title={"Artificial Intelligence"}
              paragraph={
                "A year spent in artificial intelligence is enough to make one believe in God."
              }
            />
          </div>
          <ServiceCard
            image={gamedev}
            title={"Game Development"}
            paragraph={
              "Gamers can feel when developers are passionate about their games."
            }
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
}

const ServicesSectionStyled = styled.section`
  .services {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    @media screen and (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default ServicesSection;
