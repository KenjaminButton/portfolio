import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="San Francisco Post Office in CyberPunk 2077"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Contact KenjaminButton A.K.A Kenneth P. Chang
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
          Thank you for visiting my portfolio! I’m always eager to connect with fellow developers, potential collaborators, and clients. If you have any questions, feedback, or opportunities, please don’t hesitate to reach out. Whether you're looking to discuss a project, need assistance, or simply want to say hello, I’d love to hear from you!
          </p>
          <p className="text-center font-light text-sm xs:text-base">
          You can fill out the contact form below or connect with me through my social media links. Let’s create something great together!
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}