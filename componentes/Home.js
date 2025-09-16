import React, { useState, useEffect } from 'react';
import { View, Alert, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Text, IconButton } from 'react-native-paper';
import { fetchEstoque, deleteEstoque } from '../componentes/Api.js';

export default function Home ({ navigation }) {
    const [registro, setRegistro] = useState([]);

    useEffect(() => {
        fetchEstoque(setRegistro);
    }, []);

    const handleDelete = (id) => {
        Alert.alert(
            'Confirmação',
            'Tem certeza que deseja deletar este item?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Deletar',
                    onPress: () => deleteEstoque(id, setRegistro),
                },
            ]
        );
    };

    return (
        <View style={StyleSheet.container}>
            <FlatList
                data={registro}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Card style={styles.card}>
                        <View style={styles.cardContent}>
                            <View style={styles.infoColumn}>
                                <Text style={styles.title}>
                                    Código: {item.id}
                                    Produto: {item.produto}
                                    Marca: {item.marca}
                                    Valor: {item.valor}
                                </Text>
                            </View>
                            <View style={styles.actionsColumn}>
                                <IconButton
                                    icon="pencil"
                                    size={24}
                                    iconColor='#3498db'
                                    onPress={() => navigation.navigate('Alertar', { Estoque: item })}
                                />
                                <IconButton
                                    icon="delete"
                                    size={24}
                                    iconColor='#e74c3c'
                                    onPress={() => handleDelete(item.id)}
                                />
                            </View>
                        </View>
                    </Card>
                )}
            />
            <TouchableOpacity
                style={styles.floatingButton}
                onPress={() => navigation.navigate('Cadastro')}
            >
                <Text
                    style={styles.plusIcon}
                >
                    +
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 10,
    },
    card: {
        marginBottom: 5,
        elevation: 3,
        borderRadius: 8,
        backgroundColor: '#ffffff',
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },
    infoColumn: {
        flex: 1,
        justifyContent: 'center',
    },
    actionsColumn: {
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 4,
    },
    floatingButton: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        backgroundColor:'#27ae60',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    plusIcon: {
        color: '#ffffff',
        fontSize: 32,
        lineHeight: 36,
        marginBottom: 2,
    },
});