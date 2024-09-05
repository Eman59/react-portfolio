import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "./Title";
import ReviewItem from "./ReviewItem";

function ReviewsSetion() {
  return (
    <ReviewsStyled>
      <Title title={"Reviews"} span={"Reviews"} />
      <InnerLayout>
        <div className="reviews">
          <ReviewItem
            text={
              "As a senior developer, Imran has taken on a leadership role within the team, mentoring junior developers and providing guidance on best practices. Their expertise in React and modern JavaScript frameworks has been invaluable in helping the team improve our code quality and develop more maintainable solutions. Imran is always willing to help others and frequently provides insightful feedback during code reviews."
            }
          />
          <ReviewItem
            text={
              "One of Imran’s standout qualities is their commitment to staying updated on the latest technologies and trends in the React ecosystem. Whether it’s experimenting with new React features like Suspense and Concurrent Mode or contributing to open-source projects, Imran is always looking for ways to improve their skill set and apply new techniques to our work."
            }
          />
        </div>
      </InnerLayout>
    </ReviewsStyled>
  );
}

const ReviewsStyled = styled.section`
  .reviews {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
    width: 100%;
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default ReviewsSetion;
