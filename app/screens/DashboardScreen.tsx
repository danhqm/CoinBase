import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, FlatList, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

const cards = [
  {
    id: '1',
    icon: require('../assets/bitcoin.png'), 
  },
  {
    id: '2',
    icon: require('../assets/ethereum.png'),
  },
  {
    id: '3',
    icon: require('../assets/Amazon.png'),
  },
  {
    id: '4',
    icon: require('../assets/Apple.png'),
  },
  {
    id: '5',
    icon: require('../assets/Steam.png'),
  },
  {
    id: '6',
    icon: require('../assets/GooglePlay.png'),
  },
  {
    id: '7',
    icon: require('../assets/Others.png'),
  },
  
];

const Card = ({ icon }: { icon: any; }) => (
  <View style={styles.cardContent}>
    <Image source={icon} style={styles.icon} />
  </View>
);

function DashboardScreen({ route }: any) {
    const { userInput = 'User' } = route.params || {};

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container1}>
                <MaskedView style={styles.mView} maskElement={<Text style={styles.label}>Hi, {userInput}</Text>}>
                    <LinearGradient colors={['#FD749B', '#281AC8']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ flex: 1 }}/>
                </MaskedView>
                <Text style={styles.text}>Welcome Back!</Text>
                <Text style={styles.text}>Choose Your Preferred Card To Continue</Text>
            </View>
            <View style={styles.container2}>
            <FlatList data = {cards} keyExtractor={(item) => item.id} renderItem={({ item }) => (
                <Card icon={item.icon}/>
            )}
            contentContainerStyle={styles.listContent}
            style={styles.list}
            showsVerticalScrollIndicator={false}
            />
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 70,
    },
    container1: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    container2: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        top: 40

    },
    mView: {
        height: 30,
        width: '40%',
        top: 20,
    },
    label: {
        fontSize: 24,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        flexWrap: 'wrap',
        textAlign: 'center',
        color: 'white'
    },
    text: {
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: 400,
        flexWrap: 'wrap',
        textAlign: 'left',
        color: '#2F2F2F',
        top: 20,
        paddingLeft: 30
    },
    list: {
        paddingHorizontal: 20,
    },
    listContent: {
        paddingBottom: 80
    },
    cardContent: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    icon: {
        width: 319,
        height: 199,
        resizeMode: 'contain',
    },
    card: {
        height: 20,
        borderRadius: 16,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4
    },

});

export default DashboardScreen;