import React, { useState } from 'react';
import { ArrowUp, X } from 'lucide-react';

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
    <footer className="bg-[#0B0B10] text-[#F6F7F9] pt-16 pb-12 border-t border-[#0B0B10] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Upper Action Bar */}
        <div className="bg-[#F9000E] rounded-3xl p-8 sm:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 shadow-superhi text-white">
          <div className="max-w-xl text-center md:text-left">
            <span className="font-condensed text-xs uppercase tracking-widest text-[#0B0B10] bg-[#FFA300] px-3 py-1 rounded-full mb-3 inline-block font-bold">
              UNSHAKABLE PRESENCE
            </span>
            <h3 className="font-display-serif text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 tracking-tight uppercase">
              Ready to practise speaking without the fear?
            </h3>
            <p className="text-white/90 text-sm sm:text-base">
              Claim your free 7-day trial seat. Capped at 50 participants across five dedicated pods.
            </p>
          </div>
          <button
            type="button"
            onClick={onClaimSeat}
            className="px-8 py-4 bg-[#FFFFFF] hover:bg-[#F3F4F6] text-[#0B0B10] font-condensed uppercase tracking-wider font-extrabold rounded-full shadow-superhi hover:shadow-superhi-lg transition-all whitespace-nowrap text-base cursor-pointer"
          >
            Claim Your Free Seat — ₦0
          </button>
        </div>

        {/* Middle Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1.5 rounded-xl shrink-0 border border-white/20">
                <img
                  src="/assets/black_transparent%20logo-1.png"
                  alt="POLOMO - Unshakable Presence Logo"
                  width="1537"
                  height="1023"
                  style={{ aspectRatio: '1537 / 1023' }}
                  className="h-10 sm:h-11 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white leading-none">
                  POLOMO
                </span>
                <span className="font-condensed text-[11px] tracking-widest uppercase text-[#FFA300] font-bold mt-0.5">
                  UNSHAKABLE PRESENCE
                </span>
              </div>
            </div>
            <p className="text-sm text-[#9CA3AF] max-w-sm leading-relaxed">
              A structured practice initiative designed to help professionals overcome speaking avoidance, communicate with poise, and build lasting confidence through low-friction micro-reps and small-group coaching pods.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <div className="font-condensed text-xs uppercase tracking-widest text-[#FFA300] font-bold">
              NAVIGATION
            </div>
            <ul className="space-y-2 font-condensed uppercase tracking-wider text-sm text-[#F6F7F9]/80">
              <li>
                <a
                  href="#how-it-works"
                  onClick={(e) => handleNavClick(e, 'how-it-works')}
                  className="hover:text-white transition-colors"
                >
                  How the 7-Day Trial Works
                </a>
              </li>
              <li>
                <a
                  href="#what-you-get"
                  onClick={(e) => handleNavClick(e, 'what-you-get')}
                  className="hover:text-white transition-colors"
                >
                  What You Get (₦150,000 Value)
                </a>
              </li>
              <li>
                <a
                  href="#why-pods"
                  onClick={(e) => handleNavClick(e, 'why-pods')}
                  className="hover:text-white transition-colors"
                >
                  Why the 10-Person Pod Format Matters
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

          <div className="md:col-span-3 space-y-3">
            <div className="font-condensed text-xs uppercase tracking-widest text-[#FFA300] font-bold">
              TRIAL SPECIFICATIONS
            </div>
            <ul className="space-y-1.5 font-condensed uppercase tracking-wider text-xs text-[#D1D5DB]">
              <li>Brand: POLOMO</li>
              <li>Tuition: ₦0 (Free)</li>
              <li>Stated Value: ₦150,000</li>
              <li>Capacity: 50 participants</li>
              <li>Pods: 5 pods of 10 people</li>
              <li>Format: Daily micro-reps + 2 drills</li>
            </ul>
          </div>
        </div>

        {/* Lower Legal & Utility Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-condensed uppercase tracking-wider text-xs text-white/60">
          <p>© {new Date().getFullYear()} POLOMO. All rights reserved.</p>

          <div className="flex items-center gap-6">
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
              Terms of Trial
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
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
              {legalModal === 'privacy' ? 'POLOMO Privacy Policy' : 'POLOMO Terms of Trial Participation'}
            </h3>

            <div className="text-sm text-[#4F4F60] space-y-3 leading-relaxed max-h-80 overflow-y-auto pr-2">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    Your contact information (name, email, and WhatsApp number) is collected solely for coordinating your coaching pod, delivering daily speaking prompts, and providing live session access links.
                  </p>
                  <p>
                    We respect your privacy and will never sell, rent, or distribute your personal details to third parties. Communications are strictly focused on trial operations and sprint materials.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    1. <strong>Tuition:</strong> The 7-day trial is completely free (₦0) with no payment card required to register.
                  </p>
                  <p>
                    2. <strong>Pod Conduct:</strong> Participants agree to maintain an atmosphere of mutual respect, confidentiality, and psychological safety. Recordings inside pod practice rooms are strictly prohibited without consent.
                  </p>
                  <p>
                    3. <strong>Practice Focus:</strong> The sprint offers structured behavioral and vocal communication drills. It is an educational practice programme and does not replace medical or clinical psychotherapy.
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
