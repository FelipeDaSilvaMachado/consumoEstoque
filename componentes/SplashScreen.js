import React, { useEffect } from "react";
import { View, ActivityIndicator, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Home');
        }, 4000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.splashContainer}>
            <Image
                source={{uri: 'https://www.viagensecaminhos.com/wp-content/uploads/2024/12/sao-jose-da-coroa-grande-praia-do-centro-696x464.jpg' }}
                style={styles.splashImage}
            />
            <ActivityIndicator size='large' color='#0000ff' style={styles.loader} />
        </View>
    );
};

const styles = StyleSheet.create ({
    splashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    splashImage: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    loader: {
        marginTop: 20,
    },
});

export default SplashScreen;