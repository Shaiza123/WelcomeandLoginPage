import { View, Text,TouchableOpacity} from 'react-native'
import React from 'react'
import styles from '../AccountRegister/style';

const AccountRegister = ({children,text,handlePress}) => {
    return(
        <View style={styles.login}>
        <Text style={styles.text}>{text} have an account?</Text>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.loginText}> {children}</Text>
        </TouchableOpacity>
      </View>
    )
}

export default AccountRegister