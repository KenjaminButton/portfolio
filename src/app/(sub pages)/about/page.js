import Image from "next/image";
import bg from "../../../../public/background/about-background.png"

import RenderModel from "@/components/RenderModel";
import Hat from "@/components/models/hat";
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

        <div className="w-full h-screen absolute top-1/2 -translate-y-1/2 left-0">
          <RenderModel>
            <WornBaseball />
          </RenderModel>
        </div>
      </div>
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="font-bold text-9xl text-accent">Kenjamin Button</h1>
          <p className="font-light text-foreground text-ls">Meet me here in Kentucky Kenneth Ken Kenderson</p>
        </div>
      </div>
      <AboutDetails />
    </>
  );
}
