export function meta() {
  return [
    { title: "QuickBASIC 4.5" },
    { name: "description", content: "QuickBASIC 4.5 - The Classic Programming Language" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      <div className="font-mono text-center">
        {/* ASCII Art Logo */}
        <pre
          className="text-white text-[9px] sm:text-[11px] md:text-sm leading-tight inline-block text-left"
          style={{ fontFamily: "'Courier New', Consolas, monospace", letterSpacing: 0 }}
        >
{`/**
 *     ██████╗ ██╗   ██╗██╗ ██████╗██╗  ██╗
 *    ██╔═══██╗██║   ██║██║██╔════╝██║ ██╔╝
 *    ██║   ██║██║   ██║██║██║     █████╔╝
 *    ██║▄▄ ██║██║   ██║██║██║     ██╔═██╗
 *    ╚██████╔╝╚██████╔╝██║╚██████╗██║  ██╗
 *     ╚══▀▀═╝  ╚═════╝ ╚═╝ ╚═════╝╚═╝  ╚═╝
 *
 *    ██████╗  █████╗ ███████╗██╗ ██████╗    ██╗  ██╗   ███████╗
 *    ██╔══██╗██╔══██╗██╔════╝██║██╔════╝    ██║  ██║   ██╔════╝
 *    ██████╔╝███████║███████╗██║██║         ███████║   ███████╗
 *    ██╔══██╗██╔══██║╚════██║██║██║         ╚════██║   ╚════██║
 *    ██████╔╝██║  ██║███████║██║╚██████╗         ██║██╗███████║
 *    ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝ ╚═════╝         ╚═╝╚═╝╚══════╝
 *
 */`}
        </pre>

        {/* Decorative Line */}
        <div className="my-8 flex items-center justify-center">
          <div className="h-px w-16 bg-white/30"></div>
          <span className="mx-4 text-white/60 text-sm tracking-widest">MICROSOFT</span>
          <div className="h-px w-16 bg-white/30"></div>
        </div>

        {/* Tagline */}
        <p className="text-white/80 text-lg tracking-wider mb-2">
          The Classic Programming Language
        </p>
        <p className="text-white/50 text-sm font-mono">
          Version 4.5 &copy; 1985-1988
        </p>

        {/* Blinking Cursor Effect */}
        <div className="mt-12">
          <span className="text-white/70 font-mono text-sm">Ready</span>
          <span className="inline-block w-2 h-4 bg-white ml-1 animate-pulse"></span>
        </div>
      </div>
    </div>
  );
}
