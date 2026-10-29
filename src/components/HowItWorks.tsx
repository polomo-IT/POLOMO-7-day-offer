import React from 'react';
import { Users2, Clock3, Trophy } from 'lucide-react';
import { ArchShape, CutCornerShape, AsteriskShape } from './GeometricShapes';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Your 10-Person Pod',
      icon: Users2,
      color: '#F9000E',
      description:
        'Join a small practice group with nine other participants and a dedicated coach. Build familiarity and practise in a more supportive environment.',
      highlight: 'Dedicated Pod Coach & 9 Peer Allies',
      shape: <ArchShape className="w-9 h-11" color="#F9000E" />,
    },
    {
      step: '02',
      title: 'Daily Micro-Reps',
      icon: Clock3,
      color: '#FFA300',
      description:
        'Complete short 60–90-second speaking exercises and take part in two live pod practice drills during the week.',
      highlight: '60–90 Seconds + 2 Live Drills',
      shape: <AsteriskShape className="w-9 h-9" color="#FFA300" />,
    },
    {
      step: '03',
      title: 'The Weekend Speaking Arena',
      icon: Trophy,
      color: '#16AB59',
      description:
        'Put your practice into action in the 50-person live speaking arena at the end of Day 7.',
      highlight: 'Safe Live Stage Milestones',
      shape: <CutCornerShape className="w-9 h-9" color="#16AB59" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-10 sm:py-14 bg-[#F6F7F9] relative scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-10">
          <div className="inline-block font-condensed text-xs uppercase tracking-widest text-[#F9000E] font-bold mb-2">
            THE 7-DAY PROGRESSION
          </div>
          <h2
            className="font-display-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0B0B10] tracking-tight leading-tight mb-3 uppercase"
            style={{ textWrap: 'balance' }}
          >
            Small Practice. Real Progress. One Step at a Time.
          </h2>
          <p className="font-condensed text-base sm:text-lg text-[#4F4F60] leading-relaxed">
            You do not have to start by speaking in front of a large audience. Begin with small practice sessions and build from there.
          </p>
        </div>

        {/* 3 Step Cards using user's .feature-grid */}
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
          Every drill is structured so that you never feel abandoned or pushed past your readiness level without coach guidance.
        </div>
      </div>
    </section>
  );
};
