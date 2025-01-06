import React,{useState} from "react";
import { 
    SignUp,
    Login,
    RequestOtp,
    UpdateUserData,
    VerifyOtp,
    VerifyUser,
    updatePassword,
    getUser
} from "@/utils/utils";
import { signUpData,loginData,otpData,updateData } from "@/enums/enums";
import { saveToken } from "@/utils/_token";
import { useRouter } from "expo-router";

export const useAuth = () => {
    const [_error,setError] = useState(false);
    const [notification,setNotification] = useState(false);
    const router = useRouter();

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

    const GetUser = async(email: string) => {
        const response: any = await getUser(email);
        const responseData = await response.json();
        return responseData;
    }

    const UpdatePassword = async(data: updateData) => {
       const {email, password} = data;
        const response = await updatePassword(email,password)
        const responseData = await response.json();
        return responseData;
    }

    const CreateAccount = async(data: signUpData) => {
        const {email,firstname,lastname,password,phonenumber} = data;
        const response: any = await SignUp({
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
        console.log(responseData);
        if(responseData.statusCode == 200) {
            setNotification(true);
        }
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
        
        return responseData
    }

    return {
        CreateAccount,
        LoginUser,
        RequestOtpForEmail,
        UpdateData,
        Verifyotp,
        VerifyUserExists,
        _error,
        notification,
        UpdatePassword,
        GetUser
    };
};
  