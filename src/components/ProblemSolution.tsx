import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProblemSolutionProps {
  onClaimSeat: () => void;
}

export const ProblemSolution: React.FC<ProblemSolutionProps> = ({ onClaimSeat }) => {
  return (
    <section className="py-10 sm:py-14 bg-[#FFFFFF] border-y border-[#0B0B10]/10 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
          <div className="inline-block font-condensed text-xs uppercase tracking-widest text-[#F9000E] font-bold mb-2">
            THE REALITY CHECK
          </div>
          <h2
            className="font-display-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0B0B10] tracking-tight leading-tight mb-3 uppercase"
            style={{ textWrap: 'balance' }}
          >
            Knowing What to Say Is Not the Same as Feeling Ready to Say It.
          </h2>
          <p className="font-condensed text-base sm:text-lg text-[#4F4F60] leading-relaxed mb-3">
            You have an answer, an opinion, or a story to share. Your heart speeds up, you hold back, and someone else speaks first. Or your mind goes blank when you are asked to introduce yourself. Or you rehearse a sentence until the moment has passed.
          </p>
          <p className="font-condensed text-sm sm:text-base text-[#0B0B10] font-semibold">
            It happens in meetings, classes, group chats, interviews, community gatherings and family events. It says nothing about your worth. It is common, and it is workable.
          </p>
        </div>

        {/* Sub-header: How Most People Stay Stuck */}
        <div className="text-center mb-6">
          <span className="font-condensed text-xs font-bold uppercase tracking-widest text-[#4F4F60] bg-[#F6F7F9] px-3.5 py-1 rounded-full border border-[#0B0B10]/10">
            HOW MOST PEOPLE STAY STUCK VS THE PRACTICE APPROACH
          </span>
        </div>

        {/* 2-Column Contrasting Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-stretch">
          {/* Card A: The Old Approach */}
          <div className="bg-[#F8FAFC] border border-[#0B0B10]/15 rounded-2xl p-5 sm:p-6 md:p-7 flex flex-col justify-between relative shadow-superhi">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-[#0B0B10]/10">
                <span className="font-condensed text-[11px] font-bold uppercase tracking-widest text-[#F9000E] bg-[#F9000E]/10 px-2.5 py-0.5 rounded-full">
                  THE COMMON TRAP
                </span>
                <span className="font-condensed text-[11px] uppercase tracking-wider font-semibold text-[#4F4F60]">
                  How Most People Stay Stuck
                </span>
              </div>

              <h3 className="font-display-serif text-lg sm:text-xl font-semibold text-[#0B0B10] mb-4 uppercase">
                The Old Approach
              </h3>

              <ul className="space-y-3.5 font-condensed text-sm sm:text-base text-[#4F4F60]">
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-[#F9000E] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#0B0B10] font-semibold">Watching videos and reading tips:</strong> Advice that does not change how it feels when attention turns to you.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-[#F9000E] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#0B0B10] font-semibold">Waiting for fear to vanish:</strong> Hoping you will suddenly feel fearless before ever opening your mouth.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-[#F9000E] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#0B0B10] font-semibold">Avoiding speaking situations:</strong> Staying silent brings quick relief now, but makes the next time even harder.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-4 border-t border-[#0B0B10]/10 font-condensed text-xs uppercase tracking-wider text-[#F9000E] font-bold">
              Cost: Another year of staying quiet, missed promotions, and lost visibility.
            </div>
          </div>

          {/* Card B: The Practice Approach */}
          <div className="bg-[#FFFFFF] border-2 border-[#F9000E] rounded-2xl p-5 sm:p-6 md:p-7 flex flex-col justify-between relative shadow-superhi-lg">
            {/* POLOMO Accent Badge */}
            <div className="absolute -top-3 right-5 bg-[#FFA300] text-[#0B0B10] font-condensed text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-[#0B0B10] shadow-superhi-sm">
              FOUNDING COHORT · ₦20,000
            </div>

            <div>
              <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-[#F9000E]/20">
                <span className="font-condensed text-[11px] font-bold uppercase tracking-widest text-[#16AB59] bg-[#E8F8EE] px-2.5 py-0.5 rounded-full">
                  THE POLOMO METHOD
                </span>
                <span className="font-condensed text-[11px] uppercase tracking-wider font-semibold text-[#F9000E]">
                  Safe, progressive repetitions
                </span>
              </div>

              <h3 className="font-display-serif text-lg sm:text-xl font-semibold text-[#0B0B10] mb-4 uppercase">
                The Practice Approach
              </h3>

              <ul className="space-y-3.5 font-condensed text-sm sm:text-base text-[#0B0B10]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16AB59] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#0B0B10] font-semibold">Short daily reps:</strong> 60–90 seconds, manageable even on a busy schedule.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16AB59] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#0B0B10] font-semibold">A small pod of 10:</strong> Familiar faces, with peers working on the exact same challenge.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16AB59] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#0B0B10] font-semibold">An encouraging facilitator:</strong> Keeps the room kind, supportive, and the steps manageable.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16AB59] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#0B0B10] font-semibold">Gradual progress:</strong> You build up at your own pace, and you can pass or observe any activity.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-4 border-t border-[#0B0B10]/10">
              <button
                type="button"
                onClick={onClaimSeat}
                className="w-full py-2.5 sm:py-3 px-5 rounded-full bg-[#F9000E] hover:bg-[#D6000C] text-white font-condensed uppercase tracking-wider font-bold text-xs sm:text-sm shadow-superhi-sm hover:shadow-superhi transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Save My Place for ₦20,000</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
