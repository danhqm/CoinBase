import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { useNavigation } from '@react-navigation/native';


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

const Card = ({ icon, id }: { icon: any; id: string }) => {
  const navigation = useNavigation<any>();

  const handlePress = () => {
    if (id === '1') {
      navigation.navigate('Bitcoin');
    } else if (id === '2') {
      navigation.navigate('Ethereum');
    } else if (id === '3') {
      navigation.navigate('Amazon');
    } else if (id === '4') {
      navigation.navigate('Apple');
    } else if (id === '5') {
      navigation.navigate('Steam');
    } else if (id === '6') {
      navigation.navigate('Google');
    } 
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.cardContent}>
      <Image source={icon} style={styles.icon} />
    </TouchableOpacity>
  )
};

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
                <Card icon={item.icon} id={item.id}/>
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
        width: '100%',
        top: 20,
    },
    label: {
        fontSize: 24,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        textAlign: 'left',
        left: 29
    },
    text: {
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: 400,
        flexWrap: 'wrap',
        textAlign: 'left',
        color: '#2F2F2F',
        top: 18,
        paddingLeft: 30,
        letterSpacing: 0.15,
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