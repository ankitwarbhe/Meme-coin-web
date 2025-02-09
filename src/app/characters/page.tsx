'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Search, Star, Sword, Shield, Zap } from 'lucide-react';
import GridLayout from '@/components/layout/GridLayout';

interface Character {
  id: number;
  name: string;
  class: string;
  rarity: number;
  stats: {
    attack: number;
    defense: number;
    speed: number;
  };
  abilities: string[];
  image: string;
}

const characters: Character[] = [
  {
    id: 1,
    name: 'Dragon Knight',
    class: 'Warrior',
    rarity: 5,
    stats: {
      attack: 85,
      defense: 75,
      speed: 60,
    },
    abilities: ['Dragon Breath', 'Flame Shield', 'Inferno Strike'],
    image: 'https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Shadow Assassin',
    class: 'Rogue',
    rarity: 4,
    stats: {
      attack: 90,
      defense: 45,
      speed: 95,
    },
    abilities: ['Shadow Step', 'Death Mark', 'Vanish'],
    image: 'https://images.unsplash.com/photo-1578353022142-09264fd64295?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Arcane Mage',
    class: 'Mage',
    rarity: 5,
    stats: {
      attack: 95,
      defense: 40,
      speed: 65,
    },
    abilities: ['Arcane Burst', 'Time Warp', 'Meteor Storm'],
    image: 'https://images.unsplash.com/photo-1614729939124-032d1e6c9945?auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    name: 'Holy Paladin',
    class: 'Warrior',
    rarity: 4,
    stats: {
      attack: 70,
      defense: 90,
      speed: 50,
    },
    abilities: ['Divine Shield', 'Holy Light', 'Judgment'],
    image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&q=80',
  },
  {
    id: 5,
    name: 'Nature Druid',
    class: 'Mage',
    rarity: 4,
    stats: {
      attack: 75,
      defense: 65,
      speed: 70,
    },
    abilities: ['Wild Growth', 'Nature\'s Wrath', 'Tranquility'],
    image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&q=80',
  },
  {
    id: 6,
    name: 'Demon Hunter',
    class: 'Rogue',
    rarity: 5,
    stats: {
      attack: 88,
      defense: 55,
      speed: 85,
    },
    abilities: ['Demon Form', 'Soul Rend', 'Chaos Strike'],
    image: 'https://images.unsplash.com/photo-1636489953081-c4ebbd50fa3a?auto=format&fit=crop&q=80',
  },
];

const classes = ['All', 'Warrior', 'Rogue', 'Mage'];

export default function CharactersPage() {
  const [selectedClass, setSelectedClass] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCharacters = characters.filter((character) => {
    const matchesClass =
      selectedClass === 'All' || character.class === selectedClass;
    const matchesSearch = character.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesClass && matchesSearch;
  });

  const filters = (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search characters..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-gray-800 bg-gray-900 py-2 pl-10 pr-4 text-sm text-white placeholder-gray-400 focus:border-[#2CD591] focus:outline-none focus:ring-1 focus:ring-[#2CD591]"
          />
        </div>
      </div>

      {/* Classes */}
      <div>
        <h3 className="mb-4 text-sm font-medium text-white">Classes</h3>
        <div className="space-y-2">
          {classes.map((characterClass) => (
            <button
              key={characterClass}
              onClick={() => setSelectedClass(characterClass)}
              className={`w-full rounded-lg px-3 py-2 text-left text-sm ${
                selectedClass === characterClass
                  ? 'bg-[#2CD591] text-black'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              {characterClass}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <GridLayout title="Characters" filters={filters}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCharacters.map((character) => (
          <div
            key={character.id}
            className="group overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50"
          >
            <div className="relative h-[450px]">
              <Image
                src={character.image}
                alt={character.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">
                    {character.name}
                  </h3>
                  <div className="flex items-center">
                    {[...Array(character.rarity)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-[#2CD591] text-[#2CD591]"
                      />
                    ))}
                  </div>
                </div>
                <p className="mb-4 text-[#2CD591]">{character.class}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Sword className="mr-2 h-4 w-4 text-red-500" />
                      <span className="text-sm text-gray-300">Attack</span>
                    </div>
                    <div className="h-2 w-24 overflow-hidden rounded-full bg-gray-800">
                      <div
                        className="h-full bg-red-500"
                        style={{ width: `${character.stats.attack}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-blue-500" />
                      <span className="text-sm text-gray-300">Defense</span>
                    </div>
                    <div className="h-2 w-24 overflow-hidden rounded-full bg-gray-800">
                      <div
                        className="h-full bg-blue-500"
                        style={{ width: `${character.stats.defense}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-yellow-500" />
                      <span className="text-sm text-gray-300">Speed</span>
                    </div>
                    <div className="h-2 w-24 overflow-hidden rounded-full bg-gray-800">
                      <div
                        className="h-full bg-yellow-500"
                        style={{ width: `${character.stats.speed}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </GridLayout>
  );
} 