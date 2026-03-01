import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Tools from '../components/Tools';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';

export default function Home() {
    const location = useLocation();

    useEffect(() => {
        // Handle explicit scroll requests from React Router states
        if (location.state && location.state.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else if (!location.hash) {
            // Force scroll to top on standard navigation/reload
            window.scrollTo(0, 0);
        }
    }, [location]);

    // Force scroll to top on hard reload, stripping away the hash if present
    useEffect(() => {
        if (window.location.hash) {
            window.history.replaceState(null, '', window.location.pathname);
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <main className="flex-grow flex flex-col relative w-full">
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-grid-pattern grid-bg"></div>

            <Hero />
            <Skills />
            <Tools />
            <Experience />
            <Certifications />

            <Projects />

        </main>
    );
}
