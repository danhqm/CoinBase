import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import SplashScreen from './app/screens/SplashScreen';
import { useState, useEffect } from 'react';
import OnboardingScreen from './app/screens/OnboardingScreen';
import RegisterLoginScreen from './app/screens/RegisterLoginScreen';

const Stack = createNativeStackNavigator();


export default function App() {

  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isShowSplash ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : (
          <>
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="RegisterLogin" component={RegisterLoginScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
