import React from 'react';

interface VisionMission {
    title: string;
    content: string;
    icon: React.ReactElement;
}   




export const visionMissionData: Record<string, VisionMission> = {
  vision: {
    title: 'Vision Statement',
    content: 'To offer intelligent digital solutions that redefine the future of living and business operations through effortless efficiency.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  },
  mission: {
    title: 'Mission Statement',
    content: 'To empower individuals and organizations by developing simple, innovative, and accessible software and other technologies that streamline complexity and bring unmatched simplicity and convenience to modern life.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
};