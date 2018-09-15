import React from "react";
import ReactDOM from "react-dom";
import { Button } from "react-bootstrap";

const jsx = (
  <div>
    Hello!
    <Button bsStyle="primary">Primary</Button>
  </div>
);

ReactDOM.render(jsx, document.getElementById("app"));
