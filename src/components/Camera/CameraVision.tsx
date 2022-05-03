import React, {useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import CameraButtons from './CameraButtons';

const CameraVision = () => {
  const devices = useCameraDevices();
  const device = devices.back;

  const requestingPermissions = async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
    const newMicrophonePermission = await Camera.requestMicrophonePermission();
  };

  useEffect(() => {
    requestingPermissions();
  }, []);

  if (device == null) {
    return <Text>No device</Text>;
  }
  return (
    <>
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
      <CameraButtons />
    </>
  );
};

export default CameraVision;
