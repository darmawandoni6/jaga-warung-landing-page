import { cn } from '@/lib/utils'

interface PhoneMockupProps {
  src: string
  alt: string
  className?: string
  maxWidth?: string
}

export function PhoneMockup({
  src,
  alt,
  className,
  maxWidth = '280px',
}: PhoneMockupProps) {
  return (
    <div className={cn('relative mx-auto', className)} style={{ maxWidth }}>
      {/* Phone Frame */}
      <div className="relative bg-slate-900 rounded-[2.5rem] p-3 shadow-xl">
        {/* Side Buttons */}
        <div className="absolute right-[-3px] top-24 w-1 h-12 bg-slate-800 rounded-l-sm" />
        <div className="absolute right-[-3px] top-40 w-1 h-16 bg-slate-800 rounded-l-sm" />
        <div className="absolute left-[-3px] top-20 w-1 h-8 bg-slate-800 rounded-r-sm" />
        <div className="absolute left-[-3px] top-32 w-1 h-12 bg-slate-800 rounded-r-sm" />

        {/* Screen */}
        <div className="relative bg-black rounded-[2rem] overflow-hidden aspect-[9/19.5]">
          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-black z-10 flex items-center justify-between px-6 text-white text-xs">
            <span>9:41</span>
            {/* Punch Hole Camera */}
            <div className="absolute left-1/2 top-1.5 -translate-x-1/2 w-2 h-2 bg-slate-800 rounded-full" />
            <div className="flex items-center gap-1">
              <div className="w-3 h-2 border border-white/50 rounded-sm" />
              <div className="w-4 h-2 bg-white/80 rounded-sm" />
            </div>
          </div>

          {/* App Screenshot */}
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
          />

          {/* Home Indicator */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/80 rounded-full" />
        </div>
      </div>
    </div>
  )
}
