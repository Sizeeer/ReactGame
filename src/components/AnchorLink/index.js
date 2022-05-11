import React from "react";
import styles from "./AnchorLink.module.scss";
import PropTypes from "prop-types";
import { ReactComponent as LinkIcon } from "../../assets/link_icon.svg";
import { Heading } from "../Heading";

export const AnchorLink = ({ children, headingLevel = 1, href }) => {
  return (
    <a href={href} className={styles.root}>
      <Heading level={headingLevel}>{children}</Heading>
      <LinkIcon className={styles.linkIcon} />
    </a>
  );
};

AnchorLink.propTypes = {
  href: PropTypes.string,
  headingLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  children: PropTypes.node,
};
