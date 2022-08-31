import { Login, Dashboard, Private } from "./components";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route exact path="/" element={<Private />}>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/add-product" element={<h1>Add</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
