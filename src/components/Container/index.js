import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import styles from "./Container.module.scss";

export const Container = ({ children, className }) => {
  return <div className={cn(styles.root, className)}>{children}</div>;
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
