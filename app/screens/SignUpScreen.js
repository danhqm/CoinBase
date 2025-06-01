import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const PasswordStrengthMeter = ({ password }) => {
    
    const calculatePasswordStrength = () => {
        let strength = 0;

        if (password.length > 5) strength += 1;
        if (/[a-z]/.test(password)) strength += 1;
        if (/[A-Z]/.test(password)) strength += 1;
        if (/[0-9]/.test(password)) strength += 1;
        if (/[^A-Za-z0-9]/.test(password)) strength += 1;
        return strength;
    };

    const strength = calculatePasswordStrength();
    const strengthPercentage = (strength / 5) * 100;

    return (
        <View>
            <View style={styles.barBackground}>
                <View style={[styles.barFill, { width: `${strengthPercentage}%` }]}></View>
            </View>
                <View style={styles.labels}>
                    <Text style={styles.label}>Weak</Text>
                    <Text style={styles.label}>Medium</Text>
                    <Text style={styles.label}>Strong</Text>
                </View>
            </View>
    )
}


function SignUpScreen({ navigation }) {
    const [inputText, setInputText] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handlePress = () => {
        navigation.navigate('Dashboard', {userInput: inputText});
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/boy (1).png')} />
                    <Text style={styles.text}>Innovation distinguishes between a leader and a follower</Text>
                    <TextInput style={styles.input} placeholderTextColor='#2F2F2F' placeholder='Full Name' value={inputText} onChangeText={setInputText} />
                    <TextInput style={styles.input} placeholderTextColor='#2F2F2F' placeholder='Email'/>
                    <TextInput style={styles.input} placeholderTextColor='#2F2F2F' placeholder='Password' secureTextEntry value={password} onChangeText={setPassword}/>
                    <TextInput style={styles.input} placeholderTextColor='#2F2F2F' placeholder='Confirm Password' secureTextEntry/>
            </View>
            <View style={styles.meter}>
                <PasswordStrengthMeter password={password} />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handlePress}>
                    <LinearGradient style={styles.button} colors={(['#FD749B', '#281AC8'])}>
                        <Text style={{fontSize: 15, fontFamily: 'Poppins', color: 'white', fontWeight: 'bold'}}>SIGN UP</Text>
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
        top: 70
    },
    text: {
        fontSize: 16,
        fontFamily: 'Poppins',
        color: '#333333',
        top: 29.69,
        width: 210,
        flexWrap: 'wrap',
        textAlign: 'center',
        lineHeight: 30,
    },
    buttonContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        top: 200
    },
    button: {
        width: 193,
        height: 43,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',   
    },
    barBackground: {
        height: 6,
        backgroundColor: '#e0e0e0',
        borderRadius: 3,
        overflow: 'hidden',
    },
    barFill: {
        height: '100%',
        backgroundColor: '#f472b6', // pink
    },
    labels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    label: {
        fontSize: 12,
        color: '#444',
    },
    meter: {
        top: 170,
        width: '100%',
        paddingLeft: 50,
        paddingRight: 50,
    },
});

export default SignUpScreen;