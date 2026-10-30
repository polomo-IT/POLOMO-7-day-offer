import React from 'react';

export const AnnouncementTicker: React.FC = () => {
  const tickerItems = [
    'POLOMO SPEAKUP LAB',
    '30-DAY SPRINT',
    '50 FOUNDING PLACES',
    '₦20,000 ONE-TIME',
    'ENROLMENT CLOSES 21 NOV 2026',
    '5 PODS OF 10',
    'OBSERVE FIRST IF YOU WANT',
    'CORE STARTS 28 NOV 2026',
    'NOBODY FORCED TO SPEAK',
  ];

  return (
    <aside
      aria-label="Cohort Announcement Marquee"
      className="w-full bg-[#0B0B10] text-[#F6F7F9] py-2.5 overflow-hidden border-b border-black/20 select-none z-50 relative"
    >
      <div className="flex animate-marquee-right">
        {[1, 2, 3, 4].map((setIndex) => (
          <div key={setIndex} className="flex items-center shrink-0">
            {tickerItems.map((item, i) => (
              <span key={i} className="flex items-center font-condensed uppercase tracking-widest text-sm whitespace-nowrap">
                <span className="text-[#FFA300] mx-3 text-base font-bold" aria-hidden="true">•</span>
                {item === '₦20,000 ONE-TIME' ? (
                  <span className="bg-[#F9000E] text-white font-extrabold px-2.5 py-0.5 rounded-full text-xs shadow-sm">
                    {item}
                  </span>
                ) : item === 'POLOMO SPEAKUP LAB' || item === '30-DAY SPRINT' ? (
                  <span className="text-[#FFA300] font-bold">{item}</span>
                ) : (
                  <span className="text-[#F6F7F9] font-medium">{item}</span>
                )}
              </span>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
};
