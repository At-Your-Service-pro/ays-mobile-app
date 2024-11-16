import { 
    signInUrl,
    signUpUrl,
    updateUrl,
    otpUrl,
    verifyOtpUrl 
} from './../endpoints/endpoints';
import { 
    signUpData,
    loginData
 } from './../enums/enums';

export const SignUp = async(data:signUpData) => {
    const response = await fetch(signUpUrl,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })

    return response;
}

export const  Login = async(data:loginData) => {
    const response = await fetch(signInUrl,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })

    return response;
}

export const UpdateUserData = async(data:signUpData) => {
    const response = await fetch(updateUrl,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(data),
    })

    return response;
}

export const RequestOtp = async(email:string) => {
    const response = await fetch(otpUrl,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email}),
    })

    return response;
}

export const VerifyOtp = async(data: { email: string, otp: string }) => {
    const response = await fetch(verifyOtpUrl,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })

    return response;
}
