import "./App.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { PostsList } from "../MainContent/mainContent";
import { BasicLayout } from "../BasicLayout";
import { PostDetails } from "../Post";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="posts">Posts</NavLink>
      </nav>
      <Routes>
        <Route path="/home" element={<BasicLayout />} />
        <Route path="/posts" element={<PostsList />} />
        <Route path="/posts/:id" element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
