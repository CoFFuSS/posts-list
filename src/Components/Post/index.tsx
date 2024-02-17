import { useParams } from "react-router-dom";
import { StyledH3 } from "./styled";
import { POSTS } from "../../constants/mock";
import { useState } from "react";
import { ShowComments } from "../../ShowComments";

export const PostDetails = () => {
  const [isActive, setIsActive] = useState(false);

  const { id } = useParams();

  const post = POSTS.filter((item) => String(item.id) == id);

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };
  const newId = post[0].id;
  console.log(newId);
  return (
    <>
      <StyledH3>{post[0].title}</StyledH3>
      <StyledH3>{post[0].body}</StyledH3>
      <button onClick={handleClick}>SHOW COMMENTS</button>
      {isActive ? <ShowComments postId={newId} /> : null}
    </>
  );
};
