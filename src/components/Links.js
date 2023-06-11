import React from "react";
import user from "../data/user";

function Links(props) {
  return (
    <div>
      <h3>Links</h3>
      <a href={props.github} alt="liza's github link">
        {props.github}{" "}
      </a>
      <a href={props.linkedin} alt="liza's linkedin link">
        {props.linkedin}
      </a>
    </div>
  );
}

export default Links;
