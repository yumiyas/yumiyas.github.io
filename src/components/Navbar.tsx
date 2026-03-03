import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HashLink as Link } from 'react-router-hash-link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 w-full z-50 flex items-center justify-between border-b border-secondary/50 bg-background-dark/80 backdrop-blur-md px-6 py-4 lg:px-20">
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
                        <Link smooth to="/#" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-primary text-sm font-medium transition-colors">Home</Link>
                        <Link smooth to="/#skills" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-primary text-sm font-medium transition-colors">Skills</Link>
                        <Link smooth to="/#tools" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-primary text-sm font-medium transition-colors">Tools</Link>
                        <Link smooth to="/#experience" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-primary text-sm font-medium transition-colors">Experience</Link>
                        <Link smooth to="/#about" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-primary text-sm font-medium transition-colors">Certifications</Link>
                        <Link smooth to="/#projects" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-primary text-sm font-medium transition-colors">Projects</Link>

                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
