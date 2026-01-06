'use client';

import { EditableField } from '@/components/molecules/EditableField';

interface EditableIntroSectionProps {
  name: string;
  title: string;
  about: string;
  onNameChange: (name: string) => void;
  onTitleChange: (title: string) => void;
  onAboutChange: (about: string) => void;
  isEditing: boolean;
}

export function EditableIntroSection({
  name,
  title,
  about,
  onNameChange,
  onTitleChange,
  onAboutChange,
  isEditing,
}: EditableIntroSectionProps) {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[220px] relative shrink-0 w-full" id="intro">

      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[640px]">
        <EditableField
          value={name}
          onChange={onNameChange}
          isEditing={isEditing}
          className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[80px] relative shrink-0 text-[80px] text-nowrap tracking-[-4px] text-text-primary"
        />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[640px] mt-4">
        <EditableField
          value={title}
          onChange={onTitleChange}
          isEditing={isEditing}
          className="flex flex-col font-['Geist:Light',sans-serif] font-light justify-center leading-[40px] relative shrink-0 text-[32px] text-nowrap text-text-secondary"
        />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full mt-6">
        <EditableField
          value={about}
          onChange={onAboutChange}
          isEditing={isEditing}
          as="textarea"
          multiline
          rows={3}
          className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[18px] w-full transition-colors text-text-primary"
          placeholder="About text..."
        />
      </div>
    </div>
  );
}

