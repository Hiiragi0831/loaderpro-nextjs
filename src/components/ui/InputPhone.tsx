import { TextFieldProps, TextField } from "@mui/material";
import React, { forwardRef } from "react";
import { IMaskInput } from "react-imask";
import { IsMobile } from "@/utils/IsMobile";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = forwardRef<HTMLInputElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="+0 (000) 000-00-00"
        inputRef={ref}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    );
  },
);

export const InputPhone = forwardRef((props: TextFieldProps, ref: any) => {
  return (
    <TextField
      ref={ref}
      size={props.size ? props.size : IsMobile() ? "small" : "medium"}
      {...props}
      slotProps={{
        input: {
          inputComponent: TextMaskCustom as any,
        },
      }}
    />
  );
});
