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
      question: 'Is the seven-day trial really free?',
      answer:
        'Yes. Registration for the seven-day trial is ₦0. You are not required to enter a credit card or commit to any mandatory payments to claim your seat and participate in your coaching pod.',
    },
    {
      question: 'What if I am terrified of speaking in public?',
      answer:
        'That is exactly who this programme is designed for. You will not be pushed onto a stage on day one. You will begin with short, private 60–90-second speaking micro-reps, work in a supportive 10-person pod of peers dealing with similar anxiety, and receive direct, constructive guidance from your dedicated coach.',
    },
    {
      question: 'How much time will I need each day?',
      answer:
        'The core daily exercises take approximately 60–90 seconds to complete. During the week, you will also take part in two live pod practice drills with your coach and peers, followed by the live 50-person speaking arena at the end of Day 7.',
    },
    {
      question: 'What happens during the seven days?',
      answer:
        'Throughout the seven days, you complete daily speaking micro-reps designed to build repetition without overwhelm. You participate in two live pod practice drills to test your progress in a small group setting, receive direct feedback from your pod coach, and culminate in the weekend speaking arena.',
    },
    {
      question: 'How many people can join?',
      answer:
        'The cohort is capped at 50 participants total, strictly distributed across five coaching pods of 10 participants each. Capping pod sizes ensures that every participant receives real speaking turns and individual coach attention.',
    },
    {
      question: 'What happens after the free trial?',
      answer:
        'The seven-day trial is an opportunity to experience the POLOMO methodology, pod dynamics, and coach feedback firsthand with zero obligation. Details regarding continuation in the broader 30-Day Sprint will be shared with cohort participants near the completion of the trial period.',
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
            Clear, straightforward answers about the 7-day trial, pod structure, and participation.
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
