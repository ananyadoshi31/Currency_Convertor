

import React, { useState,useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    TextInput,
    ImageBackground,
    Button,
    Pressable,

    // CustomButton,
  } from 'react-native';
// import { RollInRight } from "react-native-reanimated";
//import { NavigationContainer } from "@react-navigation/native";
//import Support from "./Support";
//import { createDrawerNavigator } from "@react-navigation/drawer";
// import "@fontsource/oleo-script";
//import { ImageBackground } from "react-native";
//import CustomButton from '../utils/CustomButton';
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import SQLite from 'react-native-sqlite-storage';
// import { useSelector, useDispatch } from "react-redux";
// import { setName,setAge } from "../redux/actions";
// import PushNotification from "react-native-push-notification";

// const db =SQLite.openDatabase(
//     {
//         name:'MainDB',
//         location:'default',
//     },
//     ()=>{ },
//     error=>{console.log(error)}
// );
//const Drawer = createDrawerNavigator();
export default function Main({navigation})
{
  const onPressHandlerScan=()=>{
    navigation.navigate('SelectFruit')
    
  }
  const onPressHandlerSupport=()=>{
    navigation.navigate('Support')
    
  }
  const onPressHandlerLogin=()=>{
    navigation.navigate('Login')
    
  }
return (
  // <NavigationContainer independent={true} >
  //           <Drawer.Navigator
  //             initialRouteName="Main"
  //           >
  //           <Drawer.Screen
  //             name="Main"
  //             component={Main}
  //           />
  //           </Drawer.Navigator>
      
    
      <View style={styles.container}>
          <ImageBackground 
            source={require('../CurrencyConvertor/assets/curr1.jpg')} 
            style={styles.img}
          >
            {/* <Pressable style={styles.login}
              onPress={onPressHandlerLogin}
            >
              <Text style={styles.loginbutton}>Login</Text>
            </Pressable> */}
            <Text style={styles.title}>
                CURRENCY CONVERTOR
            </Text>
            <Text style={styles.quote}>~Currency Exchange Rate Calculator~</Text>
            <Text style={styles.stylebutton1}>Select a currency</Text>
        <TextInput style={styles.button1} 
          onPress={onPressHandlerScan} 
        >
        {/* <Image style = {styles.logo} source = {require('../../assets/scan_img.png')} /> */}
         
        </TextInput>
        {/* <Pressable style={styles.button2} >
        <Image style = {styles.logo} source = {require('../../assets/report_img.png')} />
          <Text style={styles.stylebutton2}>Reports</Text>
        </Pressable> */}
        <Text style={styles.stylebutton3}>Select another currency</Text>
        <TextInput style={styles.button2}
            onPress={onPressHandlerSupport} 
        >
        {/* <Image style = {styles.logo} source = {require('../../assets/support_img.png')} /> */}
        
        </TextInput>
        <Text style={styles.stylebutton2}>Enter Amount:</Text>
        <TextInput style={styles.button3} >
            
        </TextInput>
        <Pressable style={styles.convertbtn}>
            <Text style={styles.btntext}>CONVERT</Text>
        </Pressable>
        <Text style={styles.convertedtxt} >Converted Amount:</Text>

 
            {/* <Button
              title='Scan'
              color='#ffffff'
              style={styles.button}
              //onPress={onPressHandler}
            /> */}
            </ImageBackground>

            {/* <CustomButton
              title='Scan'
              color='#1eb900'
              
            /> */}
            
       </View>
       //</NavigationContainer>
      
       
    )
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    title:{
        color:"#ffffff",
        textAlign:'center',
        fontSize:48,
        fontFamily:'OleoScript-Regular',
        marginTop:80,

    },
    quote:{
        left:65,
        fontWeight:'bold',
        fontStyle:'italic',
    },
    convertbtn:{
        backgroundColor:'#9bcca5',
        height:40,
        width:130,
        alignSelf:'center',
        textAlign:'center',
        borderRadius:10,
        top:180
    },
    convertedbtn:{
        textAlign:'left',
        backgroundColor:"#D3D3D3",
        fontSize:36,
        fontFamily:'OleoScript-Regular',
        alignItems: 'center',
        justifyContent: 'center',
        width:316,
        height:50,
        alignSelf:'center',
        borderRadius:10,
        top:220,
    },
    convertedtxt:{
        color:"#ffffff",
        fontWeight:'bold',
        fontSize:18,
        bottom:40,
        left:60,
        fontFamily:'OleoScript-Regular',
        top:220,
    },
    btntext:{
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold', 
    },
    img:{
      height:'100%',
      width:'100%'
    },
    stylebutton1:{
      left:55,
      fontSize:18,
       top:90,     
    },

    stylebutton3:{
      left:55,
      fontSize:18,
       top:120,
    },
    stylebutton2:{
      left:55,
      fontSize:18,
       top:150,
      },
    button1: {
      textAlign:'left',
      backgroundColor:"#D3D3D3",
      fontSize:36,
      fontFamily:'OleoScript-Regular',
      alignItems: 'center',
      justifyContent: 'center',
      width:316,
      height:50,
      alignSelf:'center',
      borderRadius:10,
      top:100,
    },
    button2: {
      backgroundColor:"#D3D3D3",
      fontSize:36,
      fontFamily:'OleoScript-Regular',
      alignItems: 'center',
      justifyContent: 'center',
      width:316,
      height:50,
      alignSelf:'center',
      borderRadius:10,
      top:120,
    },
    button3: {
        backgroundColor:"#D3D3D3",
        fontSize:36,
        fontFamily:'OleoScript-Regular',
        alignItems: 'center',
        justifyContent: 'center',
        width:316,
        height:50,
        alignSelf:'center',
        top:150,
        borderRadius:10,
      },
    logo:{
      width:55,
      height:60,
      marginTop:45,
      marginLeft:240,
    },
    
  })