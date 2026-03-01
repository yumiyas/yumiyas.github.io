export default function Footer() {
    return (
        <footer className="bg-background-dark pt-16 pb-8 border-t border-secondary mt-auto">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
                    <div className="flex items-center gap-3">
                        <div className="size-8 rounded bg-primary/20 flex items-center justify-center text-primary border border-primary/30 shadow-[0_0_10px_rgba(89,242,13,0.2)]">
                            <span className="material-symbols-outlined">security</span>
                        </div>
                        <span className="text-xl font-bold text-white">Cyber<span className="text-primary">Ethusiast</span></span>
                    </div>
                </div>
                <div className="border-t border-secondary pt-8 text-center md:text-left flex flex-col md:flex-row justify-between text-sm text-slate-500">
                    <p>© 2026 CyberEnthusiast. All systems operational.</p>
                    <div className="flex gap-4 justify-center mt-4 md:mt-0">
                        <a className="hover:text-primary transition-colors" href="#">Privacy Protocol</a>
                        <a className="hover:text-primary transition-colors" href="#">Terms of Engagement</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
