'use client';

import { Edit2, Save, X, Eye } from 'lucide-react';

interface GlobalEditToggleProps {
  isEditMode: boolean;
  onToggleEdit: () => void;
  onSave?: () => void;
  onCancel?: () => void;
}

export function GlobalEditToggle({
  isEditMode,
  onToggleEdit,
  onSave,
  onCancel,
}: GlobalEditToggleProps) {
  if (isEditMode) {
    return (
      <div className="fixed top-8 left-8 z-50 flex gap-2">
        <button
          onClick={onSave}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors bg-card-bg border-border hover:bg-accent hover:text-white text-accent shadow-lg"
          aria-label="Save all changes"
        >
          <Save size={16} />
          <span className="text-sm font-medium">Save All</span>
        </button>
        <button
          onClick={onCancel}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors bg-card-bg border-border hover:bg-border text-text-secondary shadow-lg"
          aria-label="Cancel editing"
        >
          <X size={16} />
          <span className="text-sm font-medium">Cancel</span>
        </button>
        <button
          onClick={onToggleEdit}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors bg-card-bg border-border hover:bg-border text-text-secondary shadow-lg"
          aria-label="Exit edit mode"
        >
          <Eye size={16} />
          <span className="text-sm font-medium">View Mode</span>
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={onToggleEdit}
      className="fixed top-8 left-8 z-50 flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors bg-card-bg border-border hover:bg-accent hover:text-white text-accent shadow-lg"
      aria-label="Enter edit mode"
    >
      <Edit2 size={16} />
      <span className="text-sm font-medium">Edit Mode</span>
    </button>
  );
}

