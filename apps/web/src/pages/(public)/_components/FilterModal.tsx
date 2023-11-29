import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Minus, SlidersHorizontal } from 'lucide-react'
import { useState } from 'react'
import PriceRangeSlider from './PriceRangeSlider'

export default function FilterModal() {
  const [tab, setTab] = useState('any')
  const [range, setRange] = useState([10, 180])
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex h-fit items-center gap-2 rounded-lg border p-3">
          <SlidersHorizontal />
          Filters
        </button>
      </DialogTrigger>
      <DialogContent className="relative block h-[90vh] p-0 sm:max-w-[888px]">
        <h1 className="my-6 text-center font-bold"> Filters </h1>
        <hr />
        <div className="h-[calc(100vh-16rem)] overflow-y-auto">
          <div className="p-6">
            <h1 className="text-xl font-medium"> Type of place </h1>
            <p className="text-sm"> Search rooms, entire homes, or any type of place. </p>
            <Tabs value={tab} className="w-full" onValueChange={setTab}>
              <TabsList className="m-10 mt-6 grid grid-cols-3 space-x-0 rounded-xl border">
                <TabsTrigger
                  value="any"
                  className="w-full rounded-s-xl border-none py-4 data-[state=active]:bg-black data-[state=active]:text-white"
                >
                  Any Type
                </TabsTrigger>
                <TabsTrigger
                  value="room"
                  className="w-full border-l border-r py-4 data-[state=active]:bg-black data-[state=active]:text-white"
                >
                  Room
                </TabsTrigger>
                <TabsTrigger
                  value="entire"
                  className="w-full rounded-e-xl border-none py-4 data-[state=active]:bg-black data-[state=active]:text-white"
                >
                  Entire Home
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <hr className="mb-8" />
            <h1 className="text-xl font-medium">Price range</h1>
            <p className="mb-6 text-sm">Nightly prices before fees and taxes </p>
            <div className="space-y-12 px-10">
              <PriceRangeSlider value={range} onValueChange={setRange} />
              <div className="flex w-full items-center justify-between gap-4">
                <Input
                  type="number"
                  placeholder="Minimum"
                  value={range[0]}
                  onChange={e => setRange(range =>[Number(e.target.value), range[0]])}
                  min={10}
                />
                <Minus size={40} />
                <Input
                  type="number"
                  placeholder="Maximum"
                  value={range[1]}
                  onChange={e => setRange(range =>[range[1], Number(e.target.value)])}
                  max={180}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 flex w-full items-center justify-between border-t px-6 py-4">
          <p className="underline">Clear all</p>
          <Button size="lg" className="bg-black/80 hover:bg-black">
            Show 661 places
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
