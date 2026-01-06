'use client';

interface TabNavigationProps {
  activeTab: 'interviews' | 'portfolio';
  onTabChange: (tab: 'interviews' | 'portfolio') => void;
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="flex gap-2 w-full border-b border-border">
      <button
        onClick={() => onTabChange('interviews')}
        className="px-6 py-3 transition-all relative"
      >
        <span
          className={`font-['Geist:SemiBold',sans-serif] text-[16px] ${
            activeTab === 'interviews'
              ? 'text-accent'
              : 'text-text-secondary'
          }`}
        >
          RemoteStar AI Interviews
        </span>
        {activeTab === 'interviews' && (
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent" />
        )}
      </button>
      <button
        onClick={() => onTabChange('portfolio')}
        className="px-6 py-3 transition-all relative"
      >
        <span
          className={`font-['Geist:SemiBold',sans-serif] text-[16px] ${
            activeTab === 'portfolio'
              ? 'text-accent'
              : 'text-text-secondary'
          }`}
        >
          Portfolio
        </span>
        {activeTab === 'portfolio' && (
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent" />
        )}
      </button>
    </div>
  );
}

