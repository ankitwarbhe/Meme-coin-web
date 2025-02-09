'use client';

import Image from "next/image";
import { Sword, Shield, Zap, Globe2, ChevronRight } from 'lucide-react';

const heroes = [
  {
    name: 'Pepe AI',
    description: 'The Legendary Crypto Meme Legend',
    class: 'Warrior',
    image: 'https://images.unsplash.com/photo-1635870723802-e88d76ae324e?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Shiba AI',
    description: 'Much Intelligence, Very Wow',
    class: 'Mage',
    image: 'https://images.unsplash.com/photo-1638913662295-9630035ef770?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Doge AI',
    description: 'The Original Meme Hero',
    class: 'Tank',
    image: 'https://images.unsplash.com/photo-1638913662252-70efce1e60a7?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Trump AI',
    description: 'Making Crypto Great Again',
    class: 'Leader',
    image: 'https://images.unsplash.com/photo-1614729939124-032d1e6c9945?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Gigachad AI',
    description: 'The Perfect Specimen',
    class: 'Warrior',
    image: 'https://images.unsplash.com/photo-1624395213232-ea2bcd36b865?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'ORC AI',
    description: 'The Green Machine',
    class: 'Tank',
    image: 'https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Peticoin AI',
    description: 'Digital Asset Guardian',
    class: 'Support',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Penguin AI',
    description: 'Cool Under Pressure',
    class: 'Mage',
    image: 'https://images.unsplash.com/photo-1614729939150-0d34fd556a75?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Bonk AI',
    description: 'The New Kid on the Block',
    class: 'Assassin',
    image: 'https://images.unsplash.com/photo-1635870723802-e88d76ae324e?auto=format&fit=crop&q=80&w=800'
  }
];

const villains = [
  { name: 'Doge', role: 'Defender' },
  { name: 'Shiba', role: 'Attacker' },
  { name: 'Bonk', role: 'Support' },
  { name: 'SPX6900', role: 'Boss' },
];

