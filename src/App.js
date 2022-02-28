import ShowHome from "./components/home";
import { Routes, Route} from "react-router-dom";
import ShowNavbar from "./components/navbar";
import ShowAuthorPage from "./components/author";
import {ShowPost} from "./components/post";
import {ShowPostDetail} from "./components/postDetail"

function App() {
  return (
    <>
      <ShowNavbar/>
      <Routes>
        <Route path="/" element={<ShowHome />} />
        <Route path="/React-WordpressAPI-Project/Home" element={<ShowHome />} />
        <Route path="/React-WordpressAPI-Project/Post" element={<ShowPost />} />
        <Route path="/React-WordpressAPI-Project/Post/:id" element={<ShowPostDetail />} />
        <Route path="/React-WordpressAPI-Project/Author" element={<ShowAuthorPage />} />
      </Routes>
    </>
  );
}

export default App;
