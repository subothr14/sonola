import { AnimatePresence, motion } from "framer-motion";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function WelcomeScreen() {
  const navigate = useNavigate();
  const [isVisible, setVisible] = useState(true);

  const handleNext = () => {
    setVisible(false);
    setTimeout(() => {
      navigate("/home");
    }, 600);
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key="welcome"
          className="flex justify-center items-center h-screen p-6 sm:p-10 bg-gradient-to-br from-[#eef3ff] to-[#dce9ff]"
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex flex-col md:flex-row bg-white/20 backdrop-blur-2xl rounded-2xl shadow-2xl overflow-hidden max-w-3xl w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="p-8 flex flex-col justify-between w-full md:w-1/2">
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h1 className="text-3xl font-bold text-gray-800">
                  Welcome to <span className="text-[#0056ff]">Sonola</span>
                </h1>
                <p className="text-gray-700 leading-relaxed">
                  With Sonola, making stand-out marketing content is as easy as
                  a few clicks. Let's get started!
                </p>
              </motion.div>

              <motion.div
                className="mt-8 space-y-1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <p className="font-medium text-gray-800">
                  “63% of marketers say creating engaging content consistently
                  is their biggest challenge.”
                </p>
                <p className="text-xs text-gray-500">
                  — Content Marketing Institute, 2022
                </p>
              </motion.div>

              <motion.div
                className="mt-10 flex justify-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <motion.button
                  onClick={handleNext}
                  className="bg-gradient-to-b from-[#0066ff] to-[#0044ff] cursor-pointer text-white font-semibold px-6 py-3 rounded-2xl w-3/4 shadow-lg active:scale-95"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Next
                </motion.button>
              </motion.div>
            </div>

            <motion.div
              className="bg-gradient-to-t from-[#0066ff30] to-[#0044ff10] cursor-pointer flex justify-center items-center md:w-1/2 p-6"
              initial={{ opacity: 0, x: 50, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={Logo}
                alt="Sonola Logo"
                className="w-60 h-auto rounded-xl drop-shadow-xl"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default WelcomeScreen;
