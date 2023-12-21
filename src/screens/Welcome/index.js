import { View, Text } from 'react-native'
import React from 'react'
import styles from './style';
import { RFPercentage } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Button } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import GoogleButton from '../../components/GoogleButton/index';
import AccountRegister from '../../components/AccountRegister/index';

const Welcome = ({navigation}) => {
    const handlePress = () =>{
        navigation.navigate("Login")
    }
  return (
    <View style = {styles.container}>
      <Text style = {[styles.text,{fontSize:RFPercentage(3),color:"#000"}]}>Welcome to  </Text>
      <Text style = {[styles.text,{fontSize:RFPercentage(4.5),color:"#1ce46f",fontWeight:'500'}]}>Crickscore  </Text>
      <Text style = {[styles.text,{fontSize:RFPercentage(2),color:"#000",width: wp('75%'),}]}>A place where you can Experience all your life, Highlights, and Scoreboard. </Text>
      <Text style = {[styles.text,{fontSize:RFPercentage(2.5),color:"#2e2e2e",marginTop:hp('5%'),marginBottom:('1%')}]}>Let's Get Started!... </Text>
      <GoogleButton/>
        <Button style={styles.button} mode='outlined' buttonColor={'transparent'} icon={() => (<FontAwesome name="at" size={20} color="#1ce46f" />)} onPress={console.log("Continue with Email")} contentStyle={{ flexDirection: 'row-reverse'}} >
          <Text style={styles.buttonText}>Continue With Email</Text>
        </Button>
      <AccountRegister children={"Login"} text={'Already'} handlePress={handlePress}/>
    </View>
  )
}

export default Welcome