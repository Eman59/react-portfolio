import React from "react";
import styled from "styled-components";
import InstagramIcon from "@material-ui/icons/Instagram";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Particle from "../components/Particle";

function HomePage() {
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hi, I'm <span>Imran Sayyed</span>
        </h1>
        <p>
          Proficient in translating designs & wireframes into high-quality code,
          and writing application interface code via Javascript and ReactJS
          workflows. Adept at monitoring & maintaining frontend performance and
          troubleshooting & debugging the same to bolster overall performance.
        </p>
        <div className="icons">
          <a
            href="https://www.instagram.com/iamimransayyed/"
            target="_blank"
            rel="noreferrer"
            className="icon i-instagram"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://github.com/Eman59"
            target="_blank"
            rel="noreferrer"
            className="icon i-github"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/imran-sayyed-6a5b12209/"
            target="_blank"
            rel="noreferrer"
            className="icon i-linkedin"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid #bc2a8d;
          color: #bc2a8d;
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-linkedin {
        &:hover {
          border: 2px solid #0077b5;
          color: #0077b5;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`;

export default HomePage;
