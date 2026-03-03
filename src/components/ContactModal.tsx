import { motion, AnimatePresence } from 'framer-motion';

export default function ContactModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-background-card border border-primary/30 p-8 rounded-2xl shadow-[0_0_40px_rgba(89,242,13,0.15)] max-w-sm w-full relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-slate-400 hover:text-primary transition-colors"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>

                            <div className="flex flex-col items-center mb-6">
                                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 text-primary">
                                    <span className="material-symbols-outlined text-3xl">hub</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-100">Initiate Contact</h3>
                                <p className="text-slate-400 text-sm mt-2 text-center">Select a secure channel to establish connection with me.</p>
                            </div>

                            <div className="flex flex-col gap-3">
                                <a href="https://www.linkedin.com/in/muhamad-dias-870a491a8/" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden flex items-center gap-4 p-4 rounded-xl bg-background-dark border border-secondary hover:border-primary/50 transition-all duration-300">
                                    <div className="absolute inset-0 bg-primary/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
                                    {/* LinkedIn SVG Logo */}
                                    <svg className="w-6 h-6 fill-slate-400 group-hover:fill-primary relative z-10 transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                    <span className="text-slate-200 font-medium relative z-10 group-hover:text-primary transition-colors">LinkedIn</span>
                                    <span className="material-symbols-outlined text-slate-600 group-hover:text-primary/50 ml-auto relative z-10 transition-colors text-sm">open_in_new</span>
                                </a>

                                <a href="https://github.com/yumiyas" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden flex items-center gap-4 p-4 rounded-xl bg-background-dark border border-secondary hover:border-primary/50 transition-all duration-300">
                                    <div className="absolute inset-0 bg-primary/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
                                    {/* GitHub SVG Logo */}
                                    <svg className="w-6 h-6 fill-slate-400 group-hover:fill-primary relative z-10 transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                                    <span className="text-slate-200 font-medium relative z-10 group-hover:text-primary transition-colors">GitHub</span>
                                    <span className="material-symbols-outlined text-slate-600 group-hover:text-primary/50 ml-auto relative z-10 transition-colors text-sm">open_in_new</span>
                                </a>

                                <a href="mailto:muhamaddiaz1999@gmail.com" className="group relative overflow-hidden flex items-center gap-4 p-4 rounded-xl bg-background-dark border border-secondary hover:border-primary/50 transition-all duration-300">
                                    <div className="absolute inset-0 bg-primary/5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
                                    {/* Gmail SVG Logo */}
                                    <svg className="w-6 h-6 fill-slate-400 group-hover:fill-primary relative z-10 transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" /></svg>
                                    <span className="text-slate-200 font-medium relative z-10 group-hover:text-primary transition-colors">Gmail</span>
                                    <span className="material-symbols-outlined text-slate-600 group-hover:text-primary/50 ml-auto relative z-10 transition-colors text-sm">open_in_new</span>
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
