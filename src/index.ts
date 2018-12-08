/**
 * @Method: Returns the promise of value which will be returned by function passed in params. It will never return undefined value or throw exception.
 * @Param {Function}
 * @Return {Promise<any>}
 */
export async function neverGiveUp(func: Function): Promise<any> {
  let result = undefined;
  while (true) {
    try {
      result = await func();
      if (result !== undefined) {
        break;
      }
    } catch (err) {}
  }
  return result;
}

export default neverGiveUp;
