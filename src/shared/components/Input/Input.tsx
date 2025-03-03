import clsx from 'clsx';
import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';

interface InputProps {
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  value?: string | number;
  required?: boolean;
  placeholder?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  centeredError?: boolean;
}

function Input({
  type,
  label,
  value,
  placeholder,
  required,
  onChange,
  error,
  className,
  centeredError,
  ...props
}: InputProps & React.HTMLProps<HTMLInputElement>) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      {label && (
        <label className="block text-left font-semibold">{label}</label>
      )}
      <div className="relative">
        <input
          type={showPassword ? 'text' : type}
          value={value}
          required={required}
          placeholder={placeholder}
          onChange={onChange}
          className={clsx(
            'my-2 block w-full rounded-md border px-4 py-2 shadow focus:outline-none',
            error ? 'border-red-400' : 'border-transparent',
            className
          )}
          {...props}
        />
        {type === 'password' && (
          <button
            type="button"
            className="absolute right-4 top-2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeIcon className="h-6 w-6 text-gray-500" /> : <EyeOffIcon className="h-6 w-6 text-gray-500" />}
          </button>
        )}
      </div>
      {!!error && (
        <p
          className={clsx(
            'mb-2 text-sm text-red-400',
            centeredError ? 'text-center' : 'text-right'
          )}
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;
