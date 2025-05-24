import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TextInput, Button } from 'react-native';
import { useState } from 'react';



function RegisterLoginScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/boy (1).png')} />
                <Text style={styles.text}>Great things are not done by impulse, but by a series of small things brought together</Text>
                <TextInput style={styles.input} placeholder='Email' />
                <TextInput style={styles.input} placeholder='Password'/>
                <Text style={{top: 70}}>Forget Your Password?</Text>
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
    }
});

export default RegisterLoginScreen;