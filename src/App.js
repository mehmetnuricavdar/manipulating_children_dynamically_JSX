import "./styles.css";
import React, { Children, cloneElement } from "react";

const Row = ({ children, spacing }) => {
  const childStyle = {
    marginLeft: `${spacing}px`,
    backgroundColor: "yellow"
  };
  return (
    <div>
      {Children.map(children, (child, index) => {
        return cloneElement(child, {
          style: {
            ...child.props.style,
            ...(index > 0 ? childStyle : {})
          }
        });
      })}
    </div>
  );
};

export default function LiveOrders() {
  return (
    <div>
      <Row spacing={32}>
        <p>Pizza Margarita</p>
        <p>2</p>
        <p>30$</p>
        <p>18:30</p>
        <p>John</p>
      </Row>
    </div>
  );
}
