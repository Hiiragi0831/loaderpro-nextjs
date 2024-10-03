import { Button, ButtonProps } from "@mui/material";
import { IsMobile } from "@/utils/IsMobile";
import React from "react";

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
