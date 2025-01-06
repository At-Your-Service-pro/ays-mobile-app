import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveToken(key: string, value: string) {
    await AsyncStorage.setItem(key, value);
  }
  
  export async function getToken(key: string) {
    let result = await AsyncStorage.getItem(key);
    return result;
  }