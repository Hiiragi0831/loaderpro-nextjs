import { TextField, TextFieldProps } from "@mui/material";
import { IsMobile } from "@/utils/IsMobile";
import React from "react";

export const RedditTextField = React.forwardRef(
  (props: TextFieldProps, ref: any) => {
    return (
      <TextField ref={ref} size={props.size ? props.size : IsMobile() ? "small" : "medium"} {...props} />
    );
  },
);
