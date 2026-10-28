import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProblemSolutionProps {
  onClaimSeat: () => void;
}

export const ProblemSolution: React.FC<ProblemSolutionProps> = ({ onClaimSeat }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] border-y border-[#0B0B10]/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block font-condensed text-xs uppercase tracking-widest text-[#F9000E] font-bold mb-3">
            THE REALITY CHECK
          </div>
          <h2
            className="font-display-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0B0B10] tracking-tight leading-tight mb-5 uppercase"
            style={{ textWrap: 'balance' }}
          >
            Knowing What to Say Is Not the Same as Feeling Ready to Say It.
          </h2>
          <p className="text-base sm:text-lg text-[#4F4F60] leading-relaxed">
            Public speaking can feel difficult when the pressure is real. You need more than advice. You need a safe place to practise, get feedback, and gradually build unshakable confidence.
          </p>
        </div>

        {/* 2-Column Contrasting Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Card A: The Old Approach */}
          <div className="bg-[#F8FAFC] border border-[#0B0B10]/15 rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative shadow-superhi">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-[#0B0B10]/10">
                <span className="font-condensed text-xs font-bold uppercase tracking-widest text-[#F9000E] bg-[#F9000E]/10 px-3 py-1 rounded-full">
                  THE COMMON TRAP
                </span>
                <span className="font-condensed text-xs uppercase tracking-wider font-semibold text-[#4F4F60]">How Most People Get Stuck</span>
              </div>

              <h3 className="font-display-serif text-2xl font-semibold text-[#0B0B10] mb-6 uppercase">
                The Old Approach
              </h3>

              <ul className="space-y-4 text-sm sm:text-base text-[#4F4F60]">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-[#F9000E] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#0B0B10] font-semibold">Reading tips without practising:</strong> Watching videos and reading advice books that never translate to real calmness in the room.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-[#F9000E] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#0B0B10] font-semibold">Being told to &ldquo;imagine the audience differently&rdquo;:</strong> Superficial mindset tricks that evaporate the moment your heart begins to race.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-[#F9000E] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#0B0B10] font-semibold">Facing high-stakes situations unprepared:</strong> Pushing through presentations cold with no low-risk dry runs beforehand.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-[#F9000E] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#0B0B10] font-semibold">Overthinking instead of building daily habits:</strong> Waiting for fear to magically vanish rather than conditioning your nervous system through repetition.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#0B0B10]/10 font-condensed text-xs uppercase tracking-wider text-[#4F4F60]">
              Outcome: Avoidance, lost visibility, and repeated self-doubt when called upon.
            </div>
          </div>

          {/* Card B: The POLOMO Approach */}
          <div className="bg-[#FFFFFF] border-2 border-[#F9000E] rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative shadow-superhi-lg">
            {/* POLOMO Accent Badge */}
            <div className="absolute -top-3.5 right-6 bg-[#FFA300] text-[#0B0B10] font-condensed text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#0B0B10] shadow-superhi-sm">
              UNSHAKABLE PRESENCE
            </div>

            <div>
              <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-[#F9000E]/20">
                <span className="font-condensed text-xs font-bold uppercase tracking-widest text-[#F9000E] bg-[#FFF1F2] px-3 py-1 rounded-full">
                  THE POLOMO METHOD
                </span>
                <span className="font-condensed text-xs uppercase tracking-wider font-semibold text-[#F9000E]">Safe, progressive repetitions</span>
              </div>

              <h3 className="font-display-serif text-2xl font-semibold text-[#0B0B10] mb-6 uppercase">
                The Speak-Without-Fear Approach
              </h3>

              <ul className="space-y-4 text-sm sm:text-base text-[#0B0B10]">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#16AB59] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#0B0B10] font-semibold">Short, manageable daily speaking exercises:</strong> Low-friction 60–90-second micro-reps you can complete without anxiety taking over.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#16AB59] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#0B0B10] font-semibold">A supportive 10-person practice pod:</strong> Practise in a safe, intimate environment where peers are working through the exact same challenge.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#16AB59] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#0B0B10] font-semibold">Structured practice with a dedicated coach:</strong> Direct tactical feedback on vocal pacing, physical anchors, and clarity so you improve daily.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#16AB59] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#0B0B10] font-semibold">Gradual progression towards a larger arena:</strong> Expand your comfort zone step by step until you feel ready for the live 50-person speaking room.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#0B0B10]/10">
              <button
                type="button"
                onClick={onClaimSeat}
                className="w-full py-3.5 px-6 rounded-full bg-[#F9000E] hover:bg-[#D6000C] text-white font-condensed uppercase tracking-wider font-bold text-sm sm:text-base shadow-superhi-sm hover:shadow-superhi transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Experience This for Free (7 Days)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
