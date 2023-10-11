import React, {useState} from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

export default function Book({navigation, route}){
    const [date, setDate] = useState('');
    const id = route.params.id;

   async function handleSubmit(){
        const user_id = await AsyncStorage.getItem('user');
        console.log(user_id);
        await api.post(`/spots/${id}/bookings`,{
            date,
        },{
            headers:{
                user_id
            }
        })
        Alert.alert('Solicitação de reserva enviada')
        navigation.navigate('List');
        
    }

    function handleCancel(){
        navigation.navigate('List');
    }
    
    
    console.log(`id reserva ${id}`)
    return (
        <SafeAreaView style={style.container}>
            <Text style={style.label}> DATA DE INTERESSE *</Text>
            <TextInput
                style={style.input}
                placeholder='Qual data você quer reservar'
                placeholderTextColor='#999'                
                autoCapitalize='words'
                autoCorrect={false}
                value={date}
                onChangeText={setDate}
            />
            <TouchableOpacity onPress={handleSubmit} style={style.button} >
                <Text style={style.buttonText} >Solicitar Reserva</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleCancel} style={[style.button,style.cancelButton]} >
                <Text style={style.buttonText} >Cancelar</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
} 

const style = StyleSheet.create({
    container: {
        margin: 30,
    },
    label:{
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
        marginTop: 30,
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
    cancelButton: {
        height: 42,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginTop: 10,
    },
    buttonText:{
        color:'#fff',
        fontWeight: 'bold',
        fontSize:16,
    },
});