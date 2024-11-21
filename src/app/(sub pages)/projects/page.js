import Image from "next/image";
// import bg from "../../../public/background/projects-background-2.png"
import bg from "../../../../public/background/projects-background-2.png"
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import CyberPunk from "@/components/models/cyber-punk";
import RenderModel from "@/components/RenderModel";
import BaseballBat from "@/components/models/baseball-bat";

export default function Home() {
  return (
    <>
      <div >
        <Image
          className="-z-50 top-0 left-0 fixed w-full h-full object-cover object-center opacity-50"
          priority
          src={bg}
          fill
          alt="background-image"
          sizes="100vw"
        />
        <div className="relative z-10">
          <ProjectList projects={projectsData} />
          <div className="
            flex 
            items-center 
            justify-start 
            fixed 
            top-16 
            lg:top-20 
            left-1/2 
            lg:-left-24 
            h-screen
            -translate-x-1/2
            lg:translate-x-0
            -z-10
          ">
            <RenderModel>
              <BaseballBat position={[-2, 0, 0]} />
            </RenderModel>

          </div>
        </div>
      </div>
    </>
  );
}


