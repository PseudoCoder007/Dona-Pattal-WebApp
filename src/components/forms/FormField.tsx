import { forwardRef } from 'react';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  type?: 'text' | 'email' | 'tel' | 'number';
  required?: boolean;
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, type = 'text', required = false, className = '', id, ...props }, ref) => {
    const fieldId = id || label.toLowerCase().replace(/\s+/g, '-');
    return (
      <div className="space-y-1">
        <label className="block text-[11px] font-bold uppercase tracking-wider text-ink mb-1" htmlFor={fieldId}>
          {label} {required && <span className="text-brick">*</span>}
        </label>
        <input
          ref={ref}
          id={fieldId}
          type={type}
          required={required}
          className={`w-full bg-paper/60 border border-stone rounded text-xs py-2.5 px-3 text-ink focus:ring-1 focus:ring-brick focus:border-brick placeholder:text-muted/60 ${error ? 'border-brick' : ''} ${className}`}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${fieldId}-error` : undefined}
          {...props}
        />
        {error && (
          <p id={`${fieldId}-error`} className="text-xs text-brick" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

FormField.displayName = 'FormField';