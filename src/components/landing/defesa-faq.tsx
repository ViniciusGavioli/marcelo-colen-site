"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface DefesaFAQProps {
  items: FAQItem[];
}

export function DefesaFAQ({ items }: DefesaFAQProps) {
  const [faqAberto, setFaqAberto] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div 
          key={index}
          className="border rounded-lg overflow-hidden transition-all"
          style={{ 
            borderColor: '#D9E0E8',
            backgroundColor: faqAberto === index ? '#F8F9FA' : '#FFFFFF'
          }}
        >
          <button
            onClick={() => setFaqAberto(faqAberto === index ? null : index)}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-base pr-4" style={{ color: '#0A192F' }}>
              {item.question}
            </span>
            <ChevronDown 
              className={`w-5 h-5 transition-transform flex-shrink-0 ${
                faqAberto === index ? "rotate-180" : ""
              }`} 
              style={{ color: '#5B6676' }}
            />
          </button>
          
          {faqAberto === index && (
            <div 
              className="px-5 pb-5 text-base leading-relaxed border-t"
              style={{ color: '#333333', borderColor: '#D9E0E8' }}
            >
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
