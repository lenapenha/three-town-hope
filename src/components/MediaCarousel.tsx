import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from "next/image"
import carousel0 from "@/assets/media/carousel0.jpg";
import carousel1 from "@/assets/media/carousel1.jpg";
import carousel2 from "@/assets/media/carousel2.jpg";
import carousel3 from "@/assets/media/carousel3.jpg";
import carousel4 from "@/assets/media/carousel4.jpg";
import carousel5 from "@/assets/media/carousel5.jpg";

export default function MediaCarousel() {
    return (
        <div className="flex min-h-40 items-center justify-center max-w-6xl">
          <Carousel>
            <CarouselContent >
              <CarouselItem className="md:basis-1/4 lg:basis-1/3"><Image src={carousel0} alt="Three Town Hope Band" width={400} height={250} className="rounded"/></CarouselItem>
              <CarouselItem className="md:basis-1/4 lg:basis-1/3"><Image src={carousel1} alt="Three Town Hope Band"  width={400} height={250} className="rounded"/></CarouselItem>
              <CarouselItem className="md:basis-1/4 lg:basis-1/3"><Image src={carousel2} alt="Three Town Hope Band"  width={400} height={250} className="rounded"/></CarouselItem>
              <CarouselItem className="md:basis-1/4 lg:basis-1/3"><Image src={carousel3} alt="Three Town Hope Band"  width={400} height={250} className="rounded"/></CarouselItem>
              <CarouselItem className="md:basis-1/4 lg:basis-1/3"><Image src={carousel4} alt="Three Town Hope Band"  width={400} height={250} className="rounded"/></CarouselItem>
              <CarouselItem className="md:basis-1/4 lg:basis-1/3"><Image src={carousel5} alt="Three Town Hope Band"  width={400} height={250} className="rounded"/></CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
          {/* <Carousel>
            <CarouselContent >
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"> <iframe  src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61568955864961%2Fvideos%2F1070070054802711%2F&show_text=false&width=560&t=0" title="Living Proof Ministry"  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"> <iframe  src="https://www.facebook.com/plugins/video.php?height=267&href=https%3A%2F%2Fwww.facebook.com%2F61568955864961%2Fvideos%2F938478988343951%2F&show_text=false&width=560&t=0" title="Living Proof Ministry" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"> <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61568955864961%2Fvideos%2F1242839880102172%2F&show_text=false&width=560&t=0" title="Living Proof Ministry" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"> <iframe  src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61568955864961%2Fvideos%2F1070070054802711%2F&show_text=false&width=560&t=0" title="Facebook video player"  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe></CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel> */}
        </div>
    )
}