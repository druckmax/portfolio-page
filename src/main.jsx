import App from "./App";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { ContextProvider } from "./Context";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
