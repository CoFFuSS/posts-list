import "./App.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { PostsList } from "../MainContent/mainContent";
import { BasicLayout } from "../BasicLayout";
import { PostDetails } from "../Post";
import { ROUTES } from "../../constants/routes";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="posts">Posts</NavLink>
      </nav>
      <Routes>
        {ROUTES.map(({ path, element }) => (
          <Route path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
