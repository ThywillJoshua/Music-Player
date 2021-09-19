import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

function Nav(props) {
  function clickHandler() {
    props.setLibraryStatus(!props.libraryStatus);
  }

  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={clickHandler}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
}

export default Nav;
