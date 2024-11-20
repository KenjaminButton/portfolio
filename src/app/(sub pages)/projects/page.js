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
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        className="-z-50 w-full h-full object-cover object-center opacity-50"
        priority
        src={bg} 
        fill
        alt="background-image"
        sizes="100vw"
      />
        <ProjectList projects={projectsData} />
        <div className="flex items-center justify-start fixed top-20 left-0 h-screen">
        <RenderModel>
          {/* <Wizard /> */}
          {/* <CyberPunk /> */}
          <BaseballBat position={[-2, 0, 0]} />
        </RenderModel>

        </div>
    </main>
  );
}
