import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const SplashScreen = (props) => {
  return (
    <View style={{ flex: 1,backgroundColor:'white' }}>
    <Image
        style={{ width: 280, height: 160, justifyContent: 'center', alignSelf: 'center', marginTop: 50 }}
        source={require('../assets/logo.jpeg')}

    />
    <View style={{ marginTop: 20, marginBottom: 50, width: '90%', alignSelf: 'center' }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Welcome !</Text>
    </View>
    <TouchableOpacity
    onPress={()=>{
       props.navigation.navigate('SignIn')
    }}
    style={{ backgroundColor: '#32bbe8', padding: 20, width: '50%', borderRadius: 20, alignSelf: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 18,fontWeight:'bold' }}>GetStarted</Text>
    </TouchableOpacity>
</View>

  )
}

export default SplashScreen