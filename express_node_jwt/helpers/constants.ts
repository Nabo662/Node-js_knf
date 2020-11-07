
export const msg = {

  success: 'Success',
  emailExist: 'Email is already registered',
  emailRequired: 'Email is required',
  dataRequired: 'Data is required',
  passwordRequired: 'Password is required',
  incorrectCredentials: 'Incorrect username or password',
  inActiveUser: 'Inactive user',
  forbidden: 'Invalid token',
  unknownError: 'Something went wrong. Please try again later',
};

export const secret = 'test';

export const code = {

  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  SERVER_ERROR: 500,
  SUCCESS: 200,
  FORBIDDEN: 403,
};

export const expiryTime = 6 * 3600 * 1000; // 6 hours in milliseconds
