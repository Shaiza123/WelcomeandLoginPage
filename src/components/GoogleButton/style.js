import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from "react-native-responsive-fontsize";

export default styles = StyleSheet.create({
    button: {
        width: '100%',
        borderRadius: wp('3%'),
        marginVertical: hp('0.5%'),
        borderWidth: 2,
      },
      buttonText: {
        fontSize: RFPercentage(2),
        fontWeight:'bold',
        color: '#000',
      },
});