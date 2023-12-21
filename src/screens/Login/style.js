import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from "react-native-responsive-fontsize";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: wp('8%'),
    paddingBottom: hp('15%'),
  },
  text: {
    textAlign: 'left'
  },
  input: {
    width: wp('80%'),
    height: hp('5%'),
    backgroundColor: '#fff',
    borderRadius: wp('2%'),
    marginTop: hp('2%'),
    paddingLeft: wp('2%'),
    borderWidth: hp('0.1%'),
    borderColor: 'grey',
  },
  button: {
    width: '100%',
    borderRadius: wp('3%'),
    marginVertical: hp('0.5%'),
    borderWidth: 2,
  },
  buttonText: {
    fontSize: RFPercentage(2),
    fontWeight: 'bold',
    color: '#fff',
  },
  line: {
    width: '98%',
    marginVertical: hp('2%'),
    height: 1,
    borderBottomWidth: 1,
    borderColor: '#707070',
    marginHorizontal: '1%',
  },
  forgotPasswordText: {
    fontSize: RFPercentage(1.8),
    color: '#1ce46f',
    fontWeight: '500',
    textDecorationLine: 'underline',
    marginBottom: hp('3.5%'),
    marginTop: hp('1%'),
  },
});