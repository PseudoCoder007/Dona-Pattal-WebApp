import Image from 'next/image';

interface EditorialImageProps {
  src: string;
  alt: string;
  caption?: string;
  badge?: string;
  badgePosition?: 'top-left' | 'bottom-left' | 'top-right';
  hoverZoom?: boolean;
  aspectRatio?: string;
  className?: string;
}

export function EditorialImage({
  src,
  alt,
  caption,
  badge,
  badgePosition = 'top-left',
  hoverZoom = true,
  aspectRatio = '4/3',
  className = '',
}: EditorialImageProps) {
  const badgePositions = {
    'top-left': 'absolute top-3 left-3',
    'bottom-left': 'absolute bottom-3 left-3',
    'top-right': 'absolute top-3 right-3',
  };

  return (
    <div className={`relative rounded-lg overflow-hidden bg-paper border border-stone ${className}`}>
      <div className={`relative aspect-[${aspectRatio}] overflow-hidden ${hoverZoom ? 'group' : ''}`}>
        <Image
          alt={alt}
          className={`object-cover ${hoverZoom ? 'group-hover:scale-105 transition-transform duration-300' : ''}`}
          src={src}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
        {badge && (
          <span className={`${badgePositions[badgePosition]} bg-white/90 text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-sm text-ink border border-stone/30`}>
            {badge}
          </span>
        )}
      </div>
      {caption && (
        <div className="absolute bottom-4 left-4 right-4 bg-ink/90 backdrop-blur-sm p-3 rounded-sm border border-stone/30">
          <span className="text-[11px] font-bold tracking-widest uppercase text-paper">{caption}</span>
        </div>
      )}
    </div>
  );
}
