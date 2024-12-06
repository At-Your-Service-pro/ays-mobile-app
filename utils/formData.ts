import AsyncStorage from '@react-native-async-storage/async-storage';


export async function saveFormData(key: string, value: string | boolean | object) {
    try {
        const stringifiedValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, stringifiedValue);
    } catch (error) {
        console.log("Error saving form data:", error);
    }
}


export async function loadFormData(key: string) {
    try {
        const storedFormData = await AsyncStorage.getItem(key);

        if (storedFormData !== null) {
            const parsedFormData = JSON.parse(storedFormData);
            return parsedFormData;
        }
    } catch (err) {
        console.error("Error loading form data:", err);
    }
}
