import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { addBaseURL } from './api/main/axios';
import { config } from './config';

import { store } from './store/store';

import AppNavigator from './ui/navigation/AppNavigator';
import storage from './utils/storage';

const App = () => {
  const [ip, setIp] = useState('');

  const checkAsyncStorage = async () => {
    const newIp = await storage.ip.get() || config.authUrl;
    addBaseURL(newIp);
    setIp(newIp);
  };

  useEffect(() => {
    checkAsyncStorage();
  }, []);


  return (
    <Provider store={store}>
      {ip ? <AppNavigator /> : <ActivityIndicator size="large" color="#a4262c" />}
    </Provider>
  );
};

export default App;
