'use client';

export default function Footer({ isDarkMode }: { isDarkMode: boolean }) {
    return (
        <footer className={`py-12 border-t px-6 md:px-12 transition-colors ${isDarkMode ? 'border-zinc-800 bg-black text-zinc-500' : 'border-gray-200 bg-white text-gray-400'}`}>
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="font-bold text-2xl tracking-tighter text-current">HICE</div>
                <div className="text-sm font-medium">© {new Date().getFullYear()} HICE. All rights reserved.</div>
                <div className="flex gap-6 text-sm font-bold">
                    <a href="#" className="hover:text-blue-500 transition-colors">Privacy</a>
                    <a href="#" className="hover:text-blue-500 transition-colors">Terms</a>
                    <a href="#" className="hover:text-blue-500 transition-colors">Contact</a>
                </div>
            </div>
        </footer>
    );
}
