import React,{useState} from "react";
import { 
    SignUp,
    Login,
    RequestOtp,
    UpdateUserData,
    VerifyOtp,
    VerifyUser 
} from "@/utils/utils";
import { signUpData,loginData,otpData } from "@/enums/enums";
import { saveToken } from "@/utils/_token";

export const useAuth = () => {
    const [error,setError] = useState(false);

    const VerifyUserExists = async(data: signUpData) => {
        const {firstname,lastname,email,password,phonenumber} = data;

        const response = await VerifyUser({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            phonenumber: phonenumber
        });

        const responseData = await response.json();
        return responseData;
    }

    const CreateAccount = async(data: signUpData) => {
        const {firstname,lastname,email,password,phonenumber} = data;
        console.log(`data: ${firstname}`);
        const response = await SignUp({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            phonenumber: phonenumber
        });
        const responseData = await response.json();
        return responseData;
    }

    const LoginUser = async(data:loginData ) => {
        const response = await Login(data);
        const responseData = await response.json();
        if(responseData.statusCode == 200) {
            saveToken("token", responseData.token);
        } 
        return responseData;
    }

    const RequestOtpForEmail = async(email: string) => {
        const response = await RequestOtp(email);
        const responseData = await response.json();
        return responseData;
    }

    const UpdateData = async(data: signUpData) => {
        const response = await UpdateUserData(data);
        const responseData = await response.json();
        return responseData;
    }

    const Verifyotp = async(data: otpData) => {
        const {email,otp} = data
        const response = await VerifyOtp({
            email,otp
        });
        const responseData = await response.json();
        if(responseData.statusCode == 200) {
            saveToken("token", responseData.token);
        } 

        console.log(responseData);
        
        return responseData.data
    }

    return {
        CreateAccount,
        LoginUser,
        RequestOtpForEmail,
        UpdateData,
        Verifyotp,
        VerifyUserExists
    };
};
  