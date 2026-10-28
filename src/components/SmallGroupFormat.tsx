import React from 'react';
import { Users, Compass, Zap } from 'lucide-react';
import { ArchShape, AsteriskShape, CutCornerShape } from './GeometricShapes';

export const SmallGroupFormat: React.FC = () => {
  const pillars = [
    {
      icon: Users,
      title: 'A Small Group of 10 Participants',
      description:
        'Large cohorts make people hide with their cameras off. In a 10-person pod, everyone knows your name, faces are familiar, and speaking feels less daunting from day one.',
      shape: <ArchShape className="w-10 h-12" color="#F9000E" />,
      accentBg: '#FFF1F2',
    },
    {
      icon: Compass,
      title: 'A Dedicated Coach for Feedback & Accountability',
      description:
        'You are not left to guess how you sound. Your dedicated pod coach provides clear, actionable observations on your pacing, vocal clarity, and presence after your drills.',
      shape: <CutCornerShape className="w-10 h-10" color="#0B0B10" />,
      accentBg: '#F3F4F6',
    },
    {
      icon: Zap,
      title: 'Daily Practice Combined with Live Drills',
      description:
        'Short daily 60–90-second micro-reps train your brain to activate quickly. Combined with two live interactive sessions, you develop genuine stamina and calm in the moment.',
      shape: <AsteriskShape className="w-10 h-10" color="#FFA300" />,
      accentBg: '#FFFBEB',
    },
  ];

  return (
    <section id="why-pods" className="py-20 sm:py-28 bg-[#F6F7F9] relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block font-condensed text-xs uppercase tracking-widest text-[#F9000E] font-bold mb-3">
            THE POD ADVANTAGE
          </div>
          <h2
            className="font-display-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0B0B10] tracking-tight leading-tight mb-5 uppercase"
            style={{ textWrap: 'balance' }}
          >
            You Do Not Have to Figure It Out Alone.
          </h2>
          <p className="text-base sm:text-lg text-[#4F4F60] leading-relaxed">
            Confidence does not develop from watching lectures in isolation. It grows when you practise inside a structured, supportive group where repetition feels safe.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] border border-[#0B0B10]/15 rounded-3xl p-8 flex flex-col justify-between shadow-superhi shadow-superhi-hover transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center border border-[#0B0B10]/15"
                      style={{ backgroundColor: item.accentBg }}
                    >
                      <Icon className="w-6 h-6 text-[#0B0B10]" />
                    </div>
                    <div>{item.shape}</div>
                  </div>

                  <h3 className="font-display-serif text-xl sm:text-2xl font-semibold text-[#0B0B10] mb-4 uppercase">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#4F4F60] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#0B0B10]/10 font-condensed uppercase tracking-wider text-xs text-[#4F4F60]">
                  Safe Practice Environment · Zero Mockery
                </div>
              </div>
            );
          })}
        </div>

        {/* Realistic Expectations Box */}
        <div className="mt-12 bg-white border border-[#0B0B10]/15 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto shadow-superhi-sm text-center">
          <p className="text-sm sm:text-base text-[#0B0B10] font-medium leading-relaxed">
            <span className="font-bold text-[#F9000E]">POLOMO Standard:</span> We do not promise that speaking fear vanishes overnight without effort. What this 7-day trial provides is a proven, structured method to step into every speaking opportunity with steady tools, continuous feedback, and unshakable presence.
          </p>
        </div>
      </div>
    </section>
  );
};
