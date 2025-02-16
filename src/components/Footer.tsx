function Footer() {
  return (
    <footer className="w-full h-full p-5 lg:px-20 border-t border-gray-600 flex flex-col justify-between">
      <div className="flex w-full flex-col lg:flex-row lg:w-[80%] justify-between">
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-semibold">BestMatch.AI</h1>
            <p className="text-[#9CA3AF]">
              Revolutionize your shopping experience
            </p>
          </div>
          <p className="text-[#9CA3AF] hidden lg:block">
            &copy; BestMatch.AI 2025. All rights reserved
          </p>
        </div>
        <div>
          <h3 className="font-bold text-xl">Company</h3>
          <ul className="text-[#9CA3AF] flex lg:block gap-5">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Try it</li>
          </ul>
        </div>
      </div>
      <p className="text-[#9CA3AF] text-sm block lg:hidden mt-10">
        &copy; BestMatch.AI 2025. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
