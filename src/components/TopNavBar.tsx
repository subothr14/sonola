import { useNavigate } from "react-router-dom";
import Icon from "../assets/icon.ico";
import { LucideStars, Search } from "lucide-react";
import ThemeSelector from "./ThemeSelector";

function TopNavBar() {
  const navigate = useNavigate();
  return (
    <header className="flex items-center justify-between h-16 w-full border-gray-200 p-4 ">
      <div className="flex items-center w-40">
        <img src={Icon} width={50} height={50} />
        <h1 className="text-xl   text-indigo-600 font-extrabold">SONOLA</h1>
      </div>

      <div className="flex-grow flex justify-center mx-10">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search projects, templates, or help..."
            className="w-full py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
          />

          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
      </div>

      <div className="flex items-center w-60 justify-end gap-3">
        <ThemeSelector/>
        <button
          className="border-blue-700 border-2 cursor-pointer font-bold rounded-4xl w-3/4 flex justify-center text-center gap-2.5 p-2 transform hover:scale-105 active:scale-95 duration-150"
          onClick={() => navigate("/subscription")}
        >
          Try Pro <LucideStars/>
        </button>
      </div>
    </header>
  );
}

export default TopNavBar;
