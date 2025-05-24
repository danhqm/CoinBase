import React from 'react';
import { View, StyleSheet, Text, Image, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


function SplashScreen(props) {
    return (
        <LinearGradient style={styles.container}
            colors={['#FD749B', '#281AC8']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0, 1]}>
            <Image style={styles.image} source={require('../assets/Logo.png')} />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 161.85,
        height: 32.61,
        resizeMode: 'contain'
    }
});

export default SplashScreen;