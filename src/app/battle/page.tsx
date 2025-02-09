'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Swords,
  Trophy,
  Crown,
  Target,
  Shield,
  ArrowRight,
} from 'lucide-react';
import ContentLayout from '@/components/layout/ContentLayout';

interface GameMode {
  id: string;
  title: string;
  description: string;
  image: string;
  players: string;
  rewards: string;
  icon: any;
}

const navigation = [
  { title: 'Game Modes', href: '#modes' },
  { title: 'Rankings', href: '#rankings' },
  { title: 'Rewards', href: '#rewards' },
];

const gameModes: GameMode[] = [
  {
    id: 'ranked',
    title: 'Ranked Battle',
    description: 'Compete in ranked matches to climb the leaderboard and earn rewards.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80',
    players: '1v1',
    rewards: 'Ranking Points + Tokens',
    icon: Trophy,
  },
  {
    id: 'tournament',
    title: 'Tournament',
    description: 'Join tournaments with entry fees and compete for prize pools.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80',
    players: '8-32 Players',
    rewards: 'Prize Pool + Tokens',
    icon: Crown,
  },
  {
    id: 'practice',
    title: 'Practice Mode',
    description: 'Train your skills against AI opponents or friends.',
    image: 'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?auto=format&fit=crop&q=80',
    players: '1v1',
    rewards: 'Experience Points',
    icon: Target,
  },
];

const topPlayers = [
  {
    rank: 1,
    name: 'DragonSlayer',
    points: 2500,
    winRate: 75,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80',
  },
  {
    rank: 2,
    name: 'ShadowMaster',
    points: 2350,
    winRate: 71,
    avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80',
  },
  {
    rank: 3,
    name: 'LegendKiller',
    points: 2200,
    winRate: 68,
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80',
  },
];

const rewards = [
  {
    title: 'Season Pass',
    description: 'Unlock exclusive rewards and bonuses',
    price: '1000 TOKENS',
    features: [
      'Exclusive Hero Skins',
      'Bonus Experience Points',
      'Special Titles',
      'Premium Rewards',
    ],
  },
  {
    title: 'Tournament Entry',
    description: 'Participate in weekly tournaments',
    price: '500 TOKENS',
    features: [
      'Prize Pool Access',
      'Tournament Badge',
      'Live Streaming',
      'Match Statistics',
    ],
  },
];

export default function BattlePage() {
  const [selectedMode, setSelectedMode] = useState<string | null>(null);

  return (
    <ContentLayout title="Battle Arena" navigation={navigation}>
      {/* Game Modes Section */}
      <section id="modes" className="mb-16">
        <h2 className="mb-8 text-2xl font-bold text-white">Game Modes</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gameModes.map((mode) => (
            <div
              key={mode.id}
              className="group overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50"
            >
              <div className="relative h-48">
                <Image
                  src={mode.image}
                  alt={mode.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <div className="mb-2 flex items-center">
                    <mode.icon className="mr-2 h-5 w-5 text-[#2CD591]" />
                    <h3 className="text-xl font-bold text-white">{mode.title}</h3>
                  </div>
                  <p className="text-sm text-[#2CD591]">{mode.players}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4 text-gray-400">{mode.description}</p>
                <div className="mb-4 flex items-center text-sm text-gray-400">
                  <Trophy className="mr-2 h-4 w-4 text-yellow-500" />
                  <span>Rewards: {mode.rewards}</span>
                </div>
                <button
                  onClick={() => setSelectedMode(mode.id)}
                  className="flex w-full items-center justify-center rounded-lg bg-[#2CD591] px-4 py-2 font-medium text-black hover:bg-[#2CD591]/90"
                >
                  Play Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rankings Section */}
      <section id="rankings" className="mb-16">
        <h2 className="mb-8 text-2xl font-bold text-white">Top Players</h2>
        <div className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50">
          <div className="p-6">
            <div className="space-y-4">
              {topPlayers.map((player) => (
                <div
                  key={player.rank}
                  className="flex items-center rounded-lg border border-gray-800 bg-gray-900/50 p-4"
                >
                  <div
                    className={`mr-4 flex h-8 w-8 items-center justify-center rounded-full ${
                      player.rank === 1
                        ? 'bg-yellow-500/20 text-yellow-500'
                        : player.rank === 2
                        ? 'bg-gray-400/20 text-gray-400'
                        : 'bg-orange-500/20 text-orange-500'
                    }`}
                  >
                    {player.rank}
                  </div>
                  <Image
                    src={player.avatar}
                    alt={player.name}
                    width={40}
                    height={40}
                    className="mr-4 rounded-full"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-white">{player.name}</p>
                    <p className="text-sm text-gray-400">
                      {player.points} Points • {player.winRate}% Win Rate
                    </p>
                  </div>
                  <Crown
                    className={`h-6 w-6 ${
                      player.rank === 1
                        ? 'text-yellow-500'
                        : player.rank === 2
                        ? 'text-gray-400'
                        : 'text-orange-500'
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section id="rewards" className="mb-16">
        <h2 className="mb-8 text-2xl font-bold text-white">Battle Passes</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {rewards.map((reward, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-800 bg-gray-900/50 p-6"
            >
              <h3 className="mb-2 text-xl font-bold text-white">{reward.title}</h3>
              <p className="mb-4 text-gray-400">{reward.description}</p>
              <div className="mb-6 rounded-lg border border-[#2CD591]/20 bg-[#2CD591]/5 px-4 py-2">
                <p className="text-center font-medium text-[#2CD591]">
                  {reward.price}
                </p>
              </div>
              <ul className="mb-6 space-y-3">
                {reward.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-400">
                    <Shield className="mr-2 h-4 w-4 text-[#2CD591]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="flex w-full items-center justify-center rounded-lg bg-[#2CD591] px-4 py-2 font-medium text-black hover:bg-[#2CD591]/90">
                Purchase Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Matchmaking Modal */}
      {selectedMode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="w-full max-w-md rounded-xl bg-gray-900 p-6">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold text-white">Finding Match</h2>
              <p className="mt-2 text-gray-400">
                Searching for players in {gameModes.find((m) => m.id === selectedMode)?.title}
              </p>
            </div>
            <div className="mb-8 flex items-center justify-center">
              <div className="relative h-24 w-24">
                <div className="absolute inset-0 animate-ping rounded-full bg-[#2CD591]/20" />
                <div className="absolute inset-0 animate-pulse rounded-full bg-[#2CD591]/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Swords className="h-12 w-12 text-[#2CD591]" />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => setSelectedMode(null)}
                className="rounded-lg border border-gray-800 px-6 py-2 text-gray-400 hover:bg-gray-800"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </ContentLayout>
  );
} 