import * as SecureStore from 'expo-secure-store';

export async function saveFormData(key: string, value: string | boolean | object) {
    try {
        const stringifiedValue = JSON.stringify(value);
        console.log("Saving to SecureStore:", stringifiedValue);
        await SecureStore.setItemAsync(key, stringifiedValue);
    } catch (error) {
        console.log("Error saving form data:", error);
    }
}


export async function loadFormData(key: string) {
    try {
        const storedFormData = await SecureStore.getItemAsync(key);
        console.log("Retrieved from SecureStore:", storedFormData);

        if (storedFormData !== null) {
            const parsedFormData = JSON.parse(storedFormData);
            console.log("Parsed Form Data:", parsedFormData);
            return parsedFormData;
        }
    } catch (err) {
        console.error("Error loading form data:", err);
    }
}
