// atoms/Checkbox.tsx
import React from 'react';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled = false,
}) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        data-testid="checkbox-input"
        checked={checked}
        onChange={(e) => {
          if (!disabled) {
            onChange(e.target.checked);
          }
        }}
        disabled={disabled}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 cursor-pointer disabled:cursor-not-allowed"
      />
      <label
        data-testid="checkbox-atoms-label"
        className="text-sm text-gray-700 select-none cursor-pointer disabled:cursor-not-allowed"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
