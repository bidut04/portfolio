import React from 'react';
import { FileText, Download, Eye } from 'lucide-react';
import confetti from 'canvas-confetti';

const ResumeSection: React.FC = () => {
  const resumeUrl = "/Resume(3).pdf"; 

  const handleDownloadEffect = () => {
    // Fire confetti!
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      // Purple and White confetti burst
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#9810fa', '#ffffff', '#60a5fa']
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#9810fa', '#ffffff', '#60a5fa']
      });
    }, 250);
  };

  return (
    <section className="w-full py-24 bg-[#050a18] flex flex-col items-center justify-center">
      <div className="relative group p-1 bg-gradient-to-br from-purple-500/20 to-transparent rounded-[2rem]">
        <div className="relative overflow-hidden p-10 rounded-[1.9rem] bg-[#0a1224]/80 backdrop-blur-2xl border border-white/5 shadow-2xl transition-all duration-500 hover:border-purple-500/40 max-w-xl w-full">
          
          <div className="absolute -z-10 inset-0 bg-purple-600/5 blur-[80px] group-hover:bg-purple-600/15 transition-all duration-700" />

          <div className="flex flex-col items-center text-center">
            <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
               <div className="absolute inset-0 bg-purple-500/20 blur-2xl rounded-full animate-pulse" />
               <div className="relative z-10 w-full h-full bg-[#111a2e] rounded-2xl flex items-center justify-center border border-purple-500/30 shadow-inner">
                  <FileText className="text-purple-400 w-10 h-10" />
               </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">Curriculum Vitae</h2>
            <p className="text-blue-100/40 mb-10 max-w-sm leading-relaxed">
              Ready to see my full journey? Open my resume to view my experience or save a copy for later.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 w-full">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-2xl border border-white/10 backdrop-blur-md transition-all active:scale-95 group/btn"
              >
                <Eye size={20} className="text-purple-400 group-hover/btn:scale-110 transition-transform" />
                View 
              </a>

              <a
                href={resumeUrl}
                download="Resume_Dec_2025.pdf"
                onClick={handleDownloadEffect} // Triggering the confetti
                className="flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-2xl shadow-lg shadow-purple-500/20 transition-all active:scale-95 group/btn"
              >
                <Download size={20} className="group-hover/btn:-translate-y-1 transition-transform" />
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-10 flex items-center gap-3 opacity-30">
        <div className="h-[1px] w-8 bg-blue-200" />
        <span className="text-blue-100 text-[11px] uppercase tracking-[0.6em] font-black">
          Available for Hire
        </span>
        <div className="h-[1px] w-8 bg-blue-200" />
      </div>
    </section>
  );
};

export default ResumeSection;