import React, { useState, useEffect} from 'react';
import { View, KeyboardAvoidingView, Platform,  Image, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import logo from '../assets/logo.png';

import { useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

//KeyboardAvoidingView - para o teclado levantar o conteudo no IOS, android é automatico, 
// enabled é um boolean, faz uma comparação pra sistema

export default function Login({navigation}){    
    const [email, setEmail] = useState('');
    const [techs, setTechs] = useState('');

     useEffect(() => {
        AsyncStorag.getItem('user').then(user => {
            if(user){                
                navigation.navigate('List');
            }
        })
    }, [])
    
    const AsyncStorag = AsyncStorage;
    async function handleSubmit(){
        
        const response = await api.post('/sessions',{
            email
        })

        const {_id} = response.data;

        
        await AsyncStorag.setItem('user', _id);
        await AsyncStorag.setItem('techs', techs);
        
        console.log(techs,_id)
        
        navigation.navigate('List')
      

        
    }

    return (
    <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior='padding' style={styles.container}>          
        
        <Image source={logo}></Image>

        <View style={styles.form} >
            <Text style={styles.label}> SEU E-MAIL *</Text>
            <TextInput
                style={styles.input}
                placeholder='Digite seu email'
                placeholderTextColor='#999'
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}
                value={email}
                onChangeText={text => setEmail(text)}
            />

            <Text style={styles.label}> TECNOLOGIAS *</Text>
            <TextInput
                style={styles.input}
                placeholder='Tecnolgias de interesse'
                placeholderTextColor='#999'                 
                autoCapitalize='words' // cada inicio de palavra ele coloca Caixa alta
                autoCorrect={false}
                value={techs}
                onChangeText={text => setTechs(text)}
            />

            <TouchableOpacity onPress={handleSubmit} style={styles.button} >
                <Text style={styles.buttonText} >Encontrar Spots</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label:{
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
    },
    form:{
        alignSelf: 'stretch', // ocupa toda largura possivel
        paddingHorizontal: 30, // padding somente nas laterais
        marginTop: 30,
    },
    input:{
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2,
    },
    button: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },
    buttonText:{
        color:'#fff',
        fontWeight: 'bold',
        fontSize:16,
    },
})