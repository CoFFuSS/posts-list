import { Link, useNavigate } from "react-router-dom";
import { POSTS } from "../../constants/mock";
import { StyledH3 } from "./styled";

export const PostsList = () => {
  const navigate = useNavigate();
  return (
    <>
      {POSTS.map(({ id, title }) => (
        <Link
          to={`/posts/${id}`}
          key={id}
          name-link={title}
          onClick={() => navigate(`${id}`)}
        >
          <StyledH3>
            {id}. {title}
          </StyledH3>
        </Link>
      ))}
    </>
  );
};
