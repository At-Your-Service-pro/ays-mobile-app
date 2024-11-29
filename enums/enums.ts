export interface signUpData {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    phonenumber: string;
}

export interface loginData {
    email: string;
    password: string;
}

export interface otpData {
    email: string;
    otp: string;
}
