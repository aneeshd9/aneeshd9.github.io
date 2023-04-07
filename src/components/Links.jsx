import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Links() {
  return (
    <div className="d-flex justify-content-center">
      <a href="https://github.com/aneeshd9" target={"_blank"} rel={"noreferrer"} className="me-4 text-light">
        <i className="fab fa-github fa-2x"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/aneesh-dandime/"
        className="text-light"
        target={"_blank"}
        rel={"noreferrer"}
      >
        <i className="fab fa-linkedin fa-2x"></i>
      </a>
    </div>
  );
}

export default Links;
