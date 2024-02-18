import { Fragment } from "react";
import { StyledH3 } from "../MainContent/styled";
import { useCachedComments } from "../../api/postComments";

export const ShowComments = ({ postId }: { postId: number | undefined }) => {
  const comments = useCachedComments(Number(postId));
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
