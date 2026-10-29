import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, User, Mail, Phone, ArrowRight, AlertCircle } from 'lucide-react';
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
    challenge: 'Blanking out or losing my train of thought under pressure',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof RegistrationData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<RegistrationData | null>(null);

  const challengeOptions = [
    'Blanking out or losing my train of thought under pressure',
    'Racing heartbeat, trembling voice, or shortness of breath',
    'Avoiding speaking up in meetings even when I have answers',
    'Difficulty structuring impromptu answers when put on the spot',
    'Worrying obsessively about being judged by colleagues or superiors',
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
      newErrors.phone = 'Please provide a complete phone number';
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
        }),
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedData({ ...formData });
    } catch (err) {
      console.error('Google Sheets lead intake error:', err);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedData({ ...formData });
    }
  };

  return (
    <section id="register" className="py-10 sm:py-14 bg-[#FFFFFF] border-y border-[#0B0B10]/10 relative scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
          <div className="inline-block font-condensed text-xs uppercase tracking-widest text-[#F9000E] font-bold mb-2">
            SEAT RESERVATION
          </div>
          <h2
            className="font-display-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0B0B10] tracking-tight leading-tight mb-3 uppercase"
            style={{ textWrap: 'balance' }}
          >
            Your Next Speaking Opportunity Should Not Catch You Unprepared.
          </h2>
          <p className="font-condensed text-base sm:text-lg text-[#4F4F60] leading-relaxed">
            Start with seven days of structured practice, a supportive pod, and dedicated coaching. Experience the programme before making a decision about what comes next.
          </p>
        </div>

        {/* 4 Capacity Markers Strip in condensed uppercase */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 mb-6 sm:mb-8 font-condensed uppercase tracking-wider">
          <div className="bg-[#F6F7F9] border border-[#0B0B10]/10 rounded-xl p-2.5 sm:p-3 text-center">
            <span className="block text-[11px] text-[#4F4F60] mb-0.5">Duration</span>
            <span className="text-sm sm:text-base font-bold text-[#0B0B10]">7-Day Free Trial</span>
          </div>
          <div className="bg-[#F6F7F9] border border-[#0B0B10]/10 rounded-xl p-2.5 sm:p-3 text-center">
            <span className="block text-[11px] text-[#4F4F60] mb-0.5">Tuition</span>
            <span className="text-sm sm:text-base font-bold text-[#16AB59]">₦0 for Trial</span>
          </div>
          <div className="bg-[#F6F7F9] border border-[#0B0B10]/10 rounded-xl p-2.5 sm:p-3 text-center">
            <span className="block text-[11px] text-[#4F4F60] mb-0.5">Trial Capacity</span>
            <span className="text-sm sm:text-base font-bold text-[#0B0B10]">50 Total Seats</span>
          </div>
          <div className="bg-[#F6F7F9] border border-[#0B0B10]/10 rounded-xl p-2.5 sm:p-3 text-center">
            <span className="block text-[11px] text-[#4F4F60] mb-0.5">Coaching Setup</span>
            <span className="text-sm sm:text-base font-bold text-[#F9000E]">5 Pods (10 Each)</span>
          </div>
        </div>

        {/* Main Card Container */}
        <div className="bg-[#F6F7F9] border-2 border-[#0B0B10] rounded-2xl p-5 sm:p-7 md:p-8 shadow-superhi relative overflow-hidden">
          {/* Decorative Corner Shapes */}
          <div className="absolute top-4 right-4 pointer-events-none opacity-30 hidden sm:block">
            <AsteriskShape className="w-8 h-8" color="#FFA300" />
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} noValidate className="max-w-xl mx-auto space-y-4">
              <div className="text-center mb-5">
                <span className="inline-block font-condensed text-[11px] uppercase tracking-widest text-white bg-[#0B0B10] px-3 py-0.5 rounded-full font-bold mb-1.5 shadow-superhi-sm">
                  POLOMO TRIAL APPLICATION
                </span>
                <h3 className="font-display-serif text-xl sm:text-2xl font-semibold text-[#0B0B10] uppercase">
                  Claim Your Free Trial Seat
                </h3>
                <p className="font-condensed text-[11px] uppercase tracking-wide text-[#4F4F60] mt-0.5">
                  (Start your seven-day trial for ₦0. No credit card required.)
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
                  <p className="mt-1 text-xs text-[#F9000E] flex items-center gap-1 font-medium">
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
                  WhatsApp Phone Number *
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
                  Your coach will communicate daily drill prompts and live links via your dedicated pod channel.
                </p>
                {errors.phone && (
                  <p className="mt-1 font-condensed text-xs text-[#F9000E] flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>


              {/* Primary Challenge */}
              <div>
                <label htmlFor="reg-challenge" className="block font-condensed text-[11px] uppercase tracking-wider text-[#0B0B10] font-bold mb-1">
                  What is your primary speaking hurdle right now?
                </label>
                <select
                  id="reg-challenge"
                  value={formData.challenge}
                  onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                  className="w-full px-4 py-2.5 sm:py-3 bg-white border border-[#0B0B10]/20 focus:border-[#F9000E] rounded-xl font-condensed text-sm sm:text-base font-medium text-[#0B0B10] outline-none shadow-superhi-sm transition-all cursor-pointer"
                >
                  {challengeOptions.map((challenge, idx) => (
                    <option key={idx} value={challenge}>
                      {challenge}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 sm:py-3.5 px-6 rounded-full bg-[#F9000E] hover:bg-[#D6000C] active:scale-[0.98] disabled:opacity-60 text-white font-condensed uppercase tracking-wider font-bold text-sm sm:text-base shadow-superhi hover:shadow-superhi-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Reserving Your Pod Seat...</span>
                    </span>
                  ) : (
                    <>
                      <span>Reserve My Free Pod Seat</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Footer Trust Markers */}
              <div className="flex flex-wrap items-center justify-center gap-3 font-condensed uppercase tracking-wider text-[11px] text-[#4F4F60] pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#16AB59]" />
                  <span>No payment or card required</span>
                </span>
                <span aria-hidden="true">·</span>
                <span>Immediate confirmation</span>
                <span aria-hidden="true">·</span>
                <span>Strict 10-person pod cap</span>
              </div>
            </form>
          ) : (
            /* Confirmation State with POLOMO Digital Admission Ticket */
            <div className="max-w-xl mx-auto py-2 text-center">
              <div className="w-12 h-12 rounded-full bg-[#F9000E] text-white flex items-center justify-center mx-auto mb-4 shadow-superhi">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <span className="font-condensed text-[11px] uppercase tracking-widest text-[#F9000E] font-bold bg-[#FFF1F2] px-3 py-0.5 rounded-full border border-[#F9000E]/20">
                POLOMO COHORT ADMISSION CONFIRMED
              </span>

              <h3 className="font-display-serif text-2xl sm:text-3xl font-semibold text-[#0B0B10] mt-2 mb-2 uppercase">
                Welcome to the Pod, {submittedData?.fullName}!
              </h3>

              <p className="font-condensed text-sm sm:text-base text-[#4F4F60] mb-6 max-w-lg mx-auto">
                Your free seat has been officially allocated for the upcoming 7-Day Sprint. We have sent your onboarding details to <strong className="text-[#0B0B10]">{submittedData?.email}</strong>.
              </p>

              {/* POLOMO Admission Ticket Card */}
              <div className="bg-white border-2 border-[#0B0B10] rounded-xl p-4 sm:p-6 text-left shadow-superhi mb-6 relative">
                <div className="flex items-center justify-between border-b border-[#0B0B10]/10 pb-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="/assets/black_transparent%20logo-1.png"
                      alt="POLOMO - Unshakable Presence Logo"
                      width="1537"
                      height="1023"
                      style={{ aspectRatio: '1537 / 1023' }}
                      className="h-7 sm:h-8 w-auto object-contain"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <span className="font-condensed text-[10px] uppercase tracking-wider text-[#4F4F60] block">Assigned Cohort Pod</span>
                      <strong className="font-display-serif text-sm sm:text-base text-[#F9000E] font-semibold uppercase">
                        50-Seat Cohort · 10-Person Pod
                      </strong>
                    </div>
                  </div>
                  <span className="font-condensed text-[11px] font-bold bg-[#FFA300] text-[#0B0B10] px-2.5 py-0.5 rounded-full border border-[#0B0B10]/20 uppercase tracking-wider">
                    ₦0 TRIAL SEAT
                  </span>
                </div>

                <div className="space-y-2 font-condensed text-sm sm:text-base text-[#4F4F60]">
                  <div className="flex justify-between">
                    <span>Participant:</span>
                    <strong className="text-[#0B0B10]">{submittedData?.fullName}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>WhatsApp:</span>
                    <strong className="text-[#0B0B10]">{submittedData?.phone}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Capacity Allocated:</span>
                    <strong className="text-[#0B0B10]">1 of 10 seats in pod</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>What to Expect Next:</span>
                    <strong className="text-[#0B0B10]">Pod invite link delivered 24h before Day 1</strong>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#0B0B10]/10 bg-[#FFF5F5] -mx-4 -mb-4 p-3 rounded-b-lg text-center font-condensed uppercase tracking-wider text-[11px] text-[#0B0B10] font-semibold">
                  Bonus materials (Panic Killer Protocol & 5-Minute Habit Blueprint) will be unlocked inside your POLOMO pod space.
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2.5 font-condensed uppercase tracking-wider text-xs font-bold text-[#0B0B10] bg-white border border-[#0B0B10]/20 rounded-full shadow-superhi-sm hover:shadow-superhi transition-all cursor-pointer"
                >
                  Edit Registration Details
                </button>
                <a
                  href="#how-it-works"
                  className="px-5 py-2.5 font-condensed uppercase tracking-wider text-xs font-bold text-white bg-[#F9000E] hover:bg-[#D6000C] rounded-full shadow-superhi-sm hover:shadow-superhi transition-all"
                >
                  Review Trial Schedule
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
