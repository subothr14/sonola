import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SplashScreen from "./pages/SplashScreen";
import WelcomeScreen from "./pages/WelcomeScreen";
import { AnimatePresence } from "framer-motion";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import VerticalNavBar from "./components/VerticalNavBar";
import Pro from "./pages/Pro";
import { ThemeProvider } from "./components/themecontext";
import Projects from "./pages/Projects";
import Uploads from "./pages/Uploads";
import More from "./pages/More";
import Settings from "./pages/Settings";
import Download from "./pages/Download";


function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/welcome" element={<WelcomeScreen />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/subscription" element={<Pro />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/uploads" element={<Uploads />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/download" element={<Download />} />
        <Route path="/" element={<SplashScreen />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </AnimatePresence>
  );
}

function AppWrapper() {
  const location = useLocation();
  const hideNavbarPaths = ["/", "/welcome"];

  return (
    <div className="flex ">
      {!hideNavbarPaths.includes(location.pathname) && <VerticalNavBar />}
      <div className="flex-1">
        <AnimatedRoutes />
      </div>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <ThemeProvider>
        <AppWrapper />
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
