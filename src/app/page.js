import Image from "next/image";
import bg from "../../public/background/home-background.png"

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
    </main>
  );
}
