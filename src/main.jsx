import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ Only 1 Router
import App from "./App";
import { AuthProvider } from "./context/AuthContext.jsx";
import { JobProvider } from "./context/JobContext.jsx"; // ✅ Added JobProvider
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <JobProvider> {/* ✅ Ensured JobProvider is inside AuthProvider */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </JobProvider>
    </AuthProvider>
  </React.StrictMode>
);
