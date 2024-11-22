import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Full Stack Engineer
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            Hello! I'm Kenneth P. Chang, a full-stack software engineer with over a decade of experience navigating the ever-evolving world of technology. My journey began at the University of California, Santa Barbara, where I earned my Bachelor of Arts in Political Science and a minor in Chemistry, but my passion for problem-solving and creativity led me to dive headfirst into the tech realm.
          </p>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            As a Lead Instructor at General Assembly in both San Francisco and New York, I have had the incredible opportunity to mentor aspiring developers, guiding them through the complexities of coding with enthusiasm. Leading over five cohorts of budding tech talent, I’ve not only shared my expertise in languages and frameworks like JavaScript, Python, and React but have also fostered a supportive and engaging learning environment. With a commitment to excellence, our team consistently achieved a remarkable NPS score of over 95—proof that we were igniting passion for software development!
          </p>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            Previously, I honed my skills at General Resources Company in Taiwan and San Jose, where I modernized government contract bidding processes and leveraged machine learning to boost efficiency by 30%. My technical prowess also led to crafting a Learning Management System that tripled client revenue while enhancing user satisfaction and engagement.
          </p>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            Having mastered a myriad of technologies—from cloud services like AWS to robust back-end systems with Node and Express—I'm deeply passionate about creating impactful software solutions that not only meet business needs but also thrill users.
          </p>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            When I'm not coding or empowering others through education, you can find me exploring the vibrant city of San Jose, where innovation meets culture, or diving into the latest tech trends on my GitHub.
          </p>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            Let’s connect and shape the future of technology together!
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            50+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            10+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>
        {/* Github Stats */}
        <ItemLayout
          className={"col-span-full sm:col-span-12 md:col-span-8 !p-0"}
        >
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=kenjaminbutton&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon=FEFE5B&text_bold=false"
            alt="KenjaminButton"
            loading="lazy"
          />
        </ItemLayout>
        {/* Github Most Used Languages */}
        <ItemLayout className={"col-span-full md:col-span-4 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=kenjaminbutton"
            alt="KenjaminButton"
            loading="lazy"
          />
        </ItemLayout>
        {/* Skills Icon */}
        {/*  */}
        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=aws,anaconda,apple,azure,babel,bitbucket,bash,bootstrap,cpp,cloudflare,codepen,coffeescript,css,devto,discord,django,docker,dynamodb,electron,emacs,express,fastapi,figma,firebase,flask,gatsby,gcp,git,github,gmail,gulp,heroku,html,htmx,instagram,java,js,jest,jquery,kubernetes,linkedin,linux,materialui,mongodb,mysql,netlify,nextjs,nginx,nodejs,npm,notion,php,postgres,postman,prisma,pycharm,py,pytorch,raspberrypi,react,redux,replit,sass,sqlite,stackoverflow,sublime,supabase,selenium,svg,swift,tailwind,tensorflow,terraform,threejs,ts,ubuntu,vercel,vim,visualstudio,vite,vscode,webpack,webstorm,windows,wordpress,yarn`}
            alt="KenjaminButton"
            loading="lazy"
          />
        </ItemLayout>
        {/* Github Streaks Page */}
        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=KenjaminButton&theme=dark&hide_border=true&type=png&border=EB5454&ring=FEFE5B&currStreakLabel=FEFE5B"
            alt="KenjaminButton"
            loading="lazy"
          />
        </ItemLayout>
        {/* Github Current Repo */}
        <ItemLayout className={"col-span-full md:col-span-6 flex !p-0"}>
          <Link
            href="https://github.com/codebucks27/Nextjs-contentlayer-blog"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-full"
              src="https://github-readme-stats.vercel.app/api/pin/?username=kenjaminbutton&repo=NextJS-Recipes-App&theme=transparent&hide_border=true*title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2"
              alt="KenjaminButton"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;