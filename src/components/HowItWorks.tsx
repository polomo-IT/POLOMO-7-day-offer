import React from 'react';
import { Users2, Clock3, Trophy } from 'lucide-react';
import { ArchShape, CutCornerShape, AsteriskShape } from './GeometricShapes';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Join Your Pod',
      icon: Users2,
      color: '#F9000E',
      description:
        'You are placed in a pod of about 10 at a level that suits you, with a facilitator. Take your starting seat, speaking or watching.',
      highlight: 'Pod of 10 · Facilitator · Speak or Watch',
      shape: <ArchShape className="w-9 h-11" color="#F9000E" />,
    },
    {
      step: '02',
      title: 'Daily Micro-Reps',
      icon: Clock3,
      color: '#FFA300',
      description:
        'Each day, one short prompt of 60–90 seconds. Say something out loud, then notice it went better than you feared. Twice a week, your pod meets live for a 30-minute session.',
      highlight: '60–90s Daily Prompt + 2x 30-Min Live Sessions',
      shape: <AsteriskShape className="w-9 h-9" color="#FFA300" />,
    },
    {
      step: '03',
      title: 'Weekend Speaking Room',
      icon: Trophy,
      color: '#16AB59',
      description:
        'Each weekend, the wider community comes together for warm-ups, small-group challenges, spontaneous speaking and reflection. Step into larger groups only when you feel ready.',
      highlight: 'Wider Community Challenges & Reflection',
      shape: <CutCornerShape className="w-9 h-9" color="#16AB59" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-10 sm:py-14 bg-[#F6F7F9] relative scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-10">
          <div className="inline-block font-condensed text-xs uppercase tracking-widest text-[#F9000E] font-bold mb-2">
            HOW THE 30 DAYS WORK
          </div>
          <h2
            className="font-display-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0B0B10] tracking-tight leading-tight mb-3 uppercase"
            style={{ textWrap: 'balance' }}
          >
            Small Practice. Real Progress. One Step at a Time.
          </h2>
          <p className="font-condensed text-base sm:text-lg text-[#4F4F60] leading-relaxed">
            Every step is optional and paced for you. Nobody is ever forced to speak before they are ready.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="feature-grid items-stretch">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-[#FFFFFF] border border-[#0B0B10]/15 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-superhi shadow-superhi-hover relative overflow-hidden"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="font-condensed text-xs font-bold uppercase tracking-widest text-white bg-[#0B0B10] px-2.5 py-1 rounded-full shadow-superhi-sm">
                      STEP {item.step}
                    </span>
                    <div className="shrink-0">{item.shape}</div>
                  </div>

                  <h3 className="font-display-serif text-lg sm:text-xl font-semibold text-[#0B0B10] mb-2 uppercase">
                    {item.title}
                  </h3>

                  <p className="font-condensed text-sm sm:text-base text-[#4F4F60] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer Metric */}
                <div className="pt-3 border-t border-[#0B0B10]/10 flex items-center gap-2 font-condensed uppercase tracking-wider text-xs font-semibold text-[#0B0B10]">
                  <Icon className="w-3.5 h-3.5 text-[#F9000E]" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Context Note */}
        <div className="mt-8 text-center font-condensed uppercase tracking-wider text-xs text-[#4F4F60] max-w-lg mx-auto">
          Every step is optional and paced for you. Observing is always a legitimate way to begin.
        </div>
      </div>
    </section>
  );
};
