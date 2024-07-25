import GetData from "./components/GetData";
import PostData from "./components/PostData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./static/Header";
import EditData from "./components/EditData";
import Todo from "./components/Todo";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<GetData />} />
          <Route path="/post" element={<PostData />} />
          <Route path="/edit/:id" element={<EditData />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
