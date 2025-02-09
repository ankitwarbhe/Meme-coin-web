'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Mail, Github, Linkedin, X } from 'lucide-react';
import GridLayout from '@/components/layout/GridLayout';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  bio: string;
  image: string;
  email: string;
  github?: string;
  linkedin?: string;
}

const departments = [
  'All',
  'Leadership',
  'Engineering',
  'Design',
  'Marketing',
  'Community',
];

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'CEO',
    department: 'Leadership',
    bio: 'Visionary leader with 15+ years in gaming and blockchain.',
    image: 'https://picsum.photos/id/50/400/400',
    email: 'alex@aiheroes.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'Lead Engineer',
    department: 'Engineering',
    bio: 'Full-stack developer specializing in blockchain technology.',
    image: 'https://picsum.photos/id/51/400/400',
    email: 'sarah@aiheroes.com',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 3,
    name: 'Michael Park',
    role: 'Art Director',
    department: 'Design',
    bio: 'Award-winning artist with a passion for game design.',
    image: 'https://picsum.photos/id/52/400/400',
    email: 'michael@aiheroes.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 4,
    name: 'Emma Wilson',
    role: 'Marketing Lead',
    department: 'Marketing',
    bio: 'Digital marketing expert focused on community growth.',
    image: 'https://picsum.photos/id/53/400/400',
    email: 'emma@aiheroes.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 5,
    name: 'David Kim',
    role: 'Community Manager',
    department: 'Community',
    bio: 'Experienced in building and managing gaming communities.',
    image: 'https://picsum.photos/id/54/400/400',
    email: 'david@aiheroes.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 6,
    name: 'Lisa Zhang',
    role: 'Backend Engineer',
    department: 'Engineering',
    bio: 'Specialized in scalable architecture and AI integration.',
    image: 'https://picsum.photos/id/55/400/400',
    email: 'lisa@aiheroes.com',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
];

export default function TeamPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const filteredMembers = teamMembers.filter(
    (member) =>
      selectedDepartment === 'All' || member.department === selectedDepartment
  );

  const filters = (
    <div className="space-y-6">
      <div>
        <h3 className="mb-4 text-sm font-medium text-white">Departments</h3>
        <div className="space-y-2">
          {departments.map((department) => (
            <button
              key={department}
              onClick={() => setSelectedDepartment(department)}
              className={`w-full rounded-lg px-3 py-2 text-left text-sm ${
                selectedDepartment === department
                  ? 'bg-[#2CD591] text-black'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              {department}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <GridLayout title="Our Team" filters={filters}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredMembers.map((member) => (
          <div
            key={member.id}
            onClick={() => setSelectedMember(member)}
            className="group cursor-pointer overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50"
          >
            <div className="relative h-64">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <h3 className="mb-1 text-xl font-bold text-white">
                  {member.name}
                </h3>
                <p className="text-[#2CD591]">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Member Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative w-full max-w-2xl rounded-xl bg-gray-900 p-6">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="mb-1 text-2xl font-bold text-white">
                  {selectedMember.name}
                </h2>
                <p className="mb-4 text-[#2CD591]">{selectedMember.role}</p>
                <p className="mb-6 text-gray-400">{selectedMember.bio}</p>
                <div className="space-y-4">
                  <a
                    href={`mailto:${selectedMember.email}`}
                    className="flex items-center text-gray-400 hover:text-[#2CD591]"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    {selectedMember.email}
                  </a>
                  {selectedMember.github && (
                    <a
                      href={selectedMember.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-[#2CD591]"
                    >
                      <Github className="mr-2 h-5 w-5" />
                      GitHub Profile
                    </a>
                  )}
                  {selectedMember.linkedin && (
                    <a
                      href={selectedMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-[#2CD591]"
                    >
                      <Linkedin className="mr-2 h-5 w-5" />
                      LinkedIn Profile
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </GridLayout>
  );
} 