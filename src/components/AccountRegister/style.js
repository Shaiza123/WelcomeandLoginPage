import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from "react-native-responsive-fontsize";

export default styles = StyleSheet.create({
    login:{
        marginTop: hp('2%'),
        flexDirection: 'row',
        justifyContent: 'center',
      },
      loginText:{
       color: '#1ce46f',
       fontWeight:'500',
       textDecorationLine: 'underline' 
      },
      text:{
        textAlign:'left'
      }
      
});