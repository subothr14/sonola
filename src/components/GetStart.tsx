import { motion } from "framer-motion";
import BG from "../assets/Background.png";
import { LucideWand2 } from "lucide-react";
import { BsApple, BsMicrosoft } from "react-icons/bs";
import { useEnvironment } from "../lib/useEnvironment";

function GetStart() {
  const Hero = 0.2;
  const Text = 0.5;

  const { os, isElectron } = useEnvironment();

  const renderDownloadButton = () => {
    if (isElectron) return null;

    if (os === "Windows") {
      return (
        <a
          href="https://drive.google.com/file/d/1JBt5xGvIuM5HGFR7WTuCVkkTLxSF3S_9/view?usp=drive_link"
          download
          className="flex items-center gap-2 border-2 text-center justify-center border-white rounded-2xl p-4 font-semibold hover:scale-105 transition"
        >
          Download for Windows <BsMicrosoft />
        </a>
      );
    }

    if (os === "MacOS") {
      return (
        <a
          href="/Sonola_Setup.dmg"
          download
          className="flex items-center gap-2 border-2 text-center justify-center border-white rounded-2xl p-4 font-semibold hover:scale-105 transition"
        >
          Download for Mac <BsApple />
        </a>
      );
    }

    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: Hero, ease: "easeOut" }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0px 0px 30px rgba(168, 85, 247, 0.3)",
      }}
      className="relative overflow-hidden w-full flex justify-between rounded-3xl shadow-xl bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 text-white group"
    >
      <motion.div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-700" />

      <div className="relative flex flex-col gap-3 z-10 p-8">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: Text }}
          className="text-3xl font-extrabold tracking-tight"
        >
          Getting Started in Sonola
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: Text + 0.1 }}
          className="text-lg text-white/90"
        >
          Create intriguing marketing content with ease!
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.97 }}
          className="p-4 flex-row w-2/4 rounded-2xl cursor-pointer flex items-center border-white border-2 justify-center gap-2 font-semibold transition-all duration-300"
        >
          <span>Get Started</span>
          <LucideWand2 />
        </motion.button>

        {renderDownloadButton()}

      
      </div>

      <img
        src={BG}
        alt="Background"
        className="hidden md:hidden xl:block"
        style={{ backgroundClip: "border-box" }}
      />
    </motion.div>
  );
}

export default GetStart;
