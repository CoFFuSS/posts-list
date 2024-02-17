import { Post } from "../Post/post";

export const PostWithParams = () => {
  const id = 10;
  const title = "";
  return <Post id={id} title={title} key={id} />;
};
