import { View, Text, ScrollView, Image, TextInput, TouchableOpacity ,Alert} from 'react-native'

import React,{useState} from 'react'
import { BackArrow, EyeIcon } from '../components/Svgs';
import { useNavigation } from '@react-navigation/native';

const SignUp = (props) => {
    const navigation=useNavigation();
    const [showData, setShowData]= useState(true);
    const [showData1, setShowData1]= useState(true)
    const [email , setEmail] = useState('');
    const [pass , setpass] = useState('');
    const [pass1 , setpass1] = useState('');
    function doStore(){
        let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
        if (reg.test(email) === false) {
            Alert.alert('Please enter a valid email')
            return;
        }
       
        if(pass.length<8){
            Alert.alert('please enter 8 Caracter');
            return;
        }
        if(pass != pass1){
            Alert.alert('Password not Matched');
            return;
        }
    }
    return(
        <View style={{flex:1}}>
            <View style={{ flexDirection: 'row',marginTop:35, justifyContent: 'space-between', alignItems: 'center' }}>
                <TouchableOpacity
                onPress={()=>{
                    props.navigation.goBack()
                }}
                style={{ marginLeft: 10  }}>
                    <BackArrow />
                </TouchableOpacity>
            </View>
            <View style={{alignSelf:'center',marginVertical:40,width:'90%',alignItems:'center'}}>
                <Text style={{fontSize:40,fontWeight:'bold'}}>Signup</Text>
            </View>
        <Text style={{width: '90%', marginLeft: 15, fontSize: 18 }}>Enter Email and Password to Signup</Text>
             <TextInput
                 onChangeText={setEmail}
                 autoCapitalize='none'
                 placeholder='Email Address'
                 style={{ borderRadius: 10, borderWidth: 1, borderColor: 'black', width: '90%', marginLeft: 15,marginTop:10, padding: 10, }}
            />
            <TextInput
                 onChangeText={setpass}
                 secureTextEntry={showData}
                 autoCapitalize='none'
                 placeholder='Password'
                 style={{ borderRadius: 10, borderWidth: 1, borderColor: 'black', width: '90%', marginLeft: 15, padding: 10,marginTop:20, }}
            />
            <TouchableOpacity
                onPress={()=>setShowData(!showData)}
                    style={{ position: 'absolute',right:35,top:310 }}>
                    <EyeIcon />
                </TouchableOpacity>
            <TextInput
                 onChangeText={setpass1}
                 secureTextEntry={showData1}
                 autoCapitalize='none'
                 placeholder='Confirm Password'
                 style={{ borderRadius: 10, borderWidth: 1, borderColor: 'black', width: '90%', marginLeft: 15, padding: 10,marginTop:20, }}
            />
            <TouchableOpacity
            onPress={()=>setShowData1(!showData1)}
            style={{position:'absolute',right:35,top:380}}>
                <EyeIcon/>
            </TouchableOpacity>
            <View style={{flexDirection:'row',width:'90%',justifyContent:'flex-end',marginTop:2}}>
            <Text>Already have an account? </Text>
            <TouchableOpacity
            onPress={()=>{
                props.navigation.navigate('SignIn')
            }}
            >
                <Text style={{color:'blue'}}>Login</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
            onPress={()=>{
                doStore();
            }}
             style={{ backgroundColor: '#32bbe8', marginTop:20, width: '80%', alignSelf: 'center', borderRadius: 20 }}>
                <Text style={{ padding: 15, alignSelf: 'center', fontSize: 18,color:'white',fontWeight:'bold' }}>Continue</Text>
            </TouchableOpacity>
            </View>
    )
}

export default SignUp