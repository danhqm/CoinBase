import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';



function RegisterLoginScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/boy (1).png')} />
                <Text style={styles.text}>Great things are not done by impulse, but by a series of small things brought together</Text>
                <TextInput style={styles.input} placeholder='Email' />
                <TextInput style={styles.input} placeholder='Password'/>
                <Text style={{top: 90}}>Forget Your Password?</Text>
                <TouchableOpacity onPress={() => Alert.alert('You tapped the button!')} style={styles.opacity}>
                    <LinearGradient style={styles.button1} colors={(['#FD749B', '#281AC8'])}>
                        <Text style={{fontSize: 15, fontFamily: 'Poppins', color: 'white', fontWeight: 'bold'}}>LOGIN</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <Text style={{top: 185}}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => Alert.alert('You tapped the button!')} style={styles.opacity}>
                    <LinearGradient style={styles.button2} marginTop={-45} colors={(['#FD749B', '#281AC8'])}>
                        <Text style={{fontSize: 15, fontFamily: 'Poppins', color: 'white', fontWeight: 'bold'}}>SIGN UP</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5', 
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 300,
        top: 50,
        fontFamily: 'Poppins',
        color: 'black',
        fontSize: 12,
        borderRadius: 5,
        borderColor: '#d1d1d1',
    },
    image: {
        width: 94,
        height: 94,
        resizeMode: 'contain'
    },
    imageContainer: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
        justifyContent: 'flex-start',
        top: 125
    },
    text: {
        fontSize: 16,
        fontFamily: 'Poppins',
        color: '#333333',
        top: 29.69,
        width: 300,
        flexWrap: 'wrap',
        textAlign: 'center',
        lineHeight: 30,
    },
    button1: {
        width: 300,
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        top: 120,
    },
    button2: {
        width: 300,
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        top: 260,   
    },
});

export default RegisterLoginScreen;


 