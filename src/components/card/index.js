import React, { useState, useContext, createContext } from "react";

export const FeatureContext = createContext();

export default function Card({ children, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
    >
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
}

Card.Group = function CardGroup({ children, ...restProps }) {
  return <CardGroup {...restProps}>{children}</CardGroup>;
};
Card.Title = function CardTitle({ children, ...restProps }) {
  return <CardTitle {...restProps}>{children}</CardTitle>;
};
Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <CardSubTitle {...restProps}>{children}</CardSubTitle>;
};
Card.Text = function CardText({ children, ...restProps }) {
  return <CardText {...restProps}>{children}</CardText>;
};
Card.Text = function CardText({ children, ...restProps }) {
  return <CardText {...restProps}>{children}</CardText>;
};
