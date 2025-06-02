import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TextInput, Button, TouchableOpacity, Alert,} from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

function NewsletterScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/undraw_newsletter_vovu.png')} />
                    <MaskedView style={styles.mView} maskElement={<Text style={styles.label}>Subscribe To Our Newsletter To Receive Weekly Updates</Text>}>
                        <LinearGradient colors={['#FD749B', '#281AC8']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ flex: 1 }}/>
                    </MaskedView>
                <TextInput style={styles.input} placeholderTextColor='#2F2F2F' placeholder='Email' />
            </View>
            <View style={styles.container2}>
                <Text style={styles.text}>We hate spam just as much as you do and will not spam your email</Text>
                    <TouchableOpacity onPress={() => Alert.alert('You tapped the button!')}>
                        <LinearGradient style={styles.button} colors={(['#FD749B', '#281AC8'])}>
                            <Text style={{fontSize: 15, fontFamily: 'Poppins', color: 'white', fontWeight: 'bold'}}>SUBSCRIBE</Text>
                        </LinearGradient>
                    </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    container2:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        top: 40
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
        width: 212,
        height: 162,
        resizeMode: 'contain'
    },
    imageContainer: {
        flex: 1,
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
        height: 50,
        width: 300,
        top: 20,
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

export default NewsletterScreen;