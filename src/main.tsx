import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { GiftApp } from "./GifsApp";
import { MyCounterApp } from "./counter/components/MyCounterApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GiftApp />
    <MyCounterApp />
  </StrictMode>
);
