import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import { SafeAreaView, Text,Button, Image, StyleSheet } from 'react-native';

import logo from '../assets/logo.png';


import SpotList from '../components/SpotList';

export default function List({navigation}){ 
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storageTechs =>{
            const techsArray =  storageTechs.split(',').map(tech => tech.trim());
            setTechs(techsArray);
        }, []);
    })

    return <SafeAreaView style={styles.container}>
        <Image style={styles.logo}  source={logo} />
        
        {techs.map(tech => <SpotList key={tech} tech={'ReactJs'}/>)}
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    logo:{
        height: 32,
        resizeMode: "contain",
        alignSelf: 'center',
        marginTop: 10,
    },
})