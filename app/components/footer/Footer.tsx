import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center gap-3 border-t-2 border-gray-500 text-gray-400 fixed bottom-0  w-full text-center p-3 ">
      <div className="flex justify-center items-center gap-4">
        <div className="flex justify-center items-center rounded w-8 h-8 hover:bg-slate-300 transition">
          <a target="_blank" href="https://www.facebook.com/">
            <Image
              src="/images/facebook.svg"
              alt="facebook"
              width="13"
              height="13"
              className="w-auto h-auto"
            />
          </a>
        </div>
        <div className="flex justify-center items-center rounded w-8 h-8 hover:bg-slate-300 transition">
          <a target="_blank" href="https://www.instagram.com/">
            <Image
              src="/images/instagram.svg"
              alt="instagram"
              width="20"
              height="20"
              className="w-auto h-auto"
            />
          </a>
        </div>
        <div className="flex justify-center items-center rounded w-8 h-8 hover:bg-slate-300 transition">
          <a target="_blank" href="https://twitter.com/">
            <Image
              src="/images/twitter.svg"
              alt="twitter"
              width="20"
              height="20"
              className="w-auto h-auto"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
