import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'whatsapp' | 'ghost';
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = 'primary',
  href,
  target,
  rel,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-5 py-3.5 rounded-sm text-xs font-bold tracking-widest uppercase transition-all shadow-sm';

  const variants = {
    primary: 'bg-brick hover:bg-brick/90 text-white',
    secondary: 'bg-white border border-stone hover:border-brick text-ink',
    whatsapp: 'bg-oxblood hover:bg-ink text-paper',
    ghost: 'bg-transparent border border-ink text-ink hover:bg-ink hover:text-paper',
  };

  const classNames = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return <Link className={classNames} href={href} target={target} rel={rel}>{children}</Link>;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { onCopy, onCut, onPaste, ...buttonProps } = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return <button className={classNames} {...buttonProps}>{children}</button>;
}
