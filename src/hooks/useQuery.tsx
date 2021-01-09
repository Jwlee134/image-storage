import { useLocation } from "react-router-dom";

const useQuery = () => {
  const query = new URLSearchParams(useLocation().search);
  const term = query.get("term");
  return term;
};

export default useQuery;
