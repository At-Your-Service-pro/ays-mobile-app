import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef} from "react";
import { loadFormData } from "@/utils/formData";
import CustomeButtom from "@/components/CustomeButtom";
import { router, useLocalSearchParams } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import {useAuth} from '@/hooks/useAuth';
import Validationerror from "@/components/Validationerror";
import Toast from 'react-native-toast-message';

const OTPVerification = () => {
  const { previous_screen,email } = useLocalSearchParams();

  const [error,setError] = useState('');
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const inputs = useRef<(TextInput | null)[]>([]);

  const {Verifyotp,CreateAccount,RequestOtpForEmail,notification} = useAuth();

  const handleOtpChange = (value: string, index: number) => {
    if (isNaN(Number(value))) return; // Prevent non-numeric input

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // Move to the next input if not the last one and input is filled
    if (value && index < otp.length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (value: string, index: number) => {
    if (!value && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleConfirm = async () => {
    const otpCode = otp.join("");
    const formData = await loadFormData('formData');

    if (previous_screen === "signup") {
      const res = await Verifyotp({
        email,
        otp: otpCode,
      })

      if(res.statusCode == 200){
        setError('');
        const responseData: any = CreateAccount(formData);
        if(responseData.statusCode == 201){
          if(previous_screen == 'signup'){
            router.push('/dashboard');  
          }
        }
      }else {
        setError(res.message);
      }
      
    }
    if(previous_screen === 'reset_pass'){
      router.push({
        pathname: '/createnewpassword',
        params: {
          email,
          previous_screen: 'otp'
        }
      });
    }
  };

  const handleResend = async() => {
    const response =await  RequestOtpForEmail(email);
    if(response.statusCode == 200){
      Toast.show({
        text1: "OTP sent successfully",
        text2: "Check your email to get your otp code",
        type: "success",
      });
    } else {
      Toast.show({
        text1: "Failed to send OTP",
        text2: response.message,
        type: "error",
      });
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Toast />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView style={styles.headerContainer} showsVerticalScrollIndicator={false}>
          <TouchableOpacity style={styles.header} onPress={() => router.back()}>
            <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
          <View>
            <Text style={styles.headerText}>Verification Code</Text>
            <Text style={styles.headerSubText}>
              Enter the 5-digit OTP code sent to your email to verify your account.
            </Text>
          </View>
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                style={styles.otpInput}
                keyboardType="numeric"
                maxLength={1}
                value={digit}
                onChangeText={(value) => handleOtpChange(value, index)}
                onKeyPress={({ nativeEvent }) => {
                  if (nativeEvent.key === "Backspace") {
                    handleBackspace(digit, index);
                  }
                }}
                ref={(ref) => (inputs.current[index] = ref)}
              />
            ))}
          </View>
          <View style={styles.error}>
            {
              error && <Validationerror title={`${error}, try again`} />
            }
          </View>
          <View style={styles.resend}>
            <Text>Haven't got the OTP code yet?</Text>
            <TouchableOpacity 
              style={{ marginTop: 10 }}
              onPress={handleResend}
            >
              <Text style={{ color: "#1AACD5" }}>Resend</Text>
            </TouchableOpacity>
          </View>

          <CustomeButtom title="Confirm" onPress={handleConfirm} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OTPVerification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    width: "90%",
    marginHorizontal: "auto",
    marginTop: "23%",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 20,
  },
  headerSubText: {
    marginTop: 10,
    fontSize: 15,
    color: "#5E5E5E",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#E1E1E1",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#F9F9F9",
  },
  header: {
    paddingBottom: 15,
  },
  resend: {
    marginTop: 20,
    marginBottom: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  error: {
    marginTop: 10
  }
});
