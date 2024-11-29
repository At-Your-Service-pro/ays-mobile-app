import * as SecureStore from 'expo-secure-store';

export async function saveFormData(key:string,value: string | boolean | object){
    try {
        await SecureStore.setItemAsync(key, JSON.stringify(value));
    }catch(error){
        console.log(error);
    }
}

export async function loadFormData(key: string){
    try {
        const storedFormData = await SecureStore.getItemAsync(key);
        if(storedFormData !== null){
            const parsedFormData = JSON.parse(storedFormData);
            return parsedFormData;
        }

    }catch(err){
        console.error('Error loading form data:', err);
    }


}