import { LazyMotion, animate, domAnimation, m, useMotionValue } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'

interface CarouselProps {
  images: string[]
  loop?: boolean
  autoplay?: boolean
  autoplayDelay?: number
  transition?: {
    duration: number
  }
}

export default function Carousel({
  images,
  autoplay = false,
  autoplayDelay = 2000,
  loop = true,
  transition = { duration: 1 }
}: CarouselProps) {
  const [index, setIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)

  const calculateNewX = useCallback(() => -index * (containerRef.current?.clientWidth || 0), [index])

  const handleNext = useCallback(
    (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e?.stopPropagation()
      const idx = loop ? 0 : index
      setIndex(index + 1 === images.length ? idx : index + 1)
    },
    [index, loop, images.length]
  )

  const handlePrev = (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e?.stopPropagation()
    const idx = loop ? images.length - 1 : 0
    setIndex(index - 1 < 0 ? idx : index - 1)
  }

  useEffect(() => {
    const controls = animate(x, calculateNewX(), transition)

    return controls.stop
  }, [calculateNewX, index, x, transition])

  useEffect(() => {
    window.addEventListener('resize', () => {
      animate(x, calculateNewX(), transition)
    })
  }, [calculateNewX, transition, x])

  useEffect(() => {
    if (!autoplay) {
      return
    }

    const timer = setInterval(() => handleNext(), autoplayDelay)

    return () => clearInterval(timer)
  }, [autoplay, handleNext, autoplayDelay])

  return (
    <div ref={containerRef} className="relative flex h-full w-full overflow-x-hidden">
      {images.map((image, i) => (
        <LazyMotion key={i} features={domAnimation}>
          <m.div
            className="inline-block h-full w-full flex-none"
            style={{
              x,
              left: `${i * 100}%`,
              right: `${i * 100}%`
            }}
          >
            <img src={image} className="aspect-square rounded-xl" />
          </m.div>
        </LazyMotion>
      ))}
      <button
        onClick={handlePrev}
        disabled={!loop && index === 0}
        className="!absolute left-4 top-2/4 hidden h-12 max-h-[48px] w-12 max-w-[48px] -translate-y-2/4 select-none place-items-center rounded-full bg-white  text-black transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none group-hover:grid"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
          className="-ml-1 h-7 w-7"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={handleNext}
        disabled={!loop && index === images.length - 1}
        className="!absolute right-4 top-2/4 hidden h-12 max-h-[48px] w-12 max-w-[48px] -translate-y-2/4 select-none place-items-center rounded-full bg-white text-black transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none group-hover:grid"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
          className="ml-1 h-7 w-7"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
      <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
        {new Array(images.length).fill('').map((_, i) => (
          <span
            key={i}
            className={`block h-2 w-2 cursor-pointer rounded-full transition-colors content-[''] ${
              index === i ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={e => {
              e.stopPropagation()
              setIndex(i)
            }}
          />
        ))}
      </div>
    </div>
  )
}
