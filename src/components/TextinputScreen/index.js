import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import styles from '../TextinputScreen/style';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
const TextinputScreen = () => {
    return (
        <View>
            <View style={{marginTop:hp('2%')}}>
            <Text style={styles.text}>Email</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    autoFocus={false}
                    placeholder="Ex:abc@example.com"
                    keyboardType="email-address"
                    underlineColor="transparent"
                    activeUnderlineColor='transparent'
                    textColor='#d3d3d3'
                    mode='outlined'
                    outlineColor='#1ce46f'
                    activeOutlineColor='#1ce46f'
                    theme={{roundness: 8}}
                    placeholderTextColor="#d3d3d3"
                    left={<TextInput.Icon icon={() => <FontAwesome name="at" size={hp(2.5)} color="#1ce46f" />} />}
                />
            </View>
            </View>
            <View style={{marginTop:hp('2%')}}>
            <Text style={styles.text}>Your Password</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder=".........."
                    secureTextEntry
                    activeUnderlineColor='transparent'
                    underlineColor="transparent"
                    textColor='#d3d3d3'
                    mode='outlined'
                    outlineColor='#1ce46f'
                    activeOutlineColor='#1ce46f'
                    theme={{roundness: 8}}
                    placeholderTextColor="#d3d3d3"
                    left={<TextInput.Icon icon={() => <MaterialCommunityIcons name="lock-outline" size={hp(2.5)} color="#1ce46f" />} />}
                />
            </View>
            </View>
        </View>

    )
}

export default TextinputScreen