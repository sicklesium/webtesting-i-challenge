module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement === 20) {
    return { ...item };
  } else {
    const enhance1 = item.enhancement + 1;
    return { ...item, enhancement: enhance1 };
  }
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
