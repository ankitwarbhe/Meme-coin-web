'use client';

import Image from 'next/image';
import {
  Users,
  MessageSquare,
  Trophy,
  Twitter,
  MessagesSquare,
  Send,
  ArrowRight,
  ThumbsUp,
  MessageCircle,
  Share2,
} from 'lucide-react';
import ContentLayout from '@/components/layout/ContentLayout';

interface Post {
  id: number;
  author: {
    name: string;
    image: string;
    role: string;
  };
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
}

const navigation = [
  { title: 'Overview', href: '#overview' },
  { title: 'Latest Updates', href: '#updates' },
  { title: 'Events', href: '#events' },
  { title: 'Social Media', href: '#social' },
];

const stats = [
  { icon: Users, label: 'Active Players', value: '50K+' },
  { icon: MessageSquare, label: 'Discord Members', value: '25K+' },
  { icon: Trophy, label: 'Tournaments', value: '100+' },
];

const posts: Post[] = [
  {
    id: 1,
    author: {
      name: 'Alex Thompson',
      image: 'https://picsum.photos/id/100/100/100',
      role: 'Community Manager',
    },
    content:
      'Exciting news! Our latest tournament had over 1000 participants. Congratulations to all winners! 🎮🏆',
    image: 'https://picsum.photos/id/200/800/400',
    likes: 245,
    comments: 56,
    shares: 23,
    timestamp: '2h ago',
  },
  {
    id: 2,
    author: {
      name: 'Sarah Chen',
      image: 'https://picsum.photos/id/101/100/100',
      role: 'Game Designer',
    },
    content:
      'Sneak peek at our upcoming hero class! Get ready for some epic battles with the new Mystic Warrior. ⚔️✨',
    likes: 189,
    comments: 42,
    shares: 15,
    timestamp: '5h ago',
  },
  {
    id: 3,
    author: {
      name: 'Marcus Rodriguez',
      image: 'https://picsum.photos/id/102/100/100',
      role: 'Pro Player',
    },
    content:
      'Just achieved a 20-win streak in ranked battles! Here are some tips for aspiring players...',
    image: 'https://picsum.photos/id/201/800/400',
    likes: 312,
    comments: 87,
    shares: 45,
    timestamp: '1d ago',
  },
];

const events = [
  {
    title: 'Weekly Tournament',
    date: 'Every Saturday',
    time: '3:00 PM UTC',
    prize: '1000 TOKENS',
    participants: 128,
    image: 'https://picsum.photos/id/301/400/200',
  },
  {
    title: 'Community Meetup',
    date: 'March 15, 2024',
    time: '6:00 PM UTC',
    participants: 256,
    image: 'https://picsum.photos/id/302/400/200',
  },
  {
    title: 'Season Championship',
    date: 'April 1-3, 2024',
    time: 'All Day',
    prize: '10000 TOKENS',
    participants: 512,
    image: 'https://picsum.photos/id/303/400/200',
  },
];

export default function CommunityPage() {
  return (
    <ContentLayout title="Community Hub" navigation={navigation}>
      {/* Overview Section */}
      <section id="overview" className="mb-16">
        <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-8">
          <h2 className="mb-8 text-2xl font-bold text-white">Community Stats</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center rounded-lg border border-gray-800 bg-gray-900/50 p-6"
              >
                <stat.icon className="mr-4 h-8 w-8 text-[#2CD591]" />
                <div>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Updates Section */}
      <section id="updates" className="mb-16">
        <h2 className="mb-8 text-2xl font-bold text-white">Latest Updates</h2>
        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="rounded-xl border border-gray-800 bg-gray-900/50 p-6"
            >
              <div className="mb-4 flex items-center">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="ml-3">
                  <p className="font-medium text-white">{post.author.name}</p>
                  <p className="text-sm text-gray-400">{post.author.role}</p>
                </div>
                <span className="ml-auto text-sm text-gray-400">
                  {post.timestamp}
                </span>
              </div>
              <p className="mb-4 text-gray-300">{post.content}</p>
              {post.image && (
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={post.image}
                    alt="Post image"
                    width={800}
                    height={400}
                    className="w-full"
                  />
                </div>
              )}
              <div className="flex items-center space-x-6">
                <button className="flex items-center text-gray-400 hover:text-[#2CD591]">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center text-gray-400 hover:text-[#2CD591]">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center text-gray-400 hover:text-[#2CD591]">
                  <Share2 className="mr-2 h-4 w-4" />
                  <span>{post.shares}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="mb-16">
        <h2 className="mb-8 text-2xl font-bold text-white">Upcoming Events</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50"
            >
              <div className="relative h-48">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {event.title}
                  </h3>
                  <p className="text-[#2CD591]">{event.date}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4 space-y-2">
                  <p className="text-sm text-gray-400">
                    <span className="font-medium text-white">Time:</span>{' '}
                    {event.time}
                  </p>
                  {event.prize && (
                    <p className="text-sm text-gray-400">
                      <span className="font-medium text-white">Prize Pool:</span>{' '}
                      {event.prize}
                    </p>
                  )}
                  <p className="text-sm text-gray-400">
                    <span className="font-medium text-white">Participants:</span>{' '}
                    {event.participants}
                  </p>
                </div>
                <button className="flex w-full items-center justify-center rounded-lg bg-[#2CD591] px-4 py-2 font-medium text-black hover:bg-[#2CD591]/90">
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Social Media Section */}
      <section id="social" className="mb-16">
        <h2 className="mb-8 text-2xl font-bold text-white">Connect With Us</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded-xl border border-gray-800 bg-gray-900/50 p-6 transition-colors hover:border-blue-500/50 hover:bg-blue-500/5"
          >
            <Twitter className="mr-4 h-8 w-8 text-[#1DA1F2]" />
            <div>
              <p className="font-medium text-white">Twitter</p>
              <p className="text-sm text-gray-400">Follow for updates</p>
            </div>
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded-xl border border-gray-800 bg-gray-900/50 p-6 transition-colors hover:border-indigo-500/50 hover:bg-indigo-500/5"
          >
            <MessagesSquare className="mr-4 h-8 w-8 text-[#7289DA]" />
            <div>
              <p className="font-medium text-white">Discord</p>
              <p className="text-sm text-gray-400">Join our community</p>
            </div>
          </a>
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded-xl border border-gray-800 bg-gray-900/50 p-6 transition-colors hover:border-blue-400/50 hover:bg-blue-400/5"
          >
            <Send className="mr-4 h-8 w-8 text-[#0088CC]" />
            <div>
              <p className="font-medium text-white">Telegram</p>
              <p className="text-sm text-gray-400">Get instant updates</p>
            </div>
          </a>
        </div>
      </section>
    </ContentLayout>
  );
} 