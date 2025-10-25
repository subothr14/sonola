import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

function Uploads() {
  return (
    <AnimatePresence>
      <motion.div
        className="flex h-screen items-center justify-center"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
      >
        <h2 className="text-3xl">Uploads</h2>
      </motion.div>
    </AnimatePresence>
  );
}

export default Uploads;
