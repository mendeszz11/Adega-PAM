import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Vinho1 = {uri: 'https://vinhosdesaoroque.com.br/image/cache/catalog/produtos/canguera/10147-700x700.png'};
const Vinho2 = {uri: 'https://vinhosdesaoroque.com.br/image/cache/catalog/produtos/frank/10308-700x700.png'};
const Vinho3 = {uri: 'https://divvino.vtexassets.com/arquivos/ids/160735/Vinho-Rose-Portugues-Faisao.png?v=638696343022400000'};
const Vinho4 = {uri: 'https://vinhosdesaoroque.com.br/image/cache/catalog/produtos/palmeiras/10547-700x700.png'};

export default function TelaCatalogo() {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.title}>Nossos Vinhos</Text>
            <Text style={styles.subtitle}>Trabalhamos com os melhores : Vinho Branco, Vinho Rosé, Vinho Tinto e Vinho Seco</Text>
            
            <View style={styles.item}>
                <Image source={Vinho1} style={styles.img}></Image>
                <View style={styles.itemvw}>
                    <Text style={styles.itemtitle}>Vinho Branco</Text>
                    <Text style={styles.itemsubtitle}>Sofisticado</Text>
                </View>
            </View>
            
            <View style={styles.item}>
                <Image source={Vinho2} style={styles.img}></Image>
                <View style={styles.itemvw}>
                    <Text style={styles.itemtitle}>Vinho Rosé</Text>
                    <Text style={styles.itemsubtitle}>Renomado</Text>
                </View>
            </View>

            <View style={styles.item}>
                <Image source={Vinho3} style={styles.img}></Image>
                <View style={styles.itemvw}>
                    <Text style={styles.itemtitle}>Vinho Tinto</Text>
                    <Text style={styles.itemsubtitle}>Famoso</Text>
                </View>
            </View>
            
            <View style={styles.item}>
                <Image source={Vinho4} style={styles.img}></Image>
                <View style={styles.itemvw}>
                    <Text style={styles.itemtitle}>Vinho Seco</Text>
                    <Text style={styles.itemsubtitle}>Imcontestável</Text>
                </View>
            </View>

        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100vh',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'start',
        fontSize: 36,
        fontWeight: 'bold',
        color: '#000000ff',
    },
    subtitle: {
        fontSize: 24,
        color: '#000000ff',
        textAlign: 'start',
        marginBottom: 20,
        marginLeft: 20,
    },
    item: {
        flexDirection: 'row',
        backgroundColor: '#b47e7eff',
        marginTop: 20,
        padding: 10,
        width: '90%',
        alignItems: 'center',
        borderRadius: 15,
    },
    img: {
        width: 100,
        height: 150,
        objectFit: 'cover',
    },
    itemvw: {
        width: '70%',
        height: '100%',
        justifyContent: 'space-around',
    },
    itemtitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ffffffff',
    },
    itemsubtitle: {
        fontSize: 16,
        color: '#ffffffff',
    },
});
