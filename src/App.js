import ShowHome from "./components/home";
import { Routes, Route} from "react-router-dom";
import ShowNavbar from "./components/navbar";
import ShowAuthorPage from "./components/author";
import {ShowPost} from "./components/post";
import {ShowPostDetail} from "./components/postDetail"
import ShowAuthorArticle from "./components/authorArticle";

function App() {
  return (
    <>
      <ShowNavbar/>
      <Routes>
        <Route path="/" element={<ShowHome />} />
        <Route path="/Post" element={<ShowPost />} />
        <Route path="/Post/:id" element={<ShowPostDetail />} />
        <Route path="/Author" element={<ShowAuthorPage />} />
        <Route path="/Author/:id" element={<ShowAuthorArticle />} />
      </Routes>
    </>
  );
}

export default App;
