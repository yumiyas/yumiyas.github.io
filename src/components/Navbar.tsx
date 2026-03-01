import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HashLink as Link } from 'react-router-hash-link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleDownload = () => {
        // Create a programmatic download link for the resume file in public directory
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'CyberSec_Resume.pdf'; // Desired downloaded file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <header className="sticky top-0 z-50 flex items-center justify-between border-b border-secondary/50 bg-background-dark/80 backdrop-blur-md px-6 py-4 lg:px-20">
            <div className="flex items-center gap-3 text-slate-100">
                <div className="text-primary">
                    <span className="material-symbols-outlined text-3xl">terminal</span>
                </div>
                <h2 className="text-xl font-bold tracking-tight">Cyber<span className="text-primary">Enthusiast</span></h2>
            </div>

            <nav className="hidden md:flex items-center gap-8">
                <Link smooth to="/#" className="text-slate-300 hover:text-primary text-sm font-medium transition-colors">Home</Link>
                <Link smooth to="/#skills" className="text-slate-300 hover:text-primary text-sm font-medium transition-colors">Skills</Link>
                <Link smooth to="/#tools" className="text-slate-300 hover:text-primary text-sm font-medium transition-colors">Tools</Link>
                <Link smooth to="/#experience" className="text-slate-300 hover:text-primary text-sm font-medium transition-colors">Experience</Link>
                <Link smooth to="/#about" className="text-slate-300 hover:text-primary text-sm font-medium transition-colors">Certifications</Link>
                <Link smooth to="/#projects" className="text-slate-300 hover:text-primary text-sm font-medium transition-colors">Projects</Link>
            </nav>

            <div className="flex items-center gap-4">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDownload}
                    className="hidden md:flex cursor-pointer items-center justify-center rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-primary hover:bg-primary hover:text-background-dark transition-colors duration-300 text-sm font-bold tracking-wide shadow-[0_0_10px_rgba(89,242,13,0.1)] hover:shadow-[0_0_15px_rgba(89,242,13,0.4)]"
                >
                    <span className="material-symbols-outlined mr-2 text-lg">download</span>
                    Resume
                </motion.button>

                <button
                    className="md:hidden text-slate-100"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-background-dark/95 backdrop-blur-md border-b border-secondary/50 md:hidden flex flex-col p-4 gap-4 z-40"
                    >
                        <Link smooth to="/#projects" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-primary text-sm font-medium transition-colors">Projects</Link>
                        <button onClick={handleDownload} className="flex w-full cursor-pointer items-center justify-center rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-primary hover:bg-primary hover:text-background-dark transition-all duration-300 text-sm font-bold tracking-wide mt-2">
                            <span className="material-symbols-outlined mr-2 text-lg">download</span>
                            Resume
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
