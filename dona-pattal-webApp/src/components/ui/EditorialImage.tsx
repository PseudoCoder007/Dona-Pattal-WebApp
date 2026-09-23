import Image from 'next/image';

export type AspectRatio = '16/10' | '16/9' | '4/3' | '4/5' | '1/1';

const aspectClass: Record<AspectRatio, string> = {
  '16/10': 'aspect-[16/10]',
  '16/9': 'aspect-[16/9]',
  '4/3': 'aspect-[4/3]',
  '4/5': 'aspect-[4/5]',
  '1/1': 'aspect-square',
};

interface EditorialImageProps {
  src: string;
  alt: string;
  caption?: string;
  badge?: string;
  badgePosition?: 'top-left' | 'bottom-left' | 'top-right';
  hoverZoom?: boolean;
  aspectRatio?: AspectRatio;
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
    'top-left': 'absolute top-5 left-5',
    'bottom-left': 'absolute bottom-5 left-5',
    'top-right': 'absolute top-5 right-5',
  };

  return (
    <div className={`relative rounded-lg overflow-hidden bg-paper border border-stone shadow-xl ${className}`}>
      <div className={`relative ${aspectClass[aspectRatio] ?? aspectClass['4/3']} overflow-hidden ${hoverZoom ? 'group' : ''}`}>
        <Image
          alt={alt}
          className={`object-cover ${hoverZoom ? 'group-hover:scale-105 transition-transform duration-300' : ''}`}
          src={src}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
        {badge && (
          <span className={`${badgePositions[badgePosition]} bg-ink/90 text-paper px-3 py-1.5 rounded-sm text-[11px] font-semibold tracking-wider uppercase backdrop-blur-sm`}>
            {badge}
          </span>
        )}
        {caption && (
          <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-sm border border-stone shadow-md flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-brick inline-block" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-ink">{caption}</span>
          </div>
        )}
      </div>
    </div>
  );
}
