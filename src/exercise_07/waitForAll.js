export default function waitForAll(...promises) {
  // This function returns a promise which will be triggered when all the `promises` are completed.
  //
  // If all the `promises` are resolved, then the returned promise will be resolved. Otherwise,
  // if one of the `promises` is rejected, then the returned promise will be rejected.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in wait_for_all_spec.js.
  // * Please do NOT modify the signature of the function.

  promises.forEach((pro) => {
    if (!(pro instanceof Promise)) {
      throw new Error('Not all elements are promises.');
    }
  });
  return new Promise((resolve, reject) => {
    let num = 0;
    for (let i = 0; i < promises.length; i += 1) {
      promises[i].then(() => {
        num += 1;
        if (num === promises.length) {
          resolve();
        }
      },
      () => {
      }).then(() => {
        if (i === promises.length - 1 && num !== promises.length) {
          reject();
        }
      });
    }
  });
}
