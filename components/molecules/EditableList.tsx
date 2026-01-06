'use client';

import { Plus, Trash2 } from 'lucide-react';

interface EditableListProps {
  items: string[];
  onChange: (items: string[]) => void;
  isEditing: boolean;
  placeholder?: string;
}

export function EditableList({
  items,
  onChange,
  isEditing,
  placeholder = 'Add item...',
}: EditableListProps) {
  const updateItem = (index: number, value: string) => {
    const newItems = [...items];
    newItems[index] = value;
    onChange(newItems);
  };

  const addItem = () => {
    onChange([...items, '']);
  };

  const removeItem = (index: number) => {
    onChange(items.filter((_, i) => i !== index));
  };

  if (!isEditing) {
    return (
      <ul className="list-disc ml-6 space-y-2">
        {items.map((item, i) => (
          <li key={i} className="font-['Geist:Regular',sans-serif] text-[16px] leading-[24px] text-text-primary">
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="flex gap-2 items-start">
          <input
            type="text"
            value={item}
            onChange={(e) => updateItem(i, e.target.value)}
            className="flex-1 bg-input-bg border border-border rounded-lg px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder={placeholder}
          />
          <button
            onClick={() => removeItem(i)}
            className="p-2 rounded-lg border border-border hover:bg-border text-text-secondary transition-colors"
            aria-label="Remove item"
          >
            <Trash2 size={16} />
          </button>
        </div>
      ))}
      <button
        onClick={addItem}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-border text-accent transition-colors"
      >
        <Plus size={16} />
        <span className="text-sm">Add Item</span>
      </button>
    </div>
  );
}

