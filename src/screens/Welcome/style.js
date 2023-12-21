import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from "react-native-responsive-fontsize";

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: wp('8%'),
    },
    text:{
      textAlign:'left'
    },
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
    login:{
      marginTop: hp('2%'),
      flexDirection: 'row',
      justifyContent: 'center',
    },
    loginText:{
     color: '#1ce46f',
     fontWeight:'500',
     textDecorationLine: 'underline' 
    }    
  });