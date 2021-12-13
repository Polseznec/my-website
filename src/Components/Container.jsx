import * as React from "react";

// functions Import
import { tClassName as TCL } from "../utility/Functions";

export function FullScreenContainer({ className, style, ...props }) {
  return (
    <div
      className={TCL("view full-screen-container", className)}
      style={style}
      {...props}
    ></div>
  );
}

export function Flex({ className, ...props }) {
  return <div className={TCL("flex", className)} {...props}></div>;
}

export function Colunn({ className, ...props }) {
  return <div className={TCL("colunn", className)} {...props}></div>;
}
export function Center({ className, ...props }) {
  return <div className={TCL("center", className)} {...props}></div>;
}
