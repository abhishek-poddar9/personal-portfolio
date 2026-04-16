import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Skills } from "./components/Skills/Skills";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Resume } from "./components/Resume/Resume";

const Home = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;