import { useParams } from "react-router-dom";
import { StyledH3 } from "./styled";
import { ShowComments } from "../ShowComments";
import { useCachedPost } from "../../api/post";
import { useState } from "react";

export interface PostInterface {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export const PostDetails = () => {
  const [isActive, setIsActive] = useState(false);
  const { id } = useParams();

  const post = useCachedPost(Number(id));

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <>
      <StyledH3>{post.id}</StyledH3>
      <StyledH3>{post.title}</StyledH3>
      <StyledH3>{post.body}</StyledH3>
      <button onClick={handleClick}>SHOW COMMENTS</button>
      {isActive ? <ShowComments postId={post.id} /> : null}
    </>
  );
};
