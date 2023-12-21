import React from 'react'
import styles from '../BackButton/style';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { IconButton } from 'react-native-paper';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';


const BackButton = ({ navigation }) => {
    return (
        <IconButton style={styles.button} onPress={() => navigation.goBack()} icon={() => <FontAwesome6 name="arrow-left-long" size={hp(3.5)} color="#000" />} />
    )
}
export default BackButton