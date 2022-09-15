import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...htmlAttrs }: InputProps) {
  return (
    <input
      {...htmlAttrs}
      className="rounded py-3 px-4 bg-zinc-900 text-sm placeholder:text-zinc-500"
    />
  );
}
