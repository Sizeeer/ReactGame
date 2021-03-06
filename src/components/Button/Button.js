import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";
import cn from "classnames";

export const Button = ({ isGoBack = false, ...rest }) => {
  return (
    <button
      className={cn(styles.button, {
        [styles.goBack]: isGoBack,
      })}
      {...rest}
    >
      {isGoBack ? "Go Back" : "Wow"}
    </button>
  );
};

Button.propTypes = {
  isGoBack: PropTypes.bool,
};
