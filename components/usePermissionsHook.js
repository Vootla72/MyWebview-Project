//design a custom hook for permissions to access cam & location

import React, {useState, useEffect} from 'react';
import {} from 'react-native'


export const usePermissionHook = () => {

    const [cameraPermissions, setIsCameraPermissions] = useState(false);
    const [locationPermissions, setIsLocationPermissions] = useState(false);

const fetchCameraPermissions = async() => {

    try {
        const isCameraAccessable = await   ();
        setIsCameraPermissions(isCameraAccessable);


    }
    catch(e){
        console.log(e);
    }


}

const fecthLocationPermissions = () => {

}



    useEffect (()=> {

        fetchCameraPermissions();
        fecthLocationPermissions();

    },[])






    return {
        cameraPermissions,
        locationPermissions
    }
}



