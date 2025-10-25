import {
  Home,
  FolderKanban,
  Upload,
  Settings,
  User,
  Ellipsis,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const mainLinks = [
  { name: "Home", icon: Home, href: "/home" },
  { name: "Projects", icon: FolderKanban, href: "/projects" },
  { name: "Uploads", icon: Upload, href: "/uploads" },
  { name: "More", icon: Ellipsis, href: "/more" },
];

const bottomLinks = [
  { name: "Settings", icon: Settings, href: "/settings" },
  { name: "Account", icon: User, href: "/profile" },
];

function VerticalNavBar() {
  const [active, setActive] = useState("Home");

  return (
    <div className="flex flex-col sticky top-0 justify-between w-20 h-screen p-3   border-gray-800 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
      <nav className="flex flex-col items-center space-y-5 mt-6">
        {mainLinks.map((link) => {
          const Icon = link.icon;
          const isActive = active === link.name;

          return (
            <Link to={link.href}>
              <motion.button
                key={link.name}
                onClick={() => setActive(link.name)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`relative flex flex-col items-center p-2 rounded-xl transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "text-indigo-400"
                    : "text-gray-400 hover:text-indigo-300"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 rounded-xl bg-indigo-500/20"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <Icon className="w-6 h-6 mb-1 relative z-10" />
                <span className="text-[10px] font-medium relative z-10">
                  {link.name}
                </span>
              </motion.button>
            </Link>
          );
        })}
      </nav>

      <div className="flex flex-col items-center space-y-5 mb-4 border-t border-gray-800 pt-4">
        {bottomLinks.map((link) => {
          const Icon = link.icon;
          const isActive = active === link.name;

          return (
            <Link to={link.href}>
              <motion.button
                key={link.name}
                onClick={() => setActive(link.name)}
                whileHover={{ scale: 1.01, rotate: "360deg" }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                  duration: 1800,
                }}
                whileTap={{ scale: 0.95 }}
                className={`relative flex flex-col cursor-pointer items-center p-2 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "text-indigo-400"
                    : "text-gray-400 hover:text-indigo-300"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 rounded-xl bg-indigo-500/20"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                      duration: 1800,
                    }}
                    whileHover={{
                      rotate: "360deg",
                    }}
                  />
                )}
                <motion.div
                  initial={{
                    rotate: "0deg",
                    scale: 1,
                  }}
                  animate={{
                    rotate: 360,
                    scale: 1.05,
                  }}
                  whileHover={{
                    rotate: "360deg",
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 1900,
                    ease: "easeIn",
                  }}
                >
                  <Icon className="w-6 h-6 mb-1 relative z-10" />
                </motion.div>
                <span className="text-[10px] font-medium relative z-10"></span>
              </motion.button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default VerticalNavBar;
