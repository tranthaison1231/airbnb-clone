import Carousel from "@/components/ui/carousel";

export default function Component() {
  return (
    <div className="max-w-9xl mx-auto rounded-xl">
      <Carousel
        loop
        autoplay
        controls={false}
        className="mt-20 aspect-auto w-full"
        autoplayDelay={5000}
        transition={{
          duration: 1,
          type: 'tween',
        }}
        images={[
          'https://a0.muscache.com/im/pictures/f55f9b78-a9f0-4449-9353-79010ea16221.jpg',
          'https://a0.muscache.com/im/pictures/9196e84a-47e1-4fd2-8a6d-dc9face35440.jpg',
          'https://a0.muscache.com/im/pictures/ad4481c2-d06c-47a1-9de9-2d76c4c0c832.jpg'
        ]}
      />
    </div>
  )
}
