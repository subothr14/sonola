import AnimatedLogo from "../assets/AnimatedLogo.gif";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function SplashScreen() {
  const navigate = useNavigate();
  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 5000); 
    const routeTimer = setTimeout(() => navigate("/welcome"), 6000); 
    return () => {
      clearTimeout(timer);
      clearTimeout(routeTimer);
    };
  }, [navigate]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key="splash"
          className="relative flex justify-center items-center h-screen bg-[#0f1424] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute w-[500px] h-[500px] bg-gradient-to-br from-blue-600/40 via-purple-600/30 to-indigo-400/20 blur-3xl rounded-full"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          <motion.img
            src={AnimatedLogo}
            width={300}
            height={300}
            alt="Sonola Logo"
            className="relative z-10"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: [1, 1.05, 1],
            }}
            exit={{ opacity: 0, y: -40, scale: 0.9 }}
            transition={{
              duration: 1,
              delay: 0.3,
              scale: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 3,
                ease: "easeInOut",
              },
            }}
          />

          <motion.p
            className="absolute bottom-12 text-gray-400 text-sm tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.7, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            Loading Sonola Experience...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SplashScreen;
