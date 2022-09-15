import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...htmlAttrs }: InputProps) {
  return (
    <input
      {...htmlAttrs}
      className="block w-full rounded py-3 px-4 mt-2 bg-zinc-900 text-sm placeholder:text-zinc-500"
    />
  );
}
