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
    <section id="what-you-get" className="py-20 sm:py-28 bg-[#FFF5F5] border-y border-[#0B0B10]/10 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block font-condensed text-xs uppercase tracking-widest text-[#F9000E] font-bold mb-3">
            WHAT YOU GET
          </div>
          <h2
            className="font-display-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0B0B10] tracking-tight leading-tight mb-5 uppercase"
            style={{ textWrap: 'balance' }}
          >
            Everything You Need to Start Practising — Without Paying to Try It.
          </h2>
          <p className="text-base sm:text-lg text-[#4F4F60] leading-relaxed">
            The seven-day trial delivers the complete introductory toolkit, coaching oversight, and interactive practice drills for your cohort.
          </p>
        </div>

        {/* 2-Column: Value Items Left, Pricing & Action Panel Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: The 5 Deliverables (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {deliverables.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FFFFFF] border border-[#0B0B10]/15 rounded-2xl p-6 sm:p-7 shadow-superhi hover:shadow-superhi-lg transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#16AB59]/15 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-[#16AB59]" />
                    </div>
                    <span className="font-condensed text-xs font-bold uppercase tracking-wider text-[#F9000E]">
                      {item.tag}
                    </span>
                  </div>
                  <span className="font-condensed text-sm font-bold text-[#0B0B10] tracking-wider shrink-0">
                    {item.value}
                  </span>
                </div>

                <h3 className="font-display-serif text-lg sm:text-xl font-semibold text-[#0B0B10] mb-2 uppercase">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4F4F60] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Offer Breakdown & Action Panel (5 cols sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-[#FFFFFF] border-2 border-[#0B0B10] rounded-3xl p-8 sm:p-9 shadow-superhi-xl relative overflow-hidden">
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-2 mb-6 pb-4 border-b border-[#0B0B10]/10">
                <span className="font-condensed text-xs font-bold uppercase tracking-wider text-[#0B0B10] bg-[#FFA300] px-3 py-1 rounded-full border border-[#0B0B10]/20">
                  POLOMO OFFICIAL OFFER
                </span>
                <span className="font-condensed text-xs uppercase tracking-wider text-[#4F4F60]">7-Day Pod Cohort</span>
              </div>

              <div className="text-center py-2 mb-6">
                <p className="font-condensed text-xs uppercase tracking-widest text-[#4F4F60] mb-2 font-bold">
                  YOUR TUITION TODAY
                </p>

                <div className="inline-block mb-3">
                  <span className="font-condensed text-lg sm:text-xl text-[#4F4F60] line-through font-bold decoration-2 tracking-wider">
                    ₦150,000 STATED VALUE
                  </span>
                </div>

                <div className="font-display-serif text-5xl sm:text-6xl font-bold text-[#F9000E] tracking-tight mb-2">
                  ₦0
                </div>
                <div className="font-condensed text-sm uppercase tracking-wider font-bold text-[#16AB59]">
                  COMPLETELY FREE TO JOIN
                </div>
              </div>

              {/* Stated Perks Summary */}
              <div className="bg-[#F6F7F9] rounded-2xl p-5 mb-6 text-xs sm:text-sm text-[#0B0B10] space-y-2.5 border border-[#0B0B10]/10 font-condensed uppercase tracking-wider">
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
                className="w-full py-4 px-6 rounded-full bg-[#F9000E] hover:bg-[#D6000C] active:scale-[0.98] text-white font-condensed uppercase tracking-wider font-bold text-base sm:text-lg shadow-superhi hover:shadow-superhi-lg transition-all flex items-center justify-center gap-2 cursor-pointer mb-4"
              >
                <span>Claim My Free Trial Seat</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-center font-condensed uppercase tracking-wide text-xs text-[#4F4F60] leading-normal">
                50 trial seats across five dedicated coaching pods.
              </p>

              <div className="mt-6 pt-4 border-t border-[#0B0B10]/10 flex items-center justify-center gap-2 text-xs font-condensed uppercase tracking-wider text-[#4F4F60] text-center">
                <ShieldCheck className="w-4 h-4 text-[#16AB59] shrink-0" />
                <span>Zero obligations. Experience the 7-day sprint first.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
