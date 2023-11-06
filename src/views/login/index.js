import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useAuth } from '../../context';

export default function Login() {
    const { handleLogin } = useAuth();

    return (
        <LinearGradient
            colors={['#65827A', '#064580']}
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.title}>SafePlace</Text>
                <TextInput
                    placeholder="CPF"
                    placeholderTextColor="white"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Senha"
                    placeholderTextColor="white"
                    secureTextEntry={true}
                    style={styles.input}
                />
                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButton} onPress={() => {
                    handleLogin({
                        nome: 'Lucas',
                        senha: 'Senha'
                    })
                }}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.backButton}>
                    <Text style={styles.backButtonText}><Text>{"<"}</Text> voltar</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1, // Make sure this covers the whole screen
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 180,
        marginTop: 220,
    },
    input: {
        width: '100%',
        height: 50,
        paddingHorizontal: 15,
        marginBottom: 15,
        borderRadius: 25,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        paddingLeft: 15,
        fontSize: 20,
        color: '#fff',
        borderWidth: 2,
        borderColor: 'white',
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginBottom: 30,
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    loginButton: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 25,
        marginBottom: 15,
    },
    loginButtonText: {
        color: '#2245A6',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '500',
    },
    backButton: {
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'transparent',
        borderRadius: 20,
        padding: 7,
    },
    backButtonText: {
        fontSize: 11,
        fontWeight: '500',
        color: 'white',
    },
});