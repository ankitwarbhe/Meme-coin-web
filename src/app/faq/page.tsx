'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Search, MessageCircle } from 'lucide-react';
import ContentLayout from '@/components/layout/ContentLayout';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const categories = [
  { title: 'Getting Started', href: '#getting-started' },
  { title: 'Gameplay', href: '#gameplay' },
  { title: 'NFTs & Blockchain', href: '#nfts' },
  { title: 'Account & Security', href: '#account' },
  { title: 'Technical Support', href: '#support' },
];

const faqs: FAQ[] = [
  {
    id: 1,
    question: 'How do I start playing AI Heroes?',
    answer:
      'To start playing AI Heroes, simply create an account, connect your wallet, and choose your first hero. Our tutorial will guide you through the basics of gameplay.',
    category: 'getting-started',
  },
  {
    id: 2,
    question: 'What are the system requirements?',
    answer:
      'AI Heroes is a web-based game that runs in modern browsers. We recommend using Chrome, Firefox, or Edge with at least 8GB of RAM for the best experience.',
    category: 'getting-started',
  },
  {
    id: 3,
    question: 'How does the combat system work?',
    answer:
      'The combat system is turn-based with strategic elements. Each hero has unique abilities and can be enhanced with equipment and skills. Battles are influenced by both player strategy and AI behavior.',
    category: 'gameplay',
  },
  {
    id: 4,
    question: 'Can I trade my heroes with other players?',
    answer:
      'Yes! Heroes are NFTs that can be traded on our marketplace or any compatible NFT marketplace. Each hero is unique and has its own attributes and history.',
    category: 'nfts',
  },
  {
    id: 5,
    question: 'How do I secure my account?',
    answer:
      'We recommend enabling two-factor authentication and using a strong password. Additionally, keep your wallet private keys secure and never share them with anyone.',
    category: 'account',
  },
  {
    id: 6,
    question: 'What should I do if I encounter a bug?',
    answer:
      'If you encounter a bug, please report it through our support system with as much detail as possible. Include screenshots and steps to reproduce the issue if applicable.',
    category: 'support',
  },
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ContentLayout title="FAQ" navigation={categories}>
      {/* Search */}
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-gray-800 bg-gray-900 py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:border-[#2CD591] focus:outline-none focus:ring-1 focus:ring-[#2CD591]"
          />
        </div>
      </div>

      {/* FAQ Sections */}
      <div className="space-y-8">
        {categories.map((category) => (
          <section
            key={category.href}
            id={category.href.replace('#', '')}
            className="scroll-mt-20"
          >
            <h2 className="mb-4 text-2xl font-bold text-white">
              {category.title}
            </h2>
            <div className="space-y-4">
              {filteredFAQs
                .filter(
                  (faq) =>
                    faq.category === category.href.replace('#', '')
                )
                .map((faq) => (
                  <div
                    key={faq.id}
                    className="overflow-hidden rounded-lg border border-gray-800 bg-gray-900/50"
                  >
                    <button
                      onClick={() =>
                        setExpandedId(expandedId === faq.id ? null : faq.id)
                      }
                      className="flex w-full items-center justify-between p-4 text-left"
                    >
                      <span className="text-lg font-medium text-white">
                        {faq.question}
                      </span>
                      {expandedId === faq.id ? (
                        <ChevronUp className="h-5 w-5 text-[#2CD591]" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                    {expandedId === faq.id && (
                      <div className="border-t border-gray-800 bg-gray-900/30 p-4 text-gray-400">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </section>
        ))}
      </div>

      {/* Contact Support */}
      <div className="mt-12 rounded-xl border border-gray-800 bg-gray-900/50 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-white">Need more help?</h3>
            <p className="mt-1 text-gray-400">
              Our support team is here to assist you.
            </p>
          </div>
          <a
            href="/support"
            className="flex items-center rounded-lg bg-[#2CD591] px-6 py-3 text-sm font-medium text-black hover:bg-[#2CD591]/90"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Contact Support
          </a>
        </div>
      </div>
    </ContentLayout>
  );
} 