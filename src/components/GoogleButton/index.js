import { View ,Text,Image} from 'react-native'
import React from 'react'
import styles from '../GoogleButton/style';
import { Button } from 'react-native-paper';

const GoogleButton = () => {
    return (
        <View>
        <Button style={styles.button} mode='outlined' buttonColor={'transparent'} icon={() => (<Image source={require('../../assets/google_icon.png')}/>)} onPress={console.log("Google Button Pressed")} >
          <Text style={styles.buttonText}>Continue With Google</Text>
        </Button>
      </View>
    )
}
export default GoogleButton