import React from 'react';
import { Users, HeartHandshake, Eye, Volume2 } from 'lucide-react';
import { ArchShape, AsteriskShape, CutCornerShape } from './GeometricShapes';

export const SmallGroupFormat: React.FC = () => {
  const pillars = [
    {
      icon: Users,
      title: 'A Small Pod of 10 People',
      description:
        'Familiar faces working on the exact same challenge. In a 10-person pod, nobody gets lost in a sea of anonymous cameras, and speaking feels less daunting from day one.',
      shape: <ArchShape className="w-10 h-12" color="#F9000E" />,
      accentBg: '#FFF1F2',
      badge: '10 People Max',
    },
    {
      icon: HeartHandshake,
      title: 'An Encouraging Facilitator',
      description:
        'Your dedicated facilitator keeps the room kind, supportive, and the steps manageable. Protected by our Win-First Room Rules and Kindness Red-Card for zero mockery.',
      shape: <CutCornerShape className="w-10 h-10" color="#0B0B10" />,
      accentBg: '#F3F4F6',
      badge: 'Room Safety',
    },
    {
      icon: Eye,
      title: 'Observe First or Audio-Only',
      description:
        'Nobody is ever forced to speak before they are ready. Your first seat can be an observing seat. You can also join audio-only without video if your network data is limited.',
      shape: <AsteriskShape className="w-10 h-10" color="#FFA300" />,
      accentBg: '#FFFBEB',
      badge: 'Zero Pressure',
    },
  ];

  return (
    <section id="why-pods" className="py-10 sm:py-14 bg-[#F6F7F9] relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
          <div className="inline-block font-condensed text-xs uppercase tracking-widest text-[#F9000E] font-bold mb-2">
            WHY 10-PERSON PODS
          </div>
          <h2
            className="font-display-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0B0B10] tracking-tight leading-tight mb-3 uppercase"
            style={{ textWrap: 'balance' }}
          >
            The Cap Is Not a Marketing Trick.
          </h2>
          <p className="font-condensed text-base sm:text-lg text-[#4F4F60] leading-relaxed">
            Each pod has its own facilitator, and adding more people would weaken what makes the programme work.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="feature-grid items-stretch">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] border border-[#0B0B10]/15 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-superhi shadow-superhi-hover transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center border border-[#0B0B10]/15"
                      style={{ backgroundColor: item.accentBg }}
                    >
                      <Icon className="w-5 h-5 text-[#0B0B10]" />
                    </div>
                    <div className="scale-90 origin-right">{item.shape}</div>
                  </div>

                  <span className="inline-block font-condensed text-[11px] font-bold uppercase tracking-wider text-[#F9000E] bg-[#FFF1F2] px-2 py-0.5 rounded-full mb-2">
                    {item.badge}
                  </span>

                  <h3 className="font-display-serif text-lg sm:text-xl font-semibold text-[#0B0B10] mb-2 uppercase">
                    {item.title}
                  </h3>

                  <p className="font-condensed text-sm sm:text-base text-[#4F4F60] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#0B0B10]/10 font-condensed uppercase tracking-wider text-[11px] text-[#4F4F60]">
                  5 Pods Total · 50 Places Enrolment Cap
                </div>
              </div>
            );
          })}
        </div>

        {/* Safety & Flexibility Callout Box */}
        <div className="mt-8 sm:mt-10 bg-white border border-[#0B0B10]/15 rounded-xl p-4 sm:p-5 max-w-3xl mx-auto shadow-superhi-sm text-center">
          <p className="font-condensed text-sm sm:text-base text-[#0B0B10] font-medium leading-relaxed">
            <span className="font-bold text-[#F9000E]">Safe, Paced Progression:</span> We do not drop you into cold water. Start at a level that suits you, observe first if you choose, use audio-only whenever convenient, and recover missed sessions easily with the 24-hour catch-up pack.
          </p>
        </div>
      </div>
    </section>
  );
};
