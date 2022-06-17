function arrayBasic(arrName, arrValue) {
  const data = { one: 1 };
  data[arrName] = arrValue;
  return data;
}
module.exports = arrayBasic;
