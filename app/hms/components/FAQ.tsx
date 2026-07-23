'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '@/constants';

interface FAQProps {
  content: {
    title: string;
    subtitle: string;
    items: FaqItem[];
  };
}

export const FAQ = ({ content }: FAQProps) => {
  // Q1 (индекс 0) открыт по умолчанию
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto border-t border-white/5">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          {content.title}
        </h2>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
          {content.subtitle}
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {content.items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={item.id || index}
              className="border border-white/10 rounded-2xl bg-white/[0.02] overflow-hidden transition-colors duration-200 hover:border-white/20"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="text-lg font-medium text-white pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-emerald-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100 pb-6 px-6' : 'grid-rows-[0fr] opacity-0 px-6'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base border-t border-white/5 pt-4">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
