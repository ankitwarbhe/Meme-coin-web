'use client';

import { useState } from 'react';
import { Check, Calendar, Star, Trophy, Users } from 'lucide-react';
import ContentLayout from '@/components/layout/ContentLayout';

const navigation = [
  { title: 'Overview', href: '#overview' },
  { title: 'Benefits', href: '#benefits' },
  { title: 'Pricing', href: '#pricing' },
  { title: 'Schedule', href: '#schedule' },
  { title: 'Registration', href: '#registration' },
];

const benefits = [
  {
    title: 'Exclusive Access',
    description: 'Get early access to new features and heroes.',
    icon: Star,
  },
  {
    title: 'Tournament Entry',
    description: 'Participate in exclusive tournaments with prizes.',
    icon: Trophy,
  },
  {
    title: 'Community Events',
    description: 'Join special events and meet other players.',
    icon: Users,
  },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '49',
    description: 'Perfect for new players',
    features: [
      'Basic hero collection',
      'Standard matchmaking',
      'Community access',
      'Basic support',
    ],
  },
  {
    name: 'Pro',
    price: '99',
    description: 'For serious gamers',
    features: [
      'Advanced hero collection',
      'Priority matchmaking',
      'Tournament access',
      'Premium support',
      'Exclusive events',
    ],
  },
  {
    name: 'Elite',
    price: '199',
    description: 'Ultimate gaming experience',
    features: [
      'Complete hero collection',
      'Instant matchmaking',
      'Private tournaments',
      '24/7 VIP support',
      'All exclusive content',
      'Custom hero skins',
    ],
  },
];

const schedule = [
  {
    time: '10:00 AM',
    event: 'Daily Challenges',
    description: 'Complete daily missions for rewards.',
  },
  {
    time: '2:00 PM',
    event: 'Training Sessions',
    description: 'Learn advanced strategies from pro players.',
  },
  {
    time: '6:00 PM',
    event: 'Tournament Matches',
    description: 'Compete in ranked tournaments.',
  },
  {
    time: '9:00 PM',
    event: 'Community Events',
    description: 'Special events and community gatherings.',
  },
];

export default function ProgramPage() {
  const [selectedPlan, setSelectedPlan] = useState('Pro');

  return (
    <ContentLayout title="Program Details" navigation={navigation}>
      {/* Overview Section */}
      <section id="overview" className="mb-24">
        <h2 className="mb-6 text-3xl font-bold text-white">Program Overview</h2>
        <p className="text-xl text-gray-400">
          Join our comprehensive gaming program designed to enhance your AI Heroes
          experience. Get access to exclusive content, tournaments, and a vibrant
          community of players.
        </p>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="mb-24">
        <h2 className="mb-8 text-3xl font-bold text-white">Program Benefits</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-xl border border-gray-800 bg-gray-900/50 p-6"
            >
              <benefit.icon className="mb-4 h-8 w-8 text-[#2CD591]" />
              <h3 className="mb-2 text-xl font-bold text-white">
                {benefit.title}
              </h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="mb-24">
        <h2 className="mb-8 text-3xl font-bold text-white">Pricing Plans</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border ${
                selectedPlan === plan.name
                  ? 'border-[#2CD591]'
                  : 'border-gray-800'
              } bg-gray-900/50 p-6`}
            >
              <h3 className="mb-2 text-2xl font-bold text-white">{plan.name}</h3>
              <p className="mb-4 text-gray-400">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[#2CD591]">
                  ${plan.price}
                </span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="mb-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-400">
                    <Check className="mr-2 h-5 w-5 text-[#2CD591]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setSelectedPlan(plan.name)}
                className={`w-full rounded-lg ${
                  selectedPlan === plan.name
                    ? 'bg-[#2CD591] text-black'
                    : 'border border-[#2CD591] text-[#2CD591] hover:bg-[#2CD591]/10'
                } px-6 py-3 text-sm font-medium`}
              >
                {selectedPlan === plan.name ? 'Selected' : 'Select Plan'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="mb-24">
        <h2 className="mb-8 text-3xl font-bold text-white">Daily Schedule</h2>
        <div className="space-y-6">
          {schedule.map((item) => (
            <div
              key={item.time}
              className="flex items-start rounded-xl border border-gray-800 bg-gray-900/50 p-6"
            >
              <Calendar className="mr-4 h-6 w-6 text-[#2CD591]" />
              <div>
                <div className="mb-1 flex items-center">
                  <h3 className="mr-4 text-lg font-bold text-white">
                    {item.event}
                  </h3>
                  <span className="text-sm text-[#2CD591]">{item.time}</span>
                </div>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Registration Form */}
      <section id="registration" className="mb-24">
        <h2 className="mb-8 text-3xl font-bold text-white">Registration</h2>
        <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-8">
          <form className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="mb-2 block text-sm text-white">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full rounded-lg border border-gray-800 bg-gray-900 px-4 py-2 text-white placeholder-gray-400 focus:border-[#2CD591] focus:outline-none focus:ring-1 focus:ring-[#2CD591]"
                placeholder="John"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="mb-2 block text-sm text-white">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full rounded-lg border border-gray-800 bg-gray-900 px-4 py-2 text-white placeholder-gray-400 focus:border-[#2CD591] focus:outline-none focus:ring-1 focus:ring-[#2CD591]"
                placeholder="Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-lg border border-gray-800 bg-gray-900 px-4 py-2 text-white placeholder-gray-400 focus:border-[#2CD591] focus:outline-none focus:ring-1 focus:ring-[#2CD591]"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="username" className="mb-2 block text-sm text-white">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full rounded-lg border border-gray-800 bg-gray-900 px-4 py-2 text-white placeholder-gray-400 focus:border-[#2CD591] focus:outline-none focus:ring-1 focus:ring-[#2CD591]"
                placeholder="johndoe"
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="walletAddress"
                className="mb-2 block text-sm text-white"
              >
                Wallet Address
              </label>
              <input
                type="text"
                id="walletAddress"
                className="w-full rounded-lg border border-gray-800 bg-gray-900 px-4 py-2 text-white placeholder-gray-400 focus:border-[#2CD591] focus:outline-none focus:ring-1 focus:ring-[#2CD591]"
                placeholder="0x..."
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full rounded-lg bg-[#2CD591] px-8 py-3 text-sm font-medium text-black hover:bg-[#2CD591]/90"
              >
                Register Now
              </button>
            </div>
          </form>
        </div>
      </section>
    </ContentLayout>
  );
} 