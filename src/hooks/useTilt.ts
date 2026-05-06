import { useRef, type RefObject } from 'react'

export function useTilt<T extends HTMLElement>(strength = 8) {
  const ref = useRef<T | null>(null)

  const onMove = (e: React.PointerEvent<T>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.setProperty('--tx', `${x * strength}deg`)
    el.style.setProperty('--ty', `${-y * strength}deg`)
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--tx', `0deg`)
    el.style.setProperty('--ty', `0deg`)
  }

  return {
    ref: ref as RefObject<T>,
    handlers: { onPointerMove: onMove, onPointerLeave: onLeave },
  }
}
