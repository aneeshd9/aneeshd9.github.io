import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Nav from "./elements/Nav";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
