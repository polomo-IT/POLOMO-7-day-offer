import React, { useState } from 'react';
import { ShieldCheck, User, Mail, Phone, ArrowRight, AlertCircle, Award } from 'lucide-react';
import { AsteriskShape } from './GeometricShapes';

interface RegistrationData {
  fullName: string;
  email: string;
  phone: string;
  challenge: string;
}

export const RegistrationSection: React.FC = () => {
  const [formData, setFormData] = useState<RegistrationData>({
    fullName: '',
    email: '',
    phone: '',
    challenge: 'Blanking out',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof RegistrationData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<RegistrationData | null>(null);

  const challengeOptions = [
    'Blanking out',
    'Staying quiet in groups',
    'Introductions',
    'Unexpected questions',
    'Interviews',
    'Other',
  ];

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof RegistrationData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your WhatsApp phone number';
    } else if (formData.phone.trim().replace(/\D/g, '').length < 8) {
      newErrors.phone = 'Please provide a complete WhatsApp phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const GOOGLE_SHEETS_ENDPOINT =
    'https://script.google.com/macros/s/AKfycbzV1nWSAG0zuu99vguZUZ3c2PxScfw-55S2aT1TaXBPKCUtAnegJOATMxLu3w2gphhFww/exec';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Send submission payload to the verified Google Sheets webhook
      await fetch(GOOGLE_SHEETS_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          challenge: formData.challenge,
          tuition: '₦20,000',
          cohort: 'POLOMO SpeakUp Lab: 30-Day Sprint',
        }),
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedData({ ...formData });
    } catch (err) {
      console.error('Google Sheets intake error:', err);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedData({ ...formData });
    }
  };

  const WHATSAPP_COMMUNITY_URL = 'https://chat.whatsapp.com/LHcbvetC4sRG8Sr7hAk2Uq';

  return (
    <section id="register" className="py-10 sm:py-14 bg-[#FFFFFF] border-y border-[#0B0B10]/10 relative scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
          <div className="inline-block font-condensed text-xs uppercase tracking-widest text-[#F9000E] font-bold mb-2">
            ENROL NOW · FOUNDING COHORT
          </div>
          <h2
            className="font-display-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0B0B10] tracking-tight leading-tight mb-3 uppercase"
            style={{ textWrap: 'balance' }}
          >
            Your Next Speaking Opportunity Should Not Catch You Unprepared.
          </h2>
          <p className="font-condensed text-base sm:text-lg text-[#4F4F60] leading-relaxed">
            Thirty days of small, supported speaking practice in a pod of 10 people with a facilitator who keeps the room encouraging.
          </p>
        </div>

        {/* 4 Capacity Markers Strip in condensed uppercase */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 mb-6 sm:mb-8 font-condensed uppercase tracking-wider">
          <div className="bg-[#F6F7F9] border border-[#0B0B10]/10 rounded-xl p-2.5 sm:p-3 text-center">
            <span className="block text-[11px] text-[#4F4F60] mb-0.5">Duration</span>
            <span className="text-sm sm:text-base font-bold text-[#0B0B10]">30-Day Sprint</span>
          </div>
          <div className="bg-[#F6F7F9] border border-[#0B0B10]/10 rounded-xl p-2.5 sm:p-3 text-center">
            <span className="block text-[11px] text-[#4F4F60] mb-0.5">Investment</span>
            <span className="text-sm sm:text-base font-bold text-[#F9000E]">₦20,000 One-Time</span>
          </div>
          <div className="bg-[#F6F7F9] border border-[#0B0B10]/10 rounded-xl p-2.5 sm:p-3 text-center">
            <span className="block text-[11px] text-[#4F4F60] mb-0.5">Cohort Cap</span>
            <span className="text-sm sm:text-base font-bold text-[#0B0B10]">Only 50 Places</span>
          </div>
          <div className="bg-[#F6F7F9] border border-[#0B0B10]/10 rounded-xl p-2.5 sm:p-3 text-center">
            <span className="block text-[11px] text-[#4F4F60] mb-0.5">Pod Structure</span>
            <span className="text-sm sm:text-base font-bold text-[#16AB59]">5 Pods of 10</span>
          </div>
        </div>

        {/* Main Card Container */}
        <div className="bg-[#F6F7F9] border-2 border-[#0B0B10] rounded-2xl p-5 sm:p-7 md:p-8 shadow-superhi relative overflow-hidden">
          {/* Decorative Corner Shape */}
          <div className="absolute top-4 right-4 pointer-events-none opacity-30 hidden sm:block">
            <AsteriskShape className="w-8 h-8" color="#FFA300" />
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} noValidate className="max-w-xl mx-auto space-y-4">
              <div className="text-center mb-5">
                <span className="inline-block font-condensed text-[11px] uppercase tracking-widest text-white bg-[#0B0B10] px-3 py-0.5 rounded-full font-bold mb-1.5 shadow-superhi-sm">
                  FOUNDING COHORT · 50 PLACES
                </span>
                <h3 className="font-display-serif text-xl sm:text-2xl font-semibold text-[#0B0B10] uppercase">
                  Enrol in the 30-Day Sprint
                </h3>
                <p className="font-condensed text-xs uppercase tracking-wide text-[#4F4F60] mt-0.5">
                  ₦20,000 one-time · Enrolment closes 21 Nov 2026 · Core programme starts 28 Nov 2026
                </p>
              </div>

              {/* Full Name */}
              <div>
                <label htmlFor="reg-name" className="block font-condensed text-[11px] uppercase tracking-wider text-[#0B0B10] font-bold mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#4F4F60] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="reg-name"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ngozi Adeyemi"
                    className={`w-full pl-10 pr-3.5 py-2.5 sm:py-3 bg-white border ${
                      errors.fullName ? 'border-[#F9000E] ring-2 ring-[#F9000E]/20' : 'border-[#0B0B10]/20 focus:border-[#F9000E]'
                    } rounded-full font-condensed text-sm sm:text-base font-medium text-[#0B0B10] outline-none shadow-superhi-sm transition-all`}
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1 text-xs text-[#F9000E] flex items-center gap-1 font-medium font-condensed">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="reg-email" className="block font-condensed text-[11px] uppercase tracking-wider text-[#0B0B10] font-bold mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#4F4F60] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="reg-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. ngozi@example.com"
                    className={`w-full pl-10 pr-3.5 py-2.5 sm:py-3 bg-white border ${
                      errors.email ? 'border-[#F9000E] ring-2 ring-[#F9000E]/20' : 'border-[#0B0B10]/20 focus:border-[#F9000E]'
                    } rounded-full font-condensed text-sm sm:text-base font-medium text-[#0B0B10] outline-none shadow-superhi-sm transition-all`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 font-condensed text-xs text-[#F9000E] flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* WhatsApp Phone */}
              <div>
                <label htmlFor="reg-phone" className="block font-condensed text-[11px] uppercase tracking-wider text-[#0B0B10] font-bold mb-1">
                  WhatsApp Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#4F4F60] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="reg-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+234 803 123 4567"
                    className={`w-full pl-10 pr-3.5 py-2.5 sm:py-3 bg-white border ${
                      errors.phone ? 'border-[#F9000E] ring-2 ring-[#F9000E]/20' : 'border-[#0B0B10]/20 focus:border-[#F9000E]'
                    } rounded-full font-condensed text-sm sm:text-base font-medium text-[#0B0B10] outline-none shadow-superhi-sm transition-all`}
                  />
                </div>
                <p className="mt-1 font-condensed text-xs text-[#4F4F60]">
                  Used only to add you to the community, never shared.
                </p>
                {errors.phone && (
                  <p className="mt-1 font-condensed text-xs text-[#F9000E] flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Main Speaking Hurdle */}
              <div>
                <label htmlFor="reg-challenge" className="block font-condensed text-[11px] uppercase tracking-wider text-[#0B0B10] font-bold mb-1">
                  Main speaking hurdle? (choose one):
                </label>
                <select
                  id="reg-challenge"
                  value={formData.challenge}
                  onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                  className="w-full px-4 py-2.5 sm:py-3 bg-white border border-[#0B0B10]/20 focus:border-[#F9000E] rounded-xl font-condensed text-sm sm:text-base font-medium text-[#0B0B10] outline-none shadow-superhi-sm transition-all cursor-pointer"
                >
                  {challengeOptions.map((opt, idx) => (
                    <option key={idx} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 sm:py-4 px-6 rounded-full bg-[#F9000E] hover:bg-[#D6000C] active:scale-[0.98] disabled:opacity-60 text-white font-condensed uppercase tracking-wider font-bold text-sm sm:text-base shadow-superhi hover:shadow-superhi-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Reserving Your Place...</span>
                    </span>
                  ) : (
                    <>
                      <span>Save My Place for ₦20,000</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="mt-2 text-center font-condensed text-xs text-[#4F4F60]">
                  After saving your place, you are taken straight to the community link.
                </p>
              </div>

              {/* Footer Trust Markers */}
              <div className="flex flex-wrap items-center justify-center gap-3 font-condensed uppercase tracking-wider text-[11px] text-[#4F4F60] pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#16AB59]" />
                  <span>₦20,000 One-Time Payment</span>
                </span>
                <span aria-hidden="true">·</span>
                <span>Direct Community Access</span>
                <span aria-hidden="true">·</span>
                <span>Strict 50-Place Limit</span>
              </div>
            </form>
          ) : (
            /* Confirmation State: Concept 1 — Executive Memo & Tactile WhatsApp Pass */
            <div className="py-1">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                {/* Left Column: Personal Memo */}
                <div className="lg:col-span-7 text-left space-y-5">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-[#25D366]/15 border border-[#25D366]/40 px-3 py-1 rounded-full mb-3 shadow-superhi-sm">
                      <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                      <span className="font-condensed text-[11px] uppercase tracking-widest text-[#0B0B10] font-bold">
                        FOUNDING COHORT · PLACE RESERVED
                      </span>
                    </div>

                    <h3 className="font-display-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0B0B10] tracking-tight leading-tight">
                      You’re officially on the roster, {submittedData?.fullName}.
                    </h3>

                    <p className="font-condensed text-base sm:text-lg text-[#333340] mt-2.5 leading-relaxed">
                      Your details are confirmed for the POLOMO SpeakUp Lab 30-Day Sprint. We deliberately avoid lengthy automated email sequences—all direct onboarding, weekly live AMA sessions, daily mini-exercises, and community orientation happen inside our private WhatsApp room.
                    </p>
                  </div>

                  {/* 3 Structured Community Pillars */}
                  <div className="space-y-3 pt-1 border-t border-[#0B0B10]/10">
                    <div className="flex items-start gap-3 bg-white border border-[#0B0B10]/15 rounded-xl p-3.5 shadow-superhi-sm">
                      <div className="w-8 h-8 rounded-lg bg-[#FFA300]/20 text-[#0B0B10] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                        01
                      </div>
                      <div>
                        <h4 className="font-display-serif text-sm sm:text-base font-semibold uppercase text-[#0B0B10]">
                          Weekly Live AMAs with Coaching Leads
                        </h4>
                        <p className="font-condensed text-xs sm:text-sm text-[#4F4F60] leading-relaxed mt-0.5">
                          Direct access to ask questions, deconstruct real meeting dilemmas, and get on-the-spot coaching.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-white border border-[#0B0B10]/15 rounded-xl p-3.5 shadow-superhi-sm">
                      <div className="w-8 h-8 rounded-lg bg-[#F9000E]/15 text-[#F9000E] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                        02
                      </div>
                      <div>
                        <h4 className="font-display-serif text-sm sm:text-base font-semibold uppercase text-[#0B0B10]">
                          Daily 60–90 Second Vocal Micro-Exercises
                        </h4>
                        <p className="font-condensed text-xs sm:text-sm text-[#4F4F60] leading-relaxed mt-0.5">
                          Low-friction vocal micro-drills to condition calmness, message structure, and impromptu presence.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-white border border-[#0B0B10]/15 rounded-xl p-3.5 shadow-superhi-sm">
                      <div className="w-8 h-8 rounded-lg bg-[#25D366]/20 text-[#0B0B10] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                        03
                      </div>
                      <div>
                        <h4 className="font-display-serif text-sm sm:text-base font-semibold uppercase text-[#0B0B10]">
                          Community Manager Welcome
                        </h4>
                        <p className="font-condensed text-xs sm:text-sm text-[#4F4F60] leading-relaxed mt-0.5">
                          Dedicated community managers are standing by right now to welcome you, answer queries, and orient your pod.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Guarantee Reassurance */}
                  <div className="flex items-center gap-2.5 pt-2 text-[#4F4F60] font-condensed text-xs">
                    <Award className="w-4 h-4 text-[#16AB59] shrink-0" />
                    <span>Protected by the Speaking Confidence Progress Guarantee (up to 2 weeks extra support free if needed).</span>
                  </div>
                </div>

                {/* Right Column: Tactile Admission Pass & Direct WhatsApp Entry */}
                <div className="lg:col-span-5 text-left">
                  <div className="bg-white border-2 border-[#0B0B10] rounded-2xl p-5 sm:p-6 shadow-superhi relative">
                    {/* Pass Header */}
                    <div className="flex items-center justify-between border-b border-[#0B0B10]/10 pb-3.5 mb-4">
                      <div className="flex items-center gap-2">
                        <img
                          src="/assets/black_transparent%20logo-1.png"
                          alt="POLOMO Logo"
                          width="1537"
                          height="1023"
                          style={{ aspectRatio: '1537 / 1023' }}
                          className="h-7 w-auto object-contain"
                          referrerPolicy="no-referrer"
                        />
                        <span className="font-condensed text-xs uppercase tracking-wider text-[#4F4F60] font-bold">
                          ADMISSION PASS
                        </span>
                      </div>
                      <span className="font-condensed text-[11px] font-bold bg-[#FFA300] text-[#0B0B10] px-2.5 py-0.5 rounded-full border border-[#0B0B10]/20 uppercase tracking-wider">
                        ₦20,000 FOUNDING PASS
                      </span>
                    </div>

                    {/* Group Title */}
                    <div className="mb-4">
                      <span className="font-condensed text-[10px] uppercase tracking-wider text-[#6B7280] block">
                        Assigned Community
                      </span>
                      <strong className="font-display-serif text-base sm:text-lg text-[#0B0B10] font-bold uppercase block leading-snug">
                        POLOMO Unshakable Presence Community
                      </strong>
                    </div>

                    {/* Registrant Meta Details */}
                    <div className="space-y-2.5 font-condensed text-xs sm:text-sm text-[#4F4F60] border-t border-b border-[#0B0B10]/10 py-3 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-[#6B7280]">Participant:</span>
                        <strong className="text-[#0B0B10] font-bold">{submittedData?.fullName}</strong>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#6B7280]">WhatsApp Number:</span>
                        <strong className="text-[#0B0B10] font-bold">{submittedData?.phone}</strong>
                      </div>
                      <div className="flex justify-between items-start gap-2">
                        <span className="text-[#6B7280] shrink-0">Focus Hurdle:</span>
                        <strong className="text-[#0B0B10] font-medium text-right text-xs truncate max-w-[65%]">
                          {submittedData?.challenge}
                        </strong>
                      </div>
                      <div className="flex justify-between items-center pt-0.5">
                        <span className="text-[#6B7280]">Sprint Start:</span>
                        <span className="inline-flex items-center gap-1.5 font-bold text-[#16AB59] bg-[#16AB59]/10 px-2 py-0.5 rounded-full text-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#16AB59] animate-ping" />
                          28 November 2026
                        </span>
                      </div>
                    </div>

                    {/* Pinned Resource Callout */}
                    <div className="bg-[#FFF9EA] border border-[#FFA300]/40 rounded-xl p-3 mb-4 text-xs font-condensed text-[#664600] leading-relaxed">
                      <span className="font-bold text-[#0B0B10] block mb-0.5">
                        📌 PINNED INSIDE THE COMMUNITY:
                      </span>
                      Your <em>Never-Blank Toolkit</em>, <em>Pre-Speech Calm Audio</em>, and <em>Daily Practice Prompts</em> are waiting inside.
                    </div>

                    {/* Primary CTA Button */}
                    <a
                      href={WHATSAPP_COMMUNITY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 sm:py-4 px-5 rounded-full bg-[#25D366] hover:bg-[#20BA5A] active:scale-[0.98] text-[#0B0B10] font-condensed uppercase tracking-wider font-extrabold text-sm sm:text-base shadow-superhi hover:shadow-superhi-lg transition-all flex items-center justify-center gap-2.5 border-2 border-[#0B0B10] cursor-pointer"
                    >
                      <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.182 8.182 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.08l-.29-.17-3.12.82.83-3.04-.19-.3a8.196 8.196 0 0 1-1.25-4.47c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3" />
                      </svg>
                      <span>Step Inside WhatsApp Community →</span>
                    </a>

                    <p className="mt-2 text-center font-condensed text-[11px] text-[#6B7280]">
                      Community managers are inside now to greet you and verify your pod seat.
                    </p>

                    <div className="mt-4 pt-3 border-t border-[#0B0B10]/10 text-center">
                      <button
                        type="button"
                        onClick={() => setIsSubmitted(false)}
                        className="font-condensed uppercase tracking-wider text-xs font-bold text-[#6B7280] hover:text-[#0B0B10] underline underline-offset-4 cursor-pointer"
                      >
                        Edit Your Information
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
