import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Platform, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { label: 'Apple Store Gift Card', value: '1' },
    { label: 'App Store & iTunes Gift Card', value: '2' },
]

const data1 = [
    { label: '$25', value: '1' },
    { label: '$50', value: '2' },
    { label: '$100', value: '3' },
    { label: '$200', value: '4' },
    { label: '$500', value: '5' },
]


function DashboardAppleScreen() {
    const [cardType, setCardType] = React.useState(null);
    const [cardValue, setCardValue] = React.useState(null);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.text}>App Store & iTunes Gift Card</Text>
            </View>
            <View style={styles.container2}>
                <Text style={styles.text1}>
                    <Text style={{ fontWeight: 'bold' }}>N360.00</Text> is our conversion rate for every App Store & iTunes card on this platform
                </Text>
                <LinearGradient colors={['#00E0FF', '#0047FF']} start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }} style={styles.card}>
                </LinearGradient>
                <Image style={{ width: 319, height: 200, zIndex: 1, position: 'absolute', }} source={require('../assets/Apple.png')} />
            </View>
            <View style={styles.container3}>
                <Text style={styles.text2}>The total value you derived here will be the amount you'll be receiving during the total transaction process</Text>
                <Dropdown style={styles.input} placeholderStyle={styles.placeholderStyle} selectedTextStyle={styles.selectedTextStyle} inputSearchStyle={styles.inputSearchStyle} data={data} labelField="label" valueField="value" placeholder='Type' value={cardType} onChange={item => { setCardType(item.value) }} />
                <Dropdown style={styles.input} placeholderStyle={styles.placeholderStyle} selectedTextStyle={styles.selectedTextStyle} inputSearchStyle={styles.inputSearchStyle} data={data1} labelField="label" valueField="value" placeholder='Value' value={cardValue} onChange={item => { setCardValue(item.value) }} />
                <TouchableOpacity onPress={() => Alert.alert('You tapped the button!')}>
                    <LinearGradient style={styles.button} colors={(['#FD749B', '#281AC8'])}>
                        <Text style={{fontSize: 15, fontFamily: 'Poppins', color: 'white', fontWeight: 'bold'}}>CONTINUE</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    container1: {
        flex: 1,
        alignItems: 'flex-start',
        top: 40,
        paddingLeft: 28,
        maxHeight: 100
    },
    text: {
        fontSize: 17,
        fontFamily: 'Poppins',
        fontWeight: 400,
        textAlign: 'left',
        color: '626262'
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    card: {
        width: 425,
        height: 285,
        borderTopLeftRadius: 200,
        borderTopRightRadius: 200,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 0,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
            },
            android: {
                elevation: 10,
            },
        })
    },
    text1: {
        zIndex: 2,
        top: 240,
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: 400,
        textAlign: 'center',
        color: '#FFFFFF',
        width: 240,
    },
    container3: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        top: 40
    },
    text2: {
        fontFamily: 'Poppins',
        fontWeight: 400,
        textAlign: 'center',
        color: '#333333',
        fontSize: 12,
        width: 270,
        lineHeight: 20
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 300,
        top: 10,
        fontFamily: 'Poppins',
        color: 'black',
        fontSize: 12,
        borderRadius: 5,
        borderColor: '#c2bbba',
    },
    button: {
        top: 20,
        width: 193,
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center', 
    },
    placeholderStyle: {
        color: '#2F2F2F',
        fontFamily: 'Poppins',
        fontSize: 12
    },
    selectedTextStyle: {
        color: '#2F2F2F',
        fontFamily: 'Poppins',
        fontSize: 12
    },
    inputSearchStyle: {
        color: '#2F2F2F',
        fontFamily: 'Poppins',
        fontSize: 12
    }
});

export default DashboardAppleScreen;