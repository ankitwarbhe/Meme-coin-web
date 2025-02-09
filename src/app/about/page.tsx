'use client';

import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';
import ContentLayout from '@/components/layout/ContentLayout';

const navigation = [
  { title: 'Mission & Vision', href: '#mission' },
  { title: 'Our Story', href: '#story' },
  { title: 'Values', href: '#values' },
  { title: 'Contact', href: '#contact' },
];

const timeline = [
  {
    year: '2022',
    title: 'Company Founded',
    description: 'AI Heroes was established with a vision to revolutionize gaming.',
  },
  {
    year: '2023',
    title: 'Platform Launch',
    description: 'Successfully launched our gaming platform with initial features.',
  },
  {
    year: '2024',
    title: 'Global Expansion',
    description: 'Expanded to multiple regions and grew our player base.',
  },
];

const values = [
  {
    title: 'Innovation',
    description: 'Pushing boundaries in AI and blockchain gaming.',
    image: 'https://picsum.photos/id/40/400/300',
  },
  {
    title: 'Community',
    description: 'Building a strong, engaged gaming community.',
    image: 'https://picsum.photos/id/41/400/300',
  },
  {
    title: 'Transparency',
    description: 'Open communication and fair gameplay mechanics.',
    image: 'https://picsum.photos/id/42/400/300',
  },
];

export default function AboutPage() {
  return (
    <ContentLayout title="About Us" navigation={navigation}>
      {/* Mission Section */}
      <section id="mission" className="mb-24">
        <div className="relative h-[400px] overflow-hidden rounded-xl">
          <Image
            src="https://picsum.photos/id/43/1920/1080"
            alt="Mission"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
          <div className="absolute inset-0 flex items-center p-8">
            <div className="max-w-2xl">
              <h2 className="mb-4 text-4xl font-bold text-white">
                Our Mission & Vision
              </h2>
              <p className="text-xl text-gray-300">
                To create an innovative gaming ecosystem that empowers players through
                blockchain technology and artificial intelligence, while fostering a
                vibrant community of creators and gamers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="mb-24">
        <h2 className="mb-8 text-3xl font-bold text-white">Our Story</h2>
        <div className="relative">
          <div className="absolute left-16 h-full w-px bg-gray-800" />
          <div className="space-y-12">
            {timeline.map((item) => (
              <div key={item.year} className="relative flex gap-8">
                <div className="absolute left-16 top-4 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-[#2CD591] bg-[#0A0A0A]" />
                <div className="w-16 text-xl font-bold text-[#2CD591]">
                  {item.year}
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="mb-24">
        <h2 className="mb-8 text-3xl font-bold text-white">Our Values</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50"
            >
              <div className="relative h-48">
                <Image
                  src={value.image}
                  alt={value.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-white">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mb-24">
        <h2 className="mb-8 text-3xl font-bold text-white">Contact Us</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-[#2CD591]" />
              <div>
                <h3 className="font-medium text-white">Address</h3>
                <p className="text-gray-400">
                  123 Gaming Street, Digital City, DC 12345
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-[#2CD591]" />
              <div>
                <h3 className="font-medium text-white">Email</h3>
                <p className="text-gray-400">contact@aiheroes.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-[#2CD591]" />
              <div>
                <h3 className="font-medium text-white">Phone</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-lg border border-gray-800 bg-gray-900 px-4 py-2 text-white placeholder-gray-400 focus:border-[#2CD591] focus:outline-none focus:ring-1 focus:ring-[#2CD591]"
                placeholder="Your name"
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
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-white">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full rounded-lg border border-gray-800 bg-gray-900 px-4 py-2 text-white placeholder-gray-400 focus:border-[#2CD591] focus:outline-none focus:ring-1 focus:ring-[#2CD591]"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              className="rounded-lg bg-[#2CD591] px-8 py-3 text-sm font-medium text-black hover:bg-[#2CD591]/90"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </ContentLayout>
  );
} 