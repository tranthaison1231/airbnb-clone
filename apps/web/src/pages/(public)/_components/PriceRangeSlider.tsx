import { cn } from '@/utils/cn'
import * as Slider from '@radix-ui/react-slider'

const RANGES = [
  {
    price: 10,
    quantity: 10
  },  
  {
    price: 20,
    quantity: 12
  },
  {
    price: 30,
    quantity: 4
  },
  {
    price: 40,
    quantity: 11
  },
  {
    price: 50,
    quantity: 4
  },
  {
    price: 60,
    quantity: 7
  },
  {
    price: 70,
    quantity: 12
  },
  {
    price: 80,
    quantity: 2
  },
  {
    price: 90,
    quantity: 12
  },
  {
    price: 100,
    quantity: 22
  },
  {
    price: 110,
    quantity: 23
  },
  {
    price: 120,
    quantity: 18
  },
  {
    price: 130,
    quantity: 10
  },
  {
    price: 140,
    quantity: 14
  },
  {
    price: 150,
    quantity: 13
  },
  {
    price: 170,
    quantity: 12
  },
  {
    price: 180,
    quantity: 17
  }
]

function findLargestQuantity() {
  const sorted = [...RANGES].sort((a, b) => b.quantity - a.quantity)
  return sorted[0]
}

interface Props {
  value: number[]
  onValueChange: (value: number[]) => void
}


export default function PriceRangeSlider({ value, onValueChange }: Props) {
  const { quantity } = findLargestQuantity()
  return (
    <div
      className="relative grid h-16 gap-0.5"
      style={{ gridTemplateColumns: `repeat(${RANGES.length}, minmax(0, 1fr))` }}
    >
      {RANGES.map(range => (
        <div key={range.price} className="flex items-end">
          <div
            className={cn('w-full bg-gray-100 text-white', {
              'bg-black': value[0] < range.price && value[1] >= range.price
            })}
            style={{ height: `${(range.quantity / quantity) * 100}%` }}
          />
        </div>
      ))}
      <Slider.Root
        value={value}
        max={180}
        onValueChange={onValueChange}
        step={1}
        className="absolute bottom-0 flex w-full touch-none select-none items-center"
      >
        <Slider.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-secondary">
          <Slider.Range className="absolute h-full bg-black " />
        </Slider.Track>
        <Slider.Thumb className="group relative block h-6 w-6 cursor-pointer rounded-full border bg-white shadow-xl outline-none transition-colors active:scale-125 disabled:pointer-events-none disabled:opacity-50" />
        <Slider.Thumb className="group relative block h-6 w-6 cursor-pointer rounded-full border bg-white shadow-xl outline-none transition-colors active:scale-125 disabled:pointer-events-none disabled:opacity-50" />
      </Slider.Root>
    </div>
  )
}
