import { useState } from 'react';
import { motion } from 'framer-motion';
import ContactModal from './ContactModal';

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="relative z-10">
            <div className="max-w-5xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 px-4">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-6 order-2 lg:order-1"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 w-fit">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-primary text-xs font-bold tracking-widest uppercase">System Online</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                        Muhamad Dias <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-600">IT Security</span>
                    </h1>

                    <div className="p-4 rounded-lg bg-black/40 border border-secondary font-mono text-sm md:text-base text-slate-300 shadow-xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <p className="mb-2"><span className="text-primary">root@kali:#</span> whoami</p>
                        <p className="pl-4 border-l-2 border-primary/20 mb-4">
                            Cybersecurity analyst specializing in penetration testing, network defense, log analysis, and vulnerability assessment. Learn by doing to build a strong foundation to secure the system.        </p>
                        <p className="animate-pulse"><span className="text-primary">root@kali:#</span> <span className="w-2 h-4 bg-primary inline-block align-middle ml-1"></span></p>
                    </div>

                    <div className="flex gap-4 mt-2">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-background-dark text-base font-bold hover:bg-primary/90 hover:shadow-[0_0_15px_rgba(89,242,13,0.4)] transition-all"
                        >
                            Initiate Contact
                        </motion.button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="order-1 lg:order-2 flex justify-center relative"
                >
                    <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full z-0"></div>

                    <div className="relative z-10 w-full max-w-[280px] aspect-square">
                        <div className="absolute inset-0 rounded-2xl overflow-hidden border border-secondary bg-background-card shadow-[0_0_30px_rgba(46,57,40,0.8)] group z-10">
                            <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent opacity-60 z-10 pointer-events-none"></div>
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: "url('/dias.jpeg')" }}
                            ></div>

                            <div className="absolute bottom-4 left-4 right-4 z-20 p-3 rounded-xl bg-background-dark/90 border border-primary/30 backdrop-blur-sm shadow-lg pointer-events-none">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs text-slate-400 font-mono">Threat Level</span>
                                    <span className="text-xs text-primary font-mono font-bold">LOW</span>
                                </div>
                                <div className="w-full h-1 bg-secondary rounded-full overflow-hidden">
                                    <div className="h-full bg-primary w-[15%]"></div>
                                </div>
                                <div className="mt-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-xs">shield</span>
                                    <span className="text-[10px] text-slate-200 uppercase tracking-widest">System Protected</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}
