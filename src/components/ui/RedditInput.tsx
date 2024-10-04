// "use client";
import { Input, InputProps } from "@nextui-org/react";
import React from "react";

export const RedditInput = React.forwardRef((props: InputProps, ref: any) => {
  return (
    <Input
      ref={ref}
      {...props}
      radius={props.radius ? props.radius : "sm"}
      variant={props.variant ? props.variant : "bordered"}
    />
  );
});
