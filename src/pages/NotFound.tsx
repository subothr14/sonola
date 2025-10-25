import { useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation(); // correct usage

  return (
    <div className="text-2xl text-center mt-10">
      Not Found: <span className="font-mono">{location.pathname.slice(1)}</span>
    </div>
  );
}
