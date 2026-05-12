import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HashRouter, Route, Routes } from "react-router";
import DrinksMenu from "./DrinksMenu";
import ArtCollection from "./ArtCollection";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/bar-lounge/drinks-menu" element={<DrinksMenu />} />
        <Route path="/art-collection" element={<ArtCollection />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
