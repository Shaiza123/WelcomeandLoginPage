import { View, Text, KeyboardAvoidingView, ScrollView} from 'react-native'
import React from 'react'
import styles from './style';
import BackButton from '../../components/BackButton/index';
import AccountRegister from '../../components/AccountRegister/index';
import TextinputScreen from '../../components/TextinputScreen/index';
import GoogleButton from '../../components/GoogleButton/index';
import { RFPercentage } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Button } from 'react-native-paper';

const Login = ({ navigation }) => {
    const handlePress = () => {
        navigation.navigate("Welcome")
    }
    return (
        <KeyboardAvoidingView style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.container}>
                    <BackButton navigation={navigation} />
                    <Text style={[styles.text, { fontSize: RFPercentage(4.5), color: "#1ce46f", fontWeight: '500' }]}>Login  </Text>
                    <Text style={[styles.text, { fontSize: RFPercentage(2), color: "#000", width: wp('80%'), }]}>A place where you can Experience all your life, Highlights, and Scoreboard. </Text>
                    <TextinputScreen />
                    <Text style={styles.forgotPasswordText}>ForgotPassword?</Text>
                    <Button style={styles.button} mode='contained' buttonColor={'#1ce46f'} onPress={console.log("Login Button Pressed")} contentStyle={{ flexDirection: 'row-reverse' }} >
                        <Text style={styles.buttonText}>Login</Text>
                    </Button>
                    <View style={styles.line}></View>
                    <GoogleButton />
                    <AccountRegister children={"Register"} text={"Don't"} handlePress={handlePress} />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Login