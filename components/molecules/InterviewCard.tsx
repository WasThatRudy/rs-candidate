'use client';

import type { Interview } from '@/types';

interface InterviewCardProps {
  interview: Interview;
  onViewDetails: () => void;
}

export function InterviewCard({ interview, onViewDetails }: InterviewCardProps) {
  return (
    <div
      className="p-6 rounded-[16px] border transition-colors cursor-pointer hover:scale-[1.02] bg-card-bg border-border"
      onClick={onViewDetails}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-['Geist:SemiBold',sans-serif] text-[18px] text-text-primary flex-1">
          {interview.title}
        </h3>
        <span className="font-['Geist:Regular',sans-serif] text-[14px] text-text-secondary ml-4">
          {interview.duration}
        </span>
      </div>

      <div className="flex gap-4 mb-3">
        <div className="flex flex-col">
          <span className="font-['Geist:Regular',sans-serif] text-[12px] text-text-secondary">
            Technical
          </span>
          <span className="font-['Geist:SemiBold',sans-serif] text-[16px] text-accent">
            {interview.technical}%
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-['Geist:Regular',sans-serif] text-[12px] text-text-secondary">
            Communication
          </span>
          <span className="font-['Geist:SemiBold',sans-serif] text-[16px] text-accent">
            {interview.communication}%
          </span>
        </div>
      </div>

      <p className="font-['Geist:Regular',sans-serif] text-[14px] leading-[20px] text-text-primary">
        {interview.summary}
      </p>
    </div>
  );
}

