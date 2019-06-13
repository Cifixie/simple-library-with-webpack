import get from "lodash/get";
import "./One.css";

class One {
  obj = {
    animal: "kissa"
  };
  constructor() {
    console.log(get(this.obj, "animal"));
  }
}

export default One;
