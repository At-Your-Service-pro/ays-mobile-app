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

export interface updateData {
    email: string;
    password: string;
}

export interface userData {
    firstname?: string;
    lastname?: string;
    email?: string;
    phonenumber?: string;
    password?: string;
    token?: string;
    fcmToken?: string;
    role?: 'user' | 'admin';
}
