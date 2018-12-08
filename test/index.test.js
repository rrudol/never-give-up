const { neverGiveUp } = require("../dist/index");

async function lazyAsyncFunction() {
  if (Math.floor(Math.random() * 100) === 5) {
    return true;
  }
}

test("repeat function until it returns value", async () => {
  expect(await neverGiveUp(lazyAsyncFunction)).toBe(true);
});
