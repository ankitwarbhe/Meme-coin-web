'use client';

import { useState } from 'react';
import { Calendar, Check, Clock, ChevronRight, AlertCircle } from 'lucide-react';
import ContentLayout from '@/components/layout/ContentLayout';

interface Milestone {
  id: number;
  title: string;
  description: string;
  date: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  tasks: {
    title: string;
    completed: boolean;
  }[];
}

const navigation = [
  { title: 'Overview', href: '#overview' },
  { title: 'Q1 2024', href: '#q1-2024' },
  { title: 'Q2 2024', href: '#q2-2024' },
  { title: 'Q3 2024', href: '#q3-2024' },
  { title: 'Q4 2024', href: '#q4-2024' },
];

const milestones: Milestone[] = [
  {
    id: 1,
    title: 'Platform Launch',
    description: 'Initial release of the AI Heroes gaming platform with core features.',
    date: 'Q1 2024',
    status: 'completed',
    tasks: [
      { title: 'Core gameplay mechanics', completed: true },
      { title: 'Basic hero collection', completed: true },
      { title: 'User authentication', completed: true },
      { title: 'Tutorial system', completed: true },
    ],
  },
  {
    id: 2,
    title: 'NFT Marketplace',
    description: 'Launch of the NFT marketplace for trading heroes and items.',
    date: 'Q2 2024',
    status: 'in-progress',
    tasks: [
      { title: 'Smart contract development', completed: true },
      { title: 'Marketplace UI', completed: true },
      { title: 'Trading system', completed: false },
      { title: 'Auction house', completed: false },
    ],
  },
  {
    id: 3,
    title: 'Tournament System',
    description: 'Implementation of competitive tournaments and rankings.',
    date: 'Q3 2024',
    status: 'upcoming',
    tasks: [
      { title: 'Tournament brackets', completed: false },
      { title: 'Ranking algorithm', completed: false },
      { title: 'Prize distribution', completed: false },
      { title: 'Spectator mode', completed: false },
    ],
  },
  {
    id: 4,
    title: 'Mobile Release',
    description: 'Launch of mobile applications for iOS and Android.',
    date: 'Q4 2024',
    status: 'upcoming',
    tasks: [
      { title: 'Mobile UI/UX', completed: false },
      { title: 'Cross-platform sync', completed: false },
      { title: 'Mobile optimizations', completed: false },
      { title: 'App store deployment', completed: false },
    ],
  },
];

export default function RoadmapPage() {
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);

  return (
    <ContentLayout title="Development Roadmap" navigation={navigation}>
      {/* Overview Section */}
      <section id="overview" className="mb-16">
        <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-8">
          <h2 className="mb-4 text-2xl font-bold text-white">Project Overview</h2>
          <p className="text-gray-400">
            Our development roadmap outlines the key milestones and features planned for
            the AI Heroes platform. We are committed to delivering a high-quality
            gaming experience while maintaining transparency with our community.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-4">
              <div className="mb-2 flex items-center text-green-500">
                <Check className="mr-2 h-5 w-5" />
                <span className="font-medium">Completed</span>
              </div>
              <span className="text-2xl font-bold text-white">
                {milestones.filter((m) => m.status === 'completed').length}
              </span>
            </div>
            <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-4">
              <div className="mb-2 flex items-center text-blue-500">
                <Clock className="mr-2 h-5 w-5" />
                <span className="font-medium">In Progress</span>
              </div>
              <span className="text-2xl font-bold text-white">
                {milestones.filter((m) => m.status === 'in-progress').length}
              </span>
            </div>
            <div className="rounded-lg border border-gray-500/20 bg-gray-500/10 p-4">
              <div className="mb-2 flex items-center text-gray-500">
                <Calendar className="mr-2 h-5 w-5" />
                <span className="font-medium">Upcoming</span>
              </div>
              <span className="text-2xl font-bold text-white">
                {milestones.filter((m) => m.status === 'upcoming').length}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <div className="relative space-y-8">
        <div className="absolute left-8 top-0 h-full w-px bg-gray-800 md:left-[50%]" />

        {milestones.map((milestone, index) => (
          <section
            key={milestone.id}
            id={milestone.date.toLowerCase().replace(' ', '-')}
            className="relative scroll-mt-20"
          >
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="ml-20 md:ml-0 md:w-1/2">
                <div
                  className={`relative rounded-xl border p-6 ${
                    milestone.status === 'completed'
                      ? 'border-green-500/20 bg-green-500/5'
                      : milestone.status === 'in-progress'
                      ? 'border-blue-500/20 bg-blue-500/5'
                      : 'border-gray-800 bg-gray-900/50'
                  }`}
                >
                  <div className="absolute -left-12 flex h-8 w-8 items-center justify-center rounded-full border-4 border-[#0A0A0A] bg-gray-900 md:-left-4">
                    {milestone.status === 'completed' ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : milestone.status === 'in-progress' ? (
                      <Clock className="h-4 w-4 text-blue-500" />
                    ) : (
                      <Calendar className="h-4 w-4 text-gray-500" />
                    )}
                  </div>
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">
                      {milestone.title}
                    </h3>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        milestone.status === 'completed'
                          ? 'bg-green-500/20 text-green-500'
                          : milestone.status === 'in-progress'
                          ? 'bg-blue-500/20 text-blue-500'
                          : 'bg-gray-500/20 text-gray-500'
                      }`}
                    >
                      {milestone.date}
                    </span>
                  </div>
                  <p className="mb-4 text-gray-400">{milestone.description}</p>
                  <button
                    onClick={() => setSelectedMilestone(milestone)}
                    className="flex items-center text-sm text-[#2CD591] hover:underline"
                  >
                    View Details
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Milestone Modal */}
      {selectedMilestone && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="w-full max-w-2xl rounded-xl bg-gray-900 p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">
                {selectedMilestone.title}
              </h2>
              <button
                onClick={() => setSelectedMilestone(null)}
                className="text-gray-400 hover:text-white"
              >
                <AlertCircle className="h-6 w-6" />
              </button>
            </div>
            <div className="mb-6">
              <p className="mb-4 text-gray-400">{selectedMilestone.description}</p>
              <div
                className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
                  selectedMilestone.status === 'completed'
                    ? 'bg-green-500/20 text-green-500'
                    : selectedMilestone.status === 'in-progress'
                    ? 'bg-blue-500/20 text-blue-500'
                    : 'bg-gray-500/20 text-gray-500'
                }`}
              >
                {selectedMilestone.date}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">Tasks</h3>
              {selectedMilestone.tasks.map((task, index) => (
                <div
                  key={index}
                  className="flex items-center rounded-lg border border-gray-800 bg-gray-900/50 p-4"
                >
                  <div
                    className={`mr-4 flex h-6 w-6 items-center justify-center rounded-full ${
                      task.completed
                        ? 'bg-green-500/20 text-green-500'
                        : 'bg-gray-500/20 text-gray-500'
                    }`}
                  >
                    {task.completed ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Clock className="h-4 w-4" />
                    )}
                  </div>
                  <span
                    className={`${
                      task.completed ? 'text-white' : 'text-gray-400'
                    }`}
                  >
                    {task.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </ContentLayout>
  );
} 