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
      shape: <ArchShape className="w-12 h-14" color="#F9000E" />,
    },
    {
      step: '02',
      title: 'Daily Micro-Reps',
      icon: Clock3,
      color: '#FFA300',
      description:
        'Complete short 60–90-second speaking exercises and take part in two live pod practice drills during the week.',
      highlight: '60–90 Seconds + 2 Live Drills',
      shape: <AsteriskShape className="w-12 h-12" color="#FFA300" />,
    },
    {
      step: '03',
      title: 'The Weekend Speaking Arena',
      icon: Trophy,
      color: '#16AB59',
      description:
        'Put your practice into action in the 50-person live speaking arena at the end of Day 7.',
      highlight: 'Safe Live Stage Milestones',
      shape: <CutCornerShape className="w-12 h-12" color="#16AB59" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#F6F7F9] relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block font-condensed text-xs uppercase tracking-widest text-[#F9000E] font-bold mb-3">
            THE 7-DAY PROGRESSION
          </div>
          <h2
            className="font-display-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0B0B10] tracking-tight leading-tight mb-5 uppercase"
            style={{ textWrap: 'balance' }}
          >
            Small Practice. Real Progress. One Step at a Time.
          </h2>
          <p className="text-base sm:text-lg text-[#4F4F60] leading-relaxed">
            You do not have to start by speaking in front of a large audience. Begin with small practice sessions and build from there.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-[#FFFFFF] border border-[#0B0B10]/15 rounded-3xl p-8 flex flex-col justify-between shadow-superhi shadow-superhi-hover relative overflow-hidden"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="font-condensed text-xs font-bold uppercase tracking-widest text-white bg-[#0B0B10] px-3.5 py-1.5 rounded-full shadow-superhi-sm">
                      STEP {item.step}
                    </span>
                    <div className="shrink-0">{item.shape}</div>
                  </div>

                  <h3 className="font-display-serif text-2xl font-semibold text-[#0B0B10] mb-3 uppercase">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#4F4F60] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer Metric */}
                <div className="pt-4 border-t border-[#0B0B10]/10 flex items-center gap-2 font-condensed uppercase tracking-wider text-xs font-semibold text-[#0B0B10]">
                  <Icon className="w-4 h-4 text-[#F9000E]" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Context Note */}
        <div className="mt-12 text-center font-condensed uppercase tracking-wider text-xs text-[#4F4F60] max-w-xl mx-auto">
          Every drill is structured so that you never feel abandoned or pushed past your readiness level without coach guidance.
        </div>
      </div>
    </section>
  );
};
