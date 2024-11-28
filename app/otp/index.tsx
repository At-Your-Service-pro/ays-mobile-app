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
import React, { useState, useRef } from "react";
import CustomeButtom from "@/components/CustomeButtom";
import { router, useLocalSearchParams } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import {useAuth} from '@/hooks/useAuth';

const OTPVerification = () => {
  const { previous_screen } = useLocalSearchParams();

  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const inputs = useRef<(TextInput | null)[]>([]);

  const {Verifyotp} = useAuth();

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

  const handleConfirm = () => {
    const otpCode = otp.join("");
    console.log("Entered OTP:", otpCode);

    if (previous_screen === "signup") {
      
      router.push("/welcome");
    } else {
      router.push("/createnewpassword");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
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
          <View style={styles.resend}>
            <Text>Haven't got the OTP code yet?</Text>
            <TouchableOpacity style={{ marginTop: 10 }}>
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
    marginTop: "15%",
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
});
