import { useState } from "react";

const useHeader = () => {
  const [open, setOpen] = useState(false);

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return {
    open,
    setOpen,
    currentDate,
  };
};

export default useHeader;
