import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

function OnboardingScreen(props) {
    return (
        <SafeAreaView style={styles.safeContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator contentContainerStyle={{ alignItems: 'center' }}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../assets/undraw_crypto_flowers_6bgv (1).png')} />
                    <MaskedView style={styles.mView} maskElement={<Text style={styles.label}>Exchange Bitcoin & Ethereum For Money</Text>}>
                        <LinearGradient
                            colors={['#FD749B', '#281AC8']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1}}
                            locations={[0, 1]}
                            flex={1}
                            flexWrap="wrap">
                        </LinearGradient>
                    </MaskedView>
                    <Text style={styles.text}>Provide us with the necessary required information and let us do the convertion asap!!!</Text>
                </View>

                
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../assets/undraw_credit_card_payment_12va.png')} />
                    <MaskedView style={styles.mView} maskElement={<Text style={styles.label}>Got Giftcards You Want To Redeem For Cash?</Text>}>
                        <LinearGradient
                            colors={['#FD749B', '#281AC8']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1}}
                            locations={[0, 1]}
                            flex={1}
                            flexWrap="wrap">
                        </LinearGradient>
                    </MaskedView>
                    <Text style={styles.text}>Unlimited type cards on our platform ranging from amazon, iTunes, Google Play Store and e.t.c</Text>
                </View>
            
                {/* Slide 3 */}
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../assets/undraw_mobile_payments_edgf.png')} />
                    <MaskedView style={styles.mView} maskElement={<Text style={styles.label}>You're One Step Closer To Cashing Out Your Exchange</Text>}>
                        <LinearGradient
                            colors={['#FD749B', '#281AC8']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1}}
                            locations={[0, 1]}
                            flex={1}
                            flexWrap="wrap">
                        </LinearGradient>
                    </MaskedView>
                    <Text style={styles.text}>Our pay out process is the one of the fatest and guaranteed trusted</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#E5E5E5'
    },
    container: {
        width,
        backgroundColor: '#E5E5E5',
        alignItems: 'center',
        padding: 20,
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50
    },
    image: {
        width: 287,
        height: 225,
        resizeMode: 'contain',
        marginBottom: 20
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
        marginBottom: 20
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
});

export default OnboardingScreen;