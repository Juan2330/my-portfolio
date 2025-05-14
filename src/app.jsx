import { Router } from 'preact-router';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetailAI from './pages/ProjectDetailAI';
import ProjectDetailRana from './pages/ProjectDetailRana';
import AnimatedBackground from './components/BackgroundEffect';
import ProjectDetailReact from './pages/ProjectDetailReact';

export function App() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10"> 
        <Header />
        <main>
          <Router>
            <Home path="/" />
            <ProjectDetailAI path="/proyecto/ai-devguide" />
            <ProjectDetailRana path="/proyecto/la-rana-pintada" />
            <ProjectDetailReact path="/proyecto/react-course" />
          </Router>
        </main>
        <Footer />
      </div>
    </div>
  );
}