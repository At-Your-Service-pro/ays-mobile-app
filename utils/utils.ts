import { 
    signInUrl,
    signUpUrl,
    updateUrl,
    otpUrl,
    verifyOtpUrl,
    verifyUserUrl 
} from './../endpoints/endpoints';
import { 
    signUpData,
    loginData
 } from './../enums/enums';
 import { getToken } from './_token';

export const VerifyUser = async(data: signUpData) => {
    const {firstname,lastname,email,password,phonenumber} = data;

    const response = await fetch(verifyUserUrl,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            phonenumber: phonenumber
        }),
    })
 
    return response;
} 

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
    const token = getToken('token')
    const response = await fetch(updateUrl,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
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
