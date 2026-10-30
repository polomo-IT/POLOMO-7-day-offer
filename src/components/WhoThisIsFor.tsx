import React from 'react';
import { CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';

export const WhoThisIsFor: React.FC = () => {
  const criteria = [
    {
      title: 'You Know What to Say, But Hesitate',
      description: 'You often know what you want to say but find it hard when others are listening and attention turns directly to you.',
      badge: 'Hesitation',
      color: '#F9000E',
    },
    {
      title: 'You Avoid Speaking Situations',
      description: 'You avoid meetings, group discussions, introductions, networking, job interviews, or unexpected questions.',
      badge: 'Avoidance',
      color: '#0B0B10',
    },
    {
      title: 'You Need Support, Not Judgment',
      description: 'You want a supportive, encouraging place to practise with peers who understand, not a critical or intimidating room.',
      badge: 'Safe Culture',
      color: '#16AB59',
    },
    {
      title: 'You Are Willing to Take Small Steps',
      description: 'You are willing to take small steps, even awkward ones, knowing progress compounds with simple, steady daily reps.',
      badge: 'Commitment',
      color: '#FFA300',
    },
  ];

  return (
    <section className="py-10 sm:py-14 bg-[#FFFFFF] border-b border-[#0B0B10]/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
          <div className="inline-block font-condensed text-xs uppercase tracking-widest text-[#F9000E] font-bold mb-2">
            WHO IT&apos;S FOR
          </div>
          <h2
            className="font-display-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0B0B10] tracking-tight leading-tight mb-3 uppercase"
            style={{ textWrap: 'balance' }}
          >
            For People Who Want to Speak Up With More Confidence.
          </h2>
          <p className="font-condensed text-base sm:text-lg text-[#4F4F60] leading-relaxed">
            This sprint is designed specifically for people who have value to share but feel held back when the spotlight hits.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto mb-8">
          {criteria.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAFC] border border-[#0B0B10]/15 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-superhi shadow-superhi-hover transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="font-condensed text-[11px] font-bold uppercase tracking-wider text-[#0B0B10] bg-white px-2.5 py-0.5 rounded-full border border-[#0B0B10]/10">
                    {item.badge}
                  </span>
                  <CheckCircle2 className="w-5 h-5 text-[#16AB59]" />
                </div>

                <h3 className="font-display-serif text-lg sm:text-xl font-semibold text-[#0B0B10] mb-2 uppercase">
                  {item.title}
                </h3>

                <p className="font-condensed text-sm sm:text-base text-[#4F4F60] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Encouraging Core Maxim */}
        <div className="bg-[#FFA300]/15 border border-[#FFA300]/50 rounded-2xl p-4 sm:p-5 max-w-3xl mx-auto mb-8 text-center shadow-superhi-sm">
          <p className="font-condensed text-base sm:text-lg text-[#0B0B10] font-bold leading-relaxed">
            You do not need to be good at speaking, and you do not need to feel confident first. That is what you are here to build.
          </p>
        </div>

        {/* An Honest Note: What This Isn't */}
        <div className="bg-[#FFF5F5] border-2 border-[#0B0B10] rounded-2xl p-5 sm:p-7 max-w-3xl mx-auto shadow-superhi">
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#0B0B10]/10">
            <AlertTriangle className="w-5 h-5 text-[#F9000E]" />
            <span className="font-condensed text-xs font-bold uppercase tracking-widest text-[#0B0B10]">
              AN HONEST NOTE: WHAT THIS ISN&apos;T
            </span>
          </div>

          <div className="font-condensed text-sm sm:text-base text-[#333340] space-y-2.5 leading-relaxed">
            <p>
              <strong className="text-[#0B0B10]">Not a presentation-skills course, not speechwriting, and not therapy.</strong>
            </p>
            <p>
              Facilitators are not clinicians, so if anxiety is severely affecting your daily life, please speak to a qualified professional.
            </p>
            <p className="text-[#0B0B10] font-medium pt-1">
              We also do not promise your nerves will disappear. The goal is to feel more comfortable and to stop letting nerves make the decision for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
