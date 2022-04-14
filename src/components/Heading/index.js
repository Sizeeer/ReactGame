import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./Heading.module.css";

const Heading = ({ children, className, black = false, level = 1 }) => {
  return React.createElement(
    `h${level}`,
    {
      className: cn(className, styles.level, styles[`level${level}`], {
        [styles.colorBlack]: black,
      }),
    },
    children
  );
};

Heading.propTypes = {
  children: PropTypes.node,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  black: PropTypes.bool,
  className: PropTypes.string,
};

export { Heading };
