import { Link, useNavigate } from "react-router-dom";
import { StyledH3 } from "./styled";
import { useCachedPosts } from "../../api/posts";

export const PostsList = () => {
  const posts = useCachedPosts();
  const navigate = useNavigate();
  const handleNavigate = (id: number) => () => {
    navigate(`${id}`);
  };

  return (
    <>
      {posts.map(({ id, title }) => (
        <Link
          to={`/posts/${id}`}
          key={id}
          name-link={title}
          onClick={handleNavigate(id)}
        >
          <StyledH3>
            {id}. {title}
          </StyledH3>
        </Link>
      ))}
    </>
  );
};
