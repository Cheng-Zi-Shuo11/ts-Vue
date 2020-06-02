/** @format */

import Mock from "mockjs";

const data = {
  mobilephone: "18536599049",
  password: "a12345",
  tokenStr: 123,
};

Mock.mock("/api/login", "post", data);

export default Mock;
