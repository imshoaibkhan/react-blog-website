import Home from "./components/Home";
import Layout from "./root/Layout";
import NewPost from "./components/NewPost";
import PostPage from "./components/PostPage";
import EditPost from "./components/EditPost";
import About from "./components/About";
import MissingPage from "./components/MissingPage";
import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="post" element={<NewPost />} />

          <Route path="edit/:id" element={<EditPost />} />

          <Route path="post/:id" element={<PostPage />} />

          <Route path="about" element={<About />} />

          <Route path="*" element={<MissingPage />} />
        </Route>
      </Routes>
    </DataProvider>
  );
}

export default App;
