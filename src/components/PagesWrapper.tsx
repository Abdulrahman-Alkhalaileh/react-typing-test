import React from "react";
import Header from "./nav/Header";

export interface PagesWrapperProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const PagesWrapper: React.FC<PagesWrapperProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={"text-primary bg-background h-lvh " + className}>
      <Header />
      <div className="px-20 py-10" {...props}>
        {children}
      </div>
    </div>
  );
};

export default PagesWrapper;
