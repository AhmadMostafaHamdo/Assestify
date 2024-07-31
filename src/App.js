import Init from "./pages/website/Init";
import "./styles/index.css";
import Houses from "./pages/website/Houses";
import Divider from "./component/Divider";
import Advantages from "./pages/website/Advantages";
import { useState } from "react";
import About from "./pages/website/About";

export default function App() {
  const [translate, setTranslate] = useState("");
  translate
    ? document.getElementById(translate).scrollIntoView({ behavior: "smooth" })
    : console.log("n");
  return (
    <div className="container">
      <Init setTranslate={setTranslate} />
      <Divider />
      <Houses />
      <Divider />
      <Advantages />
      <Divider />
      <About />
      <Divider />
    </div>
  );
}
