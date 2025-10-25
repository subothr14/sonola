import { motion } from "framer-motion";
import SubscriptionCard from "../components/SubscriptionCard";

function Pro() {
  return (
    <div>
      <motion.div
        className="p-5 flex justify-center h-screen"
        initial={{
          display: "flex",
          justifyContent: "center",
          height: "15vh",
        }}
        animate={{
          display: "flex",
          justifyContent: "center",
          height: "15vh",
        }}
        transition={{
          duration: 1.1,
          ease: "linear",
          delay: 1,
        }}
      >
        <div className="text-2xl  flex gap-2 justify-center flex-col items-center">
          <div className="text-2xl  flex gap-2 justify-center  items-center">
            <h1 className=" font-semibold p-1">Sonola</h1>
            <motion.label
              className=" bg-gradient-to-b from-blue-700 text-white to-violet-500 p-1 rounded-xl font-bold text-center"
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={{
                width: 80,
                opacity: 1,
                display: "flex",
                justifyContent: "center",
              }}
              transition={{
                duration: 0.7,
                ease: "circInOut",
                delay: 0.5,
              }}
            >
              Pro
            </motion.label>
          </div>
        </div>
      </motion.div>

      <SubscriptionCard />
    </div>
  );
}

export default Pro;
