import Image from "next/image";
import bg from "../../../../public/background/about-background.png"

import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";
import WornBaseball from "@/components/models/WornBaseball";

export default function Home() {
  return (
    <>
      <div >
        <Image
          src={bg}
          className="-z-50 top-0 left-0 fixed w-full h-full object-cover object-center opacity-50"
          alt="background-image"
        />

        <div className="w-full h-3/5 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0">
          <RenderModel>
            <WornBaseball />
          </RenderModel>
        </div>
      </div>
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent">Kenneth Chang</h1>
          <p className="font-light text-foreground text-3xl py-5">Full-Stack Software Engineer</p>
        </div>
      </div>
      <AboutDetails />
    </>
  );
}

