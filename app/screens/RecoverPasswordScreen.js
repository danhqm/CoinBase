import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TextInput, Button, TouchableOpacity, Alert,} from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';


function RecoverPasswordScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/undraw_forgot_password_gi2d.png')} />
                <MaskedView style={styles.mView} maskElement={<Text style={styles.label}>Recover Password</Text>}>
                    <LinearGradient colors={['#FD749B', '#281AC8']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ flex: 1 }}/>
                </MaskedView>
                <TextInput style={styles.input} placeholderTextColor='#2F2F2F' placeholder='Email' />
            </View>
            <View style={styles.container2}>
                <Text style={styles.text}>How well we communicate is determined not by how well we say things, but how well we are understood.</Text>
                <TouchableOpacity onPress={() => Alert.alert('You tapped the button!')}>
                    <LinearGradient style={styles.button} colors={(['#FD749B', '#281AC8'])}>
                        <Text style={{fontSize: 15, fontFamily: 'Poppins', color: 'white', fontWeight: 'bold'}}>SUBMIT</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#e5e5e5', 
    },
    container2:{
        flex: 1,
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
        justifyContent: 'flex-start',
        bottom: 30
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
        width: 177,
        height: 130,
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
        width: 260,
        flexWrap: 'wrap',
        textAlign: 'center',
        lineHeight: 30,
    },
    mView: {
        height: 19.17,
        width: 200,
        top: 25,
    },
    label: {
        fontSize: 24,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        flexWrap: 'wrap',
        textAlign: 'center',
    },
    button: {
        width: 193,
        height: 43,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        top: 75   
    },
});
export default RecoverPasswordScreen;