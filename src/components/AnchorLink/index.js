import React from "react";
import styles from "./AnchorLink.module.scss";
import PropTypes from "prop-types";
import { ReactComponent as LinkIcon } from "../../assets/link_icon.svg";
import { Heading } from "../Heading";
import { Link } from "react-router-dom";

export const AnchorLink = ({ children, headingLevel = 1, id }) => {
  return (
    <Link id={id} to={`#${id}`} className={styles.root}>
      <Heading level={headingLevel}>{children}</Heading>
      <LinkIcon className={styles.linkIcon} />
    </Link>
  );
};

AnchorLink.propTypes = {
  id: PropTypes.string,
  headingLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  children: PropTypes.node,
};
