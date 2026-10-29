import React from 'react';
import { Presentation, Briefcase, MessageSquareQuote, Target } from 'lucide-react';

export const WhoThisIsFor: React.FC = () => {
  const useCases = [
    {
      icon: Presentation,
      title: 'Speaking in Important Rooms',
      description:
        'When you have valuable ideas during department syncs, board meetings, or executive updates, but hesitate to unmute or raise your hand until the moment passes.',
      badge: 'Workplace Meetings',
      color: '#F9000E',
    },
    {
      icon: Briefcase,
      title: 'Handling Career Opportunities',
      description:
        'When client pitches, promotion panels, job interviews, or leadership moments demand that you articulate your value clearly and without second-guessing yourself.',
      badge: 'Deals & Career',
      color: '#0B0B10',
    },
    {
      icon: MessageSquareQuote,
      title: 'Participating Spontaneously',
      description:
        'When you are put on the spot with &ldquo;What do you think?&rdquo; and want to answer calmly with structure, rather than freezing or rambling.',
      badge: 'Impromptu Speaking',
      color: '#16AB59',
    },
    {
      icon: Target,
      title: 'Feeling Prepared Under Pressure',
      description:
        'When you want a reliable physical routine and micro-habit to steady your racing pulse, dry mouth, or voice tremors before delivering your message.',
      badge: 'Poise & Control',
      color: '#FFA300',
    },
  ];

  return (
    <section className="py-10 sm:py-14 bg-[#FFFFFF] border-b border-[#0B0B10]/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
          <div className="inline-block font-condensed text-xs uppercase tracking-widest text-[#F9000E] font-bold mb-2">
            INTENDED PARTICIPANTS
          </div>
          <h2
            className="font-display-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0B0B10] tracking-tight leading-tight mb-3 uppercase"
            style={{ textWrap: 'balance' }}
          >
            For People Who Want to Speak Up With More Confidence.
          </h2>
          <p className="font-condensed text-base sm:text-lg text-[#4F4F60] leading-relaxed">
            Whether you are leading projects, presenting to stakeholders, or simply wanting your voice to carry weight in everyday discussions, this sprint gives you the practical space to build unshakable presence.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {useCases.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-[#0B0B10]/15 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-superhi shadow-superhi-hover transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center border border-[#0B0B10]/15 shadow-superhi-sm"
                      style={{ backgroundColor: item.color === '#FFA300' ? '#FFA300' : '#FFFFFF' }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: item.color === '#FFA300' ? '#0B0B10' : item.color }}
                      />
                    </div>
                    <span className="font-condensed text-[11px] font-bold uppercase tracking-wider text-[#0B0B10] bg-white px-2.5 py-0.5 rounded-full border border-[#0B0B10]/10">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-display-serif text-lg sm:text-xl font-semibold text-[#0B0B10] mb-2 uppercase">
                    {item.title}
                  </h3>

                  <p className="font-condensed text-sm sm:text-base text-[#4F4F60] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
