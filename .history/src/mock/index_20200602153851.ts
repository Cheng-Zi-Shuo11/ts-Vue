/** @format */

import Mock, { Random } from "mockjs";

let token = Random.id();

const data = {
  mobilephone: "18536599049",
  password: "a12345",
  tokenStr: 123,
};

Mock.mock("/api/login", "post", data);

export default Mock;
