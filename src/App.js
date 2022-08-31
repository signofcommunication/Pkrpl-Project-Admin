import { Login, Dashboard, Private, Post } from "./components";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route exact path="/" element={<Private />}>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/add-product" element={<Post />} />
      </Route>
    </Routes>
  );
}

export default App;
