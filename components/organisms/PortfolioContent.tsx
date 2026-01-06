'use client';

import Image from 'next/image';
import type { Experience } from '@/types';

interface PortfolioContentProps {
  experiences: Experience[];
  brandDesignImages?: string[];
}

export function PortfolioContent({
  experiences,
  brandDesignImages = [],
}: PortfolioContentProps) {
  return (
    <div className="content-stretch flex flex-col gap-[38px] items-start relative shrink-0 w-full">
      {/* Experience Section */}
      <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
        <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[40px] tracking-[-0.8px] w-full transition-colors text-text-primary">
          <p className="leading-[48px]">Experience</p>
        </div>

        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          {experiences.map((job, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[16px] border transition-colors w-full bg-card-bg border-border"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="font-['Geist:SemiBold',sans-serif] text-[21.3px] text-text-primary">
                  {job.company}
                </div>
                <div className="font-['Geist:Regular',sans-serif] text-[13px] text-text-secondary">
                  {job.duration}
                </div>
              </div>
              <div className="font-['Geist:Regular',sans-serif] text-[14px] mb-4 text-accent">
                {job.role}
              </div>
              <ul className="list-disc ml-6 space-y-2">
                {job.items.map((item, i) => (
                  <li
                    key={i}
                    className="font-['Geist:Regular',sans-serif] text-[16px] leading-[24px] text-text-primary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
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

