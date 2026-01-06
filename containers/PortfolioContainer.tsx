'use client';

import { useState, useEffect } from 'react';
import { useThemeStore } from '@/stores/themeStore';
import { ThemeToggle } from '@/components/atoms/ThemeToggle';
import { GlobalEditToggle } from '@/components/atoms/GlobalEditToggle';
import { EditableProfileSidebar } from '@/components/organisms/EditableProfileSidebar';
import { EditableIntroSection } from '@/components/organisms/EditableIntroSection';
import { TabNavigation } from '@/components/organisms/TabNavigation';
import { EditableInterviewCard } from '@/components/molecules/EditableInterviewCard';
import { TechnicalRatingPanel } from '@/components/organisms/TechnicalRatingPanel';
import { EditablePortfolioContent } from '@/components/organisms/EditablePortfolioContent';
import { socialIcons } from '@/lib/socialIcons';
import type { Interview, Experience } from '@/types';

// Mock data - replace with actual data fetching
const interviews: Interview[] = [
  {
    title: 'Technical Interview - React & System Design',
    duration: '12:34',
    technical: 96,
    communication: 92,
    summary:
      'Exceptional understanding of React ecosystem and component architecture. Strong grasp of performance optimization and state management patterns.',
    skills: [
      {
        name: 'React & Hooks',
        score: 98,
        notes: 'Outstanding knowledge of React fundamentals, hooks, and component lifecycle. Demonstrated advanced patterns like custom hooks and context API usage.',
      },
      {
        name: 'System Design',
        score: 95,
        notes: 'Strong understanding of scalable architecture patterns. Effectively explained trade-offs between different design approaches.',
      },
      {
        name: 'State Management',
        score: 94,
        notes: 'Comprehensive knowledge of Redux, Context API, and modern state management solutions.',
      },
    ],
  },
  {
    title: 'Behavioral Round - Leadership & Communication',
    duration: '8:45',
    technical: 88,
    communication: 94,
    summary:
      'Demonstrates excellent communication skills and team collaboration. Shows maturity in handling conflicts and providing constructive feedback.',
    skills: [
      {
        name: 'Team Leadership',
        score: 96,
        notes: 'Excellent examples of leading cross-functional teams. Demonstrated clear communication and delegation strategies.',
      },
      {
        name: 'Conflict Resolution',
        score: 92,
        notes: 'Strong ability to navigate team disagreements and find win-win solutions. Showed empathy and active listening.',
      },
      {
        name: 'Stakeholder Management',
        score: 88,
        notes: 'Good understanding of managing expectations and communicating with non-technical stakeholders.',
      },
    ],
  },
  {
    title: 'Problem Solving - Live Coding Session',
    duration: '15:20',
    technical: 94,
    communication: 89,
    summary:
      'Strong algorithmic thinking and problem-solving approach. Excellent code organization and ability to optimize solutions incrementally.',
    skills: [
      {
        name: 'Algorithm Design',
        score: 96,
        notes: 'Exceptional ability to identify optimal algorithms and data structures. Strong understanding of time and space complexity.',
      },
      {
        name: 'Code Quality',
        score: 93,
        notes: 'Clean, well-structured code with proper naming conventions and documentation.',
      },
      {
        name: 'Debugging',
        score: 92,
        notes: 'Methodical approach to identifying and fixing issues. Good use of debugging tools and techniques.',
      },
    ],
  },
  {
    title: 'Architecture Discussion - Scalability',
    duration: '10:15',
    technical: 91,
    communication: 90,
    summary:
      'Solid understanding of distributed systems and scalability patterns. Good knowledge of trade-offs in architectural decisions.',
    skills: [
      {
        name: 'Distributed Systems',
        score: 93,
        notes: 'Strong grasp of microservices architecture, service mesh, and inter-service communication patterns.',
      },
      {
        name: 'Database Design',
        score: 89,
        notes: 'Good understanding of SQL and NoSQL databases. Explained sharding and replication strategies effectively.',
      },
      {
        name: 'Cloud Infrastructure',
        score: 91,
        notes: 'Practical experience with AWS/Azure services. Understanding of auto-scaling and load balancing.',
      },
    ],
  },
  {
    title: 'Code Review - Best Practices',
    duration: '9:30',
    technical: 93,
    communication: 91,
    summary:
      'Shows attention to detail and strong understanding of clean code principles. Provides constructive feedback with clear reasoning.',
    skills: [
      {
        name: 'Code Review',
        score: 95,
        notes: 'Thorough and constructive feedback. Identifies security issues, performance bottlenecks, and maintainability concerns.',
      },
      {
        name: 'Best Practices',
        score: 92,
        notes: 'Deep understanding of SOLID principles, design patterns, and coding standards.',
      },
      {
        name: 'Mentorship',
        score: 91,
        notes: 'Clear communication of feedback with actionable suggestions for improvement.',
      },
    ],
  },
  {
    title: 'UI/UX Design Review - User Journey',
    duration: '13:45',
    technical: 89,
    communication: 95,
    summary:
      'Excellent understanding of user-centered design and accessibility. Strong ability to articulate design decisions and user impact.',
    skills: [
      {
        name: 'User Research',
        score: 94,
        notes: 'Strong methodology for conducting user interviews and usability testing. Data-driven design decisions.',
      },
      {
        name: 'Accessibility',
        score: 91,
        notes: 'Comprehensive knowledge of WCAG guidelines and inclusive design principles.',
      },
      {
        name: 'Design Systems',
        score: 87,
        notes: 'Good understanding of component libraries and design token systems.',
      },
    ],
  },
];

