import React from "react";
import PropTypes from "prop-types";

function Child({ x, data, children }) {
  return (
    <div>
      <h2>This is the child component</h2>
      <h5>{x}</h5>
      {data.map((el, i) => (
        <div key={i}>
          <h1>{el.user}</h1>
          <h2>{el.email}</h2>
        </div>
      ))}
      {children}
    </div>
  );
}

export default Child;
//default props
Child.defaultProps = {
  x: "not found",
};
//propTypes

Child.propTypes = {
  x: PropTypes.string,
};
