import { Button, ButtonProps } from "@nextui-org/react";
import React from "react";

export const RedditButton = React.forwardRef((props: ButtonProps, ref: any) => {
  return (
    <Button ref={ref} {...props} color={props.color ? props.color : "primary"}>
      {props.children}
    </Button>
  );
});
