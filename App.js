import SplashScreen from './app/screens/SplashScreen';
import OnboardingScreen from './app/screens/OnboardingScreen';
import RegisterLoginScreen from './app/screens/RegisterLoginScreen';
import SignUpScreen from './app/screens/SignUpScreen';
import RecoverPasswordScreen from './app/screens/RecoverPasswordScreen';
import NewsletterScreen from './app/screens/NewsletterScreen';
import DashboardScreen from './app/screens/DashboardScreen';
import DashboardBitcoinScreen from './app/screens/DashboardBitcoinScreen';
import DashboardEthereumScreen from './app/screens/DashboardEthereumScreen';
import DashboardAmazonScreen from './app/screens/DashboardAmazonScreen';
import DashboardAppleScreen from './app/screens/DashboardAppleScreen';
import DashboardSteamScreen from './app/screens/DashboardSteamScreen';
import DashboardGoogleScreen from './app/screens/DashboardGoogleScreen';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from 'expo-router';
import { useState, useEffect } from 'react';

function CustomBackButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.8}>
      <LinearGradient
        colors={['#FD749B', '#281AC8']}
        start={{ x: 0, y: 0 }} 
        end={{ x: 1, y: 0 }}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 12,
          paddingVertical: 6,
          borderRadius: 20,
        }}>
      <Ionicons name="arrow-back" size={20} color="#fff" />
      <Text style={{ marginLeft: 5, fontSize  : 16, color: '#fff' }}>Back</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

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
            <Stack.Screen name="RegisterLogin" component={RegisterLoginScreen} options = {{headerLeft: CustomBackButton, headerShown: true, headerTitle : ''}} />
            <Stack.Screen name="SignUp" component={SignUpScreen} options = {{headerLeft: CustomBackButton, headerShown: true, headerTitle : ''}} />
            <Stack.Screen name="RecoverPassword" component={RecoverPasswordScreen} options = {{headerLeft: CustomBackButton, headerShown: true, headerTitle : ''}}/>
            <Stack.Screen name="Newsletter" component={NewsletterScreen} options = {{headerLeft: CustomBackButton, headerShown: true, headerTitle : ''}}/>
            <Stack.Screen name="Dashboard" component={DashboardScreen} options = {{headerLeft: CustomBackButton, headerShown: true, headerTitle : ''}}/>
            <Stack.Screen name="Bitcoin" component={DashboardBitcoinScreen} options = {{headerLeft: CustomBackButton, headerShown: true, headerTitle : ''}}/>
            <Stack.Screen name="Ethereum" component={DashboardEthereumScreen} options = {{headerLeft: CustomBackButton, headerShown: true, headerTitle : ''}}/>
            <Stack.Screen name="Amazon" component={DashboardAmazonScreen} options = {{headerLeft: CustomBackButton, headerShown: true, headerTitle : ''}}/>
            <Stack.Screen name="Apple" component={DashboardAppleScreen} options = {{headerLeft: CustomBackButton, headerShown: true, headerTitle : ''}}/>
            <Stack.Screen name="Steam" component={DashboardSteamScreen} options = {{headerLeft: CustomBackButton, headerShown: true, headerTitle : ''}}/>
            <Stack.Screen name="Google" component={DashboardGoogleScreen} options = {{headerLeft: CustomBackButton, headerShown: true, headerTitle : ''}}/>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
