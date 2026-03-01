import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Projects() {
    const projects = [
        {
            id: 'fintech-audit',
            title: 'FinTech Security Audit',
            type: 'PEN-TEST',
            desc: 'Conducted comprehensive penetration testing for a regional banking application, identifying critical SQL injection vulnerabilities.',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdJJPZ7M18adgQbhBEWqY0Rhj-FxktYscSriaPPc3R-W4LegWNiVFwGb6ksGH-SjVCAxVwFDtefSouk64cP8WhWHOhxOx6Pa3U5lUJhKkBtAmM1hKF2AP6q7c45Ec_b2EFbbbebxhtrGWaP7Cv_FQwj3q00XQf8LiwgVCilpnVFR0Bwm1c2cKgM4RjILH5MUKs7vP0gjLEeMtd1VxF00qPWqX4TnNrzZV2ljqGAwwQ-6hjsr7DifPJJNFONQJvpSy9gx8e348aNRQ',
            tags: ['Burp Suite', 'Python']
        },
        {
            id: 'network-defense',
            title: 'Network Defense System',
            type: 'BLUE TEAM',
            desc: 'Implemented a robust IDS/IPS solution for a healthcare provider, reducing successful intrusion attempts by 94%.',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbIwtiIImJGXg9OeD9ucPd_qoIwyu6cMty-stTUczfpNLlfFeEqzaps9f3zVsgJX4BeHBm-D2NNyu36k4HF1zk-GiblkQuKdlyVnvxY_4UnU8dezWuedNTK-VXPAn3PmoCDDwaU-RGhMU5RB3VcdmpT6_ZFLO-_QUxtHzMMzPjwVa1-HKLcIB8Y3Mbtb5c9KrzkGJYO3ueA1braSz1v0Ko4HX2LkHzSlYHh1AV9mvXSiNJUZn4asActugdXhh0AH7rEDYEheLSehg',
            tags: ['Snort', 'Linux']
        },
        {
            id: 'iot-scanner',
            title: 'IoT Vulnerability Scanner',
            type: 'RESEARCH',
            desc: 'Developed a custom Python tool to scan local networks for unsecured smart home devices and generate risk reports.',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNfC37TwAQhf1zJXIm-7ghc_smBncOl8KzH_QUKbja_hb7ZujmqlPm6FCm94aG2NQENmqbJ7vr3BOd1vo16mYp9GCjdciOxTJ1SLLAZ9jalUGam_9upe4ibZ0fWG95EQJgzP0t1AGmesYuY4mzGjqf_tja-GdnEkeI5jSIvs76NS1NQkQS7l42BD6H31LWN2wKXejEm9BZSkrNblyBMhfPzN1_DY5VWJe-o7vQoMJEKTQiBxZUxv5UkfGisD03dUOdHsbRanLHquY',
            tags: ['Python', 'Bash']
        }
    ];

    return (
        <div id="projects" className="py-16 px-4 max-w-5xl mx-auto w-full relative scroll-mt-24">
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary text-2xl">inventory_2</span>
                        </div>
                        <h2 className="text-3xl font-bold text-slate-100">Classified Projects</h2>
                    </div>
                    <p className="text-slate-400 max-w-md text-base mt-2">Highlighting recent security audits, vulnerability assessments, and defensive architecture.</p>
                </div>
                <Link className="text-primary hover:text-white font-medium flex items-center gap-1 transition-colors drop-shadow-[0_0_8px_rgba(89,242,13,0.5)] text-sm" to="/projects">
                    View All Archives <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, idx) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        key={project.id}
                        className="group bg-background-card border border-secondary rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:-translate-y-2 shadow-md hover:shadow-[0_10px_30px_rgba(89,242,13,0.15)] flex flex-col h-full"
                    >
                        <div
                            className="h-36 w-full bg-cover bg-center relative overflow-hidden"
                            style={{ backgroundImage: `url('${project.img}')` }}
                        >
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500"></div>
                            <div className="absolute top-3 right-3 bg-background-dark/80 backdrop-blur px-2 py-1 rounded text-[10px] font-mono text-primary border border-primary/20 shadow-sm">
                                {project.type}
                            </div>
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>

                        <div className="p-5 flex flex-col flex-grow relative">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 blur-xl rounded-full group-hover:bg-primary/20 transition-colors"></div>
                            <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                            <p className="text-slate-400 text-xs mb-4 flex-grow line-clamp-3">{project.desc}</p>

                            <div className="flex flex-wrap gap-1.5 mb-4">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="text-[10px] text-slate-500 bg-background-dark px-2 py-0.5 rounded border border-secondary group-hover:border-primary/30 transition-colors shadow-inner uppercase font-bold tracking-wider">{tag}</span>
                                ))}
                            </div>

                            <Link to={`/project/${project.id}`} className="w-full py-2 rounded border border-secondary text-slate-300 hover:bg-primary hover:border-primary hover:text-background-dark transition-all text-xs font-bold text-center shadow-[inset_0_0_10px_rgba(255,255,255,0.05)] hover:shadow-[0_0_15px_rgba(89,242,13,0.3)] tracking-wide">
                                Read Report
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
