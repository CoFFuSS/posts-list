import { Fragment } from "react";
import { StyledH3 } from "../Components/MainContent/styled";
import { COMMENTS } from "../constants/mock";

export const ShowComments = ({ postId }: { postId: number }) => {
  const comments = COMMENTS.filter((item) => item.postId == postId);
  return (
    <>
      {comments.map(({ id, name, body }) => (
        <Fragment key={id}>
          <StyledH3>Author: {name}.</StyledH3>
          <StyledH3>Text: {body}.</StyledH3>
        </Fragment>
      ))}
    </>
  );
};
