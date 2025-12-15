import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { Recent } from "../lib/Dataset";
import CardItem from "../components/CardItem";

function Projects() {
  return (
    <AnimatePresence>
      <motion.div
        className="flex h-screen  p-3"
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
        <div className="flex flex-col gap-3.5">
          <h2 className="text-3xl font-black">Projects</h2>

          <div>
            <div className="pt-5">
              <div className="grid grid-cols-2 xl:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Recent.map((item) => (
                  <div key={item.id}>
                    <CardItem
                      key={item.id}
                      //@ts-ignore
                      item={item}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Projects;
