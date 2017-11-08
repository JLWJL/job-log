/**
 * Validate email from user input. Email is:
 * required, match email format, no space
 * @param {String} email
 */
export function validateEmail (email) {
  let regex = /^\w+@\w+?(\.[a-zA-Z]{2,}){1,2}$/;
  return {'result': regex.test(email), 'message': 'Invalid email'};
}

/**
 * Validate length of input
 * @param {String} input
 * @param {String} option: Name of the input so that prompt can be specific
 * @returns {{result: boolean, message: string}}
 */
export function validateLength (input, option) {
  let placeholder = (typeof option === 'string' && option.length > 0)
    ? option
    : 'Input';
  return ({
    'result': input.length >= 1,
    'message': placeholder + ' at least 1 character',
  });
}

