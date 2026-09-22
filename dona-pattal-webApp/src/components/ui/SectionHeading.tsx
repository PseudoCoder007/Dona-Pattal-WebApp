import Link from 'next/link';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  action?: { label: string; href: string };
  className?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, description, action, className = '', align = 'left' }: SectionHeadingProps) {
  const alignClasses = align === 'center' ? 'text-center' : '';

  return (
    <div className={`space-y-3 ${alignClasses} ${className}`}>
      <span className="inline-flex items-center gap-2 text-xs tracking-[0.25em] font-bold text-brick uppercase">
        <span className="w-5 h-[1.5px] bg-brass inline-block" />
        {eyebrow}
      </span>
      <h2 className="font-serif text-3xl lg:text-4xl font-bold text-ink leading-[1.15] tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-sm text-muted leading-relaxed max-w-2xl">{description}</p>
      )}
      {action && (
        <Link
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brick hover:text-brick/90 transition-colors"
          href={action.href}
        >
          {action.label}
          <span>→</span>
        </Link>
      )}
    </div>
  );
}