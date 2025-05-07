import { useAsyncStorage } from '@react-native-async-storage/async-storage'

import {Storage} from 'expo-storage'

export const AsyncStorage = () => {

    


    const { getItem, setItem, removeItem } = useAsyncStorage();

    console.log(setItem)
    

    const getAsyncItem = async (key) => {
        try {
            const data = await getItem(key);
            return data;

        }

        catch (e) {
            console.log(e);
        }
    }

    const setAsyncItem = async (key, value) => {
        try {
            const data = await setItem(value, JSON.stringify(value))
            console.log("setItem", data)
            return data;

        }

        catch (e) {
            console.log(e);
        }
    }

    const removeAsyncItem = async (key) => {
        try {
            const data = await removeItem(key);
            return data;

        }

        catch (e) {
            console.log(e);
        }
    }
    return {
        getAsyncItem,
        setAsyncItem,
        removeAsyncItem,
    }
}