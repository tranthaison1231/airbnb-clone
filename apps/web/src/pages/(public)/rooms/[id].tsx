import { fetchRoom } from "@/apis/rooms";
import { useParams } from "@/router";
import { cn } from "@/utils/cn";
import { useQuery } from "@tanstack/react-query";
import LanguagesPopover from "./_components/LanguagesPopover";
import PriceCalculator from "./_components/PriceCalculator";


export default function Component() {
  const { id } = useParams("/rooms/:id")


  const roomQuery = useQuery({
    queryKey: ['rooms', id],
    queryFn: () => fetchRoom(id),
  })

  return (
    <div>
      <h1 className="flex gap-2 text-2xl font-medium">
        <LanguagesPopover />
        Flower Dam Garden (Flower Dam Academy)
      </h1>
      <div className="mt-6 grid grid-cols-4 grid-rows-2 gap-2">
        {roomQuery.data?.images?.slice(0, 5).map((image, index) => (
          <img
            key={image}
            src={image}
            className={cn({
              'col-span-2 row-span-2': index === 0,
              'rounded-s-xl': index === 0,
              'rounded-tr-xl': index === 2,
              'rounded-br-xl': index === 4
            })}
          />
        ))}
      </div>
      <div className="mt-10 flex justify-between">
        <div className="w-2/3">Hello</div>
        <div className="w-1/3">
          <PriceCalculator />
        </div>
      </div>
    </div>
  )
}
