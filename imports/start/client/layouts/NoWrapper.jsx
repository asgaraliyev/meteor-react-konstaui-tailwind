import React from "react";

export default function NoWrapper({ children }) {
  console.log("NoWrapper rendered",)
  return <>{children}</>;
}
