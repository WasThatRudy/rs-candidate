'use client';

import Image from 'next/image';

interface ProfileSidebarProps {
  profileImage?: string;
  timezone?: string;
  languages?: string[];
  socialLinks?: Array<{
    platform: string;
    icon: React.ReactNode;
    href?: string;
  }>;
}

export function ProfileSidebar({
  profileImage,
  timezone = 'Asia/Kolkata',
  languages = ['English', 'Hindi'],
  socialLinks = [],
}: ProfileSidebarProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 sticky top-[58px] self-start">
      {/* Profile Image */}
      <div className="backdrop-blur backdrop-filter p-px relative rounded-[15984px] shrink-0 size-[160px] transition-colors bg-card-bg">
        <div
          aria-hidden="true"
          className="absolute border border-solid inset-0 pointer-events-none rounded-[15984px] border-profile-border"
        />
        <div className="relative shrink-0 rounded-[15984px] size-[158px]">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {profileImage ? (
                <Image
                  alt="Profile"
                  src={profileImage}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="size-full bg-border" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Timezone */}
      {timezone && (
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 mt-4">
          <div className="relative shrink-0 size-[24px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 24 24"
            >
              <g id="SVG">
                <path
                  clipRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.72-2.77-.01-1.54-1.31-2.46-3.65-3.03z"
                  fill="#FF9689"
                  fillRule="evenodd"
                />
              </g>
            </svg>
          </div>
          <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-text-primary">
            <p className="leading-[normal]">{timezone}</p>
          </div>
        </div>
      )}

      {/* Languages */}
      <div className="content-stretch flex flex-wrap gap-[0px_8px] items-start relative shrink-0 mt-4">
        {languages.map((lang) => (
          <div
            key={lang}
            className="content-stretch flex items-center px-[17px] py-[5px] relative rounded-[16px] self-stretch shrink-0 border transition-colors bg-card-bg border-border"
          >
            <div className="font-['Geist:Regular',sans-serif] text-[13.2px] text-nowrap text-text-tertiary">
              <p className="leading-[16px]">{lang}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Social Links */}
      {socialLinks.length > 0 && (
        <div className="content-start flex flex-wrap gap-[8px] items-start pt-[20px] relative shrink-0">
          {socialLinks.map(({ platform, icon, href }) => {
            const content = (
              <div className="flex items-center justify-center size-[32px] relative rounded-[20px] shrink-0 border transition-colors hover:scale-105 cursor-pointer bg-tag-bg border-border">
                <div className="relative shrink-0 size-[16px]">{icon}</div>
              </div>
            );

            return href ? (
              <a
                key={platform}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={platform}
              >
                {content}
              </a>
            ) : (
              <div key={platform}>{content}</div>
            );
          })}
        </div>
      )}
    </div>
  );
}

