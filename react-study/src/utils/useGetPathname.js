import { useLocation } from "react-router-dom";

const useGetPathname = () => {
  const location = useLocation();

  const currentPath = location.pathname;

  return currentPath;
};

export default useGetPathname;
