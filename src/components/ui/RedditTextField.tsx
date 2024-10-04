"use client";
import { TextField, TextFieldProps } from "@mui/material";
import React from "react";
import { IsMobile } from "@/utils/IsMobile";

export const RedditTextField = React.forwardRef(
  (props: TextFieldProps, ref: any) => {
    return (
      <TextField
        ref={ref}
        size={props.size ? props.size : IsMobile() ? "small" : "medium"}
        {...props}
      />
    );
  },
);
