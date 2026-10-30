import React, { useState } from 'react';
import { ArrowUp, X, ArrowRight } from 'lucide-react';

interface FooterProps {
  onClaimSeat: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onClaimSeat }) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0B0B10] text-[#F6F7F9] pt-10 pb-8 border-t border-[#0B0B10] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Upper Action Bar: Final Call */}
        <div className="bg-[#F9000E] rounded-2xl p-6 sm:p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-superhi text-white">
          <div className="max-w-xl text-center md:text-left">
            <span className="font-condensed text-[11px] uppercase tracking-widest text-[#0B0B10] bg-[#FFA300] px-2.5 py-0.5 rounded-full mb-2 inline-block font-bold">
              FINAL CALL · FOUNDING COHORT
            </span>
            <h3 className="font-display-serif text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 tracking-tight uppercase">
              Silence feels safer, but it will not change anything on its own.
            </h3>
            <p className="font-condensed text-sm sm:text-base text-white/95 leading-relaxed mb-2">
              What changes it is practice: small, repeated, supported, and at your pace.
            </p>
            <p className="font-condensed text-xs uppercase tracking-wider text-white/80 font-semibold">
              ₦20,000 · Enrolment closes 21 November 2026 · Core programme starts 28 November 2026
            </p>
            <p className="font-condensed text-xs text-white/90 italic mt-1">
              Observe first if you want to. Nobody will make you speak before you are ready.
            </p>
          </div>
          <button
            type="button"
            onClick={onClaimSeat}
            className="w-full md:w-auto px-7 py-3.5 bg-[#FFFFFF] hover:bg-[#F3F4F6] text-[#0B0B10] font-condensed uppercase tracking-wider font-extrabold rounded-full shadow-superhi hover:shadow-superhi-lg transition-all whitespace-nowrap text-sm sm:text-base cursor-pointer shrink-0 flex items-center justify-center gap-2 group"
          >
            <span>Save My Place for ₦20,000</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Middle Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-8 border-b border-white/10">
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="bg-white p-1 rounded-lg shrink-0 border border-white/20">
                <img
                  src="/assets/black_transparent%20logo-1.png"
                  alt="POLOMO SpeakUp Lab Logo"
                  width="1537"
                  height="1023"
                  style={{ aspectRatio: '1537 / 1023' }}
                  className="h-8 sm:h-9 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight text-white leading-none">
                  POLOMO
                </span>
                <span className="font-condensed text-[10px] tracking-widest uppercase text-[#FFA300] font-bold mt-0.5">
                  SPEAKUP LAB · 30-DAY SPRINT
                </span>
              </div>
            </div>
            <p className="font-condensed text-sm text-[#9CA3AF] max-w-sm leading-relaxed">
              Thirty days of small, supported speaking practice in a pod of 10 people with a facilitator who keeps the room encouraging. Start at a level that suits you, or simply watch first.
            </p>
          </div>

          <div className="md:col-span-3 space-y-2.5">
            <div className="font-condensed text-xs uppercase tracking-widest text-[#FFA300] font-bold">
              NAVIGATION
            </div>
            <ul className="space-y-1.5 font-condensed uppercase tracking-wider text-xs sm:text-sm text-[#F6F7F9]/80">
              <li>
                <a
                  href="#how-it-works"
                  onClick={(e) => handleNavClick(e, 'how-it-works')}
                  className="hover:text-white transition-colors"
                >
                  How the 30 Days Work
                </a>
              </li>
              <li>
                <a
                  href="#what-you-get"
                  onClick={(e) => handleNavClick(e, 'what-you-get')}
                  className="hover:text-white transition-colors"
                >
                  What&apos;s Included (₦20,000)
                </a>
              </li>
              <li>
                <a
                  href="#why-pods"
                  onClick={(e) => handleNavClick(e, 'why-pods')}
                  className="hover:text-white transition-colors"
                >
                  Why 10-Person Pods
                </a>
              </li>
              <li>
                <a
                  href="#faqs"
                  onClick={(e) => handleNavClick(e, 'faqs')}
                  className="hover:text-white transition-colors"
                >
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-2.5">
            <div className="font-condensed text-xs uppercase tracking-widest text-[#FFA300] font-bold">
              COHORT SPECIFICATIONS
            </div>
            <ul className="space-y-1 font-condensed uppercase tracking-wider text-[11px] text-[#D1D5DB]">
              <li>Programme: POLOMO SpeakUp Lab</li>
              <li>Tuition: ₦20,000 One-Time</li>
              <li>Cohort Size: Strictly 50 Places</li>
              <li>Pods: 5 Pods of 10 People</li>
              <li>Enrolment Closes: 21 Nov 2026</li>
              <li>Core Starts: 28 Nov 2026</li>
              <li>Alumni Access: 3 Months Included</li>
            </ul>
          </div>
        </div>

        {/* Lower Legal & Utility Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 font-condensed uppercase tracking-wider text-xs text-white/60">
          <p>© {new Date().getFullYear()} POLOMO SpeakUp Lab. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => setLegalModal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setLegalModal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Enrolment
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Privacy / Terms Modal */}
      {legalModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
        >
          <div className="bg-white text-[#0B0B10] max-w-lg w-full rounded-3xl p-6 sm:p-8 border-2 border-[#0B0B10] shadow-superhi-xl relative">
            <button
              type="button"
              onClick={() => setLegalModal(null)}
              aria-label="Close dialog"
              className="absolute top-6 right-6 p-1.5 rounded-full hover:bg-black/5 text-[#0B0B10] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-display-serif text-2xl font-semibold mb-4 uppercase">
              {legalModal === 'privacy' ? 'POLOMO Privacy Policy' : 'POLOMO Terms of Enrolment'}
            </h3>

            <div className="font-condensed text-sm sm:text-base text-[#4F4F60] space-y-3 leading-relaxed max-h-80 overflow-y-auto pr-2">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    Your contact information (name, email, and WhatsApp number) is collected solely for coordinating your pod placement, delivering daily practice cards, and providing live session access links.
                  </p>
                  <p>
                    We respect your privacy and will never sell, rent, or distribute your personal details to third parties. Communications are strictly focused on sprint operations and practice materials.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    1. <strong>Investment:</strong> The founding cohort tuition is ₦20,000 one-time, covering the 30-day sprint, all 5 bonus packs, and 3 months of alumni practice access.
                  </p>
                  <p>
                    2. <strong>Pod Conduct:</strong> Participants agree to maintain an atmosphere of mutual respect, confidentiality, and psychological safety. Recordings inside pod practice rooms are strictly prohibited without consent.
                  </p>
                  <p>
                    3. <strong>Progress Guarantee:</strong> If you actively participate and feel you need additional time to build confidence, you are eligible for up to two additional weeks of guided support at no extra cost.
                  </p>
                  <p>
                    4. <strong>Educational Scope:</strong> The sprint offers structured behavioral and vocal communication drills. Facilitators are not clinicians, and this programme does not replace medical or clinical psychotherapy.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[#0B0B10]/10 text-right">
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="px-5 py-2.5 bg-[#F9000E] text-white font-condensed uppercase tracking-wider text-xs font-bold rounded-full shadow-superhi-sm cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
