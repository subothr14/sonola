import { useEffect, useState } from "react";

export function useEnvironment() {
  const [env, setEnv] = useState({ os: "Unknown", isElectron: false });

  useEffect(() => {
    const ua = window.navigator.userAgent.toLowerCase();
    let os = "Web";
    if (/windows/i.test(ua)) os = "Windows";
    else if (/mac/i.test(ua)) os = "MacOS";
    else if (/linux/i.test(ua)) os = "Linux";
    else if (/android/i.test(ua)) os = "Android";
    else if (/iphone|ipad|ipod/i.test(ua)) os = "iOS";

    const isElectron =
      !!(window as any).electron ||
      ua.includes("electron") ||
      (window as any).process?.type === "renderer";

    setEnv({ os, isElectron });
  }, []);

  return env;
}
