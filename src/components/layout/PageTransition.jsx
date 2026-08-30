import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function PageTransition({ children }) {
  const { pathname } = useLocation();
  const [transitionKey, setTransitionKey] = useState(pathname);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setTransitionKey(pathname);
    });

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return (
    <div
      key={transitionKey}
      className="
        animate-page-enter
        motion-reduce:animate-none
      "
    >
      {children}
    </div>
  );
}

export default PageTransition;