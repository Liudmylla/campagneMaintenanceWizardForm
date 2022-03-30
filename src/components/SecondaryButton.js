import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1, 0, 0.5),
  },
}));

export const SecondaryButton = ({ children, ...props }) => {
  const styles = useStyles();

  return (
    <Button
      fullWidth
      variant="outlined"
      color="primary"
      className={styles.root}
      {...props}
    >
      {children}
    </Button>
  );
};
