import React from 'react';
import { ArrowDownRight, ShieldCheck, Users, CalendarCheck2 } from 'lucide-react';
import { StarburstShape, PolygonShape } from './GeometricShapes';

interface HeroProps {
  onClaimSeat: () => void;
  onLearnMore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onClaimSeat, onLearnMore }) => {
  return (
    <section className="relative overflow-hidden pt-4 pb-8 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-14 bg-[#F6F7F9]">
      {/* ------------------------------------------------------------- */}
      {/* BACKGROUND GEOMETRIC ELEMENTS - BALANCED VIEWPORT POSITIONING */}
      {/* ------------------------------------------------------------- */}

      {/* Top-Left: Soft Rose/Pink Circle */}
      <div
        className="absolute -top-10 -left-10 sm:top-0 sm:left-4 lg:left-8 w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full pointer-events-none opacity-80 z-0"
        style={{ backgroundColor: '#FFBAC4' }}
        aria-hidden="true"
      />

      {/* Top-Center: Tilted Emerald Green Slab */}
      <div
        className="absolute top-2 left-1/2 -translate-x-1/2 w-36 sm:w-56 md:w-64 h-12 sm:h-16 rounded-2xl pointer-events-none opacity-85 z-0 shadow-superhi-sm hidden sm:block"
        style={{
          backgroundColor: '#16AB59',
          transform: 'translateX(-40%) rotate(-6deg)',
        }}
        aria-hidden="true"
      />

      {/* Top-Right: Tilted Crimson Red Square */}
      <div
        className="absolute -top-6 -right-6 sm:top-2 sm:right-4 lg:right-12 w-24 sm:w-36 md:w-44 h-24 sm:h-36 md:h-44 rounded-3xl pointer-events-none opacity-85 z-0 shadow-superhi"
        style={{
          backgroundColor: '#F9000E',
          transform: 'rotate(14deg)',
        }}
        aria-hidden="true"
      />


      {/* ------------------------------------------------------------- */}
      {/* COMPACT, ABOVE-THE-FOLD HERO CONTENT                          */}
      {/* ------------------------------------------------------------- */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Eyebrow Label */}
        <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 font-condensed uppercase tracking-widest text-xs sm:text-sm text-[#0B0B10] font-bold bg-[#FFA300] px-3.5 py-1 rounded-full border border-[#0B0B10]/20 shadow-superhi-sm">
          <span className="w-2 h-2 rounded-full bg-[#F9000E]" aria-hidden="true" />
          <span>100% FREE 7-DAY TEST DRIVE · POLOMO SPRINT</span>
        </div>

        {/* Main Headline - Tight, Balanced 2-3 Line Flow */}
        <h1
          className="font-display-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-semibold text-[#0B0B10] leading-[1.1] tracking-tight mb-3 sm:mb-4 uppercase"
          style={{ textWrap: 'balance' }}
        >
          Stop Letting Public Speaking Anxiety Steal Your Rooms, Deals, and Promotions.
        </h1>

        {/* Supporting Copy - Refined Measure and Spacing */}
        <p className="font-condensed text-base sm:text-lg md:text-xl text-[#4F4F60] max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-7 font-normal">
          Build your confidence through daily speaking practice, a supportive 10-person pod, dedicated coach feedback, and a live speaking arena. Start with seven days of structured practice, completely free.
        </p>

        {/* ------------------------------------------------------------- */}
        {/* CTA BUTTONS FLANKED DIRECTLY BY GEOMETRIC SHAPES              */}
        {/* ------------------------------------------------------------- */}
        <div className="relative flex items-center justify-center mb-6 sm:mb-7 max-w-3xl mx-auto">
          {/* Left Shape: Vibrant Crimson 12-Point Starburst flanking CTA */}
          <div
            className="hidden md:block absolute -left-10 lg:-left-16 xl:-left-20 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-300 hover:rotate-12 z-0"
            aria-hidden="true"
          >
            <StarburstShape className="w-14 h-14 lg:w-18 lg:h-18 xl:w-20 xl:h-20 drop-shadow-md" color="#F9000E" />
          </div>

          {/* Center CTA Button Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto relative z-10">
            <button
              type="button"
              onClick={onClaimSeat}
              className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 font-condensed uppercase tracking-wider text-base sm:text-lg font-bold text-white bg-[#F9000E] hover:bg-[#D6000C] active:scale-[0.98] rounded-full shadow-superhi-lg hover:shadow-superhi-xl transition-all cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>Claim Your Free Pod Seat — ₦0</span>
              <ArrowDownRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              type="button"
              onClick={onLearnMore}
              className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 font-condensed uppercase tracking-wider text-base sm:text-lg font-bold text-[#0B0B10] bg-white hover:bg-[#F8FAFC] active:scale-[0.98] rounded-full border border-[#0B0B10]/20 shadow-superhi-sm hover:shadow-superhi transition-all cursor-pointer flex items-center justify-center"
            >
              See How It Works
            </button>
          </div>

          {/* Right Shape: Warm Amber Keystone Polygon flanking CTA */}
          <div
            className="hidden md:block absolute -right-10 lg:-right-16 xl:-right-20 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-300 hover:scale-105 z-0"
            aria-hidden="true"
          >
            <PolygonShape className="w-16 h-14 lg:w-20 lg:h-16 xl:w-22 xl:h-18 drop-shadow-md" color="#FFA300" />
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* TRUST INDICATORS & CONTEXT - COMPACT SINGLE ROW               */}
        {/* ------------------------------------------------------------- */}
        <div className="pt-3 border-t border-[#0B0B10]/10 max-w-xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-y-1.5 gap-x-5 font-condensed uppercase tracking-wider text-xs sm:text-sm font-semibold text-[#4F4F60]">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#16AB59]" />
              <span>No credit card required</span>
            </div>
            <span className="text-[#0B0B10]/25 hidden sm:inline" aria-hidden="true">·</span>
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-[#F9000E]" />
              <span>10 participants per coaching pod</span>
            </div>
            <span className="text-[#0B0B10]/25 hidden sm:inline" aria-hidden="true">·</span>
            <div className="flex items-center gap-1.5">
              <CalendarCheck2 className="w-4 h-4 text-[#FFA300]" />
              <span>100% free seven-day trial</span>
            </div>
          </div>

          {/* Compact Context Micro-line */}
          <p className="mt-2 text-[11px] font-condensed uppercase tracking-wide text-[#4F4F60]/80">
            (The 7-Day Free Trial introduces you to the core methods of the full 30-Day POLOMO Sprint. ₦0 to test drive.)
          </p>
        </div>
      </div>
    </section>
  );
};
