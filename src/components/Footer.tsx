function Footer() {
  return (
    <footer className="w-full p-5 px-20 border-t border-gray-600">
      <div className="flex w-[80%] justify-between">
        <div className="flex flex-col justify-between gap-1">
          <div>
            <h1 className="text-2xl font-semibold">BestMatch.AI</h1>
            <p className="text-[#9CA3AF]">
              Revolutionize your shopping experience
            </p>
          </div>
          <p className="text-[#9CA3AF]">
            &copy; BestMatch.AI 2025. All rights reserved
          </p>
        </div>
        <div>
          <h3 className="font-bold text-xl">Company</h3>
          <ul className="text-[#9CA3AF]">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Try it</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
