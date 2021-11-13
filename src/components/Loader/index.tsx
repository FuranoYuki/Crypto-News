import React from "react";
import { Spin } from "antd";

export function Loader(): JSX.Element {
  return (
    <div className="loader">
      <Spin />
    </div>
  );
}
