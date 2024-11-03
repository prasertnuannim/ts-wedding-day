import Blessing from "@/sections/blessing";
import Gallery from "@/sections/gallery";
import Invitations from "@/sections/invitations";
import Itinerary from "@/sections/itinerary";
import Venue from "@/sections/venue";

export default function Home() {
  return (
    <main className="flex flex-col items-center max-w-[1200px] w-full mx-auto sm:pt-10 md:pt-16 lg:pt-24 px-4 xl:pr-56 xl:pl-56">
      <section className="sm:mb-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl relative z-0">
        <Invitations />
      </section>
      <section className="-mt-32 text-2xl sm:text-3xl md:text-4xl lg:text-5xl relative z-10">
        <Itinerary />
      </section>
      <section className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        <Gallery />
      </section>
      <section className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        <Blessing />
      </section>
      <section className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        <Venue />
      </section>
    </main>
  );
}
