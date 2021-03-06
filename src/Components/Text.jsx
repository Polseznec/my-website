import * as React from "react";

// functions Imported
import { tClassName as TCL } from "../utility/Functions";

export const H1 = React.forwardRef(({ className, text, ...props }, ref) => {
  return (
    <span className={TCL("h1", className)} ref={ref} {...props}>
      {text}
    </span>
  );
});

export const H2 = ({ className, text, ...props }) => {
  return (
    <span className={TCL("h2", className)} {...props}>
      {text}
    </span>
  );
};

export function H3({ className, text, ...props }) {
  return (
    <span className={TCL("h3", className)} {...props}>
      {text}
    </span>
  );
}

export function H4({ className, text, ...props }) {
  return (
    <span className={TCL("h4", className)} {...props}>
      {text}
    </span>
  );
}
export function H5({ className, text, ...props }) {
  return (
    <span className={TCL("h5", className)} {...props}>
      {text}
    </span>
  );
}
export function H6({ className, text, ...props }) {
  return (
    <span className={TCL("h6", className)} {...props}>
      {text}
    </span>
  );
}

export function Body({ className, text, ...props }) {
  return (
    <span className={TCL("body", className)} {...props}>
      {text}
    </span>
  );
}
