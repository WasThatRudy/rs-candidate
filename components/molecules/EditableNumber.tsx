'use client';

interface EditableNumberProps {
  value: number;
  onChange: (value: number) => void;
  isEditing: boolean;
  min?: number;
  max?: number;
  className?: string;
  suffix?: string;
}

export function EditableNumber({
  value,
  onChange,
  isEditing,
  min = 0,
  max = 100,
  className = '',
  suffix = '',
}: EditableNumberProps) {
  if (!isEditing) {
    return (
      <span className={className}>
        {value}{suffix}
      </span>
    );
  }

  return (
    <div className="flex items-center gap-1">
      <input
        type="number"
        value={value}
        onChange={(e) => {
          const num = parseInt(e.target.value, 10);
          if (!isNaN(num) && num >= min && num <= max) {
            onChange(num);
          }
        }}
        min={min}
        max={max}
        className="w-20 bg-input-bg border border-border rounded-lg px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
      />
      {suffix && <span className={className}>{suffix}</span>}
    </div>
  );
}
