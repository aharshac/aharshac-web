import React, { PropTypes } from "react"
import { Link } from "phenomic"

const LinkExt = ({ children, className, to, target, rel, ...otherProps }) => (
  <Link to={to} { ...otherProps } className={ className } target={target || "_blank"} rel={rel || "noopener"} >
    { children }
  </Link>
);

LinkExt.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  rel: PropTypes.string,
  target: PropTypes.string,
  to: PropTypes.string,
}

export default LinkExt;
