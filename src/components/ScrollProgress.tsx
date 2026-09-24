import { useScrollProgress } from '@/hooks/useScrollProgress'

export default function ScrollProgress() {
  const progress = useScrollProgress()
  return (
    <div className="fixed left-0 top-0 z-[60] h-[3px] w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-py-blue to-py-yellow transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
