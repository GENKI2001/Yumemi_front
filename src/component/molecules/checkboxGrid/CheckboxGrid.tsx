// molecules/CheckboxGrid.tsx
import React from 'react';
import Checkbox from '../../atoms/checkbox/CheckboxAtoms';

interface CheckboxOption {
  label: string;
  checked: boolean;
  disabled?: boolean;
}

interface CheckboxGridProps {
  options: CheckboxOption[];
  onChange: (index: number, checked: boolean) => void;
  columns?: number;
}

const CheckboxGrid: React.FC<CheckboxGridProps> = ({
  options,
  onChange,
  columns = 3, // Default to 3 columns
}) => {
  return (
    <div
      className="grid gap-4"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      }}
    >
      {options.map((option, index) => (
        <Checkbox
          key={index}
          label={option.label}
          checked={option.checked}
          disabled={option.disabled}
          onChange={(checked) => onChange(index, checked)}
        />
      ))}
    </div>
  );
};

export default CheckboxGrid;
