import React, { useEffect } from "react";

import {
  ActivityIndicator,
  TouchableOpacity,
  View,
  Text,
} from "react-native"

import { Camera, useCameraDevice } from "react-native-vision-camera";


const App = () => {
  const device = useCameraDevice('back');

  useEffect(() => {
    checkPermission();
  }, []);

  const checkPermission = async () => {
    const newCameraPermission = await Camera.requestCameraPermission()
    const newMicrophonePermission = await Camera.requestMicrophonePermission()

    console.log(newCameraPermission);
    console.log(newMicrophonePermission);

    if (!newCameraPermission || !newMicrophonePermission) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Camera or microphone permission not granted!</Text>
        </View>
      );
    }
  }


  if (device == null) return <ActivityIndicator />
  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{height:586}}
        device={device}
        isActive={true}
      />
      <View style={{position:"absolute", bottom:0,width:"100%", height:120, backgroundColor:"black", justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={{ position: "absolute", width: 40, height: 40, borderRadius: 15, backgroundColor: 'red'}}>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default App