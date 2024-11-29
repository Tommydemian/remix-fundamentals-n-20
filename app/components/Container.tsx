import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  wide?: boolean;
};
export const Container: React.FC<ContainerProps> = ({
  children,
  wide = false,
}) => {
  const styles = wide ? "container-wide" : "container";
  return <div className={`${styles}`}>{children}</div>;
};
