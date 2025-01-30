import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useActiveLink = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    if (location.pathname.includes("/users")) {
      setActiveLink("users");
    } else if (location.pathname.includes("/roles")) {
      setActiveLink("roles");
    }
  }, [location.pathname]);

  return {activeLink};
};

export default useActiveLink;
