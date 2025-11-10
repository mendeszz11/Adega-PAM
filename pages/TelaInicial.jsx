import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const imgBackground = {uri: 'https://img.freepik.com/fotos-premium/uma-garrafa-de-vinho-tinto-e-um-copo-com-barril-no-fundo_435174-2172.jpg'};

export default function TelaInicial() {
    return (
        <ImageBackground source={imgBackground} style={styles.container}>
            <Text style={styles.title}>Adega Preferida</Text>
            <Text style={styles.subtitle}>Aqui você encontra os melhoresvinhos</Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        objectFit: 'cover',
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#ffffffff',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 20,
        color: '#ffffffff',
        textAlign: 'center',
    },
});