const experiences: Experience[] = [
  {
    company: 'Remotestar',
    role: 'Product Designer',
    duration: '2023 - Present',
    items: [
      'Improved UX and UI across apps, enhancing clarity, user flow, and experience.',
      'Rebranded the company with a new logo and wordmark.',
      "Designed and developed Remotestar's landing page in Framer with CMS integration.",
    ],
  },
  {
    company: 'Prauga',
    role: 'Product & UI/UX Designer',
    duration: '2022 - 2023',
    items: [
      'Designed the launcher + full system UI for Prauga OS.',
      'Built complete brand identity: logo, typography, visual language.',
      'Designed and built the official Prauga website in Framer.',
    ],
  },
  {
    company: 'Innovation in Compiler Technology (IICT)',
    role: 'Visual Designer',
    duration: '2021 - 2022',
    items: [
      'Designed and delivered complete visual and motion assets for IICT, including conference branding, banners, stage visuals, and animated intro videos.',
    ],
  },
];

export function PortfolioContainer() {
  const { theme, toggleTheme } = useThemeStore();
  const [activeTab, setActiveTab] = useState<'interviews' | 'portfolio'>(
    'interviews'
  );
  const [selectedInterview, setSelectedInterview] = useState<number | null>(
    null
  );

  // Global edit mode state
  const [isEditMode, setIsEditMode] = useState(false);

  // Editable data states
  const [profileData, setProfileData] = useState({
    timezone: 'Asia/Kolkata',
    languages: ['English', 'Hindi'],
  });

  const [introData, setIntroData] = useState({
    name: 'Shivansh Pandey',
    title: 'Brand, UI/UX, and Graphic Designer',
    about: "I'm a designer who crafts brands from the ground up — from logos and visual identity to websites and digital experiences. I blend design thinking, creativity, and technology to create intuitive, memorable user experiences.",
  });

  const [interviewsData, setInterviewsData] = useState<Interview[]>(interviews);
  const [experiencesData, setExperiencesData] = useState<Experience[]>(experiences);

  // Backup states for cancel functionality
  const [backupProfileData, setBackupProfileData] = useState(profileData);
  const [backupIntroData, setBackupIntroData] = useState(introData);
  const [backupInterviewsData, setBackupInterviewsData] = useState<Interview[]>(interviews);
  const [backupExperiencesData, setBackupExperiencesData] = useState<Experience[]>(experiences);

  // Apply theme on mount
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const stored = localStorage.getItem('theme-storage');
      const initialTheme = stored === 'light' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', initialTheme);
    }
  }, []);

  const selectedInterviewData =
    selectedInterview !== null ? interviewsData[selectedInterview] : null;

  // Global edit mode handlers
  const handleToggleEditMode = () => {
    if (!isEditMode) {
      // Entering edit mode - backup all data
      setBackupProfileData(profileData);
      setBackupIntroData(introData);
      setBackupInterviewsData([...interviewsData]);
      setBackupExperiencesData([...experiencesData]);
    }
    setIsEditMode(!isEditMode);
  };

  const handleSaveAll = () => {
    // Save all changes (they're already in state)
    setIsEditMode(false);
    // Here you could add API call to persist changes
  };

  const handleCancelAll = () => {
    // Revert all changes
    setProfileData(backupProfileData);
    setIntroData(backupIntroData);
    setInterviewsData(backupInterviewsData);
    setExperiencesData(backupExperiencesData);
    setIsEditMode(false);
  };

  return (
    <div className="min-h-screen w-full transition-colors duration-300 bg-background">
      <GlobalEditToggle
        isEditMode={isEditMode}
        onToggleEdit={handleToggleEditMode}
        onSave={handleSaveAll}
        onCancel={handleCancelAll}
      />
      <ThemeToggle theme={theme} onToggle={toggleTheme} />

      <div className="flex flex-row justify-center w-full">
        <div className="content-stretch flex gap-[85px] items-start justify-center overflow-clip pb-[93px] pt-[58px] max-w-[1400px] w-full">
          {/* Left Sidebar */}
          <EditableProfileSidebar
            profileImage="/placeholder-profile.jpg"
            timezone={profileData.timezone}
            languages={profileData.languages}
            socialLinks={[
              {
                platform: 'Behance',
                icon: socialIcons.Behance,
                href: '#',
              },
              {
                platform: 'LinkedIn',
                icon: socialIcons.LinkedIn,
                href: '#',
              },
              {
                platform: 'Instagram',
                icon: socialIcons.Instagram,
                href: '#',
              },
              {
                platform: 'X',
                icon: socialIcons.X,
                href: '#',
              },
              {
                platform: 'Email',
                icon: socialIcons.Email,
                href: 'mailto:example@email.com',
              },
            ]}
            isEditing={isEditMode}
            onTimezoneChange={(timezone) =>
              setProfileData({ ...profileData, timezone })
            }
            onLanguagesChange={(languages) =>
              setProfileData({ ...profileData, languages })
            }
          />

          {/* Main Content */}
          <div className="content-stretch flex flex-col gap-[38px] items-start relative shrink-0 w-[640px]">
            <EditableIntroSection
              name={introData.name}
              title={introData.title}
              about={introData.about}
              onNameChange={(name) => setIntroData({ ...introData, name })}
              onTitleChange={(title) => setIntroData({ ...introData, title })}
              onAboutChange={(about) => setIntroData({ ...introData, about })}
              isEditing={isEditMode}
            />

            <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

            {/* Tab Content */}
            {activeTab === 'interviews' ? (
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                {interviewsData.map((interview, idx) => (
                  <EditableInterviewCard
                    key={idx}
                    interview={interview}
                    onViewDetails={() => !isEditMode && setSelectedInterview(idx)}
                    onInterviewChange={(updatedInterview) => {
                      const newInterviews = [...interviewsData];
                      newInterviews[idx] = updatedInterview;
                      setInterviewsData(newInterviews);
                    }}
                    isEditing={isEditMode}
                  />
                ))}

                {selectedInterviewData && (
                  <TechnicalRatingPanel
                    title={selectedInterviewData.title}
                    skills={selectedInterviewData.skills}
                    onClose={() => setSelectedInterview(null)}
                  />
                )}
              </div>
            ) : (
              <EditablePortfolioContent
                experiences={experiencesData}
                brandDesignImages={[]}
                isEditing={isEditMode}
                onExperiencesChange={setExperiencesData}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

