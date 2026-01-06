'use client';

interface IntroSectionProps {
  name: string;
  title: string;
  about: string;
}

export function IntroSection({ name, title, about }: IntroSectionProps) {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[160px] relative shrink-0 w-full" id="intro">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[640px]">
        <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[80px] text-nowrap tracking-[-4px] text-text-primary">
          <p className="leading-[80px]">{name}</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[640px]">
        <div className="flex flex-col font-['Geist:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[32px] text-nowrap text-text-secondary">
          <p className="leading-[40px]">{title}</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full mt-6">
        <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[18px] w-full transition-colors text-text-primary">
          <p className="mb-0">{about}</p>
        </div>
      </div>
    </div>
  );
}

