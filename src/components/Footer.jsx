import React from "react";
import Links from "./Links";

function Footer() {
  return (
    <footer className="py-4" style={{ backgroundColor: "#151e2d"}}>
      <div className="container text-center">
        <Links />
      </div>
    </footer>
  );
}

export default Footer;
