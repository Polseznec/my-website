import * as React from "react";

// functions Import
import {
  tClassName as TCL,
  setFLexDirection as SFD,
} from "../utility/Functions";

export function PageContainer({ className, style, ...props }) {
  return (
    <div
      className={TCL("page-container", className)}
      style={style}
      {...props}
    ></div>
  );
}

export function SectionContainer({ className, style, ...props }) {
  return (
    <section
      className={TCL("section-container", className)}
      style={style}
      {...props}
    ></section>
  );
}

export function FullScreenContainer({ className, style, ...props }) {
  return (
    <div
      className={TCL("full-screen-container", className)}
      style={style}
      {...props}
    ></div>
  );
}

export function Flex({ className, ...props }) {
  return <div className={TCL("flex", className)} {...props}></div>;
}

export function Colunn({ className, right, left, center, ...props }) {
  return (
    <div
      className={TCL("colunn", SFD(right, left, center), className)}
      {...props}
    ></div>
  );
}

export function Row({ className, right, left, center, ...props }) {
  return (
    <div
      className={TCL("row", SFD(right, left, center), className)}
      {...props}
    ></div>
  );
}

export function ArticleContainer({ className, style, ...props }) {
  return <div className={TCL("flex", className)} {...props}></div>;
}
