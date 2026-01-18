
import React from 'react';
import { ERAS } from '../constants';
import { EraYear } from '../types';

interface YearSelectorProps {
  currentYear: EraYear;
  onYearSelect: (year: EraYear) => void;
  isFloating?: boolean;
}

const YearSelector: React.FC<YearSelectorProps> = ({ currentYear, onYearSelect, isFloating = false }) => {
  return (
    <div className={`
      ${isFloating ? 'fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] bg-white/10 backdrop-blur-xl border border-white/20 p-2 rounded-full shadow-2xl' : 'mb-12 w-full'}
    `}>
      <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
        {ERAS.map((era) => (
          <button
            key={era.year}
            onClick={() => onYearSelect(era.year)}
            className={`
              px-4 py-2 rounded-full transition-all duration-300 font-bold text-sm md:text-base
              ${currentYear === era.year 
                ? 'bg-white text-black scale-110 shadow-lg' 
                : 'text-white/60 hover:text-white hover:bg-white/10'
              }
            `}
          >
            {era.year}
          </button>
        ))}
      </div>
    </div>
  );
};

export default YearSelector;
