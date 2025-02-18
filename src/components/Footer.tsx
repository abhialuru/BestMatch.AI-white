import { Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full min-h-fit lg:h-screen bg-[#1f1f1f] lg:p-20 p-5 py-10 lg:px-32">
      <div className="w-full h-full rounded-3xl bg-black/30 backdrop-blur-lg p-5 lg:p-10 flex flex-col justify-between">
        <div className="flex flex-col text-center md:text-start md:grid grid-cols-2">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-7">
              <h2 className="text-4xl font-medium text-[#FF4500]">
                BestMatch.AI
              </h2>
              <div className="flex flex-col gap-5">
                <h3 className="text-3xl tracking-wider leading-snug">
                  Revolutionize your shopping experience
                </h3>
                <p>
                  Discover AI-powered personalized product recommendations
                  tailored to your unique needs.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto lg:flex gap-16">
            <div className="flex flex-col gap-1 mt-5 lg:mt-0">
              <h3 className="text-lg font-semibold text-center">Company</h3>
              <ul className="text-start rounded-full p-2 grid grid-cols-3 lg:flex flex-col gap-3 border-red-100">
                <li className="bg-[#1F1F1F] p-2 px-5 text-center rounded-full">
                  <Link href="/">Home</Link>
                </li>
                <li className="bg-[#1F1F1F] p-2 px-5 text-center rounded-full">
                  <Link href="#about">About</Link>
                </li>
                <li className="bg-[#1F1F1F] p-2 px-5 text-center rounded-full">
                  <Link href="#try">Try it</Link>
                </li>
                <li className="bg-[#1F1F1F] p-2 px-5 text-center rounded-full">
                  <Link href="#contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="font-semibold text-center text-lg">Socials</h1>
              <div className="flex gap-3 mx-auto lg:mx-0">
                <Linkedin className="size-5" />
                <Twitter className="size-5" />
                <Instagram className="size-5" />
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-400 text-center md:text-start mt-10 md:mt-0">
          &copy; BestMatch.AI 2025. All right reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
