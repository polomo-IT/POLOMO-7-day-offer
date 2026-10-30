import React from 'react';
import { Check, ArrowRight, ShieldCheck, Gift, Award } from 'lucide-react';

interface ValueStackProps {
  onClaimSeat: () => void;
}

export const ValueStack: React.FC<ValueStackProps> = ({ onClaimSeat }) => {
  const coreIncluded = [
    {
      title: 'Starting-Rung Session & 10-Tier Level Map',
      description: 'Find your exact starting point and always know your next clear step.',
      tag: 'Orientation',
    },
    {
      title: 'Level-Matched Pod Placement',
      description: 'A 10-person group with appropriate starting challenges and peers working on the same goals.',
      tag: 'Placement',
    },
    {
      title: 'Daily Task Cards',
      description: 'Always know exactly what to practise with clear 60–90 second prompts.',
      tag: 'Daily Prompts',
    },
    {
      title: 'Week-1 First-Win Fast-Track',
      description: 'A low-pressure 60-second talk in a small group early on to build early momentum.',
      tag: 'Fast-Track',
    },
    {
      title: 'No-Pressure First Seat',
      description: 'Observing is a completely legitimate way to begin—nobody is forced to speak.',
      tag: 'Safety',
    },
    {
      title: 'Win-First Room Rules & Kindness Red-Card',
      description: 'Respect built in, with an explicit facilitator protocol to address anything unkind.',
      tag: 'Culture',
    },
    {
      title: 'Audio-Only Option',
      description: 'Join without video anytime, or if your network data is limited.',
      tag: 'Flexibility',
    },
    {
      title: 'Streak Reminders & 24-Hour Catch-Up Pack',
      description: 'Keep momentum, and quickly recover if you ever miss a live pod session.',
      tag: 'Recovery',
    },
    {
      title: 'Progress Log & Baseline-vs-Now Report',
      description: 'See what you have done and measured progress, not just how you felt in the moment.',
      tag: 'Metrics',
    },
    {
      title: '3 Months of Alumni Access',
      description: 'Continued practice rooms to maintain your sharpness long after the 30 days.',
      tag: 'Longevity',
    },
    {
      title: 'Speaking Confidence Progress Guarantee',
      description: 'If you take part and need more time, receive up to two extra weeks of guided support, free.',
      tag: 'Guarantee',
    },
  ];

  const bonuses = [
    {
      num: '01',
      title: 'Confidence Breakthrough Starter Pack',
      desc: 'Gentle first steps to ease tension before speaking.',
    },
    {
      num: '02',
      title: 'Never-Blank Speaking Toolkit',
      desc: 'A pocket card and structured emergency tools for sudden blank moments.',
    },
    {
      num: '03',
      title: 'Pre-Speech Calm & Camera Confidence Kit',
      desc: 'Grounding audio tracks and a step-by-step camera comfort ladder.',
    },
    {
      num: '04',
      title: 'Busy Professional Practice Pack',
      desc: '5-minute micro-drills designed to slot cleanly into small gaps in your day.',
    },
    {
      num: '05',
      title: 'Real-World Speaking & 90-Day Confidence Pack',
      desc: 'Carry your pod practice effortlessly into meetings, pitches, and everyday life.',
    },
  ];

  return (
    <section id="what-you-get" className="py-10 sm:py-14 bg-[#FFF5F5] border-y border-[#0B0B10]/10 relative scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-10">
          <div className="inline-block font-condensed text-xs uppercase tracking-widest text-[#F9000E] font-bold mb-2">
            WHAT&apos;S INCLUDED
          </div>
          <h2
            className="font-display-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0B0B10] tracking-tight leading-tight mb-3 uppercase"
            style={{ textWrap: 'balance' }}
          >
            Everything You Need to Practise. One Founding Investment.
          </h2>
          <p className="font-condensed text-base sm:text-lg text-[#4F4F60] leading-relaxed">
            ₦20,000 one-time payment. All 11 core components, 5 bonuses, and 3 months of alumni practice included.
          </p>
        </div>

        {/* 2-Column: Value Items Left, Pricing & Action Panel Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
          {/* Left Column: Core Elements & Bonuses (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Core Systems */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-condensed text-xs font-bold uppercase tracking-widest text-[#0B0B10]">
                  Core 30-Day Sprint Curriculum
                </span>
                <span className="h-px flex-1 bg-[#0B0B10]/15" />
              </div>

              {coreIncluded.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#FFFFFF] border border-[#0B0B10]/15 rounded-xl p-3.5 sm:p-4 shadow-superhi-sm hover:shadow-superhi transition-all"
                >
                  <div className="flex items-start justify-between gap-2.5 mb-1">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#16AB59]/15 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-[#16AB59]" />
                      </div>
                      <span className="font-condensed text-[11px] font-bold uppercase tracking-wider text-[#F9000E]">
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display-serif text-sm sm:text-base font-semibold text-[#0B0B10] mb-0.5 uppercase">
                    {item.title}
                  </h3>
                  <p className="font-condensed text-xs sm:text-sm text-[#4F4F60] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Five Bonuses Callout Card */}
            <div className="bg-[#FFFFFF] border-2 border-[#FFA300] rounded-xl p-4 sm:p-5 shadow-superhi">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#FFA300]/30">
                <Gift className="w-4 h-4 text-[#FFA300]" />
                <span className="font-condensed text-xs font-bold uppercase tracking-wider text-[#0B0B10]">
                  Five Bonuses Included at No Extra Cost
                </span>
              </div>
              <div className="space-y-2.5">
                {bonuses.map((b) => (
                  <div key={b.num} className="flex items-start gap-2.5">
                    <span className="font-condensed text-xs font-bold text-[#FFA300] bg-[#FFA300]/15 px-1.5 py-0.5 rounded shrink-0">
                      {b.num}
                    </span>
                    <div>
                      <h4 className="font-display-serif text-xs sm:text-sm font-semibold uppercase text-[#0B0B10]">
                        {b.title}
                      </h4>
                      <p className="font-condensed text-xs text-[#4F4F60]">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Pricing & Investment Panel (5 cols sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-20">
            <div className="bg-[#FFFFFF] border-2 border-[#0B0B10] rounded-2xl p-5 sm:p-6 shadow-superhi-lg relative overflow-hidden">
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#0B0B10]/10">
                <span className="font-condensed text-[11px] font-bold uppercase tracking-wider text-[#0B0B10] bg-[#FFA300] px-2.5 py-0.5 rounded-full border border-[#0B0B10]/20">
                  POLOMO FOUNDING COHORT
                </span>
                <span className="font-condensed text-[11px] uppercase tracking-wider text-[#F9000E] font-bold">
                  Strictly 50 Places
                </span>
              </div>

              <div className="text-center py-1 mb-4">
                <p className="font-condensed text-[11px] uppercase tracking-widest text-[#4F4F60] mb-1 font-bold">
                  YOUR ONE-TIME INVESTMENT
                </p>

                <div className="font-display-serif text-4xl sm:text-5xl font-bold text-[#F9000E] tracking-tight mb-1">
                  ₦20,000
                </div>
                <div className="font-condensed text-xs uppercase tracking-wider font-bold text-[#16AB59]">
                  ONE PAYMENT · EVERYTHING INCLUDED
                </div>
              </div>

              {/* The Real Question Box */}
              <div className="bg-[#F8FAFC] border border-[#0B0B10]/10 rounded-xl p-3.5 mb-4 text-xs font-condensed text-[#333340] leading-relaxed">
                <strong className="text-[#0B0B10] block mb-1 uppercase font-bold">The Real Question:</strong>
                It is not whether ₦20,000 is a lot. It is what another year of staying quiet costs you: the meeting contribution you did not make, or the interview answer that did not come out the way you meant.
              </div>

              {/* Specs Summary */}
              <div className="bg-[#F6F7F9] rounded-xl p-3.5 mb-4 text-xs text-[#0B0B10] space-y-2 border border-[#0B0B10]/10 font-condensed uppercase tracking-wider">
                <div className="flex items-center justify-between">
                  <span className="text-[#4F4F60]">Founding Tuition:</span>
                  <span className="font-bold text-[#F9000E]">₦20,000 one-time</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#4F4F60]">Cohort Capacity:</span>
                  <span className="font-bold text-[#0B0B10]">50 places (5 pods of 10)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#4F4F60]">Enrolment Closes:</span>
                  <span className="font-bold text-[#0B0B10]">21 November 2026</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#4F4F60]">Core Starts:</span>
                  <span className="font-bold text-[#16AB59]">28 November 2026</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#4F4F60]">Alumni Access:</span>
                  <span className="font-bold text-[#0B0B10]">3 Months Continued</span>
                </div>
              </div>

              {/* Primary CTA */}
              <button
                type="button"
                onClick={onClaimSeat}
                className="w-full py-3 px-5 rounded-full bg-[#F9000E] hover:bg-[#D6000C] active:scale-[0.98] text-white font-condensed uppercase tracking-wider font-bold text-sm sm:text-base shadow-superhi-sm hover:shadow-superhi transition-all flex items-center justify-center gap-2 cursor-pointer mb-2.5"
              >
                <span>Save My Place for ₦20,000</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-center font-condensed text-[11px] text-[#4F4F60] leading-normal">
                The cap is not a marketing trick. Each pod has its own facilitator, and adding more people would weaken what makes the programme work.
              </p>

              <div className="mt-4 pt-3 border-t border-[#0B0B10]/10 flex items-center justify-center gap-1.5 text-[11px] font-condensed uppercase tracking-wider text-[#4F4F60] text-center">
                <Award className="w-3.5 h-3.5 text-[#16AB59] shrink-0" />
                <span>Speaking Confidence Progress Guarantee Included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
