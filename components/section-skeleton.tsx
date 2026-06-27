export function SectionSkeleton({ className = 'h-[28rem]' }: { className?: string }) {
  return (
    <div
      className={`bg-surface animate-pulse ${className}`}
      aria-hidden="true"
    />
  )
}
