const api_url = 'http://localhost:3104'

//Auth
export const signInUrl = `${api_url}/users/login`;
export const signUpUrl = `${api_url}/users/signup`;
export const  updateUrl = `${api_url}/users/update`;
export const otpUrl =  `${api_url}/users/request-otp`;
export const verifyOtpUrl = `${api_url}/users/verify-otp`;