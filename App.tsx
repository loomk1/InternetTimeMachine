
import React, { useState, useEffect } from 'react';
import { EraYear } from './types';
import { ERAS } from './constants';
import EraWrapper from './components/EraWrapper';
import YearSelector from './components/YearSelector';
import Quiz from './components/Quiz';

const App: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<EraYear>(2025);
  const [compareYear, setCompareYear] = useState<EraYear>(1995);
  const [isCompareMode, setIsCompareMode] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);

  // Persistence
  useEffect(() => {
    const savedYear = localStorage.getItem('itm_current_year');
    if (savedYear) {
      setCurrentYear(parseInt(savedYear) as EraYear);
      setHasVisited(true);
    }
  }, []);

  const handleYearChange = (year: EraYear) => {
    setCurrentYear(year);
    localStorage.setItem('itm_current_year', year.toString());
    setHasVisited(true);
  };

  const toggleCompare = () => setIsCompareMode(!isCompareMode);

  if (!hasVisited && !isCompareMode) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 overflow-hidden relative">
        {/* Animated Background Orbs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
           <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-indigo-600 rounded-full blur-[120px] animate-pulse"></div>
           <div className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[100px] animate-pulse delay-700"></div>
        </div>

        <div className="z-10 text-center max-w-4xl">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white via-slate-300 to-slate-700">
            Internet Time Machine
          </h1>
          <p className="text-slate-400 text-lg md:text-2xl mb-16 max-w-2xl mx-auto leading-relaxed">
            Travel through thirty years of digital evolution. Witness the design shifts that shaped our modern world.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 mb-16">
            {ERAS.map((era) => (
              <button
                key={era.year}
                onClick={() => handleYearChange(era.year)}
                className="group relative flex flex-col items-center p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              >
                <span className="text-3xl font-black mb-2">{era.year}</span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 group-hover:text-indigo-400 font-bold transition-colors">Enter Era</span>
              </button>
            ))}
          </div>

          <button 
            onClick={() => handleYearChange(2025)}
            className="px-16 py-6 bg-white text-black font-black text-xl rounded-full hover:scale-105 active:scale-95 transition-all shadow-2xl"
          >
            Launch Experience
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative flex flex-col bg-slate-900 overflow-x-hidden">
      
      {/* Top Floating Controls */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] flex gap-2 md:gap-4 p-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full shadow-2xl">
        <button 
          onClick={() => setHasVisited(false)}
          className="px-6 py-2 text-xs md:text-sm font-black text-white hover:text-indigo-400 transition-colors uppercase tracking-widest"
        >
          Intro
        </button>
        <button 
          onClick={toggleCompare}
          className={`px-6 py-2 text-xs md:text-sm font-black rounded-full transition-all uppercase tracking-widest ${isCompareMode ? 'bg-white text-black' : 'text-white hover:bg-white/10'}`}
        >
          {isCompareMode ? 'Exit Compare' : 'Split Screen'}
        </button>
        <button 
          onClick={() => setShowQuiz(true)}
          className="px-6 py-2 text-xs md:text-sm font-black text-white hover:text-indigo-400 transition-colors uppercase tracking-widest"
        >
          Challenge
        </button>
      </div>

      {isCompareMode ? (
        <div className="flex h-screen w-full overflow-hidden">
          {/* Left Side */}
          <div className="w-1/2 h-full relative border-r border-white/20">
             <div className="absolute top-20 left-4 z-[101] bg-black/80 backdrop-blur-xl p-3 rounded-2xl border border-white/10 shadow-2xl">
               <select 
                 value={compareYear} 
                 onChange={(e) => setCompareYear(parseInt(e.target.value) as EraYear)}
                 className="bg-transparent text-white font-black outline-none cursor-pointer text-lg"
               >
                 {ERAS.map(e => <option key={e.year} value={e.year} className="text-black">{e.year}</option>)}
               </select>
             </div>
             <EraWrapper year={compareYear} isComparison>
                <div className="h-20"></div>
             </EraWrapper>
          </div>
          {/* Right Side */}
          <div className="w-1/2 h-full relative">
            <div className="absolute top-20 right-4 z-[101] bg-black/80 backdrop-blur-xl p-3 rounded-2xl border border-white/10 shadow-2xl">
               <select 
                 value={currentYear} 
                 onChange={(e) => handleYearChange(parseInt(e.target.value) as EraYear)}
                 className="bg-transparent text-white font-black outline-none cursor-pointer text-lg"
               >
                 {ERAS.map(e => <option key={e.year} value={e.year} className="text-black">{e.year}</option>)}
               </select>
             </div>
             <EraWrapper year={currentYear} isComparison>
               <div className="h-20"></div>
             </EraWrapper>
          </div>
        </div>
      ) : (
        <div className="flex-1 w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
           <EraWrapper year={currentYear}>
              <div className="mt-16 mb-24">
                <h3 className="text-4xl font-black mb-10 tracking-tighter uppercase">Visual Heritage</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {[1,2,3,4,5,6].map(i => (
                    <div key={i} className="group relative overflow-hidden rounded-[32px] shadow-lg">
                      <img 
                        src={`https://picsum.photos/seed/${currentYear + i}/1200/800`} 
                        className={`w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110 ${currentYear === 1995 ? 'grayscale contrast-125 border-4 border-black' : ''}`} 
                        alt="Era Visual" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                        <span className="text-white font-bold">Snapshot {currentYear}.{i}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
           </EraWrapper>
           <YearSelector currentYear={currentYear} onYearSelect={handleYearChange} isFloating />
        </div>
      )}

      {showQuiz && <Quiz year={currentYear} onClose={() => setShowQuiz(false)} />}
    </div>
  );
};

export default App;
