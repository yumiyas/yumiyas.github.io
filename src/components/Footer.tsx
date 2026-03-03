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
                <div className="border-t border-secondary pt-8 flex justify-center text-sm text-slate-500 w-full text-center">
                    <p>© 2026 CyberEnthusiast</p>
                </div>
            </div>
        </footer>
    );
}
