import { Divider } from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";

export const useLogin = (url: string) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [url]);
  return { data };
};

export const useToggle = () => {
  const [isToggle, setToggle] = useState(false);
  const toggle = useCallback(() => {
    setToggle(!isToggle);
  }, [isToggle]);
  return { isToggle, toggle };
};
