import React from "react";
import { getFullYear, getFooterCopy } from "../../utils/Date";

function Footer() {
  return (
    <div
      style={{
        height: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
      }}
    >
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
    </div>
  );
}

export default Footer;
