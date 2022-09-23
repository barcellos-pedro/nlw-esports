//import * as Checkbox from '@radix-ui/react-checkbox';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

interface CheckBoxProps {
  id: string;
  name: string;
  label: string;
  containerColor: string;
  indicatorColor: string;
  iconSize: number;
  onChange: (checked: boolean) => void;
}

export function Checkbox({
  id,
  name,
  containerColor,
  onChange,
  indicatorColor,
  iconSize,
  label,
}: CheckBoxProps) {
  return (
    <>
      <RadixCheckbox.Root
        id={id}
        name={name}
        className={`${containerColor} p-1 rounded h-7 w-7`}
        onCheckedChange={onChange}
      >
        <RadixCheckbox.Indicator className={indicatorColor}>
          <Check size={iconSize} />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
      </label>
    </>
  );
}
