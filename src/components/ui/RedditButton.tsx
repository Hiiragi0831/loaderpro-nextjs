"use client";
import { Button, ButtonProps } from "@mui/material";
import React from "react";
import { IsMobile } from "@/utils/IsMobile";

export const RedditButton = React.forwardRef((props: ButtonProps, ref: any) => {
  return (
    <Button
      ref={ref}
      {...props}
      size={props.size ? props.size : IsMobile() ? "small" : "medium"}
    >
      {props.children}
    </Button>
  );
});
