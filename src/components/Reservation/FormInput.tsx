import React from 'react';

interface FormInputProps {
  label: string;
  name: string;
  type: string;
  value: string;
  error?: string | null;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  maxLength?: number;
  pattern?: string;
}

export function FormInput({
  label,
  name,
  type,
  value,
  error,
  required = false,
  onChange,
  onBlur,
  maxLength,
  pattern
}: FormInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        maxLength={maxLength}
        pattern={pattern}
        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        aria-invalid={error ? 'true' : 'false'}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}