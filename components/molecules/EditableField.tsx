'use client';

import { useState, useEffect } from 'react';

interface EditableFieldProps {
  value: string;
  onChange: (value: string) => void;
  isEditing: boolean;
  as?: 'input' | 'textarea';
  className?: string;
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
}

export function EditableField({
  value,
  onChange,
  isEditing,
  as = 'input',
  className = '',
  placeholder = '',
  multiline = false,
  rows = 3,
}: EditableFieldProps) {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  if (!isEditing) {
    return (
      <div className={className}>
        {value || <span className="text-text-secondary opacity-50">{placeholder}</span>}
      </div>
    );
  }

  // Base styles for edit mode - NO width classes, inherit from className
  const baseInputStyles = 'bg-input-bg border border-border rounded-lg px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent';

  if (as === 'textarea' || multiline) {
    return (
      <textarea
        value={localValue}
        onChange={(e) => {
          setLocalValue(e.target.value);
          onChange(e.target.value);
        }}
        className={`${baseInputStyles} ${className}`}
        placeholder={placeholder}
        rows={rows}
      />
    );
  }

  return (
    <input
      type="text"
      value={localValue}
      onChange={(e) => {
        setLocalValue(e.target.value);
        onChange(e.target.value);
      }}
      className={`${baseInputStyles} ${className}`}
      placeholder={placeholder}
    />
  );
}
