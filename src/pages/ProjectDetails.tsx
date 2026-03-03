import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function ProjectDetails() {
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // Mock data mapping based on the ID
    const projectsData: Record<string, any> = {
        'automation': {
            title: 'Automation Security Alert',
            type: 'Automation',
            desc: 'Improving the efficiency of the soc team  in analyzing attack logs that attack servers on Wazuh by using n8n integrated with telegram',
            img: '/automation.png',
            tools: ['Wazuh', 'n8n', 'Telegram'],
            details: (
                <div className="space-y-10">
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30 shadow-[0_0_10px_rgba(89,242,13,0.2)]">
                                <span className="text-primary font-bold text-sm">1</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-100 m-0">Background & Problem Statement</h3>
                        </div>
                        <div className="ml-11">
                            <p className="text-slate-300">In the daily operations of a Security Operation Center (SOC), teams often face bottlenecks when performing manual log analysis. This process is highly time-consuming because an analyst must:</p>
                            <ul className="list-none mt-4 space-y-2 text-slate-400">
                                {['Open the monitoring dashboard', 'Traverse logs one by one', 'Identify the type of attack', "Determine the attacker's IP", 'Pinpoint affected assets', 'Decide on mitigation steps'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary/70 text-sm mt-1">check_circle</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-6 text-slate-300">This condition significantly slows down incident response, especially during high-severity attacks. To resolve this issue, we developed an <strong className="text-primary font-medium">Automation Security Alert System</strong> capable of providing real-time attack information along with AI-driven technical mitigation recommendations.</p>
                        </div>
                    </section>

                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30 shadow-[0_0_10px_rgba(89,242,13,0.2)]">
                                <span className="text-primary font-bold text-sm">2</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-100 m-0">Solution Concept & Architecture</h3>
                        </div>
                        <div className="ml-11">
                            <p className="text-slate-300 mb-4">This system integrates the following components:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div className="bg-background-card border border-secondary/50 p-4 rounded-xl shadow-sm">
                                    <h4 className="font-bold text-primary mb-1">Wazuh</h4>
                                    <p className="text-sm text-slate-400">Acts as the primary source for threat detection and log monitoring.</p>
                                </div>
                                <div className="bg-background-card border border-secondary/50 p-4 rounded-xl shadow-sm">
                                    <h4 className="font-bold text-primary mb-1">n8n</h4>
                                    <p className="text-sm text-slate-400">Functions as the core automation engine (a lightweight SOAR).</p>
                                </div>
                                <div className="bg-background-card border border-secondary/50 p-4 rounded-xl shadow-sm">
                                    <h4 className="font-bold text-primary mb-1">AI Model (Gemini)</h4>
                                    <p className="text-sm text-slate-400">Performs analysis and generates technical recommendations.</p>
                                </div>
                                <div className="bg-background-card border border-secondary/50 p-4 rounded-xl shadow-sm">
                                    <h4 className="font-bold text-primary mb-1">Telegram</h4>
                                    <p className="text-sm text-slate-400">Serves as the real-time notification mechanism.</p>
                                </div>
                            </div>

                            <h4 className="font-bold text-slate-200 mb-3">Automation Workflow:</h4>
                            <ol className="list-decimal ml-5 space-y-2 text-slate-400 marker:text-primary marker:font-bold">
                                <li>Wazuh detects an attack.</li>
                                <li>An alert is sent in JSON format to the n8n webhook.</li>
                                <li>n8n parses the incoming data.</li>
                                <li>AI processes the log details and generates technical recommendations.</li>
                                <li>A notification is sent directly to Telegram.</li>
                                <li>Data is simultaneously forwarded to the Monitoring App (Laravel API).</li>
                            </ol>
                        </div>
                    </section>

                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30 shadow-[0_0_10px_rgba(89,242,13,0.2)]">
                                <span className="text-primary font-bold text-sm">3</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-100 m-0">Integration Mechanism</h3>
                        </div>
                        <div className="ml-11">
                            <h4 className="text-lg font-bold text-slate-200 mb-2">Wazuh Webhook Configuration</h4>
                            <p className="text-slate-300">In the Wazuh configuration file (<code className="text-primary text-sm bg-primary/10 px-1 rounded">ossec.conf</code>), a webhook integration is added pointing to the n8n endpoint:</p>
                            <pre className="bg-background-dark border border-secondary p-5 rounded-xl overflow-x-auto text-sm my-4 font-mono text-emerald-400/90 whitespace-pre-wrap shadow-inner leading-relaxed">
                                {`<integration>
  <name>webhook</name>
  <hook_url>http://IP-N8N/webhook/wazuh-alert</hook_url>
  <level>10</level>
  <alert_format>json</alert_format>
</integration>`}
                            </pre>
                            <div className="bg-primary/5 border-l-2 border-primary p-4 rounded-r-lg mt-4">
                                <p className="font-bold text-slate-200 mb-2">Explanation:</p>
                                <ul className="list-disc ml-5 space-y-1 text-slate-400 text-sm">
                                    <li><code className="text-primary bg-background-dark px-1.5 py-0.5 rounded">&lt;level&gt;</code> determines the minimum severity scale to be processed.</li>
                                    <li>Format is set to JSON to be natively parsed by n8n.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30 shadow-[0_0_10px_rgba(89,242,13,0.2)]">
                                <span className="text-primary font-bold text-sm">4</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-100 m-0">n8n Automation Workflow</h3>
                        </div>
                        <div className="ml-11 space-y-8">
                            <p className="text-slate-300">Here is the detailed sequence of the automation process:</p>

                            <div>
                                <h4 className="text-lg font-bold text-slate-200 mb-2 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                    4.1 Webhook Trigger
                                </h4>
                                <p className="text-slate-400 mb-3">The first node is a Webhook configured as follows:</p>
                                <pre className="bg-background-dark border border-secondary p-4 rounded-xl overflow-x-auto text-sm mb-3 font-mono text-emerald-400/90 whitespace-pre-wrap shadow-inner">
                                    {`{
  "httpMethod": "POST",
  "path": "wazuh-alert",
  "options": {
    "rawBody": true
  }
}`}
                                </pre>
                                <p className="text-slate-400 text-sm italic">This webhook directly receives JSON alerts sent from Wazuh.</p>
                            </div>

                            <div>
                                <h4 className="text-lg font-bold text-slate-200 mb-2 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                    4.2 AI Processing (Summarization Chain + Gemini)
                                </h4>
                                <p className="text-slate-400 mb-3">The workflow utilizes <code className="text-primary bg-primary/10 px-1 rounded">@n8n/n8n-nodes-langchain.chainSummarization</code> alongside the Google Gemini model (<code className="text-primary bg-primary/10 px-1 rounded">gemini-2.0-flash</code>).</p>
                                <p className="text-slate-300 mb-2">The prompt is meticulously crafted to ensure the AI does <span className="font-bold underline decoration-primary decoration-2 underline-offset-2">NOT</span> do the following:</p>
                                <ul className="list-none space-y-2 text-slate-400 mb-4 grid grid-cols-1 sm:grid-cols-2">
                                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-red-500/70 text-sm">close</span> Include introductory remarks</li>
                                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-red-500/70 text-sm">close</span> Provide generic abstractions</li>
                                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary/70 text-sm">check</span> Output ONLY technical recommendations</li>
                                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary/70 text-sm">check</span> Format strictly as bullet points</li>
                                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary/70 text-sm">check</span> Abide by 2000-character maximum limit</li>
                                </ul>

                                <blockquote className="bg-background-card border-l-4 border-primary p-5 rounded-r-xl my-4 text-slate-300 italic shadow-sm">
                                    <p className="font-bold text-slate-200 mb-2 not-italic text-sm uppercase tracking-wider">Prompt Snippet:</p>
                                    "You are a seasoned SOC AI Analyst. Provide only technical recommendations and specific mitigation steps to resolve the detected attack found in the following log. #Log: {'{{'} $json.body.all_fields.full_log {'}}"'}
                                </blockquote>

                                <p className="text-slate-300 mb-2">With this strict approach, the AI consistently outputs mitigation instructions such as:</p>
                                <div className="flex flex-wrap gap-2 text-xs font-mono text-primary/80">
                                    <span className="bg-primary/10 border border-primary/20 px-2 py-1 rounded">IP Blocking</span>
                                    <span className="bg-primary/10 border border-primary/20 px-2 py-1 rounded">Config Hardening</span>
                                    <span className="bg-primary/10 border border-primary/20 px-2 py-1 rounded">Service Patching</span>
                                    <span className="bg-primary/10 border border-primary/20 px-2 py-1 rounded">Endpoint Isolation</span>
                                    <span className="bg-primary/10 border border-primary/20 px-2 py-1 rounded">Log Auditing</span>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-lg font-bold text-slate-200 mb-2 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                    4.3 Parsing Critical Information
                                </h4>
                                <p className="text-slate-400 mb-3">Key data points extracted from the alert include:</p>
                                <div className="bg-background-card rounded-xl border border-secondary/50 overflow-hidden text-sm">
                                    <div className="grid grid-cols-[1fr_2fr] border-b border-secondary/50 bg-background-dark/50 p-3 font-bold text-slate-300">
                                        <div>Parameter</div>
                                        <div>Meaning</div>
                                    </div>
                                    {[
                                        ['agent.name', 'Server / Asset Name'],
                                        ['rule.description', 'Attack Type'],
                                        ['rule.level', 'Severity Score'],
                                        ['data.srcip', 'Attacker IP Address'],
                                        ['data.url / syscheck.path', 'Targeted Path or File']
                                    ].map((row, i) => (
                                        <div key={i} className="grid grid-cols-[1fr_2fr] border-b border-secondary/30 p-3 text-slate-400 last:border-0 hover:bg-white/5 transition-colors">
                                            <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded w-fit">{row[0]}</code>
                                            <div>{row[1]}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-lg font-bold text-slate-200 mb-2 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                    4.4 Automated Telegram Notifications
                                </h4>
                                <p className="text-slate-400 mb-3">The Telegram node uses the following template format:</p>
                                <pre className="bg-background-dark border border-secondary p-4 rounded-xl overflow-x-auto text-sm my-4 font-mono text-emerald-400/90 whitespace-pre-wrap shadow-inner">
                                    {`"text": "🚨 Warning Alert 🚨
Agent Name: {{ $('Wazuh-Alert').item.json.body.agent.name }}
Attack Type: {{ $('Wazuh-Alert').item.json.body.rule.description }}
Attacker IP: {{ $('Wazuh-Alert').item.json.body.data.srcip }}
URL: {{ $('Wazuh-Alert').item.json.body.data.url }}

AI Recommendation:
{{ $json.output.text }}"`}
                                </pre>
                                <p className="text-slate-300">The resulting messages delivered to the SOC team contain the Attacker's IP, targeted asset, severity level, URL path, and mitigation recommendations straight from the AI. This allows for <strong className="text-white font-medium">rapid response without booting up the monitoring dashboard</strong>.</p>
                            </div>

                            <div>
                                <h4 className="text-lg font-bold text-slate-200 mb-2 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                    4.5 Conditional Routing (Malware vs Web Attack)
                                </h4>
                                <p className="text-slate-400 mb-3">An IF node distinguishes the nature of the attack:</p>
                                <ul className="list-none space-y-2 mb-4 text-slate-400">
                                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary/70 text-sm">subdirectory_arrow_right</span> If <code className="text-primary">syscheck.path</code> exists → <strong>Malware / File Modification</strong></li>
                                    <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary/70 text-sm">subdirectory_arrow_right</span> Otherwise → <strong>Web Attack</strong></li>
                                </ul>
                                <p className="text-slate-400 mb-2">The alert payload is then forwarded to the Laravel Monitoring App API:</p>
                                <pre className="bg-background-dark border border-secondary p-3 rounded-xl overflow-x-auto text-sm my-3 font-mono text-emerald-400/90 whitespace-pre-wrap shadow-inner inline-block w-full">
                                    {`"url": "http://172.16.35.75/api/soar/wazuh-alert"`}
                                </pre>
                                <p className="text-slate-400 text-sm mb-3">Payload includes: <code className="text-slate-300">domain</code>, <code className="text-slate-300">alert_title</code>, <code className="text-slate-300">attack_path</code>, <code className="text-slate-300">timestamp</code>, <code className="text-slate-300">severity_level</code>, <code className="text-slate-300">wazuh_rule_id</code>, <code className="text-slate-300">gemini_recommendation</code>, and <code className="text-slate-300">raw_data</code>.</p>
                                <p className="text-slate-300 font-medium">This ensures the system doesn't only alert, but meticulously documents the incident log within the internal dashboard.</p>
                            </div>
                        </div>
                    </section>
                </div>
            ),
            impact: (
                <div className="space-y-6">
                    <p className="text-xl text-slate-200 leading-relaxed">The resulting Automation Security Alert effectively resolved the SOC team's primary bottleneck: <strong className="text-primary font-bold">slow manual log analysis.</strong></p>

                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 shadow-sm mt-4">
                        <p className="text-slate-300 mb-4 font-bold">By integrating Wazuh, n8n, AI, and Telegram:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                                <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-primary text-[14px]">bolt</span></div>
                                <p className="text-slate-300 text-sm"><strong className="text-slate-200 block">Immediate processing</strong> for high-severity alerts</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-primary text-[14px]">compress</span></div>
                                <p className="text-slate-300 text-sm"><strong className="text-slate-200 block">Concise attack outlines</strong> packaged effectively</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-primary text-[14px]">auto_fix</span></div>
                                <p className="text-slate-300 text-sm"><strong className="text-slate-200 block">Automated mitigations</strong> computed on the fly by AI</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-primary text-[14px]">my_location</span></div>
                                <p className="text-slate-300 text-sm"><strong className="text-slate-200 block">Swift & targeted responses</strong> from the SOC operations</p>
                            </div>
                        </div>
                    </div>

                    <p className="font-bold text-center text-primary/90 text-lg border-y border-primary/20 py-6 mt-8 shadow-sm">
                        "This system serves as a foundational step toward a more mature and scalable full-SOAR implementation in the future."
                    </p>
                </div>
            )
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


    return (
        <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="flex-grow flex flex-col py-10 px-4 w-full relative z-10 bg-background-dark"
        >
            <article className="max-w-5xl mx-auto w-full">
                <Link to="/" state={{ scrollTo: 'projects' }} className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors mb-12 w-fit">
                    <span className="material-symbols-outlined text-sm">arrow_back</span>
                    <span className="text-sm font-medium">Back to Projects</span>
                </Link>

                <header className="mb-10">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-mono tracking-wide border border-primary/20">
                            {project.type}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-100 mb-6 leading-tight tracking-tight">
                        {project.title}
                    </h1>

                    <p className="text-xl text-slate-400 leading-relaxed mb-8 font-light">
                        {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8 border-b border-secondary/50 pb-8">
                        {project.tools.map((tool: string, i: number) => (
                            <span key={i} className="text-sm text-slate-500 bg-secondary/20 px-3 py-1 rounded-md">
                                {tool}
                            </span>
                        ))}
                    </div>
                </header>

                <figure className="mb-14 w-full flex justify-center">
                    <div className="relative rounded-2xl overflow-hidden border border-secondary/40 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.5)] max-w-4xl bg-background-dark">
                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent z-10 pointer-events-none"></div>
                        <img
                            src={project.img}
                            alt={project.title}
                            className="w-full h-auto object-contain max-h-[550px]"
                        />
                    </div>
                </figure>

                <div className="prose prose-invert prose-lg max-w-none text-slate-300">
                    <h2 className="text-2xl font-bold text-slate-100 mb-4 mt-8">Description</h2>
                    <div className="leading-loose mb-8 text-lg text-slate-300/90 tracking-wide">
                        {project.details}
                    </div>

                    <h2 className="text-2xl font-bold text-slate-100 mb-4 mt-12">Results achieved</h2>
                    <div className="leading-loose mb-8 text-lg text-slate-300/90 tracking-wide">
                        {project.impact}
                    </div>
                </div>
            </article>
        </motion.main>
    );
}
