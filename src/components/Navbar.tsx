import React, { useState } from 'react';
import { Search, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onClaimSeat: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onClaimSeat }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setSearchOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const q = searchQuery.toLowerCase();
    setSearchOpen(false);
    if (q.includes('faq') || q.includes('question') || q.includes('cost') || q.includes('price')) {
      document.getElementById('faqs')?.scrollIntoView({ behavior: 'smooth' });
    } else if (q.includes('step') || q.includes('work') || q.includes('rep') || q.includes('schedule')) {
      document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
    } else if (q.includes('include') || q.includes('bonus') || q.includes('get') || q.includes('deliverable')) {
      document.getElementById('what-you-get')?.scrollIntoView({ behavior: 'smooth' });
    } else if (q.includes('pod') || q.includes('coach') || q.includes('facilitator')) {
      document.getElementById('why-pods')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      onClaimSeat();
    }
  };

  return (
    <header className="sticky top-2 sm:top-3 z-40 w-full px-3 sm:px-6 pointer-events-none transition-all">
      <div className="max-w-5xl mx-auto pointer-events-auto">
        {/* Floating Pill Capsule Navbar */}
        <div className="bg-[#FFFFFF]/95 backdrop-blur-md border border-[#0B0B10]/15 rounded-full pl-3 pr-2 sm:pl-4 sm:pr-2.5 py-1.5 sm:py-2 shadow-superhi flex items-center justify-between gap-2 sm:gap-4">
          {/* Left Zone: Brand Logo with Favicon Image + Nav Links */}
          <div className="flex items-center gap-3 sm:gap-6 min-w-0">
            {/* POLOMO Favicon Mark Lockup */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 shrink-0 group focus-visible:outline-hidden"
              aria-label="POLOMO SpeakUp Lab Logo"
            >
              <img
                src="/assets/FAvicon%20Polomo.png"
                alt="POLOMO - SpeakUp Lab Logo"
                width="799"
                height="555"
                style={{ aspectRatio: '799 / 555' }}
                className="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="eager"
                fetchPriority="high"
              />
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-extrabold tracking-tight text-[#0B0B10] group-hover:text-[#F9000E] transition-colors leading-none">
                  POLOMO
                </span>
                <span className="font-condensed text-[8.5px] tracking-widest uppercase text-[#4F4F60] font-bold mt-0.5">
                  SPEAKUP LAB · 30-DAY SPRINT
                </span>
              </div>
            </a>

            {/* Nav Links */}
            <nav
              aria-label="Main Navigation"
              className="hidden md:flex items-center gap-4 lg:gap-6 text-xs lg:text-sm font-condensed uppercase tracking-wider font-semibold text-[#0B0B10]"
            >
              <a
                href="#how-it-works"
                onClick={(e) => handleNavClick(e, 'how-it-works')}
                className="hover:text-[#F9000E] transition-colors whitespace-nowrap"
              >
                How It Works
              </a>
              <a
                href="#what-you-get"
                onClick={(e) => handleNavClick(e, 'what-you-get')}
                className="hover:text-[#F9000E] transition-colors whitespace-nowrap"
              >
                What&apos;s Included
              </a>
              <a
                href="#why-pods"
                onClick={(e) => handleNavClick(e, 'why-pods')}
                className="hover:text-[#F9000E] transition-colors whitespace-nowrap"
              >
                Why 10-Person Pods
              </a>
              <a
                href="#faqs"
                onClick={(e) => handleNavClick(e, 'faqs')}
                className="hover:text-[#F9000E] transition-colors whitespace-nowrap"
              >
                FAQs
              </a>
            </nav>
          </div>

          {/* Right Zone: Search Icon + Stated Offer + Primary Pill CTA */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Search Trigger */}
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Quick Search"
              className="p-1.5 sm:p-2 text-[#0B0B10] hover:text-[#F9000E] rounded-full hover:bg-[#F6F7F9] transition-colors cursor-pointer"
            >
              <Search size={16} />
            </button>

            {/* Founding Investment Pill */}
            <a
              href="#what-you-get"
              onClick={(e) => handleNavClick(e, 'what-you-get')}
              className="hidden xl:inline-flex items-center gap-1 font-condensed uppercase tracking-wider text-[11px] font-bold text-[#4F4F60] hover:text-[#0B0B10] transition-colors py-1 px-2.5 rounded-full hover:bg-[#F6F7F9]"
            >
              <span>FOUNDING COHORT</span>
              <span className="text-[#F9000E]">₦20,000</span>
            </a>

            {/* Primary Action Button */}
            <button
              type="button"
              onClick={onClaimSeat}
              className="inline-flex items-center justify-center px-3.5 sm:px-5 py-2 text-xs sm:text-sm font-condensed uppercase tracking-wider font-bold text-white bg-[#F9000E] hover:bg-[#D6000C] active:scale-[0.98] rounded-full shadow-superhi-sm hover:shadow-superhi transition-all whitespace-nowrap cursor-pointer shrink-0"
            >
              <span>Save My Place — ₦20,000</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="md:hidden p-1.5 text-[#0B0B10] hover:text-[#F9000E] rounded-full transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Quick Search Dropdown Bar */}
        {searchOpen && (
          <form
            onSubmit={handleSearchSubmit}
            className="mt-2 bg-white border border-[#0B0B10]/15 rounded-3xl p-3 shadow-superhi flex items-center gap-2 animate-in fade-in duration-150"
          >
            <Search size={18} className="text-[#4F4F60] ml-2 shrink-0" />
            <input
              type="text"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics (e.g. FAQs, facilitator, pod size, ₦20,000)..."
              className="w-full text-xs sm:text-sm font-medium text-[#0B0B10] outline-none px-2 py-1"
            />
            <button
              type="submit"
              className="px-4 py-1.5 bg-[#0B0B10] text-white text-xs font-condensed uppercase font-bold rounded-full hover:bg-[#222] transition-colors shrink-0"
            >
              Search
            </button>
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="p-1 text-[#4F4F60] hover:text-[#0B0B10] rounded-full"
            >
              <X size={16} />
            </button>
          </form>
        )}

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 border border-[#0B0B10]/15 bg-[#FFFFFF] rounded-3xl p-6 shadow-superhi-lg animate-in fade-in duration-150">
            <nav className="flex flex-col gap-4 text-base font-condensed uppercase tracking-wider font-semibold text-[#0B0B10]">
              <a
                href="#how-it-works"
                onClick={(e) => handleNavClick(e, 'how-it-works')}
                className="py-1 hover:text-[#F9000E] transition-colors flex items-center justify-between"
              >
                <span>How It Works</span>
                <ArrowRight size={16} className="text-[#4F4F60]" />
              </a>
              <a
                href="#what-you-get"
                onClick={(e) => handleNavClick(e, 'what-you-get')}
                className="py-1 hover:text-[#F9000E] transition-colors flex items-center justify-between"
              >
                <span>What&apos;s Included (₦20,000 Pass)</span>
                <ArrowRight size={16} className="text-[#4F4F60]" />
              </a>
              <a
                href="#why-pods"
                onClick={(e) => handleNavClick(e, 'why-pods')}
                className="py-1 hover:text-[#F9000E] transition-colors flex items-center justify-between"
              >
                <span>Why 10-Person Pods</span>
                <ArrowRight size={16} className="text-[#4F4F60]" />
              </a>
              <a
                href="#faqs"
                onClick={(e) => handleNavClick(e, 'faqs')}
                className="py-1 hover:text-[#F9000E] transition-colors flex items-center justify-between"
              >
                <span>Frequently Asked Questions</span>
                <ArrowRight size={16} className="text-[#4F4F60]" />
              </a>
              <div className="pt-2 border-t border-[#0B0B10]/10">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onClaimSeat();
                  }}
                  className="w-full py-3.5 text-center text-sm font-condensed uppercase tracking-wider font-bold text-white bg-[#F9000E] hover:bg-[#D6000C] rounded-full shadow-superhi cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Save My Place — ₦20,000</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
