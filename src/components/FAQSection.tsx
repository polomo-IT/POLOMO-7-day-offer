import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'What if I am too shy to speak?',
      answer:
        'Then this is built for you. Your first seat can be an observing seat, and you join in when you are ready. Nobody is ever forced to speak before they are ready.',
    },
    {
      question: 'What if I do not want to be on camera?',
      answer:
        'There is an audio-only option. You can participate fully with microphone only whenever your network is limited or you prefer not to use video.',
    },
    {
      question: 'How much time do I need?',
      answer:
        'A daily rep of about 5–10 minutes, two 30-minute pod sessions, and the weekend session each week.',
    },
    {
      question: 'What if I miss a session?',
      answer:
        'The 24-hour catch-up pack helps you catch up so you never lose momentum or fall behind your pod.',
    },
    {
      question: 'What if I do not improve?',
      answer:
        'Under our Speaking Confidence Progress Guarantee, eligible members who take part and need more time can receive up to two additional weeks of guided support at no extra cost.',
    },
    {
      question: 'Why pay when free videos exist?',
      answer:
        'Free videos cannot sit in a room with you while you try it. You get live practice, a pod, a facilitator, a progress log, five bonuses and three months of alumni access.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-10 sm:py-14 bg-[#F6F7F9] relative scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-block font-condensed text-xs uppercase tracking-widest text-[#F9000E] font-bold mb-2">
            QUESTIONS & ANSWERS
          </div>
          <h2
            className="font-display-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0B0B10] tracking-tight leading-tight mb-3 uppercase"
            style={{ textWrap: 'balance' }}
          >
            Frequently Asked Questions
          </h2>
          <p className="font-condensed text-base sm:text-lg text-[#4F4F60]">
            Clear, straightforward answers about the 30-day sprint, pod structure, and participation.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#FFFFFF] border border-[#0B0B10]/15 rounded-xl overflow-hidden shadow-superhi-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  className="w-full py-3.5 px-4 sm:px-6 text-left flex items-center justify-between gap-3 cursor-pointer hover:bg-[#F8FAFC] transition-colors"
                >
                  <span className="font-display-serif text-base sm:text-lg font-semibold text-[#0B0B10] uppercase">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full border border-[#0B0B10]/15 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#0B0B10] text-white' : 'bg-[#F6F7F9] text-[#0B0B10]'
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-6 sm:pb-5 pt-1 font-condensed text-sm sm:text-base text-[#4F4F60] leading-relaxed border-t border-[#0B0B10]/10 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
