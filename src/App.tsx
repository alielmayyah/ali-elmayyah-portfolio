import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import HomePage from "./pages/HomePage";
import ProjectDetails from "./pages/ProjectDetails";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="bg-zinc-950 min-h-screen selection:bg-blue-500/30 selection:text-blue-200">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>

        <Contact />
      </div>
    </Router>
  );
}

export default App;
