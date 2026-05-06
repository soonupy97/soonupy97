import { useRef, type RefObject, type CSSProperties } from 'react'

type Spot = CSSProperties & { '--mx': string; '--my': string }

export function usePointerSpot<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  const onMove = (e: React.PointerEvent<T>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    el.style.setProperty('--mx', `${x}%`)
    el.style.setProperty('--my', `${y}%`)
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--mx', `50%`)
    el.style.setProperty('--my', `50%`)
  }

  const initial: Spot = { '--mx': '50%', '--my': '50%' }

  return {
    ref: ref as RefObject<T>,
    handlers: { onPointerMove: onMove, onPointerLeave: onLeave },
    style: initial,
  }
}
