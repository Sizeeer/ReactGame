import React from "react";
import PropTypes from "prop-types";

export const Biography = ({ onBackClick }) => {
  const handleBackClick = () => {
    onBackClick();
  };

  return <div>Biography</div>;
};

Biography.propTypes = {
  id: PropTypes.number,
  onBackClick: PropTypes.func,
};
