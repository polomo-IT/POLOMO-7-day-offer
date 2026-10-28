import React from 'react';

export const AnnouncementTicker: React.FC = () => {
  const tickerItems = [
    'POLOMO 30-DAY SPRINT',
    '50 FREE TRIAL SEATS',
    '₦0 TO JOIN',
    'UNSHAKABLE PRESENCE',
    '5 COACHING PODS',
    '10 PARTICIPANTS EACH',
    '7-DAY TEST DRIVE',
    'NO CREDIT CARD REQUIRED',
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
                {item === '₦0 TO JOIN' ? (
                  <span className="bg-[#F9000E] text-white font-extrabold px-2.5 py-0.5 rounded-full text-xs shadow-sm">
                    {item}
                  </span>
                ) : item === 'POLOMO 30-DAY SPRINT' ? (
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
