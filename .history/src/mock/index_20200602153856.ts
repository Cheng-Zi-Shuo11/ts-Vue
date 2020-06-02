/** @format */

import Mock, { Random } from "mockjs";

let token = Random.id();

const data = {
  mobilephone: "18536599049",
  password: "a12345",
  tokenStr: token,
};

Mock.mock("/api/login", "post", data);

export default Mock;
