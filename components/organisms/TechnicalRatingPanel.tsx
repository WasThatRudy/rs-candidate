'use client';

import { useEffect, useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setIsOpen(true);
  }, []);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      
      {/* Side Panel */}
      <div
        className={`fixed right-0 top-0 bottom-0 z-50 w-full max-w-[600px] bg-card-bg border-l border-border shadow-2xl transform transition-transform duration-300 ease-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-['Geist:SemiBold',sans-serif] text-[24px] text-text-primary">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-border transition-colors"
              aria-label="Close panel"
            >
              <X size={20} className="text-text-primary" />
            </button>
          </div>

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
    </>
  );
}

