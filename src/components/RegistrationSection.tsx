import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, User, Mail, Phone, ArrowRight, AlertCircle } from 'lucide-react';
import { AsteriskShape } from './GeometricShapes';

interface RegistrationData {
  fullName: string;
  email: string;
  phone: string;
  podPreference: string;
  challenge: string;
}

export const RegistrationSection: React.FC = () => {
  const [formData, setFormData] = useState<RegistrationData>({
    fullName: '',
    email: '',
    phone: '',
    podPreference: 'Pod 1: Workplace & Department Meetings',
    challenge: 'Blanking out or losing my train of thought under pressure',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof RegistrationData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<RegistrationData | null>(null);

  const podOptions = [
    { id: 'pod-1', name: 'Pod 1: Workplace & Department Meetings', seats: '10 seats' },
    { id: 'pod-2', name: 'Pod 2: High-Stakes Client Pitches & Deals', seats: '10 seats' },
    { id: 'pod-3', name: 'Pod 3: Executive Presence & Leadership', seats: '10 seats' },
    { id: 'pod-4', name: 'Pod 4: Career Conversations & Interviews', seats: '10 seats' },
    { id: 'pod-5', name: 'Pod 5: Impromptu Speaking & Everyday Poise', seats: '10 seats' },
  ];

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedData({ ...formData });
    }, 600);
  };

  return (
    <section id="register" className="py-20 sm:py-28 bg-[#FFFFFF] border-y border-[#0B0B10]/10 relative scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block font-condensed text-xs uppercase tracking-widest text-[#F9000E] font-bold mb-3">
            SEAT RESERVATION
          </div>
          <h2
            className="font-display-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0B0B10] tracking-tight leading-tight mb-5 uppercase"
            style={{ textWrap: 'balance' }}
          >
            Your Next Speaking Opportunity Should Not Catch You Unprepared.
          </h2>
          <p className="text-base sm:text-lg text-[#4F4F60] leading-relaxed">
            Start with seven days of structured practice, a supportive pod, and dedicated coaching. Experience the programme before making a decision about what comes next.
          </p>
        </div>

        {/* 4 Capacity Markers Strip in condensed uppercase */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 font-condensed uppercase tracking-wider">
          <div className="bg-[#F6F7F9] border border-[#0B0B10]/10 rounded-2xl p-4 text-center">
            <span className="block text-xs text-[#4F4F60] mb-1">Duration</span>
            <span className="text-base sm:text-lg font-bold text-[#0B0B10]">7-Day Free Trial</span>
          </div>
          <div className="bg-[#F6F7F9] border border-[#0B0B10]/10 rounded-2xl p-4 text-center">
            <span className="block text-xs text-[#4F4F60] mb-1">Tuition</span>
            <span className="text-base sm:text-lg font-bold text-[#16AB59]">₦0 for Trial</span>
          </div>
          <div className="bg-[#F6F7F9] border border-[#0B0B10]/10 rounded-2xl p-4 text-center">
            <span className="block text-xs text-[#4F4F60] mb-1">Trial Capacity</span>
            <span className="text-base sm:text-lg font-bold text-[#0B0B10]">50 Total Seats</span>
          </div>
          <div className="bg-[#F6F7F9] border border-[#0B0B10]/10 rounded-2xl p-4 text-center">
            <span className="block text-xs text-[#4F4F60] mb-1">Coaching Setup</span>
            <span className="text-base sm:text-lg font-bold text-[#F9000E]">5 Pods (10 Each)</span>
          </div>
        </div>

        {/* Main Card Container */}
        <div className="bg-[#F6F7F9] border-2 border-[#0B0B10] rounded-3xl p-6 sm:p-10 md:p-12 shadow-superhi-lg relative overflow-hidden">
          {/* Decorative Corner Shapes */}
          <div className="absolute top-4 right-4 pointer-events-none opacity-30 hidden sm:block">
            <AsteriskShape className="w-10 h-10" color="#FFA300" />
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} noValidate className="max-w-2xl mx-auto space-y-6">
              <div className="text-center mb-8">
                <span className="inline-block font-condensed text-xs uppercase tracking-widest text-white bg-[#0B0B10] px-3.5 py-1 rounded-full font-bold mb-2 shadow-superhi-sm">
                  POLOMO TRIAL APPLICATION
                </span>
                <h3 className="font-display-serif text-2xl sm:text-3xl font-semibold text-[#0B0B10] uppercase">
                  Claim Your Free Trial Seat
                </h3>
                <p className="font-condensed text-xs uppercase tracking-wide text-[#4F4F60] mt-1">
                  (Start your seven-day trial for ₦0. No credit card required.)
                </p>
              </div>

              {/* Full Name */}
              <div>
                <label htmlFor="reg-name" className="block font-condensed text-xs uppercase tracking-wider text-[#0B0B10] font-bold mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-5 h-5 text-[#4F4F60] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="reg-name"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ngozi Adeyemi"
                    className={`w-full pl-12 pr-4 py-3.5 bg-white border ${
                      errors.fullName ? 'border-[#F9000E] ring-2 ring-[#F9000E]/20' : 'border-[#0B0B10]/20 focus:border-[#F9000E]'
                    } rounded-full text-sm font-medium text-[#0B0B10] outline-none shadow-superhi-sm transition-all`}
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1.5 text-xs text-[#F9000E] flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="reg-email" className="block font-condensed text-xs uppercase tracking-wider text-[#0B0B10] font-bold mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-5 h-5 text-[#4F4F60] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="reg-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. ngozi@example.com"
                    className={`w-full pl-12 pr-4 py-3.5 bg-white border ${
                      errors.email ? 'border-[#F9000E] ring-2 ring-[#F9000E]/20' : 'border-[#0B0B10]/20 focus:border-[#F9000E]'
                    } rounded-full text-sm font-medium text-[#0B0B10] outline-none shadow-superhi-sm transition-all`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1.5 text-xs text-[#F9000E] flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* WhatsApp Phone */}
              <div>
                <label htmlFor="reg-phone" className="block font-condensed text-xs uppercase tracking-wider text-[#0B0B10] font-bold mb-2">
                  WhatsApp Phone Number *
                </label>
                <div className="relative">
                  <Phone className="w-5 h-5 text-[#4F4F60] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="reg-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+234 803 123 4567"
                    className={`w-full pl-12 pr-4 py-3.5 bg-white border ${
                      errors.phone ? 'border-[#F9000E] ring-2 ring-[#F9000E]/20' : 'border-[#0B0B10]/20 focus:border-[#F9000E]'
                    } rounded-full text-sm font-medium text-[#0B0B10] outline-none shadow-superhi-sm transition-all`}
                  />
                </div>
                <p className="mt-1 text-[11px] text-[#4F4F60]">
                  Your coach will communicate daily drill prompts and live links via your dedicated pod channel.
                </p>
                {errors.phone && (
                  <p className="mt-1 text-xs text-[#F9000E] flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Pod Preference */}
              <div>
                <label htmlFor="reg-pod" className="block font-condensed text-xs uppercase tracking-wider text-[#0B0B10] font-bold mb-2">
                  Select Your Preferred Pod Track (5 Pods Available)
                </label>
                <select
                  id="reg-pod"
                  value={formData.podPreference}
                  onChange={(e) => setFormData({ ...formData, podPreference: e.target.value })}
                  className="w-full px-5 py-3.5 bg-white border border-[#0B0B10]/20 focus:border-[#F9000E] rounded-2xl text-sm font-medium text-[#0B0B10] outline-none shadow-superhi-sm transition-all cursor-pointer"
                >
                  {podOptions.map((pod) => (
                    <option key={pod.id} value={pod.name}>
                      {pod.name} — {pod.seats}
                    </option>
                  ))}
                </select>
              </div>

              {/* Primary Challenge */}
              <div>
                <label htmlFor="reg-challenge" className="block font-condensed text-xs uppercase tracking-wider text-[#0B0B10] font-bold mb-2">
                  What is your primary speaking hurdle right now?
                </label>
                <select
                  id="reg-challenge"
                  value={formData.challenge}
                  onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                  className="w-full px-5 py-3.5 bg-white border border-[#0B0B10]/20 focus:border-[#F9000E] rounded-2xl text-sm font-medium text-[#0B0B10] outline-none shadow-superhi-sm transition-all cursor-pointer"
                >
                  {challengeOptions.map((challenge, idx) => (
                    <option key={idx} value={challenge}>
                      {challenge}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-full bg-[#F9000E] hover:bg-[#D6000C] active:scale-[0.98] disabled:opacity-60 text-white font-condensed uppercase tracking-wider font-bold text-base sm:text-lg shadow-superhi hover:shadow-superhi-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Reserving Your Pod Seat...</span>
                    </span>
                  ) : (
                    <>
                      <span>Reserve My Free Pod Seat</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>

              {/* Footer Trust Markers */}
              <div className="flex flex-wrap items-center justify-center gap-4 font-condensed uppercase tracking-wider text-xs text-[#4F4F60] pt-2">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#16AB59]" />
                  <span>No payment or card required</span>
                </span>
                <span aria-hidden="true">·</span>
                <span>Immediate admission confirmation</span>
                <span aria-hidden="true">·</span>
                <span>Strict 10-person pod cap</span>
              </div>
            </form>
          ) : (
            /* Confirmation State with POLOMO Digital Admission Ticket */
            <div className="max-w-2xl mx-auto py-4 text-center">
              <div className="w-16 h-16 rounded-full bg-[#F9000E] text-white flex items-center justify-center mx-auto mb-6 shadow-superhi">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <span className="font-condensed text-xs uppercase tracking-widest text-[#F9000E] font-bold bg-[#FFF1F2] px-3.5 py-1 rounded-full border border-[#F9000E]/20">
                POLOMO COHORT ADMISSION CONFIRMED
              </span>

              <h3 className="font-display-serif text-3xl sm:text-4xl font-semibold text-[#0B0B10] mt-3 mb-3 uppercase">
                Welcome to the Pod, {submittedData?.fullName}!
              </h3>

              <p className="text-base text-[#4F4F60] mb-8 max-w-xl mx-auto">
                Your free seat has been officially allocated for the upcoming 7-Day Sprint. We have sent your onboarding details to <strong className="text-[#0B0B10]">{submittedData?.email}</strong>.
              </p>

              {/* POLOMO Admission Ticket Card */}
              <div className="bg-white border-2 border-[#0B0B10] rounded-2xl p-6 sm:p-8 text-left shadow-superhi mb-8 relative">
                <div className="flex items-center justify-between border-b border-[#0B0B10]/10 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="/assets/black_transparent%20logo-1.png"
                      alt="POLOMO - Unshakable Presence Logo"
                      width="1537"
                      height="1023"
                      style={{ aspectRatio: '1537 / 1023' }}
                      className="h-8 sm:h-9 w-auto object-contain"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <span className="font-condensed text-xs uppercase tracking-wider text-[#4F4F60] block">Assigned Pod Track</span>
                      <strong className="font-display-serif text-base sm:text-lg text-[#F9000E] font-semibold uppercase">
                        {submittedData?.podPreference}
                      </strong>
                    </div>
                  </div>
                  <span className="font-condensed text-xs font-bold bg-[#FFA300] text-[#0B0B10] px-3 py-1 rounded-full border border-[#0B0B10]/20 uppercase tracking-wider">
                    ₦0 TRIAL SEAT
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-[#4F4F60]">
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

                <div className="mt-6 pt-4 border-t border-[#0B0B10]/10 bg-[#FFF5F5] -mx-6 -mb-6 p-4 rounded-b-xl text-center font-condensed uppercase tracking-wider text-xs text-[#0B0B10] font-semibold">
                  Bonus materials (Panic Killer Protocol & 5-Minute Habit Blueprint) will be unlocked inside your POLOMO pod space.
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 font-condensed uppercase tracking-wider text-xs sm:text-sm font-bold text-[#0B0B10] bg-white border border-[#0B0B10]/20 rounded-full shadow-superhi-sm hover:shadow-superhi transition-all cursor-pointer"
                >
                  Edit Registration Details
                </button>
                <a
                  href="#how-it-works"
                  className="px-6 py-3 font-condensed uppercase tracking-wider text-xs sm:text-sm font-bold text-white bg-[#F9000E] hover:bg-[#D6000C] rounded-full shadow-superhi-sm hover:shadow-superhi transition-all"
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
