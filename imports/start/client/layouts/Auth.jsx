import React from "react";

export default function Auth({ children }) {
  console.log("Auth rendered",)

  return (
    <>
      <h1>Header</h1>
      {children}
    </>
  );
}
