import React, { forwardRef } from "react";
import TextField from "@material-ui/core/TextField";

export const Input = forwardRef((props, ref) => {
  return (
    <TextField

      inputRef={ref}
      fullWidth
      {...props}
    />
  );
});
