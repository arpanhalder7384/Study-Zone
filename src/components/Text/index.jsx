import React from "react";

const sizes = {
  xs: "text-xs font-medium leading-[17px]",
  lg: "text-xl font-medium",
  s: "text-sm font-medium",
  md: "text-base font-normal leading-5",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-700_01 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
