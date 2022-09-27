import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FirebaseProvider } from "./utils/FirebaseProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FirebaseProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FirebaseProvider>
);
