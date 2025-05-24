import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './app/screens/SplashScreen';
import { useState, useEffect } from 'react';
import RegisterLoginScreen from './app/screens/RegisterLoginScreen';

export default function App() {

  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    }, 3000);
  }, []);

  return <>{isShowSplash ? <SplashScreen /> : <RegisterLoginScreen />}</>
}

