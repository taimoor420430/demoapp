import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screen/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from "expo-font";
import {Entypo} from 'react-native-vector-icons'

import Prices from './src/screen/Prices';
import CartScreen from './src/screen/CartScreen';
import SignIn from './src/screen/SignIn';
import SplashScreen from './src/screen/SplashScreen';
import SignUp from './src/screen/SignUp';

const Stack = createStackNavigator();
const BottomStack = createMaterialBottomTabNavigator();


function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  )
}

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Prices" component={Prices} />
      
    </Stack.Navigator>
  )
}
function CartStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CartScreen" component={CartScreen} />
      
    </Stack.Navigator>
  )
}

function BottomTabs() {
  return (
    <BottomStack.Navigator
      activeColor='#E2B378'
      inactiveColor='black'
      shifting={false}
      barStyle={{ backgroundColor: 'white' }}
    >
      <BottomStack.Screen
        options={{
          tabBarLabel: null,
          tabBarIcon: ({ color }) => (
            <Entypo name="shop" color={color} size={20}/>
          )
        }}
        name="HomeStack" component={HomeStack}
      />
      <BottomStack.Screen
        options={{
          tabBarLabel: null,
          tabBarIcon: ({ color }) => (
            <Entypo name="shopping-cart" color={color} size={20}/>
          )
        }}
        name="CartStack" component={CartStack}
      />
      
      
    </BottomStack.Navigator>
  )
}

export default function App() {
  const [loaded] = useFonts({
    PM: require('./assets/fonts/Poppins/Poppins-Medium.ttf'),
    PSB: require('./assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    OSS: require('./assets/fonts/Open_Sans/OpenSans-SemiBold.ttf'),  
  })

  if (!loaded) return null
  return (
    <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="AuthStack" component={AuthStack} />
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
          </Stack.Navigator>
          

          {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="AuthStack" component={AuthStack} />
          </Stack.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
