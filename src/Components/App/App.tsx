import "./App.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="posts">Posts</NavLink>
      </nav>
      <Routes>
        <Route path="*" element={<h1>XUIXUIXUI</h1>} />
        {ROUTES.map(({ path, element }) => (
          <Route path={path} element={element} key={path} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
