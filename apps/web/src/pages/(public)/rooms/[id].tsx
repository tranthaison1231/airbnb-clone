import { cn } from "@/utils/cn";
import LanguagesPopover from "./_components/LanguagesPopover";
import PriceCalculator from "./_components/PriceCalculator";


const IMAGES = [
  'https://a0.muscache.com/im/pictures/c0b5943a-9c0c-449c-ab3b-cf148b8471c3.jpg?im_w=1200',
  'https://a0.muscache.com/im/pictures/e40a3f76-fefd-4fbb-893c-e1e2b2c6c8ca.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/9df73161-3743-4cdb-bc98-864e408af6f0.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/788ec8d8-fdd2-4c45-b6ed-a8b44d98a8df.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/6713071b-519d-49ad-bc64-76db60d8de9d.jpg?im_w=720',
  'https://a0.muscache.com/im/pictures/6713071b-519d-49ad-bc64-76db60d8de9d.jpg?im_w=720'
]

export default function Component() {
  return (
    <div>
      <h1 className="flex gap-2 text-2xl font-medium">
        <LanguagesPopover />
        Flower Dam Garden (Flower Dam Academy)
      </h1>
      <div className="mt-6 grid grid-cols-4 grid-rows-2 gap-2">
        {IMAGES.slice(0, 5).map((image, index) => (
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
      <div className="flex justify-between mt-10">
        <div className="w-2/3">
            Hello
        </div>
        <div className="w-1/3">
          <PriceCalculator />
        </div>
      </div>
    </div>
  )
}
