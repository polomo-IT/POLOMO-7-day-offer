import React from 'react';
import { ArrowDownRight, ShieldCheck, Users, CalendarCheck2 } from 'lucide-react';
import { StarburstShape, PolygonShape } from './GeometricShapes';

interface HeroProps {
  onClaimSeat: () => void;
  onLearnMore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onClaimSeat, onLearnMore }) => {
  return (
    <section className="relative overflow-hidden pt-3 pb-8 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-14 bg-[#F6F7F9]">
      {/* ------------------------------------------------------------- */}
      {/* BACKGROUND GEOMETRIC ELEMENTS - BALANCED VIEWPORT POSITIONING */}
      {/* ------------------------------------------------------------- */}

      {/* Top-Left: Soft Rose/Pink Circle */}
      <div
        className="absolute -top-10 -left-10 sm:top-0 sm:left-4 lg:left-8 w-24 h-24 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full pointer-events-none opacity-80 z-0"
        style={{ backgroundColor: '#FFBAC4' }}
        aria-hidden="true"
      />

      {/* Top-Center: Tilted Emerald Green Slab */}
      <div
        className="absolute top-2 left-1/2 -translate-x-1/2 w-36 sm:w-56 md:w-64 h-10 sm:h-16 rounded-2xl pointer-events-none opacity-85 z-0 shadow-superhi-sm hidden sm:block"
        style={{
          backgroundColor: '#16AB59',
          transform: 'translateX(-40%) rotate(-6deg)',
        }}
        aria-hidden="true"
      />

      {/* Top-Right: Tilted Crimson Red Square */}
      <div
        className="absolute -top-6 -right-6 sm:top-2 sm:right-4 lg:right-12 w-20 sm:w-36 md:w-44 h-20 sm:h-36 md:h-44 rounded-3xl pointer-events-none opacity-85 z-0 shadow-superhi"
        style={{
          backgroundColor: '#F9000E',
          transform: 'rotate(14deg)',
        }}
        aria-hidden="true"
      />

      {/* ------------------------------------------------------------- */}
      {/* COMPACT, ABOVE-THE-FOLD HERO CONTENT                          */}
      {/* ------------------------------------------------------------- */}
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 text-center relative z-10">
        {/* Eyebrow Label */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 font-condensed uppercase tracking-wider sm:tracking-widest text-[11px] sm:text-sm text-[#0B0B10] font-bold bg-[#FFA300] px-3 sm:px-3.5 py-1 rounded-full border border-[#0B0B10]/20 shadow-superhi-sm max-w-full truncate">
          <span className="w-2 h-2 rounded-full bg-[#F9000E] shrink-0" aria-hidden="true" />
          <span className="truncate">FOUNDING COHORT · 30-DAY POLOMO SPRINT</span>
        </div>

        {/* Main Headline */}
        <h1
          className="font-display-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-semibold text-[#0B0B10] leading-[1.12] tracking-tight mb-3 sm:mb-4 uppercase"
          style={{ textWrap: 'balance' }}
        >
          You Know What to Say. Now Practise Saying It.
        </h1>

        {/* Supporting Copy */}
        <p className="font-condensed text-sm sm:text-lg md:text-xl text-[#4F4F60] max-w-2xl mx-auto leading-relaxed mb-5 sm:mb-7 font-normal">
          Thirty days of small, supported speaking practice in a pod of 10 people with a facilitator who keeps the room encouraging. Start at a level that suits you, or simply watch first.
        </p>

        {/* ------------------------------------------------------------- */}
        {/* CTA BUTTONS FLANKED DIRECTLY BY GEOMETRIC SHAPES              */}
        {/* ------------------------------------------------------------- */}
        <div className="relative flex items-center justify-center mb-5 sm:mb-7 max-w-3xl mx-auto">
          {/* Left Shape: Vibrant Crimson 12-Point Starburst flanking CTA */}
          <div
            className="hidden md:block absolute -left-10 lg:-left-16 xl:-left-20 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-300 hover:rotate-12 z-0"
            aria-hidden="true"
          >
            <StarburstShape className="w-14 h-14 lg:w-18 lg:h-18 xl:w-20 xl:h-20 drop-shadow-md" color="#F9000E" />
          </div>

          {/* Center CTA Button Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full sm:w-auto relative z-10">
            <button
              type="button"
              onClick={onClaimSeat}
              className="w-full sm:w-auto px-5 sm:px-8 py-3.5 sm:py-4 font-condensed uppercase tracking-wider text-sm sm:text-lg font-bold text-white bg-[#F9000E] hover:bg-[#D6000C] active:scale-[0.98] rounded-full shadow-superhi-lg hover:shadow-superhi-xl transition-all cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>Save My Place for ₦20,000</span>
              <ArrowDownRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              type="button"
              onClick={onLearnMore}
              className="w-full sm:w-auto px-5 sm:px-7 py-3 sm:py-4 font-condensed uppercase tracking-wider text-sm sm:text-lg font-bold text-[#0B0B10] bg-white hover:bg-[#F8FAFC] active:scale-[0.98] rounded-full border border-[#0B0B10]/20 shadow-superhi-sm hover:shadow-superhi transition-all cursor-pointer flex items-center justify-center"
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
        <div className="pt-3 border-t border-[#0B0B10]/10 max-w-2xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-y-1.5 gap-x-3 sm:gap-x-5 font-condensed uppercase tracking-wider text-xs sm:text-sm font-semibold text-[#4F4F60]">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#16AB59] shrink-0" />
              <span>₦20,000 one-time</span>
            </div>
            <span className="text-[#0B0B10]/25 hidden sm:inline" aria-hidden="true">·</span>
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-[#F9000E] shrink-0" />
              <span>Only 50 places · 5 pods of 10</span>
            </div>
            <span className="text-[#0B0B10]/25 hidden sm:inline" aria-hidden="true">·</span>
            <div className="flex items-center gap-1.5">
              <CalendarCheck2 className="w-4 h-4 text-[#FFA300] shrink-0" />
              <span>Closes 21 Nov · Starts 28 Nov</span>
            </div>
          </div>

          {/* Reassurance Tagline */}
          <p className="mt-2 text-xs sm:text-sm font-condensed uppercase tracking-wide text-[#0B0B10] font-bold">
            Nobody is ever forced to speak before they are ready.
          </p>
        </div>
      </div>
    </section>
  );
};
