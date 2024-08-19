import React from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

const HomePage = () => {
  const component = useSelector((state) => state.component.component);
  return <Box>{component}</Box>;
};

export default HomePage;
