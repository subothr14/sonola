import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";


function Profile() {
  return (
    <AnimatePresence>
      <motion.div
        className="flex h-screen flex-col items-center justify-center"
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
        <h2 className="text-3xl">Your Profile</h2>
       
      </motion.div>
    </AnimatePresence>
  );
}

export default Profile;
