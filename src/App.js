import {
  Login,
  Dashboard,
  Private,
  Post,
  Detail,
  Update,
  Register,
} from "./components";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route exact path="/" element={<Private />}>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/add-product" element={<Post />} />
        <Route exact path="/product/:productId" element={<Detail />} />
        <Route exact path="/product/:productId/edit" element={<Update />} />
      </Route>
    </Routes>
  );
}

export default App;
