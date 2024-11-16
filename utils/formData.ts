import * as SecureStore from 'expo-secure-store';

export async function saveFormData(key:string,value: string | boolean | object){
    await SecureStore.setItemAsync(key, JSON.stringify(value));
}

export async function loadFormData(key: string){
    await SecureStore.getItemAsync(key);
}