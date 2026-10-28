/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback } from 'react';
import { AnnouncementTicker } from './components/AnnouncementTicker';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { HowItWorks } from './components/HowItWorks';
import { ValueStack } from './components/ValueStack';
import { WhoThisIsFor } from './components/WhoThisIsFor';
import { SmallGroupFormat } from './components/SmallGroupFormat';
import { RegistrationSection } from './components/RegistrationSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

export default function App() {
  const handleScrollToRegister = useCallback(() => {
    const target = document.getElementById('register');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      // Focus on the first input for accessibility
      setTimeout(() => {
        const input = document.getElementById('reg-name');
        if (input) {
          input.focus();
        }
      }, 450);
    }
  }, []);

  const handleScrollToHowItWorks = useCallback(() => {
    const target = document.getElementById('how-it-works');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F6F7F9] text-[#0B0B10] flex flex-col font-sans selection:bg-[#F9000E] selection:text-white">
      {/* SECTION 1: Announcement Ticker */}
      <AnnouncementTicker />

      {/* SECTION 2: Navigation Bar */}
      <Navbar onClaimSeat={handleScrollToRegister} />

      {/* Main Continuous Sales Flow */}
      <main className="flex-1">
        {/* SECTION 3: Hero Above the Fold */}
        <Hero
          onClaimSeat={handleScrollToRegister}
          onLearnMore={handleScrollToHowItWorks}
        />

        {/* SECTION 4: The Problem and the New Approach */}
        <ProblemSolution onClaimSeat={handleScrollToRegister} />

        {/* SECTION 5: How the Seven-Day Trial Works */}
        <HowItWorks />

        {/* SECTION 6: What You Get — The Value Stack */}
        <ValueStack onClaimSeat={handleScrollToRegister} />

        {/* SECTION 7: Who This Is For */}
        <WhoThisIsFor />

        {/* SECTION 8: Why the Small-Group Format Matters */}
        <SmallGroupFormat />

        {/* SECTION 9: The Final Registration CTA & Interactive Intake */}
        <RegistrationSection />

        {/* SECTION 10: Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* SECTION 11: Final CTA and Footer */}
      <Footer onClaimSeat={handleScrollToRegister} />
    </div>
  );
}
