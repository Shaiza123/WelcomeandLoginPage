import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    inputContainer:{
        alignItems:'center',
    },
    input: {     
        width:'100%',
        paddingVertical:wp('1%'),
        backgroundColor:'transparent',
        fontSize:RFPercentage(1.5),
        height:hp(5),
    },
    text:{
        fontSize:RFPercentage(1.8),
        fontWeight:'400',
        color:'#000',
        marginVertical: hp('1%'),
    }
  });