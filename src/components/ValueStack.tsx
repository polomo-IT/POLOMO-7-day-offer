import React from 'react';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface ValueStackProps {
  onClaimSeat: () => void;
}

export const ValueStack: React.FC<ValueStackProps> = ({ onClaimSeat }) => {
  const deliverables = [
    {
      title: 'Full Access to the Seven-Day Sprint Core Drills',
      description: 'Structured daily exercises (60–90 seconds) designed to eliminate blanking out, shaky voice, and rapid heart rates during speaking.',
      value: '₦50,000',
      tag: 'Core System',
    },
    {
      title: 'Two Live Pod Practice Drills',
      description: 'High-trust, interactive group speaking workouts with your 10-person pod to practise in real time before real people.',
      value: '₦40,000',
      tag: 'Live Drills',
    },
    {
      title: 'Dedicated Pod Coach Feedback & Accountability',
      description: 'Personalized pointers on your speaking posture, vocal projection, eye contact, and message structuring from an assigned coach.',
      value: '₦30,000',
      tag: 'Coaching',
    },
    {
      title: 'Bonus: The 90-Second Panic Killer Protocol',
      description: 'A pre-speech physical and breath calibration exercise to immediately discharge physical adrenaline before walking into any meeting or stage.',
      value: '₦15,000',
      tag: 'Bonus Protocol',
      isBonus: true,
    },
    {
      title: 'Bonus: The 5-Minute Daily Habit Blueprint',
      description: 'A sustainable micro-routine to maintain and compound vocal strength, articulation, and clarity even with a demanding work schedule.',
      value: '₦15,000',
      tag: 'Bonus Guide',
      isBonus: true,
    },
  ];

  return (
    <section id="what-you-get" className="py-10 sm:py-14 bg-[#FFF5F5] border-y border-[#0B0B10]/10 relative scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-10">
          <div className="inline-block font-condensed text-xs uppercase tracking-widest text-[#F9000E] font-bold mb-2">
            WHAT YOU GET
          </div>
          <h2
            className="font-display-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0B0B10] tracking-tight leading-tight mb-3 uppercase"
            style={{ textWrap: 'balance' }}
          >
            Everything You Need to Start Practising — Without Paying to Try It.
          </h2>
          <p className="font-condensed text-base sm:text-lg text-[#4F4F60] leading-relaxed">
            The seven-day trial delivers the complete introductory toolkit, coaching oversight, and interactive practice drills for your cohort.
          </p>
        </div>

        {/* 2-Column: Value Items Left, Pricing & Action Panel Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
          {/* Left Column: The 5 Deliverables (7 cols) - Compact Rows */}
          <div className="lg:col-span-7 space-y-3">
            {deliverables.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FFFFFF] border border-[#0B0B10]/15 rounded-xl p-4 sm:p-5 shadow-superhi-sm hover:shadow-superhi transition-all"
              >
                <div className="flex items-start justify-between gap-3 mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#16AB59]/15 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#16AB59]" />
                    </div>
                    <span className="font-condensed text-[11px] font-bold uppercase tracking-wider text-[#F9000E]">
                      {item.tag}
                    </span>
                  </div>
                  <span className="font-condensed text-xs sm:text-sm font-bold text-[#0B0B10] tracking-wider shrink-0">
                    {item.value}
                  </span>
                </div>

                <h3 className="font-display-serif text-base sm:text-lg font-semibold text-[#0B0B10] mb-1 uppercase">
                  {item.title}
                </h3>
                <p className="font-condensed text-sm sm:text-base text-[#4F4F60] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Offer Breakdown & Action Panel (5 cols sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-20">
            <div className="bg-[#FFFFFF] border-2 border-[#0B0B10] rounded-2xl p-5 sm:p-6 shadow-superhi-lg relative overflow-hidden">
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#0B0B10]/10">
                <span className="font-condensed text-[11px] font-bold uppercase tracking-wider text-[#0B0B10] bg-[#FFA300] px-2.5 py-0.5 rounded-full border border-[#0B0B10]/20">
                  POLOMO OFFICIAL OFFER
                </span>
                <span className="font-condensed text-[11px] uppercase tracking-wider text-[#4F4F60]">7-Day Pod Cohort</span>
              </div>

              <div className="text-center py-1 mb-4">
                <p className="font-condensed text-[11px] uppercase tracking-widest text-[#4F4F60] mb-1 font-bold">
                  YOUR TUITION TODAY
                </p>

                <div className="inline-block mb-1">
                  <span className="font-condensed text-sm sm:text-base text-[#4F4F60] line-through font-bold decoration-2 tracking-wider">
                    ₦150,000 STATED VALUE
                  </span>
                </div>

                <div className="font-display-serif text-4xl sm:text-5xl font-bold text-[#F9000E] tracking-tight mb-1">
                  ₦0
                </div>
                <div className="font-condensed text-xs uppercase tracking-wider font-bold text-[#16AB59]">
                  COMPLETELY FREE TO JOIN
                </div>
              </div>

              {/* Stated Perks Summary - Tight Padding */}
              <div className="bg-[#F6F7F9] rounded-xl p-3.5 mb-4 text-xs text-[#0B0B10] space-y-2 border border-[#0B0B10]/10 font-condensed uppercase tracking-wider">
                <div className="flex items-center justify-between">
                  <span className="text-[#4F4F60]">Registration Fee:</span>
                  <span className="font-bold text-[#16AB59]">₦0 (Zero)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#4F4F60]">Card Required:</span>
                  <span className="font-bold text-[#0B0B10]">None</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#4F4F60]">Trial Cohort Capacity:</span>
                  <span className="font-bold text-[#0B0B10]">50 seats (5 pods)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#4F4F60]">Total Stated Value:</span>
                  <span className="font-bold text-[#0B0B10]">₦150,000</span>
                </div>
              </div>

              {/* Primary CTA */}
              <button
                type="button"
                onClick={onClaimSeat}
                className="w-full py-3 px-5 rounded-full bg-[#F9000E] hover:bg-[#D6000C] active:scale-[0.98] text-white font-condensed uppercase tracking-wider font-bold text-sm sm:text-base shadow-superhi-sm hover:shadow-superhi transition-all flex items-center justify-center gap-2 cursor-pointer mb-2.5"
              >
                <span>Claim My Free Trial Seat</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-center font-condensed uppercase tracking-wide text-[11px] text-[#4F4F60] leading-normal">
                50 trial seats across five dedicated coaching pods.
              </p>

              <div className="mt-4 pt-3 border-t border-[#0B0B10]/10 flex items-center justify-center gap-1.5 text-[11px] font-condensed uppercase tracking-wider text-[#4F4F60] text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-[#16AB59] shrink-0" />
                <span>Zero obligations. Experience the 7-day sprint first.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
