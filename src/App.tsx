import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import AllProjects from './pages/AllProjects';

function App() {
  return (
    <Router>
      <div className="relative pt-[72px] min-h-[100dvh] w-full max-w-[100vw] flex flex-col font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 selection:bg-primary/30 selection:text-primary">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
