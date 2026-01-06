'use client';

import { EditableField } from '@/components/molecules/EditableField';
import { EditableNumber } from '@/components/molecules/EditableNumber';
import type { Interview } from '@/types';

interface EditableInterviewCardProps {
  interview: Interview;
  onViewDetails: () => void;
  onInterviewChange: (interview: Interview) => void;
  isEditing: boolean;
}

export function EditableInterviewCard({
  interview,
  onViewDetails,
  onInterviewChange,
  isEditing,
}: EditableInterviewCardProps) {
  const updateField = <K extends keyof Interview>(
    field: K,
    value: Interview[K]
  ) => {
    onInterviewChange({ ...interview, [field]: value });
  };

  return (
    <div
      className={`p-6 rounded-[16px] border transition-colors bg-card-bg border-border ${
        !isEditing ? 'cursor-pointer hover:scale-[1.02]' : ''
      }`}
      onClick={!isEditing ? onViewDetails : undefined}
    >

      <div className="flex justify-between items-start mb-3">
        <EditableField
          value={interview.title}
          onChange={(value) => updateField('title', value)}
          isEditing={isEditing}
          className="font-['Geist:SemiBold',sans-serif] text-[18px] text-text-primary flex-1"
        />
        <EditableField
          value={interview.duration}
          onChange={(value) => updateField('duration', value)}
          isEditing={isEditing}
          className="font-['Geist:Regular',sans-serif] text-[14px] text-text-secondary ml-4"
        />
      </div>

      <div className="flex gap-4 mb-3">
        <div className="flex flex-col">
          <span className="font-['Geist:Regular',sans-serif] text-[12px] text-text-secondary">
            Technical
          </span>
          <EditableNumber
            value={interview.technical}
            onChange={(value) => updateField('technical', value)}
            isEditing={isEditing}
            suffix="%"
            className="font-['Geist:SemiBold',sans-serif] text-[16px] text-accent"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-['Geist:Regular',sans-serif] text-[12px] text-text-secondary">
            Communication
          </span>
          <EditableNumber
            value={interview.communication}
            onChange={(value) => updateField('communication', value)}
            isEditing={isEditing}
            suffix="%"
            className="font-['Geist:SemiBold',sans-serif] text-[16px] text-accent"
          />
        </div>
      </div>

      <EditableField
        value={interview.summary}
        onChange={(value) => updateField('summary', value)}
        isEditing={isEditing}
        as="textarea"
        multiline
        rows={3}
        className="w-full font-['Geist:Regular',sans-serif] text-[14px] leading-[20px] text-text-primary"
        placeholder="Interview summary..."
      />
    </div>
  );
}

