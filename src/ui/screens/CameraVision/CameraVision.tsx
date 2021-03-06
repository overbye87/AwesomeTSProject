import React, { useEffect, useRef, useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { useDispatch } from 'react-redux';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import CustomActivityIndicator from '../../components/CustomActivityIndicator';
import { setResult } from '../../../store/camera/cameraSlice';
import Buttons from './components/Buttons';
import { CommonStackParamList } from '../../navigation/CommonNavigator';

type Props = NativeStackScreenProps<CommonStackParamList, 'CameraVision'>;

const CameraVision: React.FC<Props> = () => {
  const camera = useRef<Camera>(null);
  const devices = useCameraDevices();
  const [isFrontCamera, setIsFronCamera] = useState(false);
  const [isTakePhoto, setIsTakePhoto] = useState(false);
  const dispatch = useDispatch();

  const device = isFrontCamera ? devices.front : devices.back;

  useEffect(() => {
    (async () => {
      await Camera.requestCameraPermission();
      await Camera.requestMicrophonePermission();
    })();
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
    return <CustomActivityIndicator />;
  }
  return (
    <>
      <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive
        photo
        enableZoomGesture
      />
      <Buttons
        onTakePhoto={handleTakePhoto}
        onFlipCamera={handleFlipCamera}
      />
    </>
  );
};

export default CameraVision;
