import React, {useEffect, useState} from "react";
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import {useNavigation, Link} from '@react-navigation/native';

import api from "../services/api";

export default function SpotList({tech, navigation}){
    const [spots, SetSpots] = useState([]);
    const nav = useNavigation();

    useEffect(() => {
        async function loadSpots(){
            const response =  await api.get('/spots', {
                params: {tech}
            })
            SetSpots(response.data)
            
        }
        loadSpots();
    }, []);

    function handleNavigate(id){
        nav.navigate('Book', {id});
        
    }

    return (
        <View style={style.container} >
            <Text style={style.title} >Empresas que usam <Text style={style.bold}>{tech}</Text> </Text>
            <FlatList 
            style={style.list}
            data={spots}
            keyExtractor={spot => spot._id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) =>(                
                <View style={style.listItem} >                    
                    <Image style={style.thumbnail} source={{uri: item.thumbnail_url}} />
                    <Text style={style.company} > {item.company} </Text>
                    <Text style={style.price} > {item.price ? `R$${item.price}/dia` : 'Gratuito'} </Text>
                    <TouchableOpacity onPress={() => handleNavigate(item._id)} style={style.button} > 
                        <Text style={style.buttonText} >Solicitar Reserva</Text>
                    </TouchableOpacity>
                    <Link to={{ screen: 'Book'}}>
        Go to Jane's profile
      </Link>
                </View>
            )}
            />
            
        </View>
    )   


}

const style = StyleSheet.create({
    container: {
        marginTop: 30,

    },
    title: {
        fontSize:20,
        color: '#444',
        paddingHorizontal: 20,
        marginBottom: 15,
    },
    bold: {
        fontWeight:'bold',
    },

    list: {
        paddingHorizontal: 20,
    },
    listItem:{
        marginRight: 15,
    },
    thumbnail:{
        width: 200,
        height: 120,
        resizeMode:'cover',
        borderRadius: 2,
    },
    company:{
        fontSize: 24,
        fontWeight:'bold',
        color:'#333',
        marginTop:10,
    },
    price:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#999',
        marginTop: 5,
    },

    button: {
        height: 32,
        backgroundColor:'#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginTop: 15,
    },
    buttonText:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:15,
    }

})