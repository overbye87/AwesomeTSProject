import React, { useEffect, useRef, useState } from 'react';
import { Alert, StyleSheet, Text } from 'react-native';
import { Camera, PhotoFile, useCameraDevices } from 'react-native-vision-camera';
import CameraButtons from './CameraButtons';

const CameraVision = () => {
  const camera = useRef<Camera>(null);
  const devices = useCameraDevices();
  const [isFrontCamera, setIsFronCamera] = useState(false);
  const [results, setResults] = useState<PhotoFile[]>([]);

  const device = isFrontCamera ? devices.front : devices.back;

  const requestingPermissions = async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
    const newMicrophonePermission = await Camera.requestMicrophonePermission();
  };

  const handleFlipCamera = () => {
    setIsFronCamera((prev) => !prev);
  };

  const handleTakePhoto = async () => {
    try {
      const result = await camera.current?.takePhoto();
      if (result?.path) {
        setResults((prev) => [...prev, result]);
      }
      Alert.alert('path', result?.path);
    } catch (e) {
      Alert.alert(`Error: ${e}`);
    }
  };

  useEffect(() => {
    requestingPermissions();
  }, []);

  if (device == null) {
    return <Text>No device</Text>;
  }
  return (
    <>
      <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo={true}
      />
      <CameraButtons
        onTakePhoto={handleTakePhoto}
        onFlipCamera={handleFlipCamera}
      />
    </>
  );
};

export default CameraVision;
