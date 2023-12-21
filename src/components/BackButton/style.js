import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from "react-native-responsive-fontsize";

export default styles = StyleSheet.create({
    button: {
        height: hp('5%'),
        width: wp('7%'),
        marginHorizontal: 0,
        marginVertical: hp('1%'),
    },
});