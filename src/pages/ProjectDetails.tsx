import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProjectDetails() {
    const { id } = useParams();

    // Mock data mapping based on the ID
    const projectsData: Record<string, any> = {
        'fintech-audit': {
            title: 'FinTech Security Audit',
            type: 'PEN-TEST',
            desc: 'Conducted comprehensive penetration testing for a regional banking application, identifying critical SQL injection vulnerabilities.',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdJJPZ7M18adgQbhBEWqY0Rhj-FxktYscSriaPPc3R-W4LegWNiVFwGb6ksGH-SjVCAxVwFDtefSouk64cP8WhWHOhxOx6Pa3U5lUJhKkBtAmM1hKF2AP6q7c45Ec_b2EFbbbebxhtrGWaP7Cv_FQwj3q00XQf8LiwgVCilpnVFR0Bwm1c2cKgM4RjILH5MUKs7vP0gjLEeMtd1VxF00qPWqX4TnNrzZV2ljqGAwwQ-6hjsr7DifPJJNFONQJvpSy9gx8e348aNRQ',
            tools: ['Burp Suite', 'Python', 'Nmap', 'SQLMap'],
            details: 'During a 3-week engagement, I evaluated the security posture of an online banking portal. The assessment uncovered severe vulnerabilities in the account transfer mechanism that allowed an attacker to bypass authentication checks and perform unauthorized transactions.',
            impact: 'The findings were immediately reported and patched, securing financial assets for over 50,000 customers. Provided a comprehensive remediation report and trained their dev team on secure coding practices.'
        },
        'network-defense': {
            title: 'Network Defense System',
            type: 'BLUE TEAM',
            desc: 'Implemented a robust IDS/IPS solution for a healthcare provider, reducing successful intrusion attempts by 94%.',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbIwtiIImJGXg9OeD9ucPd_qoIwyu6cMty-stTUczfpNLlfFeEqzaps9f3zVsgJX4BeHBm-D2NNyu36k4HF1zk-GiblkQuKdlyVnvxY_4UnU8dezWuedNTK-VXPAn3PmoCDDwaU-RGhMU5RB3VcdmpT6_ZFLO-_QUxtHzMMzPjwVa1-HKLcIB8Y3Mbtb5c9KrzkGJYO3ueA1braSz1v0Ko4HX2LkHzSlYHh1AV9mvXSiNJUZn4asActugdXhh0AH7rEDYEheLSehg',
            tools: ['Snort', 'Linux', 'Splunk', 'Zeek'],
            details: 'Designed and deployed a tailored Intrusion Detection/Prevention System to monitor and protect patient data. Customized Snort rules were implemented to detect ransomware patterns specific to the healthcare industry.',
            impact: 'Decreased noise alerts by 70% while improving true positive detection rates. Automated the incident response pipeline, cutting down containment time from hours to minutes.'
        },
        'iot-scanner': {
            title: 'IoT Vulnerability Scanner',
            type: 'RESEARCH',
            desc: 'Developed a custom Python tool to scan local networks for unsecured smart home devices and generate risk reports.',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNfC37TwAQhf1zJXIm-7ghc_smBncOl8KzH_QUKbja_hb7ZujmqlPm6FCm94aG2NQENmqbJ7vr3BOd1vo16mYp9GCjdciOxTJ1SLLAZ9jalUGam_9upe4ibZ0fWG95EQJgzP0t1AGmesYuY4mzGjqf_tja-GdnEkeI5jSIvs76NS1NQkQS7l42BD6H31LWN2wKXejEm9BZSkrNblyBMhfPzN1_DY5VWJe-o7vQoMJEKTQiBxZUxv5UkfGisD03dUOdHsbRanLHquY',
            tools: ['Python', 'Bash', 'Scapy', 'Docker'],
            details: 'Created an automated scanning tool for smart home networks. The script maps the network topology, identifies IoT devices based on banner grabbing and MAC OUI, and checks against a database of default credentials and known CVEs.',
            impact: 'Published the tool as an open-source project, which garnered over 500 stars on GitHub and was featured in a community cybersecurity newsletter.'
        }
    };

    const project = id ? projectsData[id] : null;

    if (!project) {
        return (
            <div className="flex-grow flex items-center justify-center p-4">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-red-500 mb-4">Project Not Found</h2>
                    <Link to="/" className="text-primary hover:underline">Return to Base</Link>
                </div>
            </div>
        );
    }

    const handleDownload = () => {
        const link = document.createElement('a');
        // Pointing to a uniquely named file in the public directory based on the project ID
        link.href = `/${project?.id}_report.pdf`;
        link.download = `${project?.title.replace(/\s+/g, '_')}_Report.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="flex-grow flex flex-col pt-10 pb-20 px-4 w-full relative z-10 max-w-5xl mx-auto"
        >
            <Link to="/" state={{ scrollTo: 'projects' }} className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors mb-8 w-fit bg-background-dark px-4 py-2 border border-secondary rounded-lg hover:border-primary/50 shadow-md">
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                <span className="font-mono text-sm uppercase tracking-wider font-bold">Return to Base</span>
            </Link>

            <div className="bg-background-card border border-secondary rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <div
                    className="h-[40vh] min-h-[300px] w-full bg-cover bg-center relative"
                    style={{ backgroundImage: `url('${project.img}')` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-background-card via-background-card/50 to-transparent"></div>
                    <div className="absolute top-6 right-6 bg-background-dark/80 backdrop-blur px-3 py-1.5 rounded text-sm font-mono text-primary border border-primary/20 shadow-[0_0_15px_rgba(89,242,13,0.2)]">
                        {project.type}
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-2 drop-shadow-lg">{project.title}</h1>
                        <p className="text-slate-300 text-lg max-w-3xl drop-shadow-md">{project.desc}</p>
                    </div>
                </div>

                <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2 space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2 mb-4">
                                <span className="material-symbols-outlined text-primary">analytics</span>
                                Mission Details
                            </h2>
                            <p className="text-slate-400 leading-relaxed text-lg">{project.details}</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2 mb-4">
                                <span className="material-symbols-outlined text-primary">verified</span>
                                Impact & Resolution
                            </h2>
                            <div className="p-6 rounded-xl bg-background-dark border-l-4 border-primary text-slate-300 shadow-inner">
                                {project.impact}
                            </div>
                        </section>
                    </div>

                    <div className="space-y-8">
                        <div className="p-6 rounded-xl bg-background-dark border border-secondary shadow-lg">
                            <h3 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2 border-b border-secondary pb-3">
                                <span className="material-symbols-outlined text-primary">handyman</span>
                                Technologies
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tools.map((tool: string, i: number) => (
                                    <span key={i} className="text-sm text-slate-300 bg-background-card px-3 py-1.5 rounded-lg border border-secondary hover:border-primary/50 hover:text-primary transition-colors cursor-default shadow-sm">{tool}</span>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 rounded-xl bg-background-dark border border-secondary shadow-lg flex flex-col gap-4">
                            <h3 className="text-lg font-bold text-slate-100 mb-1 flex items-center gap-2 border-b border-secondary pb-3">
                                <span className="material-symbols-outlined text-primary">terminal</span>
                                Execution
                            </h3>
                            <button onClick={handleDownload} className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-background-dark font-bold hover:bg-primary/90 hover:shadow-[0_0_15px_rgba(89,242,13,0.4)] transition-all">
                                <span className="material-symbols-outlined text-sm">download</span>
                                Full Report PDF
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.main>
    );
}
