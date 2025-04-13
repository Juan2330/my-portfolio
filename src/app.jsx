import { Router } from 'preact-router';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetailAI from './pages/ProjectDetailAI';
import ProjectDetailRana from './pages/ProjectDetailRana';

export function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Router>
          <Home path="/" />
          <ProjectDetailAI path="/proyecto/ai-devguide" />
          <ProjectDetailRana path="/proyecto/la-rana-pintada" />
        </Router>
      </main>
      <Footer />
    </div>
  );
}
