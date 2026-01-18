
import React, { useState } from 'react';
import { EraYear } from '../types';
import { ERAS } from '../constants';

interface EraWrapperProps {
  year: EraYear;
  children: React.ReactNode;
  className?: string;
  isComparison?: boolean;
}

const EraWrapper: React.FC<EraWrapperProps> = ({ year, children, className = '', isComparison = false }) => {
  const [showModal, setShowModal] = useState(false);
  const eraData = ERAS.find(e => e.year === year);

  if (!eraData) return null;

  const getEraStyles = (y: EraYear) => {
    switch (y) {
      case 1995:
        return {
          container: "bg-[#c0c0c0] font-['Times_New_Roman',serif] text-black border-4 border-t-white border-l-white border-b-[#808080] border-r-[#808080] p-4",
          button: "bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-black border-r-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white px-4 py-1 uppercase text-xs font-bold",
          heading: "bg-[#000080] text-white p-1 text-sm font-bold flex justify-between items-center mb-4 border-b border-black",
          card: "border-2 border-t-white border-l-white border-b-black border-r-black bg-white text-black p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)]",
          dashboard: "bg-[#000080] text-[#ffff00] border-2 border-inset border-white p-4 font-mono text-xs", // Contrasting dashboard
          nav: "border-b-2 border-black flex gap-4 text-sm mb-4 bg-[#c0c0c0] p-2 underline font-bold",
          accent: "text-[#0000ee] underline cursor-pointer hover:text-red-600"
        };
      case 2000:
        return {
          container: "bg-[#e0eafc] font-sans text-[#1a1a1a] p-6",
          button: "bg-blue-600 text-white rounded-lg px-4 py-2 border-2 border-blue-900 shadow-[3px_3px_0px_#000] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none",
          heading: "text-blue-900 text-4xl font-extrabold italic border-b-4 border-orange-400 pb-2 mb-8 tracking-tighter",
          card: "bg-white text-blue-900 border-4 border-blue-100 rounded-2xl p-6 shadow-2xl relative overflow-hidden",
          dashboard: "bg-[#ff851b] text-white rounded-lg p-6 border-l-8 border-blue-900 shadow-inner font-bold", // High contrast orange
          nav: "bg-gradient-to-r from-blue-900 to-blue-700 text-white p-3 rounded-full flex gap-6 mb-6 px-8 shadow-md",
          accent: "text-orange-500 font-bold hover:underline"
        };
      case 2005:
        return {
          container: "bg-[#f4f4f4] font-['Verdana',sans-serif] p-8",
          button: "bg-gradient-to-b from-[#7db9e8] to-[#1e5799] text-white rounded-full px-8 py-2 shadow-[0_4px_0_#003366] border border-white hover:brightness-110 active:shadow-none active:translate-y-[2px]",
          heading: "text-5xl font-bold text-gray-800 tracking-tighter mb-10 bg-white p-6 shadow-xl rounded-3xl border border-gray-200 text-center",
          card: "bg-white text-gray-800 border-none rounded-[40px] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.08)]",
          dashboard: "bg-[#ff6600] text-white rounded-[30px] p-8 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform", // Contrasting orange
          nav: "flex justify-center gap-10 text-blue-600 font-bold mb-10 uppercase text-[10px] tracking-[0.3em]",
          accent: "text-blue-600 hover:text-blue-800"
        };
      case 2010:
        return {
          container: "bg-white font-['Inter',sans-serif] text-gray-900 p-10",
          button: "bg-[#007bff] text-white rounded px-6 py-3 font-semibold hover:bg-[#0069d9] transition-all shadow-sm",
          heading: "text-6xl font-black mb-12 border-l-[16px] border-[#007bff] pl-8 uppercase tracking-tight",
          card: "bg-gray-100 text-gray-900 border border-gray-200 rounded-none p-10",
          dashboard: "bg-black text-white rounded-none p-10 shadow-[20px_20px_0px_#007bff]", // Bold black on white
          nav: "bg-[#1a1a1a] text-white p-5 flex justify-between items-center mb-12",
          accent: "text-[#007bff] font-medium hover:underline"
        };
      case 2015:
        return {
          container: "bg-[#f5f5f5] font-['Roboto',sans-serif] p-12",
          button: "bg-[#6200ee] text-white rounded-sm px-8 py-4 uppercase tracking-widest font-bold shadow-[0_4px_10px_rgba(98,0,238,0.3)] hover:shadow-[0_8px_20px_rgba(98,0,238,0.4)] transition-all",
          heading: "text-5xl font-light text-gray-600 mb-10",
          card: "bg-white text-gray-900 shadow-[0_2px_15px_rgba(0,0,0,0.05)] rounded-lg p-8 border-b-4 border-[#03dac6]",
          dashboard: "bg-[#3700b3] text-[#bb86fc] rounded-md p-8 shadow-xl", // Deep contrast purple
          nav: "bg-white shadow-md p-5 flex gap-10 mb-14 text-gray-500 font-medium sticky top-0 z-10",
          accent: "text-[#6200ee] hover:text-[#3700b3]"
        };
      case 2020:
        return {
          container: "bg-[#020617] font-['Inter',sans-serif] text-slate-100 p-16 min-h-screen relative",
          button: "bg-white/10 text-white rounded-2xl px-10 py-4 font-bold backdrop-blur-xl border border-white/20 hover:bg-white hover:text-black transition-all",
          heading: "text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500 mb-16",
          card: "bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[48px] p-12 shadow-2xl",
          dashboard: "bg-white text-slate-950 rounded-[40px] p-12 shadow-[0_0_100px_rgba(255,255,255,0.1)]", // Stark white contrast
          nav: "bg-slate-900/60 backdrop-blur-3xl sticky top-8 z-50 rounded-[32px] p-6 border border-white/10 flex gap-8 mb-16",
          accent: "text-cyan-400 hover:text-fuchsia-400 transition-colors"
        };
      case 2025:
      default:
        return {
          container: "bg-white font-['Inter',sans-serif] text-black p-24 selection:bg-black selection:text-white",
          button: "bg-black text-white rounded-full px-12 py-5 font-black uppercase text-xs tracking-widest hover:scale-105 active:scale-95 transition-all",
          heading: "text-[12rem] font-black leading-[0.8] tracking-tighter mb-24",
          card: "bg-[#f5f5f7] rounded-[64px] p-16 transition-all hover:bg-gray-100",
          dashboard: "bg-black text-white rounded-[50px] p-16 shadow-2xl", // Intense black contrast
          nav: "flex justify-between items-center mb-32 px-4 font-black text-2xl",
          accent: "text-black hover:opacity-60 underline underline-offset-4"
        };
    }
  };

  const styles = getEraStyles(year);

  return (
    <div className={`${styles.container} ${className} transition-all duration-700 ${isComparison ? 'h-full overflow-y-auto' : ''}`}>
      {/* Historical Range Modal (Learn More Logic) */}
      {showModal && (
        <div className="fixed inset-0 z-[400] bg-black/80 backdrop-blur-xl flex items-center justify-center p-6" onClick={() => setShowModal(false)}>
          <div className="bg-white text-black p-12 rounded-[40px] max-w-2xl w-full shadow-2xl transform transition-all animate-in zoom-in-95 duration-500 overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-8">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-indigo-600 block mb-2">History Archive</span>
                <h2 className="text-5xl font-black leading-tight tracking-tighter">Inside {year}</h2>
              </div>
              <button onClick={() => setShowModal(false)} className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center font-bold hover:bg-black hover:text-white transition-all">✕</button>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="font-black text-xs uppercase tracking-widest text-gray-400 mb-4">Tech Stack</h4>
                <ul className="space-y-2">
                  {eraData.techStack.map((s, i) => <li key={i} className="flex items-center gap-2 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />{s}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="font-black text-xs uppercase tracking-widest text-gray-400 mb-4">Milestones</h4>
                <ul className="space-y-2">
                  {eraData.milestones.map((m, i) => <li key={i} className="flex items-center gap-2 font-medium text-sm">✨ {m}</li>)}
                </ul>
              </div>
            </div>

            <p className="text-xl leading-relaxed text-gray-600 mb-10 border-l-4 border-indigo-600 pl-6 italic">
              "{eraData.description}"
            </p>

            <button 
              onClick={() => setShowModal(false)}
              className="w-full bg-black text-white py-6 rounded-3xl font-black text-xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl"
            >
              Close Archive
            </button>
          </div>
        </div>
      )}

      {/* Dynamic Header Simulation */}
      <nav className={styles.nav}>
        <div className="flex items-center gap-4">
          <span className="font-black tracking-tighter">{year < 2010 ? "THE_WEB" : "INTERNET.TM"}</span>
          {year >= 2015 && <div className="hidden md:flex gap-6 opacity-60"><span>Explore</span><span>Library</span><span>Timeline</span></div>}
        </div>
        <div className="flex gap-4 items-center font-bold">
          {year === 1995 && <span className="animate-pulse bg-green-500 text-white px-2">ONLINE</span>}
          {year >= 2020 && <div className="px-4 py-1 rounded-full border border-current text-[10px] uppercase">v{year}.2.0</div>}
        </div>
      </nav>

      <div className="max-w-6xl mx-auto relative">
        {year >= 2020 && <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />}
        
        <h1 className={styles.heading}>
          {year === 1995 ? <span>C:\WINDOWS\DESKTOP</span> : `Era of ${year}`}
          {year === 1995 && <span className="flex gap-1"><span className="px-1 border">_</span><span className="px-1 border">□</span><span className="px-1 border">X</span></span>}
        </h1>

        <div className="grid md:grid-cols-2 gap-12 mb-16 items-stretch">
          <div className={styles.card}>
            <div className="flex flex-col h-full">
              <h2 className="text-3xl font-black mb-6 leading-none">The Vibe</h2>
              <p className="text-lg mb-10 opacity-80 leading-relaxed flex-grow">
                The year {year} was characterized by {eraData.vibe.toLowerCase()} aesthetics.
                Technically, developers focused on {eraData.techKeywords[0]} and {eraData.techKeywords[1]}.
              </p>
              <div>
                <button className={styles.button} onClick={() => setShowModal(true)}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
          
          <div className={`${styles.dashboard}`}>
             <h3 className="text-2xl font-black mb-6 uppercase tracking-wider">Metrics // {year}</h3>
             <div className="space-y-6">
               <div className="flex justify-between items-center border-b border-current pb-4">
                 <span className="text-xs uppercase font-black opacity-60">Avg Width</span>
                 <span className="text-xl font-bold">{year < 2005 ? "640px - 800px" : year < 2015 ? "960px - 1024px" : "Liquid / 4K"}</span>
               </div>
               <div className="flex justify-between items-center border-b border-current pb-4">
                 <span className="text-xs uppercase font-black opacity-60">Network</span>
                 <span className="text-xl font-bold">{year < 2000 ? "Dial-up 56k" : year < 2010 ? "ADSL / Cable" : "5G / Satellite"}</span>
               </div>
               <div className="flex justify-between items-center pb-2">
                 <span className="text-xs uppercase font-black opacity-60">Top Library</span>
                 <span className="text-xl font-bold">{eraData.techStack[1]}</span>
               </div>
             </div>
          </div>
        </div>

        {/* More Information Sections - Making the site "Bigger" */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className={styles.card}>
            <h4 className="text-xl font-black mb-4 uppercase">Popular Sites</h4>
            <ul className="space-y-3">
              {eraData.popularSites.map((site, i) => (
                <li key={i} className={styles.accent}>{site}</li>
              ))}
            </ul>
          </div>
          <div className={styles.card}>
            <h4 className="text-xl font-black mb-4 uppercase">Design Palette</h4>
            <div className="flex gap-4">
              {eraData.designPalette.map((color, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-lg border border-black/10 shadow-sm" style={{ backgroundColor: color }} />
                  <span className="text-[10px] font-mono opacity-60">{color}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.card}>
            <h4 className="text-xl font-black mb-4 uppercase">Did you know?</h4>
            <p className="text-sm italic opacity-70">"{eraData.funFacts[0]}"</p>
            <p className="text-sm italic opacity-70 mt-4">"{eraData.funFacts[1]}"</p>
          </div>
        </div>

        <div className="relative z-10">
          {children}
        </div>

        <footer className="mt-32 pt-12 border-t border-current opacity-40 text-sm flex flex-col md:flex-row justify-between items-center gap-8 font-bold">
          <p>© {year} 404 But we found</p>
          <div className="flex gap-10">
            <span className="hover:underline cursor-pointer">Archive Docs</span>
            <span className="hover:underline cursor-pointer">Source Map</span>
            {year === 1995 && <span className="animate-bounce">↑ SCROLL UP</span>}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default EraWrapper;
