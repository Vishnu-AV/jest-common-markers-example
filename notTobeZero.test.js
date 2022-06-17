const notToBeZero = require("./notToBeZero");

test("adding positive numbers is not zero", () => {
  expect(notToBeZero(2, 3)).not.toBe(0);
});
