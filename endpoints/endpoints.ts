const api_url = 'http://192.168.0.178:3104'

//Auth
export const signInUrl = `${api_url}/users/login`;
export const signUpUrl = `${api_url}/users/signup`;
export const  updateUrl = `${api_url}/users/update`;
export const getUserUrl = `${api_url}/users/get-user`;
export const otpUrl =  `${api_url}/users/request-otp`;
export const verifyOtpUrl = `${api_url}/users/verify-otp`;
export const verifyUserUrl = `${api_url}/users/verify-user`;
export const updatePasswordUrl = `${api_url}/users/update-password`;