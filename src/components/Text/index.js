import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./Text.module.css";

const Text = ({ element, children, className, strong, italic, disabled }) => {
  return React.createElement(
    element,
    {
      className: cn(className, {
        [styles.strong]: strong,
        [styles.italic]: italic,
        [styles.disabled]: disabled,
      }),
    },
    children
  );
};

Text.propTypes = {
  element: PropTypes.oneOf("div", "span", "p"),
  children: PropTypes.node,
  className: PropTypes.string,
  strong: PropTypes.bool,
  italic: PropTypes.bool,
  disabled: PropTypes.bool,
};

export { Text };
