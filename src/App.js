import { Login, Dashboard, Private, Post, Detail } from "./components";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route exact path="/" element={<Private />}>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/add-product" element={<Post />} />
        <Route exact path="/product/:productId" element={<Detail />} />
        <Route
          exact
          path="/product/:productId/edit"
          element={<h1>Edit Product</h1>}
        />
      </Route>
    </Routes>
  );
}

export default App;
