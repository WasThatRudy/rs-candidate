'use client';

import { X } from 'lucide-react';
import type { Skill } from '@/types';

interface TechnicalRatingPanelProps {
  title: string;
  skills: Skill[];
  onClose: () => void;
}

export function TechnicalRatingPanel({
  title,
  skills,
  onClose,
}: TechnicalRatingPanelProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-[16px] border bg-card-bg border-border p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-border transition-colors"
          aria-label="Close panel"
        >
          <X size={20} className="text-text-primary" />
        </button>

        <h2 className="font-['Geist:SemiBold',sans-serif] text-[24px] text-text-primary mb-6 pr-8">
          {title}
        </h2>

        <div className="space-y-6">
          {skills.map((skill, idx) => (
            <div key={idx} className="border-b border-border pb-4 last:border-0">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-['Geist:SemiBold',sans-serif] text-[18px] text-text-primary">
                  {skill.name}
                </h3>
                <span className="font-['Geist:SemiBold',sans-serif] text-[18px] text-accent">
                  {skill.score}%
                </span>
              </div>
              <p className="font-['Geist:Regular',sans-serif] text-[14px] leading-[20px] text-text-secondary">
                {skill.notes}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

