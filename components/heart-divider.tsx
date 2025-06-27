import { Heart } from "lucide-react"

interface HeartDividerProps {
  className?: string
}

export default function HeartDivider({ className }: HeartDividerProps) {
  return (
    <div className={`flex items-center justify-center my-8 ${className}`}>
      <div className="h-px bg-muted flex-1" />
      <Heart className="h-6 w-6 mx-4 text-italian-red" fill="currentColor" />
      <div className="h-px bg-muted flex-1" />
    </div>
  )
}
