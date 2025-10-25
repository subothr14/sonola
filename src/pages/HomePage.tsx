import { AnimatePresence, motion } from "framer-motion";

import TopNavBar from "../components/TopNavBar";
import GetStart from "../components/GetStart";
import Card from "../components/Card";

function HomePage() {
  return (
    <AnimatePresence>
      <motion.div className="flex h-screen ">
        <div className="flex flex-col flex-grow">
          <TopNavBar />

          <div className="flex-grow overflow-y-auto p-8">
            <div className="flex justify-center flex-col">
              <div>
                <GetStart />
              </div>

              <Card />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default HomePage;
