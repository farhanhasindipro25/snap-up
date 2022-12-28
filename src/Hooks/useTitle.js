import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Taskboarders`;
  }, [title]);
};

export default useTitle;
