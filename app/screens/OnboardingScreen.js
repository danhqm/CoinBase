import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';


const { width } = Dimensions.get('window');

function OnboardingScreen({ navigation }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleScroll = (event) => {
        const index = Math.round(event.nativeEvent.contentOffset.x / width);
        setCurrentIndex(index);
    };

    const slides = [
        {
            image: require('../assets/undraw_crypto_flowers_6bgv (1).png'),
            title: 'Exchange Bitcoin & Ethereum For Money',
            text: 'Provide us with the necessary required information and let us do the convertion asap!!!'
        },
        {
            image: require('../assets/undraw_credit_card_payment_12va.png'),
            title: 'Got Giftcards You Want To Redeem For Cash?',
            text: 'Unlimited type cards on our platform ranging from amazon, iTunes, Google Play Store and e.t.c'
        },
        {
            image: require('../assets/undraw_mobile_payments_edgf.png'),
            title: "You're One Step Closer To Cashing Out Your Exchange",
            text: 'Our pay out process is the one of the fatest and guaranteed trusted'
        }
    ];

    const router = useRouter();

    return (
        <SafeAreaView style={styles.safeContainer}>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                contentContainerStyle={{ alignItems: 'center' }}
            >
                {slides.map((slide, index) => (
                    <View key={index} style={[styles.imageContainer, { width }]}>
                        <Image style={styles.image} source={slide.image} />
                        <MaskedView style={styles.mView} maskElement={<Text style={styles.label}>{slide.title}</Text>}>
                            <LinearGradient
                                colors={['#FD749B', '#281AC8']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                style={{ flex: 1 }}
                            />
                        </MaskedView>
                        <Text style={styles.text}>{slide.text}</Text>
                    </View>
                ))}
            </ScrollView>

            {currentIndex === slides.length - 1 && (
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterLogin')}>
                    <LinearGradient style={styles.button1} colors={(['#FD749B', '#281AC8'])}>
                        <Text style={{fontSize: 15, fontFamily: 'Poppins', color: 'white', fontWeight: 'bold'}}>CONTINUE</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            )}

            {/* Pagination Dots */}
            <View style={styles.pagination}>
                {slides.map((_, index) =>
                    currentIndex === index ? (
                    <LinearGradient
                        key={index}
                        colors={['#FD749B', '#281AC8']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.activeDot}
                    />
                    ) : (
                        <View key={index} style={styles.inactiveDot} />
                    )
                )}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50,
    },
    image: {
        width: 287,
        height: 225,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    label: {
        top: 31,
        fontSize: 24,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        flexWrap: 'wrap',
        textAlign: 'center',
    },
    mView: {
        height: 80,
        width: '90%',
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        fontFamily: 'Poppins',
        color: '#333333',
        width: 230,
        flexWrap: 'wrap',
        textAlign: 'center',
        lineHeight: 30,
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    activeDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
    },
    inactiveDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#C4C4C4',
        marginHorizontal: 4,
    },
    buttonContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    button1: {
        width: 193,
        height: 43,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        },
    buttonText: {
        fontSize: 15, 
        fontFamily: 'Poppins', 
        color: 'white', 
        fontWeight: 'bold'
    },
});

export default OnboardingScreen