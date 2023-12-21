import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome/index';
import Login from '../screens/Login/index';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name={'Welcome'} component={Welcome}/>
            <Stack.Screen name={'Login'} component={Login}/>
        </Stack.Navigator>
    )
}

export default Router