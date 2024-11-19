import React from "react";
import { 
    SignUp,
    Login,
    RequestOtp,
    UpdateUserData,
    VerifyOtp 
} from "@/utils/utils";
import { signUpData,loginData } from "@/enums/enums";
import { saveToken } from "@/utils/_token";

export const useAuth = () => {
    const VerifyUserExists = async() => {

    }

    const CreataAccount = async(data: signUpData) => {
        const response = await SignUp(data);
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

    const Verifyotp = async(data: { email: string, otp: string }) => {
        const response = await VerifyOtp(data);
        const responseData = await response.json();
        if(responseData.statusCode == 200) {
            saveToken("token", responseData.token);
        } 
        
        return responseData.data
    }

    return {
        CreataAccount,
        LoginUser,
        RequestOtpForEmail,
        UpdateData,
        Verifyotp,
        VerifyUserExists
    };
};
  