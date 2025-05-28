import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';



function RegisterLoginScreen( {navigation} ) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/boy (1).png')} />
                <Text style={styles.text}>Great things are not done by impulse, but by a series of small things brought together</Text>
                <TextInput style={styles.input} placeholderTextColor='#2F2F2F' placeholder='Email' />
                <TextInput style={styles.input} placeholderTextColor='#2F2F2F' placeholder='Password'/>
            <View style={styles.buttonContainer}>
                <Text style={{bottom: 30}}>Forget Your Password?</Text>
                <TouchableOpacity onPress={() => Alert.alert('You tapped the button!')}>
                    <LinearGradient style={styles.button1} colors={(['#FD749B', '#281AC8'])}>
                        <Text style={{fontSize: 15, fontFamily: 'Poppins', color: 'white', fontWeight: 'bold'}}>LOGIN</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer2}>
                <Text style={{bottom: 15}}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <LinearGradient style={styles.button2} marginTop={20} colors={(['#FD749B', '#281AC8'])}>
                        <Text style={{fontSize: 15, fontFamily: 'Poppins', color: 'white', fontWeight: 'bold'}}>SIGN UP</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            </View>
        </SafeAreaView>
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
        borderColor: '#c2bbba',
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
        top: 100
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
    },
    button2: {
        width: 300,
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center', 
    },
    buttonContainer: {
        top: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer2: {
        top: 150,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default RegisterLoginScreen;


 