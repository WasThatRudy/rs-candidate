'use client';

import Image from 'next/image';
import { EditableField } from '@/components/molecules/EditableField';
import { EditableList } from '@/components/molecules/EditableList';
import { Plus, Trash2 } from 'lucide-react';
import type { Experience } from '@/types';

interface EditablePortfolioContentProps {
  experiences: Experience[];
  brandDesignImages?: string[];
  isEditing: boolean;
  onExperiencesChange: (experiences: Experience[]) => void;
}

export function EditablePortfolioContent({
  experiences,
  brandDesignImages = [],
  isEditing,
  onExperiencesChange,
}: EditablePortfolioContentProps) {
  const updateExperience = (index: number, field: keyof Experience, value: string | string[]) => {
    const newExperiences = [...experiences];
    newExperiences[index] = { ...newExperiences[index], [field]: value };
    onExperiencesChange(newExperiences);
  };

  const addExperience = () => {
    onExperiencesChange([
      ...experiences,
      { company: '', role: '', duration: '', items: [''] },
    ]);
  };

  const removeExperience = (index: number) => {
    onExperiencesChange(experiences.filter((_, i) => i !== index));
  };

  return (
    <div className="content-stretch flex flex-col gap-[38px] items-start relative shrink-0 w-full">
      {/* Experience Section */}
      <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
        <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[40px] tracking-[-0.8px] transition-colors text-text-primary">
          <p className="leading-[48px]">Experience</p>
        </div>

        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          {experiences.map((job, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[16px] border transition-colors w-full bg-card-bg border-border"
            >
              {isEditing && (
                <div className="flex justify-end mb-4">
                  <button
                    onClick={() => removeExperience(idx)}
                    className="p-2 rounded-lg border border-border hover:bg-border text-text-secondary transition-colors"
                    aria-label="Remove experience"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              )}
              <div className="flex justify-between items-start mb-2">
                <EditableField
                  value={job.company}
                  onChange={(value) => updateExperience(idx, 'company', value)}
                  isEditing={isEditing}
                  className="font-['Geist:SemiBold',sans-serif] text-[21.3px] text-text-primary"
                />
                <EditableField
                  value={job.duration}
                  onChange={(value) => updateExperience(idx, 'duration', value)}
                  isEditing={isEditing}
                  className="font-['Geist:Regular',sans-serif] text-[13px] text-text-secondary"
                />
              </div>
              <EditableField
                value={job.role}
                onChange={(value) => updateExperience(idx, 'role', value)}
                isEditing={isEditing}
                className="font-['Geist:Regular',sans-serif] text-[14px] mb-4 text-accent"
              />
              <EditableList
                items={job.items}
                onChange={(items) => updateExperience(idx, 'items', items)}
                isEditing={isEditing}
                placeholder="Achievement or responsibility..."
              />
            </div>
          ))}
          {isEditing && (
            <button
              onClick={addExperience}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-border text-accent transition-colors"
            >
              <Plus size={16} />
              <span className="text-sm">Add Experience</span>
            </button>
          )}
        </div>
      </div>

      {/* Skills Section */}
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
        <div className="font-['Geist:SemiBold',sans-serif] text-[40px] tracking-[-0.8px] text-text-primary">
          <p className="leading-[48px]">Skills</p>
        </div>
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          <div className="p-6 rounded-[16px] border transition-colors w-full bg-card-bg border-border">
            <div className="font-['Geist:SemiBold',sans-serif] text-[21.3px] mb-3 text-text-primary">
              Brand Design
            </div>
            <div className="font-['Geist:Regular',sans-serif] text-[16px] leading-[24px] mb-4 text-text-secondary">
              Crafting timeless brand identities from scratch—logos, color
              systems, visual language, and complete branding systems.
            </div>
            {brandDesignImages.length > 0 && (
              <div className="content-start flex flex-wrap gap-[12px] items-start">
                {brandDesignImages.map((img, i) => (
                  <div
                    key={i}
                    className="content-stretch flex h-[72px] items-start min-w-[128px] p-px relative rounded-[12px] shrink-0 border transition-colors border-border"
                  >
                    <div className="relative h-[70px] rounded-[inherit] w-full overflow-hidden">
                      <Image
                        alt="Brand design example"
                        src={img}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="p-6 rounded-[16px] border transition-colors w-full bg-card-bg border-border">
            <div className="font-['Geist:SemiBold',sans-serif] text-[21.3px] mb-3 text-text-primary">
              UI/UX Design
            </div>
            <div className="font-['Geist:Regular',sans-serif] text-[16px] leading-[24px] text-text-secondary">
              Creating intuitive, user-centered interfaces that balance
              aesthetics with functionality and accessibility.
            </div>
          </div>

          <div className="p-6 rounded-[16px] border transition-colors w-full bg-card-bg border-border">
            <div className="font-['Geist:SemiBold',sans-serif] text-[21.3px] mb-3 text-text-primary">
              Graphic Design
            </div>
            <div className="font-['Geist:Regular',sans-serif] text-[16px] leading-[24px] text-text-secondary">
              Designing visual content across digital and print media with
              attention to typography, layout, and composition.
            </div>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
        <div className="font-['Geist:SemiBold',sans-serif] text-[40px] tracking-[-0.8px] text-text-primary">
          <p className="leading-[48px]">Tools</p>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
          {[
            'Figma',
            'Adobe Creative Suite',
            'Framer',
            'Webflow',
            'Sketch',
            'After Effects',
          ].map((tool, idx) => (
            <div
              key={idx}
              className="p-4 rounded-[12px] border transition-colors bg-card-bg border-border"
            >
              <div className="font-['Geist:SemiBold',sans-serif] text-[16px] text-text-primary">
                {tool}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
        <div className="font-['Geist:SemiBold',sans-serif] text-[40px] tracking-[-0.8px] text-text-primary">
          <p className="leading-[48px]">Education</p>
        </div>
        <div className="p-6 rounded-[16px] border transition-colors w-full bg-card-bg border-border">
          <div className="font-['Geist:SemiBold',sans-serif] text-[21.3px] mb-2 text-text-primary">
            Bachelor of Design
          </div>
          <div className="font-['Geist:Regular',sans-serif] text-[14px] text-accent">
            University Name • 2018 - 2022
          </div>
        </div>
      </div>
    </div>
  );
}

