function receivesAFunction(spy) {
  return spy();
}

function returnsANamedFunction() {
  return function test() {};
}

function returnsAnAnonymousFunction() {
  return function () {};
}
