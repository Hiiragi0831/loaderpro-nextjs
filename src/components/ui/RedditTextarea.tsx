import { Textarea, TextAreaProps } from "@nextui-org/react";
import React from "react";

export const RedditTextarea = React.forwardRef(
  (props: TextAreaProps, ref: any) => {
    return (
      <Textarea
        ref={ref}
        {...props}
        variant={props.variant ? props.variant : "bordered"}
      />
    );
  },
);
