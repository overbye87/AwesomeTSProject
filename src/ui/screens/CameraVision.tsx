import React, { useEffect, useRef, useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { useDispatch } from 'react-redux';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../App';
import Loading from '../components/Loading';
import { setResult } from '../../store/camera/cameraSlice';
import CameraButtons from '../components/CameraButtons';

type Props = NativeStackScreenProps<RootStackParamList, 'CameraVision'>;

const CameraVision: React.FC<Props> = () => {
  const camera = useRef<Camera>(null);
  const devices = useCameraDevices();
  const [isFrontCamera, setIsFronCamera] = useState(false);
  const [isTakePhoto, setIsTakePhoto] = useState(false);
  const dispatch = useDispatch();

  const device = isFrontCamera ? devices.front : devices.back;

  const requestingPermissions = async () => {
    // eslint-disable-next-line no-unused-vars
    const newCameraPermission = await Camera.requestCameraPermission();
    // eslint-disable-next-line no-unused-vars
    const newMicrophonePermission = await Camera.requestMicrophonePermission();
  };

  useEffect(() => {
    requestingPermissions();
  }, []);

  const handleFlipCamera = () => {
    setIsFronCamera((prev) => !prev);
    // Alert.alert('device', JSON.stringify(device));
    Alert.alert('devices', Object.keys(devices).join(', '));
  };

  const handleTakePhoto = async () => {
    try {
      setIsTakePhoto(true);
      const result = await camera.current?.takePhoto();
      if (result?.path) {
        dispatch(setResult(result));
      }
      setIsTakePhoto(false);
      // Alert.alert('path', result?.path);
    } catch (e) {
      setIsTakePhoto(false);
      Alert.alert(`Error: ${e}`);
    }
  };

  if (!device || isTakePhoto) {
    return <Loading />;
  }
  return (
    <>
      <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo={true}
        enableZoomGesture
      />
      <CameraButtons
        onTakePhoto={handleTakePhoto}
        onFlipCamera={handleFlipCamera}
      />
    </>
  );
};

export default CameraVision;
