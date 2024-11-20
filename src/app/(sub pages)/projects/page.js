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
          className="-z-50 fixed w-full h-full object-cover object-center opacity-50"
          priority
          src={bg}
          fill
          alt="background-image"
          sizes="100vw"
        />
        <div className="relative z-10">
          <ProjectList projects={projectsData} />
          <div className="flex items-center justify-start fixed top-20 left-0 h-screen">
            <RenderModel>
              {/* <Wizard /> */}
              {/* <CyberPunk /> */}
              <BaseballBat position={[-2, 0, 0]} />
            </RenderModel>

          </div>
        </div>
      </div>
    </>
  );
}


// import Image from "next/image";
// import bg from "../../../../public/background/projects-background-2.png";
// import ProjectList from "@/components/projects";
// import { projectsData } from "../../data";
// import RenderModel from "@/components/RenderModel";
// import BaseballBat from "@/components/models/baseball-bat";

// export default function Home() {
//   return (
//     <div className="relative min-h-screen"> {/* Use a relative parent to control positioning */}
//       <Image
//         className="absolute z-0 w-full h-full object-cover object-center opacity-50"
//         priority
//         src={bg} 
//         fill
//         alt="background-image"
//         sizes="100vw"
//       />
//       <div className="relative z-10"> {/* Create a new stacking context */}
//         <ProjectList projects={projectsData} />
//         <div className="flex items-center justify-start fixed top-20 left-0 h-screen "> {/* Make sure this is on top */}
//           <RenderModel>
//             <BaseballBat position={[-2, 0, 0]} />
//           </RenderModel>
//         </div>
//       </div>
//     </div>
//   );
// }

// import Image from "next/image";
// import bg from "../../../../public/background/projects-background-2.png";
// import ProjectList from "@/components/projects";
// import { projectsData } from "../../data";
// import RenderModel from "@/components/RenderModel";
// import BaseballBat from "@/components/models/baseball-bat";

// export default function Home() {
//   return (
//     <div className="relative min-h-screen"> {/* Container for positioning */}
//       <Image
//         className="absolute inset-0 z-0 w-full h-full object-cover object-center opacity-50" // Ensure this takes total space
//         priority
//         src={bg} 
//         fill
//         alt="background-image"
//         sizes="100vw"
//       />
//       <div className="relative z-10"> {/* Ensure this content appears above the background */}
//         <ProjectList projects={projectsData} />
//         <div className="flex items-center justify-start fixed top-20 left-0 h-screen z-10">
//           <RenderModel>
//             <BaseballBat position={[-2, 0, 0]} />
//           </RenderModel>
//         </div>
//       </div>
//     </div>
//   );
// }