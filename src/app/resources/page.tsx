'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Download, Search, X } from 'lucide-react';
import GridLayout from '@/components/layout/GridLayout';

interface Resource {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  downloadUrl: string;
}

const categories = [
  'All',
  'Tutorials',
  'Documentation',
  'Templates',
  'Tools',
  'Assets',
];

const resources: Resource[] = [
  {
    id: 1,
    title: 'Getting Started Guide',
    description: 'Complete guide to start your journey with AI Heroes.',
    category: 'Documentation',
    image: 'https://picsum.photos/id/30/400/300',
    downloadUrl: '#',
  },
  {
    id: 2,
    title: 'Character Creation Tutorial',
    description: 'Learn how to create and customize your hero.',
    category: 'Tutorials',
    image: 'https://picsum.photos/id/31/400/300',
    downloadUrl: '#',
  },
  {
    id: 3,
    title: 'Battle System Overview',
    description: 'Detailed explanation of the combat mechanics.',
    category: 'Documentation',
    image: 'https://picsum.photos/id/32/400/300',
    downloadUrl: '#',
  },
  {
    id: 4,
    title: 'Hero Template Pack',
    description: 'Ready-to-use templates for hero creation.',
    category: 'Templates',
    image: 'https://picsum.photos/id/33/400/300',
    downloadUrl: '#',
  },
  {
    id: 5,
    title: 'Asset Creation Tools',
    description: 'Essential tools for creating game assets.',
    category: 'Tools',
    image: 'https://picsum.photos/id/34/400/300',
    downloadUrl: '#',
  },
  {
    id: 6,
    title: 'Character Art Pack',
    description: 'High-quality character art assets.',
    category: 'Assets',
    image: 'https://picsum.photos/id/35/400/300',
    downloadUrl: '#',
  },
];

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [previewResource, setPreviewResource] = useState<Resource | null>(null);

  const filteredResources = resources.filter((resource) => {
    const matchesCategory =
      selectedCategory === 'All' || resource.category === selectedCategory;
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filters = (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-gray-800 bg-gray-900 py-2 pl-10 pr-4 text-sm text-white placeholder-gray-400 focus:border-[#2CD591] focus:outline-none focus:ring-1 focus:ring-[#2CD591]"
          />
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="mb-4 text-sm font-medium text-white">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`w-full rounded-lg px-3 py-2 text-left text-sm ${
                selectedCategory === category
                  ? 'bg-[#2CD591] text-black'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <GridLayout title="Resources" filters={filters}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredResources.map((resource) => (
          <div
            key={resource.id}
            className="group overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50"
          >
            <div className="relative h-48">
              <Image
                src={resource.image}
                alt={resource.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold text-white">
                {resource.title}
              </h3>
              <p className="mb-4 text-sm text-gray-400">{resource.description}</p>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-gray-800 px-3 py-1 text-xs text-[#2CD591]">
                  {resource.category}
                </span>
                <button
                  onClick={() => window.open(resource.downloadUrl, '_blank')}
                  className="flex items-center rounded-lg bg-[#2CD591] px-4 py-2 text-sm font-medium text-black hover:bg-[#2CD591]/90"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Preview Modal */}
      {previewResource && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative w-full max-w-2xl rounded-xl bg-gray-900 p-6">
            <button
              onClick={() => setPreviewResource(null)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="relative mb-4 h-64">
              <Image
                src={previewResource.image}
                alt={previewResource.title}
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <h2 className="mb-2 text-2xl font-bold text-white">
              {previewResource.title}
            </h2>
            <p className="mb-4 text-gray-400">{previewResource.description}</p>
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-gray-800 px-3 py-1 text-sm text-[#2CD591]">
                {previewResource.category}
              </span>
              <button
                onClick={() => window.open(previewResource.downloadUrl, '_blank')}
                className="flex items-center rounded-lg bg-[#2CD591] px-6 py-2 text-sm font-medium text-black hover:bg-[#2CD591]/90"
              >
                <Download className="mr-2 h-4 w-4" />
                Download
              </button>
            </div>
          </div>
        </div>
      )}
    </GridLayout>
  );
} 