export default function Home() {
  return (
    <div className="relative bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
        <Image
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2000"
            alt="Hero background"
            fill
            className="object-cover opacity-50"
          priority
        />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]" />
        </div>

        {/* Hero Content */}
        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-2 text-[46.8px] font-semibold leading-[46px] text-[#e5eeef]">
            THE MEME
          </h1>
          <h2 className="text-[47.8px] font-semibold leading-[48px] text-[#ecf3f4]">
            REVOLUTION IS HERE!
          </h2>
          <div className="mt-[21px] flex space-x-4">
            <button className="h-[46px] w-[133px] rounded-[4px] border border-[#9bc0a3] bg-[#35894e] text-[12.4px] font-semibold leading-[15px] text-[#b3ddbe] hover:bg-[#35894e]/90">
              Buy It Here
            </button>
            <button className="flex h-[45px] w-[135px] items-center justify-center rounded-[4px] border border-[#357a5e] bg-white text-[11px] font-semibold leading-[13.3px] text-[#3e3e3e] hover:bg-gray-50">
              DEX Tools
            </button>
          </div>
        </div>

        {/* Scrolling Banner */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-[#2CD591]/20 bg-[#0A0A0A]/80 py-2 backdrop-blur">
          <div className="animate-scroll-left flex whitespace-nowrap">
            {Array(9).fill('Heroes AI • ').map((text, i) => (
              <span key={i} className="mx-2 text-[12.2px] font-semibold leading-[14.8px] text-[#abd9ba]">{text}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1614729939150-0d34fd556a75?auto=format&fit=crop&q=80&w=2000"
            alt="Future vision background"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Text Content */}
            <div>
              <h2 className="mb-[13px] text-[32px] font-semibold leading-[38px] text-[#c7d1d5]">
                IN THE NEAR FUTURE
              </h2>
              <div className="mb-[25px]">
                <h3 className="text-[34px] font-semibold leading-[40px] text-[#cdd5d9]">
                  MEMES COME TO LIFE
                </h3>
                <h3 className="text-[34px] font-semibold leading-[40px] text-[#cdd5d9]">
                  AND GAIN POWERS!
                </h3>
              </div>
              <p className="mb-[29px] max-w-[488px] text-[16px] font-semibold leading-[24px] text-[#65696a]">
                In the crypto world, something incredible happened. Doge, Shiba, Pepe,
                Bonk, and other iconic memes have evolved. Thanks to an unexpected
                bug in the quantum blockchain, these coins gained consciousness and
                unique superpowers.
              </p>
              <button className="h-[46px] w-[133px] rounded-[3.75px] border border-[#90b89c] bg-[#34894d] text-[12.6px] font-semibold leading-[15.2px] text-[#afdabd] hover:bg-[#34894d]/90">
                Buy It Here
              </button>
            </div>

            {/* Image */}
            <div className="relative h-[500px] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2000"
                alt="Future vision feature"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Heroes Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-4xl font-bold text-white md:text-5xl">
            MEET THE AI HEROES
            <br />
            <span className="bg-gradient-to-r from-[#2CD591] to-[#2CD591]/70 bg-clip-text text-transparent">
              WHO ARE CHANGING EVERYTHING
            </span>
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {heroes.map((hero, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-[#2CD591]/20 bg-gray-900/50 p-6 backdrop-blur"
              >
                <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src={hero.image}
                    alt={hero.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
                </div>
                <div className="relative">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">{hero.name}</h3>
                    <span className="rounded-full bg-[#2CD591]/10 px-3 py-1 text-sm text-[#2CD591]">
                      {hero.class}
                    </span>
                  </div>
                  <p className="text-gray-400">{hero.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Battle Section */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1624395213232-ea2bcd36b865?auto=format&fit=crop&q=80&w=2000"
            alt="Battle background"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-4xl font-bold text-white md:text-5xl">
            THE GREAT CONFLICT
            <br />
            <span className="bg-gradient-to-r from-[#2CD591] to-[#2CD591]/70 bg-clip-text text-transparent">
              THE BATTLE AGAINST MEGACORP
            </span>
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            {villains.map((villain, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-[#2CD591]/20 bg-gray-900/50 p-6 backdrop-blur"
              >
                <h3 className="mb-2 text-xl font-bold text-white">
                  {villain.name}
                </h3>
                <p className="text-[#2CD591]">{villain.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-4xl font-bold text-white md:text-5xl">
            FREEDOM AND DECENTRALIZED
            <br />
            <span className="bg-gradient-to-r from-[#2CD591] to-[#2CD591]/70 bg-clip-text text-transparent">
              COMMUNITIES
            </span>
          </h2>
          <div className="relative h-[400px] overflow-hidden rounded-xl border border-[#2CD591]/20">
          <Image
              src="https://images.unsplash.com/photo-1634029859957-2c5730caa096?auto=format&fit=crop&q=80&w=2000"
              alt="World map"
              fill
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-8 px-8 text-center md:grid-cols-4">
                {[
                  { label: 'Active Communities', value: '100+' },
                  { label: 'Total Players', value: '50K+' },
                  { label: 'Countries', value: '150+' },
                  { label: 'Daily Battles', value: '1000+' },
                ].map((stat, index) => (
                  <div key={index}>
                    <p className="text-3xl font-bold text-[#2CD591]">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-16 text-center text-4xl font-bold text-white md:text-5xl">
            ROAD MAP
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 h-full w-px -translate-x-1/2 bg-[#2CD591]/20" />
            <div className="space-y-24">
              {[
                'Platform Launch',
                'NFT Integration',
                'Tournament System',
                'Mobile Release',
                'Global Expansion',
              ].map((stage, index) => (
                <div
                  key={stage}
                  className={`flex ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className="w-1/2 px-8">
                    <div className="relative rounded-xl border border-[#2CD591]/20 bg-gray-900/50 p-6 backdrop-blur">
                      <div className="absolute -left-11 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#0A0A0A] bg-[#2CD591]">
                        <span className="text-sm font-bold text-black">
                          {index + 1}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-[#2CD591]">
                        Stage {(index + 1).toString().padStart(2, '0')}
                      </h3>
                      <p className="text-gray-400">{stage}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
