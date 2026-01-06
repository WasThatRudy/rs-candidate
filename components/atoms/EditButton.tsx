'use client';

import { Edit2, Save, X } from 'lucide-react';

interface EditButtonProps {
  isEditing: boolean;
  onEdit: () => void;
  onSave?: () => void;
  onCancel?: () => void;
  className?: string;
}

export function EditButton({
  isEditing,
  onEdit,
  onSave,
  onCancel,
  className = '',
}: EditButtonProps) {
  if (isEditing) {
    return (
      <div className={`flex gap-2 ${className}`}>
        {onSave && (
          <button
            onClick={onSave}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors bg-card-bg border-border hover:bg-accent hover:text-white text-accent"
            aria-label="Save changes"
          >
            <Save size={16} />
            <span className="text-sm font-medium">Save</span>
          </button>
        )}
        {onCancel && (
          <button
            onClick={onCancel}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors bg-card-bg border-border hover:bg-border text-text-secondary"
            aria-label="Cancel editing"
          >
            <X size={16} />
            <span className="text-sm font-medium">Cancel</span>
          </button>
        )}
      </div>
    );
  }

  return (
    <button
      onClick={onEdit}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors bg-card-bg border-border hover:bg-accent hover:text-white text-accent ${className}`}
      aria-label="Edit"
    >
      <Edit2 size={16} />
      <span className="text-sm font-medium">Edit</span>
    </button>
  );
}

