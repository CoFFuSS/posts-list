import { BasicLayout } from "../Components/BasicLayout";
import { PostsList } from "../Components/MainContent/mainContent";
import { PostDetails } from "../Components/Post";

export const ROUTES = [
  {
    path: "/home",
    element: <BasicLayout />,
  },
  {
    path: "posts",
    element: <PostsList />,
  },
  {
    path: "posts/:id",
    element: <PostDetails />,
  },
];
